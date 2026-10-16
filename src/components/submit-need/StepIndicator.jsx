import { Check } from "lucide-react";
import { STEPS } from "@/data/needForm";
import { cn } from "@/lib/cn";

/** Six-step pill tracker. Completed steps are clickable so people can go back. */
export default function StepIndicator({ current, onStepClick }) {
  return (
    <nav aria-label="Submit a Need progress" className="overflow-x-auto rounded-full border border-line bg-white p-2">
      <ol className="flex min-w-max items-center justify-between gap-1">
        {STEPS.map((step, i) => {
          const done = i < current;
          const active = i === current;
          return (
            <li key={step.id}>
              <button
                type="button"
                disabled={!done}
                onClick={() => onStepClick(i)}
                aria-current={active ? "step" : undefined}
                className={cn(
                  "flex items-center gap-2.5 whitespace-nowrap rounded-full px-4 py-2.5 text-sm transition-colors disabled:cursor-default",
                  active && "bg-brand font-medium text-ink",
                  done && "text-ink/70 hover:bg-surface",
                  !active && !done && "text-muted"
                )}
              >
                {done ? (
                  <span className="flex h-[18px] w-[18px] items-center justify-center rounded-full bg-success text-white">
                    <Check size={11} strokeWidth={3} />
                  </span>
                ) : (
                  <span className={cn("font-semibold", !active && "text-muted/70")}>
                    {String(i + 1).padStart(2, "0")}
                  </span>
                )}
                {step.label}
              </button>
            </li>
          );
        })}
      </ol>
    </nav>
  );
}