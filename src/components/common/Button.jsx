import { cn } from "@/lib/cn";

const variants = {
  primary: "bg-brand text-ink hover:bg-brand-600",
  dark: "bg-ink text-white hover:bg-black/80",
  danger: "bg-danger text-white hover:bg-red-600",
  outline: "border border-line bg-white text-ink hover:bg-surface",
  "outline-danger": "border border-danger-200 bg-white text-danger hover:bg-danger-50",
  ghost: "text-ink hover:bg-surface",
  "outline-success": "border border-success/30 bg-white text-success hover:bg-success-50",
  "outline-warning": "border border-brand-200 bg-white text-brand-600 hover:bg-brand-50",
  "outline-muted": "border border-line bg-white text-muted hover:bg-surface",
};

const sizes = {
  sm: "h-9 px-4 text-sm rounded-xl",
  md: "h-11 px-5 text-sm rounded-xl",
  lg: "h-12 px-6 text-sm rounded-full",
};

export default function Button({
  as: Component = "button",
  variant = "primary",
  size = "md",
  icon: Icon,
  iconPosition = "right",
  className,
  children,
  ...props
}) {
  return (
    <Component
      className={cn(
        "inline-flex items-center justify-center gap-2 font-medium transition-colors",
                "disabled:cursor-not-allowed disabled:border-transparent disabled:bg-neutral-100 disabled:text-muted disabled:hover:bg-neutral-100",
        variants[variant],
        sizes[size],
        className
      )}
      {...props}
    >
      {Icon && iconPosition === "left" && <Icon size={16} />}
      {children}
      {Icon && iconPosition === "right" && <Icon size={14} />}
    </Component>
  );
}
