import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import Badge from "@/components/common/Badge";
import Card from "@/components/common/Card";
import ProgressRing from "@/components/common/ProgressRing";
import SectionHeader from "@/components/common/SectionHeader";

const STATUS = {
  in_progress: { tone: "outline", label: "In Progress" },
  needs_attention: { tone: "warning", label: "Needs Attention" },
};

export default function RecentProjectsCard({ projects }) {
  return (
    <Card className="p-6">
      <SectionHeader
        title="Recent Projects"
        action={
          <Link
            to="/organization/projects"
            className="inline-flex shrink-0 items-center gap-1 text-sm text-muted hover:text-ink"
          >
            View all <ArrowUpRight size={13} />
          </Link>
        }
      />
      <ul className="mt-5 space-y-4">
        {projects.map((p) => {
          const status = STATUS[p.status];
          return (
            <li key={p.id}>
              <Link
                to={`/organization/projects/${p.id}`}
                className="flex items-center gap-4 rounded-2xl border border-line bg-surface p-4 transition-colors hover:border-ink/20"
              >
                <ProgressRing value={p.progress} label={`${p.title} progress`} />
                <div className="min-w-0">
                  <h3 className="text-[15px] font-semibold leading-tight">{p.title}</h3>
                  <p className="mt-0.5 text-sm text-muted">{p.provider}</p>
                  {status && (
                    <Badge tone={status.tone} className="mt-2 px-3 py-1 text-[13px]">
                      {status.label}
                    </Badge>
                  )}
                </div>
              </Link>
            </li>
          );
        })}
      </ul>
    </Card>
  );
}