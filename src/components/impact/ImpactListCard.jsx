import { Link } from "react-router-dom";
import { ArrowUpRight, Users } from "lucide-react";
import Button from "@/components/common/Button";
import Card from "@/components/common/Card";
import StatusBadge from "@/components/common/StatusBadge";

function ImpactRow({ record }) {
  const recorded = record.status === "recorded";

  return (
    <li className="flex flex-wrap items-start justify-between gap-4 border-b border-line px-8 py-7 last:border-b-0">
      <div className="min-w-0">
        <div className="flex flex-wrap items-center gap-x-3 gap-y-2 text-sm text-muted">
          <StatusBadge status={record.status} />
          <span>{record.category}</span>
          <span aria-hidden className="h-1 w-1 rounded-full bg-muted/50" />
          <span>Completed {record.completedLabel}</span>
        </div>

        <h3 className="mt-3.5 text-[17px] font-semibold leading-tight">{record.title}</h3>
        <p className="mt-1.5 text-sm text-muted">
          Need: <span className="text-ink/70">{record.needTitle}</span>
        </p>

        {recorded ? (
          <p className="mt-4 flex flex-wrap items-center gap-x-3 gap-y-1 text-sm">
            <span className="flex items-center gap-2 text-muted">
              <Users size={14} />
              <span className="font-semibold text-ink">{record.peopleReached.toLocaleString("en-NG")}</span> people
              reached
            </span>
            <span aria-hidden className="h-1 w-1 rounded-full bg-muted/50" />
            <span className="italic text-muted">{record.summary}</span>
          </p>
        ) : (
          <p className="mt-4 flex max-w-xl items-center gap-3 rounded-xl border border-brand-200 bg-brand-50 px-4 py-3 text-sm">
            <span className="flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-brand text-[10px] font-bold leading-none text-white">
              !
            </span>
            Impact data is still being compiled.
          </p>
        )}
      </div>

      {recorded ? (
        <Button as={Link} to={`/need-owner/impact/${record.id}`} icon={ArrowUpRight}>
          View Impact
        </Button>
      ) : (
        <Button as={Link} to={`/need-owner/projects/${record.projectId}`} variant="outline" icon={ArrowUpRight}>
          View Project
        </Button>
      )}
    </li>
  );
}

export default function ImpactListCard({ rows }) {
  const recorded = rows.filter((r) => r.status === "recorded").length;

  return (
    <Card className="overflow-hidden">
      <div className="border-b border-line px-8 pb-5 pt-7">
        <h2 className="text-lg font-semibold leading-tight">Your Impact</h2>
        <p className="mt-1 text-sm text-muted">
          {rows.length} impact {rows.length === 1 ? "record" : "records"} · {recorded} fully recorded
        </p>
      </div>

      {rows.length > 0 ? (
        <ul>
          {rows.map((r) => (
            <ImpactRow key={r.id} record={r} />
          ))}
        </ul>
      ) : (
        <p className="px-8 py-16 text-center text-sm text-muted">No impact records match your search or filters.</p>
      )}
    </Card>
  );
}