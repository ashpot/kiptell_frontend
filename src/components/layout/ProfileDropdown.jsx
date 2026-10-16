import { Link } from "react-router-dom";
import { ChevronDown, CircleHelp, LogOut, Settings, User } from "lucide-react";
import Avatar from "@/components/common/Avatar";
import useDismissable from "@/hooks/useDismissable";
import { cn } from "@/lib/cn";

const itemClass =
  "flex w-full items-center gap-3 rounded-xl px-3 py-3 text-sm text-ink/80 transition-colors hover:bg-surface hover:text-ink";

export default function ProfileDropdown({ user, basePath, onLogout }) {
  const { ref, open, toggle, close } = useDismissable();

  const links = [
    { label: "Profile", to: `${basePath}/profile`, icon: User },
    { label: "Settings", to: `${basePath}/settings`, icon: Settings },
    { label: "Help / Support", to: `${basePath}/help`, icon: CircleHelp },
  ];

  return (
    <div ref={ref} className="relative">
      <button
        type="button"
        onClick={toggle}
        aria-haspopup="menu"
        aria-expanded={open}
        className={cn(
          "flex items-center gap-3 rounded-full border border-line py-1.5 pl-1.5 pr-4 text-left transition-colors hover:bg-surface",
          open ? "bg-surface" : "bg-white"
        )}
      >
        <Avatar src={user?.avatar} name={user?.name} size={40} />
        <span className="hidden leading-tight sm:block">
          <span className="block text-sm font-medium">{user?.name}</span>
          <span className="block text-xs text-muted">{user?.roleLabel}</span>
        </span>
        <ChevronDown
          size={16}
          className={cn("hidden text-muted transition-transform sm:block", open && "rotate-180")}
        />
      </button>

      {open && (
        <div
          role="menu"
          className="absolute right-0 top-full z-50 mt-3 w-56 rounded-3xl border border-line bg-white p-2 shadow-xl shadow-black/10"
        >
          {links.map(({ label, to, icon: Icon }) => (
            <Link key={label} to={to} role="menuitem" onClick={close} className={itemClass}>
              <Icon size={16} strokeWidth={1.5} className="text-muted" />
              {label}
            </Link>
          ))}

          <div className="my-2 border-t border-line" />

          <button
            type="button"
            role="menuitem"
            onClick={() => {
              close();
              onLogout?.();
            }}
            className="flex w-full items-center gap-3 rounded-xl px-3 py-3 text-sm font-medium text-danger transition-colors hover:bg-danger-50"
          >
            <LogOut size={16} strokeWidth={1.5} />
            Log out
          </button>
        </div>
      )}
    </div>
  );
}