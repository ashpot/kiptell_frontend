import { Outlet } from "react-router-dom";
import Navbar from "@/components/layout/Navbar";
import { useAuth } from "@/context/AuthContext";
import { NAV_ITEMS } from "@/config/navigation";

/**
 * Shared shell for every authenticated role.
 * The nav items shown depend on the current user's role.
 */
export default function DashboardLayout() {
  const { user, logout } = useAuth();

  return (
    <div className="min-h-screen bg-surface">
      <Navbar navItems={NAV_ITEMS[user.role]} user={user} onLogout={logout} />
      <main className="px-6 py-10 lg:px-7">
        <Outlet />
      </main>
    </div>
  );
}
