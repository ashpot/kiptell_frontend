import { cn } from "@/lib/cn";

/** Card heading: title + optional description + optional right-side action */
export default function SectionHeader({ title, description, action, className }) {
  return (
    <div className={cn("flex items-start justify-between gap-4", className)}>
      <div>
        <h2 className="text-lg font-semibold leading-tight">{title}</h2>
        {description && <p className="mt-1.5 max-w-sm text-sm text-muted">{description}</p>}
      </div>
      {action}
    </div>
  );
}
