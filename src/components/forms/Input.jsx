import { cn } from "@/lib/cn";
import { controlClass } from "./styles";

/** Text input with optional left icon or text prefix (e.g. a currency symbol) */
export default function Input({ icon: Icon, prefix, error, className, ...props }) {
  return (
    <div className="relative">
      {Icon && (
        <Icon size={16} className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-muted" />
      )}
      {prefix && (
        <span className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-sm text-muted">
          {prefix}
        </span>
      )}
      <input
        aria-invalid={!!error}
        className={cn(controlClass(error), "h-11", (Icon || prefix) && "pl-10", className)}
        {...props}
      />
    </div>
  );
}