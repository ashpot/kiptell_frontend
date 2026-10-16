import { Check } from "lucide-react";
import { cn } from "@/lib/cn";

/**
 * Selectable card used for single-choice questions.
 * indicator: "check"  → tick in the corner (submitter type)
 *            "badge"  → filled circle tick (severity)
 *            "radio"  → radio dot on the left (ownership)
 * `dot` adds a coloured dot before the title, `tone` is the unselected border colour.
 * `children` render inside the card (used for the owner row).
 */
export default function OptionCard({
  selected,
  onSelect,
  title,
  description,
  indicator = "check",
  dot,
  tone = "border-line",
  children,
}) {
  const isRadio = indicator === "radio";

  return (
    <div
      role="radio"
      aria-checked={selected}
      tabIndex={0}
      onClick={onSelect}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          onSelect();
        }
      }}
      className={cn(
        "relative cursor-pointer rounded-2xl border transition-colors",
        selected ? "border-ink bg-surface ring-1 ring-ink" : cn("bg-white hover:bg-surface/60", tone),
        isRadio ? "px-5 py-4" : "flex flex-col justify-center p-5"
      )}
    >
      {isRadio ? (
        <div className="flex items-start gap-3.5">
          <span
            className={cn(
              "mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full border",
              selected ? "border-ink bg-ink" : "border-line bg-white"
            )}
          >
            {selected && <span className="h-2 w-2 rounded-full bg-white" />}
          </span>
          <div className="min-w-0 flex-1">
            <h3 className="text-sm font-semibold">{title}</h3>
            <p className="mt-0.5 text-[13px] text-muted">{description}</p>
            {children}
          </div>
        </div>
      ) : (
        <>
          <div className="flex items-center gap-2 pr-7">
            {dot && <span className={cn("h-2 w-2 shrink-0 rounded-full", dot)} />}
            <h3 className="text-sm font-semibold">{title}</h3>
          </div>
          <p className="mt-2 text-[13px] leading-5 text-muted">{description}</p>
          {selected && indicator === "check" && <Check size={16} className="absolute right-5 top-5" />}
          {selected && indicator === "badge" && (
            <span className="absolute right-5 top-5 flex h-5 w-5 items-center justify-center rounded-full bg-ink text-white">
              <Check size={12} strokeWidth={3} />
            </span>
          )}
        </>
      )}
    </div>
  );
}