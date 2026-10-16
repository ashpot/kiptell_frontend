import Card from "@/components/common/Card";
import Button from "@/components/common/Button";
import SectionHeader from "@/components/common/SectionHeader";
import StatusBadge from "@/components/common/StatusBadge";
import ProgressBar from "@/components/common/ProgressBar";

function ProjectRow({ project }) {
  const { title, status, progress, provider, milestonesDone, milestonesTotal, next } = project;
  return (
    <article className="flex items-center gap-5 rounded-2xl border border-line bg-white p-5">
      <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-surface text-xs font-semibold">
        {progress}%
      </span>

      <div className="min-w-0 flex-1">
        <div className="flex flex-wrap items-center gap-2">
          <h3 className="font-medium">{title}</h3>
          <StatusBadge status={status} />
        </div>
        <p className="mt-2 text-sm text-muted">
          Provider: <span className="text-ink">{provider}</span> · Milestones:{" "}
          <span className="text-ink">
            {milestonesDone} of {milestonesTotal} completed
          </span>
        </p>
        <div className="mt-3">
          <ProgressBar value={progress} label={`${title} progress`} />
        </div>
        <p className="mt-3 text-sm text-muted">
          Next: <span className="text-ink">{next}</span>
        </p>
      </div>

      <Button variant="outline" size="sm" className="shrink-0 self-center">
        View Project
      </Button>
    </article>
  );
}

export default function ActiveProjects({ projects }) {
  return (
    <Card className="p-8">
      <SectionHeader
        title="Active Projects"
        description="Follow the progress of projects created from your approved needs."
      />
      <div className="mt-7 space-y-4">
        {projects.map((p) => (
          <ProjectRow key={p.id} project={p} />
        ))}
      </div>
    </Card>
  );
}
