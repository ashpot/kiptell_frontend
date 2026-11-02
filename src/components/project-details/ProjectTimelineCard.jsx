import Badge from "@/components/common/Badge";
import Card from "@/components/common/Card";
import { Node } from "@/components/need-details/StatusTimeline";
import { cn } from "@/lib/cn";

const sublabel = (step) =>
  step.state === "current" ? "Current" : step.state === "upcoming" ? `Expected ${step.date}` : step.date;

export default function ProjectTimelineCard({ steps }) {
  return (
    <Card className="p-6">
      <h2 className="text-[17px] font-semibold">Project Timeline</h2>
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
                    step.state === "done" ? "bg-success" : "bg-line"
                  )}
                />
              )}
              <Node state={step.state} />
              <div className="pt-px">
                <div className="flex flex-wrap items-center gap-2">
                  <p className={cn("text-sm font-semibold leading-6", upcoming && "text-muted")}>{step.label}</p>
                  {step.state === "current" && (
                    <Badge tone="warning" className="px-2 py-0 text-[11px]">
                      Current
                    </Badge>
                  )}
                </div>
                <p className={cn("text-xs", upcoming ? "text-muted/60" : "text-muted")}>{sublabel(step)}</p>
              </div>
            </li>
          );
        })}
      </ol>
    </Card>
  );
}