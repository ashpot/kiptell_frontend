import StatCard from "@/components/dashboard/StatCard";
import NeedsAttentionCard from "@/components/organization/NeedsAttentionCard";
import RecentImpactCard from "@/components/organization/RecentImpactCard";
import RecentProjectsCard from "@/components/organization/RecentProjectsCard";
import { useAuth } from "@/context/AuthContext";
import { attention, recentImpact, recentProjects, stats } from "@/data/organizationOverview";
import { greeting } from "@/lib/greeting";

export default function DashboardPage() {
  const { user } = useAuth();

  return (
    <div className="mx-auto max-w-[1440px]">
      <h1 className="text-2xl font-semibold">
        {greeting()}, {user.name}
      </h1>
      <p className="mt-1.5 text-muted">
        Find opportunities to create meaningful impact and keep track of the work you're supporting.
      </p>

      <div className="mt-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {stats.map((s) => (
          <StatCard key={s.id} {...s} />
        ))}
      </div>

      <div className="mt-6 grid items-start gap-6 xl:grid-cols-[minmax(0,1fr)_360px]">
        <NeedsAttentionCard items={attention} />
        <aside className="space-y-6">
          <RecentProjectsCard projects={recentProjects} />
          <RecentImpactCard impact={recentImpact} />
        </aside>
      </div>
    </div>
  );
}