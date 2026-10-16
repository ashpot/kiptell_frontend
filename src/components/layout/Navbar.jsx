import { Link, NavLink, useLocation } from "react-router-dom";
import { Search } from "lucide-react";
import logo from "@/assets/images/kiptell-logo.png";
import NotificationDropdown from "./NotificationDropdown";
import ProfileDropdown from "./ProfileDropdown";
import { ROLE_BASE_PATH } from "@/config/roles";
import { cn } from "@/lib/cn";

export default function Navbar({ navItems = [], user, onLogout }) {
  const basePath = ROLE_BASE_PATH[user?.role] ?? "";
  const { pathname } = useLocation();

  return (
    <header className="relative z-40 border-b border-line bg-white">
      <div className="flex h-[88px] items-center justify-between gap-4 px-6 lg:px-7">
        <Link to="/" aria-label="Kiptell home" className="shrink-0">
          <img src={logo} alt="Kiptell" className="h-9 w-auto" />
        </Link>

        <nav
          aria-label="Primary"
          className="hidden items-center gap-1 rounded-full border border-line bg-white p-2 shadow-sm md:flex"
        >
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) => {
                const active = isActive || item.alsoActiveOn?.some((p) => pathname.startsWith(p));
                return cn(
                  "rounded-full px-5 py-2.5 text-sm font-medium transition-colors",
                  active ? "bg-ink text-white" : "text-muted hover:text-ink"
                );
              }}
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <button
            type="button"
            aria-label="Search"
            className="flex h-12 w-12 items-center justify-center rounded-full border border-line bg-white text-ink transition-colors hover:bg-surface"
          >
            <Search size={20} />
          </button>
          <NotificationDropdown basePath={basePath} />
          <ProfileDropdown user={user} basePath={basePath} onLogout={onLogout} />
        </div>
      </div>
    </header>
  );
}