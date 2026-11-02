import { Link } from "react-router-dom";
import { ArrowRight, Building2 } from "lucide-react";
import Button from "@/components/common/Button";
import Card from "@/components/common/Card";
import ProgressBar from "@/components/common/ProgressBar";
import StatusBadge from "@/components/common/StatusBadge";

const Party = ({ label, name }) => (
  <p className="mt-2 flex items-center gap-2 text-[13px] text-muted">
    <Building2 size={14} />
    {label}: <span className="font-semibold text-ink">{name}</span>
  </p>
);

export default function LinkedProjectCard({ project }) {
  const done = project.status === "completed";

  return (
    <Card className="p-6">
      <div className="flex items-center justify-between gap-3">
        <h2 className="text-base font-semibold">Linked Project</h2>
        <StatusBadge status={project.status} />
      </div>
      <p className="mt-4 text-sm font-semibold leading-5">{project.name}</p>
      <Party label="Provider" name={project.provider} />
      {project.sponsor && <Party label="Sponsor" name={project.sponsor} />}

      {!done && (
        <>
          <div className="mt-5 flex items-center justify-between text-[13px] text-muted">
            <span>Progress</span>
            <span className="font-semibold text-ink">{project.progress}%</span>
          </div>
          <div className="mt-2">
            <ProgressBar value={project.progress} label="Project progress" />
          </div>
          <p className="mt-3 text-[13px] text-muted">
            Next milestone: <span className="font-semibold text-ink">{project.nextMilestone}</span>
          </p>
          <p className="mt-4 text-[13px] leading-5 text-muted">
            This Need has progressed into a project. You can follow updates and confirm progress as work continues.
          </p>
        </>
      )}

      <div className="mt-5 space-y-3">
        {done ? (
          <>
            <Button as={Link} to="/need-owner/impact" size="lg" className="w-full">
              View Impact
            </Button>
            <Button as={Link} to="/need-owner/projects" variant="outline" size="lg" className="w-full">
              View Project
            </Button>
          </>
        ) : (
          <Button as={Link} to="/need-owner/projects" variant="dark" size="lg" icon={ArrowRight} className="w-full">
            View Project
          </Button>
        )}
      </div>
    </Card>
  );
}