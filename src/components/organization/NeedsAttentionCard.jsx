import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import Badge from "@/components/common/Badge";
import Button from "@/components/common/Button";
import Card from "@/components/common/Card";
import SectionHeader from "@/components/common/SectionHeader";
import { cn } from "@/lib/cn";

const BORDER = { success: "border-success/40", warning: "border-brand-200" };

export default function NeedsAttentionCard({ items }) {
  return (
    <Card className="p-8">
      <SectionHeader title="Needs Your Attention" description="Decisions that are waiting on your organization." />

      {items.length === 0 ? (
        <p className="mt-8 rounded-2xl border border-dashed border-line px-6 py-10 text-center text-sm text-muted">
          You're all caught up. Nothing is waiting on your organization right now.
        </p>
      ) : (
        <ul className="mt-8 space-y-4">
          {items.map((item) => (
            <li
              key={item.id}
              className={cn(
                "flex flex-wrap items-start justify-between gap-4 rounded-2xl border bg-white px-7 py-6",
                BORDER[item.tone]
              )}
            >
              <div className="min-w-0 flex-1">
                <div className="flex flex-wrap items-center gap-3">
                  <Badge tone={item.tone} className="px-3 py-1 text-sm">
                    {item.category}
                  </Badge>
                  <span className="text-sm text-muted">
                    {item.bids} {item.bids === 1 ? "bid" : "bids"} received
                  </span>
                </div>
                <h3 className="mt-3 text-[17px] font-semibold leading-tight">{item.title}</h3>
                <p className="mt-2 text-sm leading-6 text-muted">{item.text}</p>
              </div>
              <Button as={Link} to={item.to} variant="dark" size="lg" icon={ArrowRight} className="shrink-0">
                Review Bids
              </Button>
            </li>
          ))}
        </ul>
      )}
    </Card>
  );
}