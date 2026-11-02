import { Camera, ClipboardCheck, Flag, ShieldCheck, Target } from "lucide-react";
import { ACCOUNTABILITY } from "@/data/landing";
import { Container, H2, SectionTag } from "./ui";
import { cn } from "@/lib/cn";

const ICONS = { flag: Flag, camera: Camera, review: ClipboardCheck, verify: ShieldCheck, target: Target };

const BUBBLE = {
  gray: { circle: "bg-neutral-200/80 dark:bg-neutral-900", icon: "bg-white text-ink dark:bg-neutral-800 dark:text-white" },
  peach: { circle: "bg-orange-100 dark:bg-orange-500/10", icon: "bg-orange-200 text-orange-600 dark:bg-orange-500/20 dark:text-orange-400" },
  yellow: { circle: "bg-brand-100 dark:bg-brand/10", icon: "bg-brand-200 text-brand-700 dark:bg-brand/20 dark:text-brand" },
  green: { circle: "bg-emerald-100 dark:bg-emerald-500/10", icon: "bg-emerald-200 text-emerald-600 dark:bg-emerald-500/20 dark:text-emerald-400" },
  blue: { circle: "bg-sky-100 dark:bg-sky-500/10", icon: "bg-sky-200 text-sky-600 dark:bg-sky-500/20 dark:text-sky-400" },
};

function Bubble({ node, className, style }) {
  const Icon = ICONS[node.icon];
  const t = BUBBLE[node.tone];
  return (
    <div
      style={style}
      className={cn("flex aspect-square flex-col items-center justify-center rounded-full p-6 text-center", t.circle, className)}
    >
      <span className={cn("flex h-9 w-9 items-center justify-center rounded-full", t.icon)}>
        <Icon size={16} strokeWidth={1.75} />
      </span>
      <h3 className="mt-3 text-[15px] font-semibold leading-tight">{node.title}</h3>
      <p className="mt-1.5 text-[12px] leading-4 text-neutral-500 dark:text-white/50">{node.text}</p>
    </div>
  );
}

export default function Accountability() {
  return (
    <section id="accountability" className="scroll-mt-4 bg-neutral-100 py-16 dark:bg-black md:py-24">
      <Container className="grid gap-12 lg:grid-cols-2 lg:gap-16">
        <div>
          <SectionTag>Accountability and verification</SectionTag>
          <H2 className="mt-5 max-w-[520px]">Progress you can follow. Outcomes you can examine.</H2>
          <p className="mt-6 max-w-[430px] text-[14px] leading-6 text-neutral-600 dark:text-white/60">
            Kiptell connects project milestones, supporting evidence, review decisions, and reported outcomes so that
            progress can be assessed rather than simply claimed.
          </p>
        </div>

        {/* Desktop: zig-zag with dashed connectors */}
        <div className="relative mx-auto hidden aspect-[560/880] w-full max-w-[560px] lg:block">
          <svg className="absolute inset-0 h-full w-full text-neutral-300 dark:text-white/20" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden>
            {ACCOUNTABILITY.slice(0, -1).map((n, i) => {
              const next = ACCOUNTABILITY[i + 1];
              return (
                <line
                  key={n.id}
                  x1={n.x}
                  y1={n.y}
                  x2={next.x}
                  y2={next.y}
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeDasharray="5 5"
                  vectorEffect="non-scaling-stroke"
                />
              );
            })}
          </svg>
          {ACCOUNTABILITY.map((n) => (
            <Bubble
              key={n.id}
              node={n}
              className="absolute w-[36%] -translate-x-1/2 -translate-y-1/2"
              style={{ left: `${n.x}%`, top: `${n.y}%` }}
            />
          ))}
        </div>

        {/* Mobile / tablet: simple vertical chain */}
        <ol className="flex flex-col items-center lg:hidden">
          {ACCOUNTABILITY.map((n, i) => (
            <li key={n.id} className="flex flex-col items-center">
              <Bubble node={n} className="w-64" />
              {i < ACCOUNTABILITY.length - 1 && (
                <span aria-hidden className="h-10 border-l-2 border-dashed border-neutral-300 dark:border-white/20" />
              )}
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}