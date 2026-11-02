import { DollarSign } from "lucide-react";
import Card from "@/components/common/Card";
import ItemStatusBadge from "./ItemStatusBadge";
import { cn } from "@/lib/cn";

export default function PaymentStatusCard({ stages }) {
  return (
    <Card className="p-6">
      <h2 className="flex items-center gap-2 text-[17px] font-semibold">
        <DollarSign size={16} className="text-muted" /> Payment Status
      </h2>
      <p className="mt-1 text-sm text-muted">
        Payments are released by Kiptell after deliverable verification. You cannot initiate or release payments.
      </p>

      <ul className="mt-5 space-y-3">
        {stages.map((s) => (
          <li key={s.id} className="flex items-center justify-between gap-3 rounded-2xl bg-surface px-4 py-3.5">
            <div className="flex items-center gap-3">
              <span
                className={cn(
                  "flex h-10 w-10 shrink-0 items-center justify-center rounded-xl text-xs font-semibold",
                  s.status === "released" ? "bg-success-50 text-success" : "bg-neutral-200/70 text-ink/70"
                )}
              >
                {s.percent}%
              </span>
              <div>
                <p className="text-sm font-semibold leading-5">{s.title}</p>
                <p className="text-xs text-muted">{s.note}</p>
              </div>
            </div>
            <ItemStatusBadge kind="payment" status={s.status} />
          </li>
        ))}
      </ul>
    </Card>
  );
}