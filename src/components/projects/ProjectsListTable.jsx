import { Link } from "react-router-dom";
import { ArrowUpRight, Check } from "lucide-react";
import Button from "@/components/common/Button";
import Card from "@/components/common/Card";
import ProgressBar from "@/components/common/ProgressBar";
import StatusBadge from "@/components/common/StatusBadge";
import { PROJECT_STATUS_META } from "@/data/projectStatus";

const COLUMNS = ["Project", "Provider", "Status", "Progress", "Next milestone", "Last updated", "Action"];

function ProjectRow({ project }) {
  const meta = PROJECT_STATUS_META[project.status];
  const action = meta.listAction(project);

  return (
    <tr className="border-b border-line last:border-b-0">
      <td className="px-6 py-5">
        <Link to={`/need-owner/projects/${project.id}`} className="font-medium hover:underline">
          {project.title}
        </Link>
        <p className="mt-1 text-sm text-muted">Need: {project.needTitle}</p>
        {meta.listHint && (
          <p className="mt-1.5 flex items-center gap-2 text-sm text-brand-600">
            <span className="flex h-4 w-4 items-center justify-center rounded-full bg-brand text-[10px] font-bold leading-none text-white">
              !
            </span>
            {meta.listHint}
          </p>
        )}
      </td>
      <td className="px-6 py-5">
        <p className="text-sm font-medium">{project.provider}</p>
        <p className="mt-0.5 text-[13px] text-muted">{project.sponsor}</p>
      </td>
      <td className="px-6 py-5">
        <StatusBadge status={project.status} />
      </td>
      <td className="px-6 py-5">
        <div className="flex items-center gap-3">
          <div className="w-24">
            <ProgressBar value={project.progress} tone={meta.barTone} label={`${project.title} progress`} />
          </div>
          <span className="text-sm font-semibold">{project.progress}%</span>
        </div>
      </td>
      <td className="px-6 py-5">{project.nextMilestone}</td>
      <td className="px-6 py-5 text-muted">{project.updatedLabel}</td>
      <td className="px-6 py-5">
        <Button as={Link} to={action.to} size="sm" variant={action.variant} icon={ArrowUpRight} className="whitespace-nowrap">
          {action.label}
        </Button>
      </td>
    </tr>
  );
}

export default function ProjectsListTable({ rows, all }) {
  const completed = all.filter((p) => p.status === "completed").length;
  const awaiting = all.filter((p) => p.status === "awaiting_confirmation").length;

  return (
    <Card className="overflow-hidden">
      <div className="flex items-start justify-between gap-4 px-8 pb-6 pt-7">
        <div>
          <h2 className="text-lg font-semibold leading-tight">Your Projects</h2>
          <p className="mt-1 text-sm text-muted">Track progress and confirm milestones for each active project.</p>
        </div>
        <p className="shrink-0 text-sm text-muted">
          {rows.length} {rows.length === 1 ? "Project" : "Projects"}
        </p>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full min-w-[1080px] text-left text-[15px]">
          <thead className="border-y border-line bg-surface">
            <tr>
              {COLUMNS.map((col) => (
                <th key={col} className="px-6 py-4 text-xs font-medium uppercase tracking-wide text-muted">
                  {col}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((p) => (
              <ProjectRow key={p.id} project={p} />
            ))}
            {rows.length === 0 && (
              <tr>
                <td colSpan={COLUMNS.length} className="px-6 py-16 text-center text-sm text-muted">
                  No projects match your search or filters.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {(completed > 0 || awaiting > 0) && (
        <div className="flex flex-wrap gap-3 border-t border-line px-8 py-5">
          {completed > 0 && (
            <span className="inline-flex items-center gap-2 rounded-full border border-success/40 px-4 py-1.5 text-[13px] text-success">
              <Check size={14} /> {completed} Completed
            </span>
          )}
          {awaiting > 0 && (
            <span className="inline-flex items-center gap-2 rounded-full border border-brand-200 px-4 py-1.5 text-[13px] text-brand-600">
              <span className="h-2 w-2 rounded-full bg-brand" /> {awaiting} Awaiting your confirmation
            </span>
          )}
        </div>
      )}
    </Card>
  );
}