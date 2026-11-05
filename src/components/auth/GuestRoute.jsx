import { Navigate, Outlet } from "react-router-dom";
import { ROLE_BASE_PATH } from "@/config/roles";
import { useAuth } from "@/context/AuthContext";

/** Log in / Sign up pages: anyone already logged in goes straight to their dashboard instead. */
export default function GuestRoute() {
  const { user } = useAuth();
  if (user) return <Navigate to={`${ROLE_BASE_PATH[user.role]}/overview`} replace />;
  return <Outlet />;
}