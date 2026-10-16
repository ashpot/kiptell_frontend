import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/cn";
import { controlClass } from "./styles";

export default function Select({ options = [], placeholder, value, error, className, ...props }) {
  return (
    <div className="relative">
      <select
        value={value}
        aria-invalid={!!error}
        className={cn(controlClass(error), "h-11 appearance-none pr-10", !value && "text-muted/60", className)}
        {...props}
      >
        <option value="" disabled>
          {placeholder}
        </option>
        {options.map((o) => (
          <option key={o} value={o} className="text-ink">
            {o}
          </option>
        ))}
      </select>
      <ChevronDown
        size={16}
        className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-muted"
      />
    </div>
  );
}