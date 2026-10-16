import { CircleCheck, Flag, MessageCircle } from "lucide-react";
import Card from "@/components/common/Card";
import SectionHeader from "@/components/common/SectionHeader";

const icons = {
  approved: <CircleCheck size={16} className="text-success" />,
  milestone: <CircleCheck size={16} className="text-success" />,
  update: <Flag size={16} fill="currentColor" className="text-brand-600" />,
  info: <MessageCircle size={16} fill="currentColor" strokeWidth={0} className="text-danger" />,
};

export default function RecentActivity({ items }) {
  return (
    <Card className="p-6">
      <SectionHeader title="Recent Activity" />
      <ol className="mt-8">
        {items.map((item, i) => (
          <li key={item.id} className="relative flex gap-4 pb-8 last:pb-0">
            {i < items.length - 1 && (
              <span aria-hidden className="absolute left-[19px] top-11 h-[calc(100%-2.5rem)] w-px bg-line" />
            )}
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-line bg-white">
              {icons[item.icon]}
            </span>
            <div>
              <h3 className="text-sm font-semibold">{item.title}</h3>
              <p className="mt-1 text-sm text-muted">{item.detail}</p>
              <p className="mt-2 text-xs text-muted">{item.time}</p>
            </div>
          </li>
        ))}
      </ol>
    </Card>
  );
}
