import { createContext, useContext, useMemo } from "react";
import { ROLES } from "@/config/roles";

const AuthContext = createContext(null);

/**
 * Placeholder auth. Replace with real login / API session later.
 * Change `role` here to preview a different user type once their pages exist.
 */
const MOCK_USER = {
  name: "Chisom Ezeji",
  role: ROLES.NEED_OWNER,
  roleLabel: "Need Owner",
  avatar: null, // drop a photo in src/assets/images and import it here
};

export function AuthProvider({ children }) {
  const value = useMemo(
  () => ({
    user: MOCK_USER,
    // TODO: clear the session and redirect to /login once auth exists
    logout: () => console.info("Logged out (placeholder)"),
  }),
  []
);
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export const useAuth = () => useContext(AuthContext);
