import { Link } from "react-router-dom";
import { ArrowRight, Check, Clock, Info, X } from "lucide-react";
import Button from "@/components/common/Button";
import { cn } from "@/lib/cn";

export const TILE = {
  success: "bg-success-50",
  alert: "bg-danger-100",
  x: "bg-danger-100",
  clock: "bg-brand-50",
};

export function Glyph({ kind }) {
  if (kind === "clock") return <Clock size={18} strokeWidth={1.5} className="text-brand-600" />;
  return (
    <span
      className={cn(
        "flex h-5 w-5 items-center justify-center rounded-full text-white",
        kind === "success" ? "bg-success" : "bg-danger"
      )}
    >
      {kind === "success" && <Check size={12} strokeWidth={3} />}
      {kind === "alert" && <span className="text-xs font-bold leading-none">!</span>}
      {kind === "x" && <X size={12} strokeWidth={3} />}
    </span>
  );
}

const calloutTone = {
  danger: { box: "border-danger-200 bg-danger-50", label: "text-danger" },
  neutral: { box: "border-line bg-surface", label: "text-muted" },
};

/** Full-width message under the header. Content comes from STATUS_META[status].banner */
export default function StatusBanner({ need, banner }) {
  const callouts = banner.callouts?.(need) ?? [];
  const actions = banner.actions?.(need) ?? [];

  return (
    <section className={cn("rounded-3xl border bg-white p-6", banner.border)}>
      <div className="flex gap-4">
        <span className={cn("flex h-10 w-10 shrink-0 items-center justify-center rounded-xl", TILE[banner.icon])}>
          <Glyph kind={banner.icon} />
        </span>
        <div className="min-w-0 flex-1">
          <h2 className="text-[15px] font-semibold">{banner.title}</h2>
          <p className="mt-0.5 text-sm text-muted">{banner.description}</p>
          {banner.nextStep && (
            <p className="mt-4 flex items-start gap-2.5 rounded-xl border border-line px-4 py-3 text-[13px] text-muted">
              <Info size={14} className="mt-0.5 shrink-0" />
              <span>
                <span className="font-semibold text-ink">Next step:</span> {banner.nextStep}
              </span>
            </p>
          )}
        </div>
      </div>

      {callouts.map((c) => (
        <div key={c.label} className={cn("mt-4 rounded-xl border px-5 py-4", calloutTone[c.tone].box)}>
          <h3 className={cn("text-xs font-medium uppercase tracking-wide", calloutTone[c.tone].label)}>{c.label}</h3>
          <p className="mt-2 text-sm leading-6 text-ink/80">{c.text}</p>
        </div>
      ))}

      {actions.length > 0 && (
        <div className="mt-5 flex flex-wrap gap-3">
          {actions.map((a) => (
            <Button key={a.label} as={Link} to={a.to} variant={a.variant} size="md" icon={a.arrow ? ArrowRight : undefined}>
              {a.label}
            </Button>
          ))}
        </div>
      )}
    </section>
  );
}