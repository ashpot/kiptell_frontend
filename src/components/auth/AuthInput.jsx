import { cn } from "@/lib/cn";

/** Input with a left icon and an optional right-hand control (e.g. show/hide password). */
export default function AuthInput({ icon: Icon, right, error, className, ...props }) {
  return (
    <div className="relative">
      <Icon size={20} strokeWidth={1.5} className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-ink" />
      <input
        aria-invalid={!!error}
        className={cn(
          "h-12 w-full rounded-2xl border bg-neutral-50 pl-12 text-[15px] text-ink transition-colors",
          "placeholder:text-neutral-400 focus:border-ink focus:bg-white focus:outline-none",
          right ? "pr-12" : "pr-4",
          error ? "border-danger" : "border-line",
          className
        )}
        {...props}
      />
      {right && <div className="absolute right-3 top-1/2 -translate-y-1/2">{right}</div>}
    </div>
  );
}