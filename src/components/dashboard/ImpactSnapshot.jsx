import { Link } from "react-router-dom";
import { ArrowUpRight, Flag, Users, Package } from "lucide-react";
import Card from "@/components/common/Card";
import SectionHeader from "@/components/common/SectionHeader";

const icons = { flag: Flag, users: Users, package: Package };

export default function ImpactSnapshot({ items }) {
  return (
    <Card className="p-6">
      <SectionHeader
        title="Impact Snapshot"
        description="A quick look at what your completed projects have contributed."
        action={
          <Link
            to="/need-owner/impact"
            className="inline-flex shrink-0 items-center gap-1 text-xs text-muted hover:text-ink"
          >
            View Impact <ArrowUpRight size={12} />
          </Link>
        }
      />
      <div className="mt-6 grid grid-cols-3 gap-3">
        {items.map((item) => {
          const Icon = icons[item.icon];
          return (
            <div
              key={item.id}
              className="flex flex-col items-center rounded-2xl border border-line px-2 py-4 text-center"
            >
              <Icon size={16} strokeWidth={1.5} className="text-brand-600" />
              <p className="mt-2 text-2xl font-semibold leading-none">{item.value}</p>
              <p className="mt-2 text-xs text-muted">{item.label}</p>
            </div>
          );
        })}
      </div>
    </Card>
  );
}
