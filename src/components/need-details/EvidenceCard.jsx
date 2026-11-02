import { FileText, Image as ImageIcon, Video } from "lucide-react";
import Card from "@/components/common/Card";
import FileItem from "./FileItem";
import { cn } from "@/lib/cn";


const TILE_TONES = {
  blue: "bg-blue-100 text-blue-300",
  green: "bg-green-100 text-green-300",
  amber: "bg-amber-100 text-amber-300",
  gray: "bg-neutral-100 text-neutral-300",
};

function Group({ title, count, children }) {
  if (!count) return null;
  return (
    <div className="mt-5">
      <h3 className="text-xs font-medium uppercase tracking-wide text-muted">
        {title} ({count})
      </h3>
      {children}
    </div>
  );
}

export default function EvidenceCard({ evidence, title = "Supporting Evidence" }) {
  const { photos, videos, documents } = evidence;
  return (
    <Card className="p-6">
      <div className="flex items-center justify-between">
        <h2 className="text-[17px] font-semibold">{title}</h2>
        <button type="button" className="text-sm text-ink/80 hover:text-ink">
          View all
        </button>
      </div>

      <Group title="Photos" count={photos.length}>
        <div className="mt-3 flex flex-wrap gap-3">
          {photos.map((tone, i) => (
            <span
              key={i}
              className={cn("flex h-[72px] w-[72px] items-center justify-center rounded-2xl", TILE_TONES[tone])}
            >
              <ImageIcon size={20} strokeWidth={1.5} />
            </span>
          ))}
        </div>
      </Group>

      <Group title="Videos" count={videos.length}>
        <ul className="mt-3 space-y-3">
          {videos.map((v) => (
            <FileItem key={v.name} icon={Video} {...v} />
          ))}
        </ul>
      </Group>

      <Group title="Documents" count={documents.length}>
        <ul className="mt-3 space-y-3">
          {documents.map((d) => (
            <FileItem key={d.name} icon={FileText} {...d} />
          ))}
        </ul>
      </Group>
    </Card>
  );
}