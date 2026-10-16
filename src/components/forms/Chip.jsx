import { cn } from "@/lib/cn";

/** Pill-shaped single-choice option (e.g. desired timeline) */
export default function Chip({ selected, onClick, children }) {
  return (
    <button
      type="button"
      role="radio"
      aria-checked={selected}
      onClick={onClick}
      className={cn(
        "h-10 rounded-full border px-4 text-sm transition-colors",
        selected ? "border-ink bg-ink text-white" : "border-line bg-white text-muted hover:border-ink/30 hover:text-ink"
      )}
    >
      {children}
    </button>
  );
}