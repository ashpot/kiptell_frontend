import { Navigate, Outlet, useLocation } from "react-router-dom";
import { ROLE_BASE_PATH } from "@/config/roles";
import { useAuth } from "@/context/AuthContext";

/**
 * Wrap a dashboard's routes with this. Logged-out visitors are sent to /login
 * (and brought back afterwards); people with a different account type are sent to their own dashboard.
 */
export default function ProtectedRoute({ role }) {
  const { user, sessionEnded } = useAuth();
  const location = useLocation();

  if (!user) {
    return (
      <Navigate
        to="/login"
        replace
        // After an explicit log out we don't remember the page, we just say goodbye
        state={sessionEnded ? { loggedOut: true } : { from: location }}
      />
    );
  }
  if (role && user.role !== role) {
    return <Navigate to={`${ROLE_BASE_PATH[user.role]}/overview`} replace />;
  }
  return <Outlet />;
}