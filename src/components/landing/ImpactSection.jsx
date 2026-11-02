import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight, Construction, GraduationCap, HeartPulse, Leaf, Palette } from "lucide-react";
import { IMPACT_CATEGORIES, IMPACT_IMAGE } from "@/data/landing";
import { CARD, Container, H2, ImageSlot, SectionTag, TILE } from "./ui";
import { cn } from "@/lib/cn";

const ICONS = {
  infrastructure: Construction,
  healthcare: HeartPulse,
  education: GraduationCap,
  talent: Palette,
  environment: Leaf,
};

export default function ImpactSection() {
  // The highlighted card follows the pointer / keyboard focus; the first one starts highlighted
  const [active, setActive] = useState(0);

  return (
    <section id="impact" className="scroll-mt-4 bg-white py-16 dark:bg-black md:py-24">
      <Container className="grid gap-10 lg:grid-cols-[0.85fr_1fr] lg:gap-16">
        <div>
          <SectionTag>Impact review</SectionTag>
          <H2 className="mt-5 max-w-[460px]">Impact is outcomes, not activity.</H2>
          <p className="mt-6 max-w-[430px] text-[14px] leading-6 text-neutral-600 dark:text-white/60">
            Progress shows the work being done. Impact shows what changed because of it, measured in terms that suit
            each category.
          </p>
          <ImageSlot
            src={IMPACT_IMAGE}
            alt="Handwritten checklist on a sticky note"
            tone="notes"
            className="mt-8 h-[300px] w-full max-w-[520px] rounded-2xl"
          />
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          {IMPACT_CATEGORIES.map((c, i) => {
            const Icon = ICONS[c.icon];
            const on = active === i;
            return (
              <article
                key={c.id}
                tabIndex={0}
                onMouseEnter={() => setActive(i)}
                onFocus={() => setActive(i)}
                className={cn(
                  CARD,
                  "flex min-h-[200px] flex-col justify-between p-6 transition-colors",
                  on && "border-ink bg-ink text-white dark:border-white/25 dark:bg-neutral-800"
                )}
              >
                <span className={cn("flex h-10 w-10 items-center justify-center rounded-xl", TILE[c.tone])}>
                  <Icon size={18} strokeWidth={1.75} />
                </span>
                <div className="mt-8">
                  <h3 className="text-lg font-semibold leading-tight">{c.title}</h3>
                  <p className={cn("mt-3 text-[10px] font-medium uppercase tracking-[0.12em]", on ? "text-white/50" : "text-neutral-400")}>
                    Measures tracked
                  </p>
                  <ul className="mt-2 space-y-1.5">
                    {c.measures.map((m) => (
                      <li key={m} className={cn("flex items-center gap-2 text-[13px]", on ? "text-white/80" : "text-neutral-600 dark:text-white/65")}>
                        <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-brand" />
                        {m}
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            );
          })}

          <aside className="flex min-h-[200px] flex-col justify-between rounded-3xl border border-brand-200 bg-brand-50 p-6 dark:border-brand/20 dark:bg-brand/10">
            <p className="text-[13px] leading-5 text-neutral-600 dark:text-white/65">
              These are the kinds of outcomes Kiptell can record. Verified results are shown only once they have been
              reviewed.
            </p>
            <Link to="/explore" className="mt-6 inline-flex items-center gap-1.5 text-[13px] font-semibold hover:underline">
              Browse All Needs <ArrowUpRight size={13} />
            </Link>
          </aside>
        </div>
      </Container>
    </section>
  );
}