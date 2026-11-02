import { Image as ImageIcon, Video } from "lucide-react";
import Card from "@/components/common/Card";
import { cn } from "@/lib/cn";

export function BeforeAfterCard({ beforeAfter }) {
  return (
    <Card className="p-6">
      <h2 className="text-base font-semibold">Before &amp; After</h2>
      <div className="mt-5 grid gap-4 sm:grid-cols-2">
        {[
          { key: "before", pill: "Before", box: "bg-neutral-100", pillClass: "bg-neutral-100 text-ink/70", text: beforeAfter.before },
          { key: "after", pill: "After", box: "bg-success-50", pillClass: "bg-success-50 text-success", text: beforeAfter.after },
        ].map((side) => (
          <figure key={side.key}>
            <div className={cn("flex h-36 items-center justify-center rounded-2xl text-neutral-300", side.box)}>
              <ImageIcon size={20} strokeWidth={1.5} />
            </div>
            <figcaption className="mt-3 flex items-center gap-2.5 text-xs text-muted">
              <span className={cn("rounded-full px-2.5 py-0.5 font-medium", side.pillClass)}>{side.pill}</span>
              {side.text}
            </figcaption>
          </figure>
        ))}
      </div>
      <p className="mt-4 text-xs text-muted/80">Images collected during the project and confirmed by the project team.</p>
    </Card>
  );
}

export function ProjectStoryCard({ story }) {
  return (
    <Card className="p-6">
      <h2 className="text-base font-semibold">Project Story</h2>
      <div className="mt-5 flex h-48 flex-col items-center justify-center rounded-2xl bg-success-50 text-center">
        <ImageIcon size={20} strokeWidth={1.5} className="text-neutral-300" />
        <p className="mt-2 text-xs text-muted">{story.caption}</p>
        <p className="mt-1 text-[11px] text-muted/50">{story.subtitle}</p>
      </div>
      <div className="mt-3 grid gap-3 sm:grid-cols-2">
        {story.items.map((item) => {
          const Icon = item.kind === "video" ? Video : ImageIcon;
          return (
            <div
              key={item.title}
              className={cn(
                "flex items-center gap-3 rounded-xl px-4 py-3.5",
                item.kind === "video" ? "bg-surface" : "bg-brand-50"
              )}
            >
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-white/70 text-muted">
                <Icon size={15} strokeWidth={1.5} />
              </span>
              <div>
                <p className="text-sm font-semibold leading-5">{item.title}</p>
                <p className="text-xs text-muted">{item.meta}</p>
              </div>
            </div>
          );
        })}
      </div>
    </Card>
  );
}