import { cn } from "@/lib/cn";

export default function Avatar({ src, name = "", size = 40, className }) {
  const initials = name
    .split(" ")
    .map((n) => n[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();

  return src ? (
    <img
      src={src}
      alt={name}
      style={{ width: size, height: size }}
      className={cn("rounded-full object-cover", className)}
    />
  ) : (
    <span
      style={{ width: size, height: size }}
      className={cn(
        "inline-flex items-center justify-center rounded-full bg-brand-100 text-sm font-semibold text-brand-700",
        className
      )}
    >
      {initials}
    </span>
  );
}
