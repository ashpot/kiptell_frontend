import { Link } from "react-router-dom";
import Button from "@/components/common/Button";
import Card from "@/components/common/Card";
import { cn } from "@/lib/cn";

/**
 * variant "outlined" (Need Details) or "filled" (Project Details).
 * keyOutcome adds the green "Key outcome" note above the button.
 */
export default function ImpactSummaryCard({ impact, keyOutcome, variant = "outlined" }) {
  const tiles = [
    { value: impact.people, label: "People Reached" },
    { value: impact.deliverables, label: "Deliverables" },
    { value: impact.duration, label: "Duration" },
  ];
  return (
    <Card className="p-6">
      <h2 className="text-base font-semibold">Impact Snapshot</h2>
      <div className="mt-4 grid grid-cols-3 gap-2.5">
        {tiles.map((t) => (
          <div
            key={t.label}
            className={cn(
              "rounded-xl px-1 py-3 text-center",
              variant === "filled" ? "bg-surface" : "border border-line"
            )}
          >
            <p className="text-lg font-semibold leading-none">{t.value}</p>
            <p className="mt-1.5 text-[11px] leading-tight text-muted">{t.label}</p>
          </div>
        ))}
      </div>
      {keyOutcome && (
        <p className="mt-3 rounded-xl bg-success-50 px-4 py-3 text-[13px] leading-5 text-muted">
          <span className="font-semibold text-success">Key outcome:</span> {keyOutcome}
        </p>
      )}
      <Button as={Link} to="/need-owner/impact" size="lg" className="mt-4 w-full">
        View Full Impact
      </Button>
    </Card>
  );
}