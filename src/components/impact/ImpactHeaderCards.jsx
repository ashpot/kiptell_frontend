import { Link } from "react-router-dom";
import { Building2, CalendarDays, MapPin, Sparkles } from "lucide-react";
import Button from "@/components/common/Button";
import Card from "@/components/common/Card";
import StatusBadge from "@/components/common/StatusBadge";

export function ImpactHeader({ impact }) {
  return (
    <Card className="flex flex-wrap items-start justify-between gap-4 p-6">
      <div>
        <div className="flex flex-wrap items-center gap-3 text-sm text-muted">
          <StatusBadge status="recorded" />
          <span>Impact Report</span>
          <span>
            Need: <span className="font-semibold text-ink/80">{impact.needTitle}</span>
          </span>
        </div>
        <h1 className="mt-4 text-2xl font-semibold leading-tight">{impact.title}</h1>
        <p className="mt-3 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-muted">
          <span className="flex items-center gap-2">
            <CalendarDays size={14} /> Completed {impact.completedLabel}
          </span>
          <span className="flex items-center gap-2">
            <Building2 size={14} /> {impact.provider}
          </span>
          <span className="flex items-center gap-2">
            <MapPin size={14} /> {impact.location}
          </span>
        </p>
      </div>
      <div className="flex flex-wrap gap-3">
        <Button as={Link} to={`/need-owner/projects/${impact.projectId}`} variant="outline">
          View Project
        </Button>
        <Button as={Link} to={`/need-owner/needs/${impact.needId}`} variant="outline">
          View Need
        </Button>
      </div>
    </Card>
  );
}

export function ImpactAchievedCard({ impact }) {
  const stats = [
    { value: impact.peopleReached.toLocaleString("en-NG"), label: "People reached" },
    { value: impact.deliverables, label: "Deliverables completed" },
    { value: impact.tasks, label: "Tasks completed" },
    { value: impact.duration, label: "Project duration" },
  ];
  return (
    <Card className="p-6">
      <div className="flex gap-4">
        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-success-50 text-success">
          <Sparkles size={18} />
        </span>
        <div>
          <h2 className="text-sm font-semibold text-success">Impact achieved</h2>
          <p className="mt-0.5 text-sm text-muted">{impact.achieved}</p>
        </div>
      </div>
      <dl className="mt-5 grid grid-cols-2 gap-3 lg:grid-cols-4">
        {stats.map((s) => (
          <div key={s.label} className="rounded-xl bg-surface px-5 py-4">
            <dt className="sr-only">{s.label}</dt>
            <dd className="text-2xl font-semibold leading-none">{s.value}</dd>
            <p className="mt-2 text-xs text-muted">{s.label}</p>
          </div>
        ))}
      </dl>
    </Card>
  );
}