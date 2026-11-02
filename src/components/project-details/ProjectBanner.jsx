import { Link } from "react-router-dom";
import { Sparkles } from "lucide-react";
import Button from "@/components/common/Button";
import { Glyph, TILE } from "@/components/need-details/StatusBanner";
import { cn } from "@/lib/cn";

function Stat({ label, value }) {
  return (
    <div>
      <dt className="text-xs font-medium uppercase tracking-wide text-muted">{label}</dt>
      <dd className="mt-1.5 text-[15px] font-semibold">{value}</dd>
    </div>
  );
}

/** Full-width message under the header. Content comes from PROJECT_STATUS_META[status].banner */
export default function ProjectBanner({ project, banner }) {
  const stats = banner.stats?.(project) ?? [];
  const outcome = banner.keyOutcome?.(project);

  return (
    <section className={cn("rounded-3xl border bg-white p-6", banner.border)}>
      <div className="flex gap-4">
        <span className={cn("flex h-10 w-10 shrink-0 items-center justify-center rounded-xl", TILE[banner.icon])}>
          <Glyph kind={banner.icon} />
        </span>
        <div className="min-w-0">
          <h2 className="text-[15px] font-semibold">{banner.title}</h2>
          <p className="mt-0.5 text-sm text-muted">{banner.description(project)}</p>
        </div>
      </div>

      {stats.length > 0 &&
        (banner.statsLayout === "panel" ? (
          <dl className="mt-5 grid grid-cols-2 gap-4 rounded-xl border border-danger-200 bg-danger-50 px-5 py-4">
            {stats.map((s) => (
              <Stat key={s.label} {...s} />
            ))}
          </dl>
        ) : (
          <dl className="mt-5 grid gap-3 sm:grid-cols-3">
            {stats.map((s) => (
              <div key={s.label} className="rounded-xl border border-line px-5 py-4">
                <Stat {...s} />
              </div>
            ))}
          </dl>
        ))}

      {outcome && (
        <div className="mt-4 flex gap-3 rounded-xl border border-success/30 bg-success-50 px-5 py-4">
          <Sparkles size={16} className="mt-0.5 shrink-0 text-success" />
          <div>
            <h3 className="text-xs font-medium uppercase tracking-wide text-success">Key outcome</h3>
            <p className="mt-1.5 text-sm text-ink/80">{outcome}</p>
          </div>
        </div>
      )}

      <div className="mt-5 flex flex-wrap gap-3">
        {banner.actions(project).map((a) =>
          a.href ? (
            <Button key={a.label} as="a" href={a.href} variant={a.variant}>
              {a.label}
            </Button>
          ) : (
            <Button key={a.label} as={Link} to={a.to} variant={a.variant}>
              {a.label}
            </Button>
          )
        )}
      </div>
    </section>
  );
}