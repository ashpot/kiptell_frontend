import { Link } from "react-router-dom";
import { ArrowUpRight, BadgeCheck, MapPin } from "lucide-react";
import { HERO_PROJECT as p } from "@/data/landing";
import { Container, ImageSlot, SectionTag, btn } from "./ui";

export default function Hero() {
  return (
    <section className="pb-14 pt-4 md:pb-20">
      <Container className="grid items-stretch gap-10 lg:grid-cols-[1fr_1.05fr]">
        <div className="flex flex-col justify-center py-4 lg:py-10">
          <div>
            <SectionTag dot={false}>Accountable community projects</SectionTag>
          </div>
          <h1 className="mt-6 max-w-[560px] text-[clamp(2.75rem,6vw,5rem)] font-medium leading-[1.02] tracking-tight">
            Turn community needs into{" "}
            <span className="text-brand dark:text-white">measurable impact.</span>
          </h1>
          <p className="mt-6 max-w-[460px] text-[15px] leading-7 text-neutral-600 dark:text-white/60">
            Kiptell connects Need Owners, Funders and Companies around a shared record of milestones, evidence and
            outcomes.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#featured" className={btn.solid}>
              Explore Needs <ArrowUpRight size={14} />
            </a>
            <Link to="/signup" className={btn.heroSecondary}>
              Get Started
            </Link>
          </div>
        </div>

        <ImageSlot src={p.image} alt={`${p.title}, ${p.location}`} tone="water" className="min-h-[460px] rounded-3xl lg:min-h-[560px]">
          <span className="absolute right-4 top-4 inline-flex items-center gap-2 rounded-full bg-white px-3 py-1.5 text-[11px] font-medium text-ink shadow-sm">
            <BadgeCheck size={14} className="text-success" /> Kiptell verification where required
          </span>

          <div className="absolute inset-x-4 bottom-4 rounded-2xl border border-white/15 bg-black/60 p-5 text-white backdrop-blur-md">
            <div className="flex items-center justify-between text-[10px] font-medium uppercase tracking-[0.12em] text-white/70">
              <span>{p.category}</span>
              <span className="inline-flex items-center gap-1.5 rounded-full border border-white/25 px-2.5 py-1 normal-case tracking-normal">
                <span className="h-1.5 w-1.5 rounded-full bg-brand" /> In Progress
              </span>
            </div>
            <h3 className="mt-3 text-3xl font-medium tracking-tight">{p.title}</h3>
            <p className="mt-1.5 flex items-center gap-1.5 text-xs text-white/70">
              <MapPin size={12} /> {p.location}
            </p>
            <div className="mt-5 flex items-end justify-between gap-6">
              <div className="flex-1">
                <div className="flex justify-between text-[11px] text-white/70">
                  <span>Project progress</span>
                  <span className="font-medium text-white">{p.progress}%</span>
                </div>
                <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-white/20">
                  <div className="h-full rounded-full bg-brand" style={{ width: `${p.progress}%` }} />
                </div>
              </div>
              <a
                href="#featured"
                aria-label={`View ${p.title}`}
                className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white text-ink transition-transform hover:scale-105"
              >
                <ArrowUpRight size={18} />
              </a>
            </div>
          </div>
        </ImageSlot>
      </Container>
    </section>
  );
}