import { Link, useParams } from "react-router-dom";
import { ArrowLeft, ChevronRight } from "lucide-react";
import Button from "@/components/common/Button";
import RecentActivity from "@/components/dashboard/RecentActivity";
import ImpactSummaryCard from "@/components/need-details/ImpactSummaryCard";
import DeliverablesCard from "@/components/project-details/DeliverablesCard";
import PaymentStatusCard from "@/components/project-details/PaymentStatusCard";
import ProjectBanner from "@/components/project-details/ProjectBanner";
import ProjectHeader from "@/components/project-details/ProjectHeader";
import ProjectOverviewCard from "@/components/project-details/ProjectOverviewCard";
import ProjectProgressCard from "@/components/project-details/ProjectProgressCard";
import ProjectTimelineCard from "@/components/project-details/ProjectTimelineCard";
import TasksMilestonesCard from "@/components/project-details/TasksMilestonesCard";
import { getProjectById } from "@/data/projects";
import { PROJECT_STATUS_META } from "@/data/projectStatus";

export default function ProjectDetailsPage() {
  const { projectId } = useParams();
  const project = getProjectById(projectId);

  if (!project) {
    return (
      <div className="mx-auto max-w-md py-24 text-center">
        <h1 className="text-2xl font-semibold">Project not found</h1>
        <p className="mt-2 text-muted">We couldn't find a project with the ID {projectId}.</p>
        <Button as={Link} to="/need-owner/projects" size="lg" className="mt-6">
          Back to Projects
        </Button>
      </div>
    );
  }

  const meta = PROJECT_STATUS_META[project.status];

  return (
    <div className="mx-auto max-w-[1440px]">
      <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-sm">
        <Link to="/need-owner/projects" className="inline-flex items-center gap-2 text-muted hover:text-ink">
          <ArrowLeft size={16} /> Projects
        </Link>
        <ChevronRight size={14} className="text-muted" />
        <span className="font-medium">{project.title}</span>
      </nav>

      <div className="mt-6 space-y-4">
        <ProjectHeader project={project} meta={meta} />
        {meta.banner && <ProjectBanner project={project} banner={meta.banner} />}

        <div className="grid items-start gap-4 xl:grid-cols-[minmax(0,1fr)_330px]">
          <div className="space-y-4">
            <ProjectOverviewCard project={project} />
            <ProjectProgressCard project={project} barTone={meta.barTone} />
            <ProjectTimelineCard steps={project.timeline} />
            <TasksMilestonesCard projectId={project.id} groups={project.milestoneGroups} />
            <DeliverablesCard items={project.deliverables} />
            <PaymentStatusCard stages={project.payments} />
          </div>

          <aside className="space-y-4">
            {project.impactSnapshot && (
              <ImpactSummaryCard
                impact={project.impactSnapshot}
                keyOutcome={project.completion?.keyOutcome}
                variant="filled"
              />
            )}
            <div id="activity" className="scroll-mt-6">
              <RecentActivity title="Project Activity" items={project.activity} />
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}