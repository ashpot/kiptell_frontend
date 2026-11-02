import { CalendarDays, FileText } from "lucide-react";
import Card from "@/components/common/Card";
import ItemStatusBadge from "./ItemStatusBadge";

export default function DeliverablesCard({ items }) {
  return (
    <Card className="p-6">
      <h2 className="text-[17px] font-semibold">Deliverables</h2>
      <p className="mt-1 text-sm text-muted">Kiptell verifies deliverables before payment is released.</p>

      <ul className="mt-5 space-y-3">
        {items.map((d) => (
          <li key={d.id} className="flex flex-wrap items-start justify-between gap-3 rounded-2xl bg-surface px-5 py-4">
            <div>
              <p className="text-sm font-semibold">{d.title}</p>
              <p className="mt-2 flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-muted">
                <span className="flex items-center gap-1.5">
                  <CalendarDays size={12} /> {d.date}
                </span>
                <span className="flex items-center gap-1.5">
                  <FileText size={12} /> {d.files}
                </span>
              </p>
            </div>
            <ItemStatusBadge kind="deliverable" status={d.status} />
          </li>
        ))}
      </ul>
    </Card>
  );
}