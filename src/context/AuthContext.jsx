import { createContext, useContext, useMemo, useState } from "react";
import { ROLE_LABELS } from "@/config/roles";

const AuthContext = createContext(null);

const SESSION_KEY = "kiptell:session";
const DRAFT_KEY = "kiptell:need-draft";
const BLANK_PROFILE = { avatar: null, phone: "", address: "", country: "" };

// Organizations are shown by their organization name when they have one
const withName = (u) => ({ ...u, name: u.organizationName?.trim() || `${u.firstName} ${u.lastName}`.trim() });

/**
 * Placeholder session kept in the browser until the real API exists.
 * "Remember me" keeps it across browser restarts (localStorage); otherwise it lasts
 * until the tab closes (sessionStorage). Replace with tokens / cookies from the backend.
 */
function readSession(storage) {
  try {
    const raw = storage.getItem(SESSION_KEY);
    return raw ? JSON.parse(raw) : null;
  } catch {
    return null;
  }
}
const loadSession = () => readSession(localStorage) ?? readSession(sessionStorage);

function saveSession(user, remember) {
  try {
    localStorage.removeItem(SESSION_KEY);
    sessionStorage.removeItem(SESSION_KEY);
    (remember ? localStorage : sessionStorage).setItem(SESSION_KEY, JSON.stringify(user));
  } catch {
    /* storage unavailable: the session just won't survive a refresh */
  }
}

function clearSession() {
  try {
    localStorage.removeItem(SESSION_KEY);
    sessionStorage.removeItem(SESSION_KEY);
    localStorage.removeItem(DRAFT_KEY); // don't leave a half-written Need behind on a shared computer
  } catch {
    /* ignore */
  }
}

export function AuthProvider({ children }) {
  const [user, setUser] = useState(loadSession); // null = logged out
  const [sessionEnded, setSessionEnded] = useState(false); // true right after an explicit log out

  const value = useMemo(
    () => ({
      user,
      sessionEnded,

      // Called after a successful sign-up / login. New accounts start with an incomplete profile.
      signIn: (data, { remember = true } = {}) => {
        const next = withName({ ...BLANK_PROFILE, ...data, roleLabel: ROLE_LABELS[data.role] });
        saveSession(next, remember);
        setUser(next);
        setSessionEnded(false);
      },

      // TODO: send to the API, then update local state from the response
      updateProfile: (patch) => {
        const next = withName({ ...user, ...patch });
        saveSession(next, localStorage.getItem(SESSION_KEY) !== null);
        setUser(next);
      },

      // Clears the session; <ProtectedRoute> then sends the person to /login
      logout: () => {
        clearSession();
        setUser(null);
        setSessionEnded(true);
      },
    }),
    [user, sessionEnded]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export const useAuth = () => useContext(AuthContext);