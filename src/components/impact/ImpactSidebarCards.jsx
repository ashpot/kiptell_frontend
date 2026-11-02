import { ArrowRight, Check } from "lucide-react";
import Card from "@/components/common/Card";
import { Node } from "@/components/need-details/StatusTimeline";
import { verification } from "@/data/impact";
import { cn } from "@/lib/cn";

export function VerificationCard() {
  return (
    <Card className="p-6">
      <h2 className="text-base font-semibold">Impact Verification</h2>
      <ul className="mt-4">
        {verification.map((v) => (
          <li key={v.title} className="flex items-start gap-3 border-b border-line py-3.5 last:border-b-0">
            <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-success-50 text-success">
              <Check size={12} strokeWidth={3} />
            </span>
            <div>
              <p className="text-sm font-semibold leading-5">{v.title}</p>
              <p className="text-xs text-muted">{v.by}</p>
            </div>
          </li>
        ))}
      </ul>
      <p className="mt-3 rounded-xl bg-surface px-4 py-3.5 text-xs leading-5 text-muted">
        Need Owner confirmation and Kiptell verification are separate steps. Impact reflects the verified project
        record.
      </p>
    </Card>
  );
}

/** steps: [{ label, date, state: "done" | "upcoming" }] */
export function ImpactTimelineCard({ steps }) {
  return (
    <Card className="p-6">
      <h2 className="text-base font-semibold">Impact Timeline</h2>
      <ol className="mt-5">
        {steps.map((step, i) => {
          const upcoming = step.state === "upcoming";
          return (
            <li key={step.label} className="relative flex gap-3 pb-6 last:pb-0">
              {i < steps.length - 1 && (
                <span
                  aria-hidden
                  className={cn(
                    "absolute left-[11.5px] top-6 h-[calc(100%-1.5rem)] w-px",
                    step.state === "done" ? "bg-success/30" : "bg-line"
                  )}
                />
              )}
              <Node state={step.state} />
              <div className="pt-px">
                <p className={cn("text-sm font-semibold leading-6", upcoming && "text-muted")}>{step.label}</p>
                <p className={cn("text-xs", upcoming ? "text-muted/60" : "text-muted")}>{step.date}</p>
              </div>
            </li>
          );
        })}
      </ol>
      <p className="mt-6 flex items-center gap-1.5 px-1 text-xs text-muted">
        Need <ArrowRight size={11} /> Project <ArrowRight size={11} /> Impact
      </p>
    </Card>
  );
}