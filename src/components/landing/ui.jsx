import { Image as ImageIcon } from "lucide-react";
import { cn } from "@/lib/cn";

export const Container = ({ className, children }) => (
  <div className={cn("mx-auto w-full max-w-[1260px] px-5 md:px-8", className)}>{children}</div>
);

/** Small label above a section heading */
export function SectionTag({ children, dot = true }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-black/10 px-3 py-1.5 text-[10px] font-medium uppercase tracking-[0.12em] text-neutral-700 dark:border-white/15 dark:text-white/70">
      {dot && <span className="h-1.5 w-1.5 rounded-full bg-brand" />}
      {children}
    </span>
  );
}

export const H2 = ({ className, children }) => (
  <h2 className={cn("text-[clamp(2.25rem,4.4vw,3.5rem)] font-medium leading-[1.04] tracking-tight", className)}>
    {children}
  </h2>
);

/** Rounded surface used by most cards: white on light, soft black on dark */
export const CARD =
  "rounded-3xl border border-black/5 bg-white dark:border-white/10 dark:bg-neutral-900/60";

/** Icon tile colours, shared by steps, roles and impact categories */
export const TILE = {
  yellow: "bg-brand-100 text-brand-700 dark:bg-brand/15 dark:text-brand",
  blue: "bg-sky-100 text-sky-600 dark:bg-sky-500/15 dark:text-sky-400",
  green: "bg-emerald-100 text-emerald-600 dark:bg-emerald-500/15 dark:text-emerald-400",
  purple: "bg-violet-100 text-violet-600 dark:bg-violet-500/15 dark:text-violet-400",
  teal: "bg-cyan-100 text-cyan-600 dark:bg-cyan-500/15 dark:text-cyan-400",
};

const base =
  "inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-medium transition-colors";
/** Button looks. Use with <Link>, <a> or <button>. */
export const btn = {
  solid: `${base} bg-ink text-white hover:bg-black/80 dark:bg-white dark:text-ink dark:hover:bg-white/85`,
  outline: `${base} border border-black/15 text-ink hover:bg-black/5 dark:border-white/25 dark:text-white dark:hover:bg-white/10`,
  heroSecondary: `${base} border border-black/10 bg-white text-ink hover:bg-neutral-50 dark:border-transparent dark:bg-brand dark:hover:bg-brand-600`,
  onBlack: `${base} bg-white text-ink hover:bg-white/85`,
  ctaSecondary: `${base} border border-white/30 text-white hover:bg-white/10 dark:border-transparent dark:bg-brand dark:text-ink dark:hover:bg-brand-600`,
};

const PLACEHOLDER_TONES = {
  water: "from-sky-400 via-cyan-300 to-amber-100",
  library: "from-amber-800 via-amber-600 to-amber-200",
  solar: "from-sky-500 via-sky-300 to-amber-200",
  tower: "from-neutral-500 via-neutral-300 to-neutral-100",
  office: "from-neutral-400 via-neutral-200 to-neutral-100",
  notes: "from-lime-300 via-emerald-200 to-neutral-200",
};

/** A photo area. Shows the image when `src` is set, otherwise a coloured placeholder. */
export function ImageSlot({ src, alt, tone = "office", className, children }) {
  return (
    <div className={cn("relative overflow-hidden", className)}>
      {src ? (
        <img src={src} alt={alt} className="absolute inset-0 h-full w-full object-cover" />
      ) : (
        <div role="img" aria-label={alt} className={cn("absolute inset-0 bg-gradient-to-br", PLACEHOLDER_TONES[tone])}>
          <ImageIcon
            size={36}
            strokeWidth={1.25}
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-white/60"
          />
        </div>
      )}
      {children}
    </div>
  );
}

export function Logo({ onBlack = false }) {
  return (
    <span className="inline-flex items-center gap-2">
      <svg width="30" height="30" viewBox="0 0 32 32" aria-hidden>
        <rect width="32" height="32" rx="7" className={onBlack ? "fill-neutral-900" : "fill-ink dark:fill-neutral-900"} />
        <path d="M10 7h4v7l7-7h5l-8 8.5L26 25h-5l-7-7v7h-4z" className="fill-brand" />
      </svg>
      <span className={cn("text-[26px] font-semibold leading-none tracking-tight", onBlack && "text-white")}>
        kip
        <span className={onBlack ? "text-white/60" : "text-neutral-500 dark:text-neutral-400"}>tell</span>
      </span>
    </span>
  );
}