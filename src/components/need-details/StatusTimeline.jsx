import { Check, X } from "lucide-react";
import Badge from "@/components/common/Badge";
import Card from "@/components/common/Card";
import { cn } from "@/lib/cn";

export function Node({ state }) {
  const base = "relative z-10 flex h-6 w-6 shrink-0 items-center justify-center rounded-full";
  if (state === "done")
    return (
      <span className={cn(base, "bg-success text-white")}>
        <Check size={13} strokeWidth={3} />
      </span>
    );
  if (state === "failed")
    return (
      <span className={cn(base, "bg-danger text-white")}>
        <X size={13} strokeWidth={3} />
      </span>
    );
  if (state === "current")
    return (
      <span className={cn(base, "bg-brand")}>
        <span className="h-2 w-2 rounded-full bg-ink" />
      </span>
    );
  return (
    <span className={cn(base, "border border-line bg-surface")}>
      <span className="h-2 w-2 rounded-full bg-neutral-300" />
    </span>
  );
}

/** steps come from buildTimeline() */
export default function StatusTimeline({ steps }) {
  return (
    <Card className="p-6">
      <h2 className="text-base font-semibold">Need Status</h2>
      <ol className="mt-5">
        {steps.map((step, i) => {
          const upcoming = step.state === "upcoming";
          return (
            <li key={step.key} className="relative flex gap-3 pb-6 last:pb-0">
              {i < steps.length - 1 && (
                <span
                  aria-hidden
                  className={cn(
                    "absolute left-[11.5px] top-6 h-[calc(100%-1.5rem)] w-px",
                    step.state === "done" ? "bg-success" : "bg-line"
                  )}
                />
              )}
              <Node state={step.state} />
              <div className="min-w-0 pt-px">
                <div className="flex flex-wrap items-center gap-2">
                  <p
                    className={cn(
                      "text-sm font-semibold leading-6",
                      step.state === "failed" && "text-danger",
                      upcoming && "text-muted"
                    )}
                  >
                    {step.label}
                  </p>
                  {step.badge && (
                    <Badge tone={step.badge.tone} className="px-2 py-0 text-[11px]">
                      {step.badge.label}
                    </Badge>
                  )}
                </div>
                {step.note && (
                  <p className={cn("text-xs", upcoming ? "text-muted/60" : "text-muted")}>{step.note}</p>
                )}
              </div>
            </li>
          );
        })}
      </ol>
    </Card>
  );
}