import { BarChart3, CircleCheck, FileText, FolderOpen, Hourglass, StickyNote, Users } from "lucide-react";
import Card from "@/components/common/Card";
import { cn } from "@/lib/cn";

const icons = {
  file: FileText,
  hourglass: Hourglass,
  folder: FolderOpen,
  check: CircleCheck,
  users: Users,
  notes: StickyNote,
  chart: BarChart3,
};

const tones = {
  brand: "border-brand-200 bg-brand-50 text-brand-600",
  neutral: "border-line bg-white text-muted",
  success: "border-success/30 bg-success-50 text-success",
};

export default function StatCard({ value, title, caption, icon, tone = "neutral" }) {
  const Icon = icons[icon];
  return (
    <Card as="article" className="p-6">
      <div className="flex items-start justify-between">
        <p className="text-3xl font-semibold leading-none">{value}</p>
        <span className={cn("flex h-12 w-12 items-center justify-center rounded-2xl border", tones[tone])}>
          <Icon size={22} strokeWidth={1.5} />
        </span>
      </div>
      <h3 className="mt-7 text-lg font-medium leading-tight">{title}</h3>
      {caption && <p className="mt-1 text-sm text-muted">{caption}</p>}
    </Card>
  );
}
