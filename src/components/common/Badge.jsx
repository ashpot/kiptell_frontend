import { cn } from "@/lib/cn";

const tones = {
  success: "border-success/40 bg-success-50 text-success",
  warning: "border-brand-200 bg-brand-50 text-brand-600",
  danger: "border-danger-200 bg-danger-50 text-danger",
  neutral: "border-line bg-surface text-ink/70",
  outline: "border-line bg-white text-ink",
};

export default function Badge({ tone = "neutral", icon: Icon, className, children }) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full border px-2.5 py-0.5 text-xs font-medium",
        tones[tone],
        className
      )}
    >
      {Icon && <Icon size={14} />}
      {children}
    </span>
  );
}
