import { cn } from "@/lib/cn";

/** Shared look for Input / Textarea / Select */
export const controlClass = (error) =>
  cn(
    "w-full rounded-xl border bg-white px-4 text-sm text-ink transition-colors",
    "placeholder:text-muted/60 focus:border-ink focus:outline-none disabled:bg-surface disabled:text-muted",
    error ? "border-danger" : "border-line"
  );