import { Link } from "react-router-dom";
import { Plus } from "lucide-react";
import Button from "@/components/common/Button";
import StatCard from "@/components/dashboard/StatCard";
import MyNeedsTable from "@/components/dashboard/MyNeedsTable";
import ActiveProjects from "@/components/dashboard/ActiveProjects";
import AttentionPanel from "@/components/dashboard/AttentionPanel";
import ImpactSnapshot from "@/components/dashboard/ImpactSnapshot";
import RecentActivity from "@/components/dashboard/RecentActivity";
import {
  stats,
  needs,
  projects,
  attentionItems,
  impact,
  activity,
} from "@/data/needOwnerDashboard";

export default function DashboardPage() {
  return (
    <div className="mx-auto max-w-[1440px]">
      {/* Page header */}
      <div className="flex flex-wrap items-start justify-between gap-4">
        <div>
          <h1 className="text-2xl font-semibold">Dashboard Overview</h1>
          <p className="mt-1.5 text-muted">
            Keep track of your needs, projects, and the progress being made.
          </p>
        </div>
        <Button as={Link} to="/need-owner/submit-need" variant="primary" size="lg" icon={Plus} iconPosition="left">
          Submit a Need
        </Button>
      </div>

      {/* Stats */}
      <div className="mt-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {stats.map((s) => (
          <StatCard key={s.id} {...s} />
        ))}
      </div>

      {/* Main content */}
      <div className="mt-6 grid items-start gap-6 xl:grid-cols-[minmax(0,1fr)_360px]">
        <div className="space-y-6">
          <MyNeedsTable needs={needs} />
          <ActiveProjects projects={projects} />
        </div>
        <aside className="space-y-6">
          <AttentionPanel items={attentionItems} />
          <ImpactSnapshot items={impact} />
          <RecentActivity items={activity} />
        </aside>
      </div>
    </div>
  );
}
