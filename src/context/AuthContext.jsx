import { createContext, useContext, useMemo, useState } from "react";
import { ROLE_LABELS, ROLES } from "@/config/roles";


const AuthContext = createContext(null);

/**
 * Placeholder auth. Replace with real login / API session later.
 * Change `role` here to preview a different user type once their pages exist.
 * To preview the "Complete your profile" state, set address and country to "".
 */
const INITIAL_USER = {
  role: ROLES.NEED_OWNER,
  roleLabel: "Need Owner",
  avatar: null, // drop a photo in src/assets/images and import it here
  firstName: "Chisom",
  lastName: "Ezeji",
  email: "chisom@example.com",
  phone: "+234 800 000 0000",
  address: "Eden Estate, Ikeja, Lagos",
  country: "Nigeria",
};

const withName = (u) => ({ ...u, name: `${u.firstName} ${u.lastName}`.trim() });

export function AuthProvider({ children }) {
  const [user, setUser] = useState(() => withName(INITIAL_USER));

  const value = useMemo(
    () => ({
      user,

      // Called after a successful sign-up / login. New accounts start with an incomplete profile.
      signIn: (data) =>
        setUser(
          withName({
            ...INITIAL_USER,
            address: "",
            country: "",
            ...data,
            roleLabel: ROLE_LABELS[data.role] ?? INITIAL_USER.roleLabel,
          })
        ),
      // TODO: send to the API, then update local state from the response
      updateProfile: (patch) => setUser((u) => withName({ ...u, ...patch })),
      // TODO: clear the session and redirect to /login once auth exists
      logout: () => console.info("Logged out (placeholder)"),
    }),
    [user]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export const useAuth = () => useContext(AuthContext);