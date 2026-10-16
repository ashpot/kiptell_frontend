import { Link } from "react-router-dom";
import { ArrowRight, Bell, Briefcase, Check } from "lucide-react";
import useDismissable from "@/hooks/useDismissable";
import { notifications, unreadCount } from "@/data/notifications";
import { cn } from "@/lib/cn";

/** Icon tile per notification type */
function NotificationIcon({ type }) {
  if (type === "warning") {
    return (
      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-brand-200 bg-brand-50">
        <span className="flex h-5 w-5 items-center justify-center rounded-full bg-brand text-xs font-bold leading-none text-white">
          !
        </span>
      </span>
    );
  }
  if (type === "success") {
    return (
      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-success-50">
        <span className="flex h-5 w-5 items-center justify-center rounded-full bg-success text-white">
          <Check size={12} strokeWidth={3} />
        </span>
      </span>
    );
  }
  return (
    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-surface text-muted">
      <Briefcase size={18} strokeWidth={1.5} />
    </span>
  );
}

export default function NotificationDropdown({ basePath }) {
  const { ref, open, toggle, close } = useDismissable();

  return (
    <div ref={ref} className="relative">
      <button
        type="button"
        onClick={toggle}
        aria-label="Notifications"
        aria-haspopup="true"
        aria-expanded={open}
        className={cn(
          "flex h-12 w-12 items-center justify-center rounded-full border border-line text-ink transition-colors hover:bg-surface",
          open ? "bg-surface" : "bg-white"
        )}
      >
        <Bell size={20} />
      </button>

      {open && (
        <div
          role="dialog"
          aria-label="Notifications"
          className="absolute right-0 top-full z-50 mt-3 w-[380px] max-w-[calc(100vw-2rem)] overflow-hidden rounded-3xl border border-line bg-white shadow-xl shadow-black/5"
        >
          <div className="flex items-center gap-3 border-b border-line px-5 py-4">
            <h2 className="text-base font-semibold">Notifications</h2>
            {unreadCount > 0 && (
              <span className="rounded-full border border-brand-200 bg-brand-50 px-2.5 py-0.5 text-xs font-medium text-brand-600">
                {unreadCount} unread
              </span>
            )}
          </div>

          <ul>
            {notifications.map((n) => (
              <li
                key={n.id}
                className={cn(
                  "relative flex gap-4 border-b border-line py-4 pl-9 pr-5",
                  n.unread && "bg-brand-50"
                )}
              >
                {n.unread && (
                  <span
                    aria-label="Unread"
                    className="absolute left-3.5 top-7 h-2 w-2 rounded-full bg-brand"
                  />
                )}
                <NotificationIcon type={n.type} />
                <div className="min-w-0">
                  <h3 className="text-sm font-medium">{n.title}</h3>
                  <p className="mt-1 line-clamp-2 text-[13px] leading-5 text-muted">{n.body}</p>
                  <p className="mt-1.5 text-xs text-muted/80">{n.time}</p>
                </div>
              </li>
            ))}
          </ul>

          <Link
            to={`${basePath}/notifications`}
            onClick={close}
            className="flex items-center justify-center gap-2 py-4 text-sm font-medium transition-colors hover:bg-surface"
          >
            View all notifications <ArrowRight size={16} />
          </Link>
        </div>
      )}
    </div>
  );
}