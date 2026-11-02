import { Link } from "react-router-dom";
import { ArrowUpRight, MapPin } from "lucide-react";
import { FEATURED } from "@/data/landing";
import { CARD, Container, H2, ImageSlot, SectionTag, btn } from "./ui";
import { cn } from "@/lib/cn";

function ProjectCard({ project: p }) {
  const done = p.progress >= 100;
  return (
    <article className={cn(CARD, "overflow-hidden")}>
      <ImageSlot src={p.image} alt={p.title} tone={p.tone} className="h-[300px] lg:h-[400px]">
        <span className="absolute left-4 top-4 inline-flex items-center gap-1.5 rounded-full bg-black/55 px-3 py-1 text-[11px] font-medium text-white backdrop-blur">
          <span className={cn("h-1.5 w-1.5 rounded-full", done ? "bg-success" : "bg-brand")} />
          {p.status}
        </span>
      </ImageSlot>

      <div className="p-6">
        <p className="text-[10px] font-medium uppercase tracking-[0.12em] text-neutral-400">{p.category}</p>
        <h3 className="mt-2 text-[22px] font-semibold leading-tight">{p.title}</h3>
        <p className="mt-2 flex items-center gap-1.5 text-xs text-neutral-500 dark:text-white/50">
          <MapPin size={12} /> {p.location}
        </p>

        <div className="mt-6 flex items-end justify-between gap-6 border-t border-black/5 pt-5 dark:border-white/10">
          <div>
            <p className="text-[11px] text-neutral-400">Funding requirement</p>
            <p className="mt-1 text-lg font-semibold">{p.funding}</p>
          </div>
          <div className="w-32 text-right">
            <p className="text-[11px] text-neutral-400">
              Progress <span className="font-medium text-ink dark:text-white">{p.progress}%</span>
            </p>
            <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-neutral-200 dark:bg-white/15">
              <div className={cn("h-full rounded-full", done ? "bg-success" : "bg-brand")} style={{ width: `${p.progress}%` }} />
            </div>
          </div>
        </div>

        <Link
          to={`/explore/needs/${p.id}`}
          className="mt-5 inline-flex items-center gap-1.5 text-[13px] font-semibold hover:underline"
        >
          View Details <ArrowUpRight size={13} />
        </Link>
      </div>
    </article>
  );
}

export default function FeaturedNeeds() {
  return (
    <section id="featured" className="scroll-mt-4 bg-[#ECE9F5] py-16 dark:bg-black md:py-24">
      <Container>
        <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
          <div>
            <SectionTag>Featured needs and projects</SectionTag>
            <H2 className="mt-5">Real needs, in the open.</H2>
          </div>
          <div className="max-w-[360px]">
            <p className="text-[13px] leading-5 text-neutral-600 dark:text-white/60">
              A selection of projects from the platform. Sign in to see full details, funding options and to take part.
            </p>
            <Link to="/explore" className={`${btn.heroSecondary} mt-4 !py-2.5`}>
              Browse All Needs <ArrowUpRight size={13} />
            </Link>
          </div>
        </div>

        <div className="mt-10 space-y-5">
          <div className="grid gap-5 md:grid-cols-2">
            {FEATURED.slice(0, 2).map((p) => (
              <ProjectCard key={p.id} project={p} />
            ))}
          </div>
          <div className="grid gap-5 lg:grid-cols-[41fr_59fr]">
            {FEATURED.slice(2).map((p) => (
              <ProjectCard key={p.id} project={p} />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}