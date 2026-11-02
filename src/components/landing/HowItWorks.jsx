import { ClipboardList, Handshake, ShieldCheck, TrendingUp } from "lucide-react";
import { STEPS } from "@/data/landing";
import { CARD, Container, H2, SectionTag, TILE } from "./ui";
import { cn } from "@/lib/cn";

const ICONS = { need: ClipboardList, fund: Handshake, verify: ShieldCheck, report: TrendingUp };

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="scroll-mt-4 bg-neutral-100 py-16 dark:bg-black md:py-24">
      <Container className="grid gap-10 lg:grid-cols-[0.85fr_1fr] lg:gap-16">
        <div>
          <SectionTag>How Kiptell works</SectionTag>
          <H2 className="mt-5">One shared path from need to outcome.</H2>
          <p className="mt-6 max-w-[420px] text-[14px] leading-6 text-neutral-600 dark:text-white/60">
            Each stage leaves a record the next one builds on. Review requirements vary by project, so the process
            adapts to the work being done.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          {STEPS.map((s) => {
            const Icon = ICONS[s.icon];
            return (
              <article key={s.id} className={cn(CARD, "flex min-h-[230px] flex-col justify-between p-6")}>
                <div className="flex items-start justify-between">
                  <span className={cn("flex h-10 w-10 items-center justify-center rounded-xl", TILE[s.tone])}>
                    <Icon size={18} strokeWidth={1.75} />
                  </span>
                  <span className="text-[10px] font-medium uppercase tracking-[0.12em] text-neutral-400">
                    Step {String(s.id).padStart(2, "0")}
                  </span>
                </div>
                <div>
                  <h3 className="text-lg font-semibold">{s.title}</h3>
                  <p className="mt-2 text-[13px] leading-5 text-neutral-500 dark:text-white/55">{s.text}</p>
                </div>
              </article>
            );
          })}
        </div>
      </Container>
    </section>
  );
}