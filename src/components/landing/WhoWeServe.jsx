import { Link } from "react-router-dom";
import { ArrowUpRight, Building2, Users, Wallet } from "lucide-react";
import { ROLES } from "@/data/landing";
import { CARD, Container, H2, SectionTag, TILE } from "./ui";
import { cn } from "@/lib/cn";

const ICONS = { users: Users, wallet: Wallet, building: Building2 };

export default function WhoWeServe() {
  return (
    <section id="who-we-serve" className="scroll-mt-4 bg-white py-16 dark:bg-black md:py-24">
      <Container className="grid gap-10 lg:grid-cols-[0.85fr_1fr] lg:gap-16">
        <div>
          <SectionTag>Who Kiptell serves</SectionTag>
          <H2 className="mt-5 max-w-[460px]">Built for everyone who makes a project happen.</H2>
          <p className="mt-6 max-w-[400px] text-[14px] leading-6 text-neutral-600 dark:text-white/60">
            Three roles, equal footing. Participation is subject to review and eligibility, and a Need submitter may
            not be the Need Owner.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          {ROLES.map((r) => {
            const Icon = ICONS[r.icon];
            return (
              <article key={r.id} className={cn(CARD, "flex min-h-[250px] flex-col justify-between p-6")}>
                <div>
                  <span className={cn("flex h-10 w-10 items-center justify-center rounded-xl", TILE[r.tone])}>
                    <Icon size={18} strokeWidth={1.75} />
                  </span>
                  <h3 className="mt-6 text-xl font-semibold">{r.title}</h3>
                  <p className="mt-2 text-[13px] leading-5 text-neutral-500 dark:text-white/55">{r.text}</p>
                </div>
                <Link
                  to={`/signup?role=${r.id}`}
                  className="mt-6 inline-flex items-center gap-1.5 text-[13px] font-semibold hover:underline"
                >
                  {r.cta} <ArrowUpRight size={13} />
                </Link>
              </article>
            );
          })}
        </div>
      </Container>
    </section>
  );
}