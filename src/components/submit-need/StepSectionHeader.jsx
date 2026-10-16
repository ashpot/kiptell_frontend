import { cn } from "@/lib/cn";

/** Heading for a block inside the form card. `divider` adds the rule under it. */
export default function StepSectionHeader({ title, description, divider = false, className }) {
  return (
    <div className={cn(divider && "border-b border-line pb-6", className)}>
      <h2 className="text-lg font-semibold leading-tight">{title}</h2>
      {description && <p className="mt-1 text-sm text-muted">{description}</p>}
    </div>
  );
}