import { cn } from "@/lib/cn";

export default function Card({ as: Component = "section", className, children, ...props }) {
  return (
    <Component
      className={cn("rounded-3xl border border-line bg-white", className)}
      {...props}
    >
      {children}
    </Component>
  );
}
