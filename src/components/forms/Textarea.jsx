import { cn } from "@/lib/cn";
import { controlClass } from "./styles";

export default function Textarea({ rows = 3, error, className, ...props }) {
  return (
    <textarea
      rows={rows}
      aria-invalid={!!error}
      className={cn(controlClass(error), "resize-none py-3 leading-6", className)}
      {...props}
    />
  );
}