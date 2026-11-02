import { cn } from "@/lib/cn";

/** tone: "brand" (yellow, default) or "success" (green, for finished work) */
export default function ProgressBar({ value = 0, label, tone = "brand" }) {
  return (
    <div
      className="h-1.5 w-full overflow-hidden rounded-full bg-line"
      role="progressbar"
      aria-valuenow={value}
      aria-valuemin={0}
      aria-valuemax={100}
      aria-label={label}
    >
      <div
        className={cn("h-full rounded-full", tone === "success" ? "bg-success" : "bg-brand")}
        style={{ width: `${value}%` }}
      />
    </div>
  );
}