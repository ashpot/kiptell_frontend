import { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, ChevronRight } from "lucide-react";
import Button from "@/components/common/Button";
import Card from "@/components/common/Card";
import FilterBar from "@/components/common/FilterBar";
import NotificationRow from "@/components/notifications/NotificationRow";
import { useNotifications } from "@/context/NotificationsContext";

const GROUP_ORDER = ["Today", "Yesterday", "Earlier this week", "Earlier"];

const typeOptions = [
  { value: "", label: "All" },
  { value: "needs", label: "Needs" },
  { value: "projects", label: "Projects" },
  { value: "impact", label: "Impact" },
];
const stateOptions = [
  { value: "", label: "All" },
  { value: "unread", label: "Unread" },
  { value: "read", label: "Read" },
];

export default function NotificationsPage() {
  const navigate = useNavigate();
  const { notifications, unreadCount, markRead, markAllRead } = useNotifications();
  const [filters, setFilters] = useState({ query: "", type: "", state: "" });
  const setFilter = (key) => (value) => setFilters((f) => ({ ...f, [key]: value }));

  const rows = useMemo(() => {
    const q = filters.query.trim().toLowerCase();
    return notifications.filter(
      (n) =>
        (!filters.type || n.category === filters.type) &&
        (!filters.state || (filters.state === "unread") === n.unread) &&
        (!q || [n.title, n.body, n.context].some((v) => v.toLowerCase().includes(q)))
    );
  }, [notifications, filters]);

  const groups = GROUP_ORDER.map((title) => ({ title, items: rows.filter((n) => n.group === title) })).filter(
    (g) => g.items.length > 0
  );
  const shownUnread = rows.filter((n) => n.unread).length;

  const goBack = () => (window.history.length > 1 ? navigate(-1) : navigate("/need-owner/overview"));

  return (
    <div className="mx-auto max-w-[1440px]">
      <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-sm">
        <button type="button" onClick={goBack} className="inline-flex items-center gap-2 text-muted hover:text-ink">
          <ArrowLeft size={16} /> Back
        </button>
        <ChevronRight size={14} className="text-muted" />
        <span className="font-medium">Notifications</span>
      </nav>

      <div className="mt-8 flex flex-wrap items-start justify-between gap-4">
        <div>
          <div className="flex items-center gap-3">
            <h1 className="text-2xl font-semibold">Notifications</h1>
            {unreadCount > 0 && (
              <span className="rounded-full border border-brand-200 bg-brand-50 px-2.5 py-0.5 text-xs font-medium text-brand-600">
                {unreadCount} unread
              </span>
            )}
          </div>
          <p className="mt-1.5 text-muted">Stay up to date with your Needs and Projects.</p>
        </div>
        <Button variant="outline" size="md" disabled={unreadCount === 0} onClick={markAllRead}>
          Mark all as read
        </Button>
      </div>

      <div className="mt-6 space-y-5">
        <FilterBar
          placeholder="Search notifications"
          query={filters.query}
          onQueryChange={setFilter("query")}
          selects={[
            { label: "Filter by type", value: filters.type, onChange: setFilter("type"), options: typeOptions },
            { label: "Filter by read status", value: filters.state, onChange: setFilter("state"), options: stateOptions },
          ]}
        />

        <Card className="overflow-hidden">
          <div className="px-8 pb-5 pt-7">
            <h2 className="text-lg font-semibold leading-tight">All notifications</h2>
            <p className="mt-1 text-sm text-muted">
              {rows.length} {rows.length === 1 ? "notification" : "notifications"} · {shownUnread} unread
            </p>
          </div>

          {groups.length > 0 ? (
            groups.map((g) => (
              <section key={g.title}>
                <h3 className="border-y border-line bg-surface px-8 py-3.5 text-xs font-medium uppercase tracking-wide text-muted">
                  {g.title}
                </h3>
                <ul>
                  {g.items.map((n) => (
                    <NotificationRow key={n.id} notification={n} onOpen={markRead} />
                  ))}
                </ul>
              </section>
            ))
          ) : (
            <p className="border-t border-line px-8 py-16 text-center text-sm text-muted">
              No notifications match your search or filters.
            </p>
          )}
        </Card>
      </div>
    </div>
  );
}