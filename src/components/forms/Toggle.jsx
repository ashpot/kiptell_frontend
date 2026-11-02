import { cn } from "@/lib/cn";

/** On/off switch. `label` is read by screen readers. */
export default function Toggle({ checked, onChange, label }) {
  return (
    <button
      type="button"
      role="switch"
      aria-checked={checked}
      aria-label={label}
      onClick={() => onChange(!checked)}
      className={cn(
        "relative h-6 w-[42px] shrink-0 rounded-full transition-colors",
        checked ? "bg-ink" : "bg-neutral-200"
      )}
    >
      <span
        className={cn(
          "absolute left-[3px] top-[3px] h-[18px] w-[18px] rounded-full bg-white shadow-sm transition-transform",
          checked && "translate-x-[18px]"
        )}
      />
    </button>
  );
}