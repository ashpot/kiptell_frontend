import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import { cn } from "@/lib/cn";
import { controlClass } from "./styles";

/** Password field with a show/hide button */
export default function PasswordInput({ error, className, ...props }) {
  const [visible, setVisible] = useState(false);
  return (
    <div className="relative">
      <input
        type={visible ? "text" : "password"}
        aria-invalid={!!error}
        className={cn(controlClass(error), "h-11 pr-12", className)}
        {...props}
      />
      <button
        type="button"
        onClick={() => setVisible((v) => !v)}
        aria-label={visible ? "Hide password" : "Show password"}
        className="absolute right-4 top-1/2 -translate-y-1/2 text-muted transition-colors hover:text-ink"
      >
        {visible ? <EyeOff size={16} /> : <Eye size={16} />}
      </button>
    </div>
  );
}