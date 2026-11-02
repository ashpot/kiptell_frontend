import { Fragment } from "react";
import { Link } from "react-router-dom";
import Card from "@/components/common/Card";
import ItemStatusBadge from "./ItemStatusBadge";
import { cn } from "@/lib/cn";

const COLUMNS = ["Task", "Milestone", "Due", "Status"];

export default function TasksMilestonesCard({ projectId, groups }) {
  return (
    <Card className="p-6">
      <div className="flex flex-wrap items-center justify-between gap-2">
        <h2 className="text-[17px] font-semibold">Tasks &amp; Milestones</h2>
        <p className="text-xs text-muted">You are viewing this as an observer</p>
      </div>

      <div className="mt-5 overflow-x-auto">
        <table className="w-full min-w-[560px] text-left text-sm">
          <thead>
            <tr className="border-b border-line">
              {COLUMNS.map((c) => (
                <th key={c} className="pb-3 text-[11px] font-medium uppercase tracking-wide text-muted">
                  {c}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {groups.map((group) => (
              <Fragment key={group.title}>
                <tr>
                  <td colSpan={COLUMNS.length} className="pb-1 pt-5">
                    <div className="flex items-center gap-3">
                      <span className="text-[11px] font-medium uppercase tracking-wide text-muted">{group.title}</span>
                      <span aria-hidden className="h-px flex-1 bg-neutral-300" />
                    </div>
                  </td>
                </tr>
                {group.tasks.map((task) => {
                  const upcoming = task.status === "upcoming";
                  return (
                    <tr key={task.name} className="border-b border-line last:border-b-0">
                      <td className="py-3.5 pr-4">
                        <p className={cn("font-medium", upcoming && "text-muted")}>{task.name}</p>
                        {task.status === "awaiting_confirmation" && (
                          <Link
                            to={`/need-owner/projects/${projectId}/review`}
                            className="text-xs text-brand-600 hover:underline"
                          >
                            Tap to review
                          </Link>
                        )}
                      </td>
                      <td className="py-3.5 pr-4 text-muted">{group.title}</td>
                      <td className={cn("py-3.5 pr-4", upcoming ? "text-muted/50" : "text-muted")}>{task.due}</td>
                      <td className="py-3.5">
                        <ItemStatusBadge kind="task" status={task.status} />
                      </td>
                    </tr>
                  );
                })}
              </Fragment>
            ))}
          </tbody>
        </table>
      </div>
    </Card>
  );
}