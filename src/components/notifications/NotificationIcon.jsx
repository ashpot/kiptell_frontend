import { Briefcase, Check, ClipboardList, ListChecks, Upload, X } from "lucide-react";
import { cn } from "@/lib/cn";

const SIZES = { md: "h-10 w-10 rounded-xl", lg: "h-12 w-12 rounded-2xl" };
const NEUTRAL = { progress: ListChecks, upload: Upload, submitted: ClipboardList, project: Briefcase };

/**
 * kind: warning | success | error | progress | upload | submitted | project
 * size: "md" (bell dropdown) or "lg" (Notifications page)
 */
export default function NotificationIcon({ kind, size = "md" }) {
  const box = cn("flex shrink-0 items-center justify-center", SIZES[size]);

  if (kind === "warning")
    return (
      <span className={cn(box, "border border-brand-200 bg-brand-50")}>
        <span className="flex h-5 w-5 items-center justify-center rounded-full bg-brand text-xs font-bold leading-none text-white">
          !
        </span>
      </span>
    );

  if (kind === "success")
    return (
      <span className={cn(box, "bg-success-50")}>
        <span className="flex h-5 w-5 items-center justify-center rounded-full bg-success text-white">
          <Check size={12} strokeWidth={3} />
        </span>
      </span>
    );

  if (kind === "error")
    return (
      <span className={cn(box, "border border-danger-200 bg-danger-50")}>
        <span className="flex h-5 w-5 items-center justify-center rounded-full bg-danger text-white">
          <X size={12} strokeWidth={3} />
        </span>
      </span>
    );

  const Icon = NEUTRAL[kind] ?? Briefcase;
  return (
    <span className={cn(box, "bg-neutral-100 text-muted")}>
      <Icon size={18} strokeWidth={1.5} />
    </span>
  );
}