import { Link } from "react-router-dom";
import Button from "@/components/common/Button";
import Card from "@/components/common/Card";
import ProgressBar from "@/components/common/ProgressBar";
import StatusBadge from "@/components/common/StatusBadge";
import { cn } from "@/lib/cn";

const HINT_TONE = {
  warning: { dot: "bg-brand", text: "text-brand-600" },
  danger: { dot: "bg-danger", text: "text-danger" },
};

export default function ProjectHeader({ project, meta }) {
  const hint = meta.headerHint && HINT_TONE[meta.headerHint.tone];

  return (
    <Card className="flex flex-wrap items-start justify-between gap-4 p-6">
      <div className="min-w-0 flex-1">
        <div className="flex flex-wrap items-center gap-3">
          <StatusBadge status={project.status} />
          <span className="text-sm text-muted">
            Associated Need: <span className="font-semibold text-ink">{project.needTitle}</span>
            <span className="ml-3">{project.needId}</span>
          </span>
        </div>

        <h1 className="mt-4 text-2xl font-semibold leading-tight">{project.title}</h1>

        <p className="mt-3 flex flex-wrap items-center gap-2 text-sm text-muted">
          {project.progress}% complete
          {hint && (
            <>
              <span aria-hidden>·</span>
              <span className={cn("inline-flex items-center gap-1.5", hint.text)}>
                <span className={cn("h-2 w-2 rounded-full", hint.dot)} />
                {meta.headerHint.text}
              </span>
            </>
          )}
        </p>
        <div className="mt-2.5 max-w-[420px]">
          <ProgressBar value={project.progress} tone={meta.barTone} label="Overall project progress" />
        </div>
      </div>

      <div className="flex flex-wrap gap-3">
        {meta.headerActions(project).map((a) => (
          <Button key={a.label} as={Link} to={a.to} variant={a.variant}>
            {a.label}
          </Button>
        ))}
      </div>
    </Card>
  );
}