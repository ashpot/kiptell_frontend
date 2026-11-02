import { Link, useParams } from "react-router-dom";
import { ArrowLeft, ChevronRight } from "lucide-react";
import Button from "@/components/common/Button";
import RecentActivity from "@/components/dashboard/RecentActivity";
import NeedHeader from "@/components/need-details/NeedHeader";
import StatusBanner from "@/components/need-details/StatusBanner";
import { AboutCard, ProblemCard, SolutionCard } from "@/components/need-details/NeedInfoCards";
import EvidenceCard from "@/components/need-details/EvidenceCard";
import StatusTimeline from "@/components/need-details/StatusTimeline";
import AccountabilityCard from "@/components/need-details/AccountabilityCard";
import LinkedProjectCard from "@/components/need-details/LinkedProjectCard";
import ConfirmationCard from "@/components/need-details/ConfirmationCard";
import ImpactSummaryCard from "@/components/need-details/ImpactSummaryCard";
import { getNeedById } from "@/data/myNeeds";
import { STATUS_META } from "@/data/needStatus";
import { buildTimeline } from "@/lib/needTimeline";

export default function NeedDetailsPage() {
  const { needId } = useParams();
  const need = getNeedById(needId);

  if (!need) {
    return (
      <div className="mx-auto max-w-md py-24 text-center">
        <h1 className="text-2xl font-semibold">Need not found</h1>
        <p className="mt-2 text-muted">We couldn't find a Need with the ID {needId}.</p>
        <Button as={Link} to="/need-owner/needs" size="lg" className="mt-6">
          Back to My Needs
        </Button>
      </div>
    );
  }

  const meta = STATUS_META[need.status];

  return (
    <div className="mx-auto max-w-[1440px]">
      <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-sm">
        <Link to="/need-owner/needs" className="inline-flex items-center gap-2 text-muted hover:text-ink">
          <ArrowLeft size={16} /> My Needs
        </Link>
        <ChevronRight size={14} className="text-muted" />
        <span className="font-medium">{need.title}</span>
      </nav>

      <div className="mt-6 space-y-4">
        <NeedHeader need={need} action={meta.headerAction?.(need)} />
        <StatusBanner need={need} banner={meta.banner} />

        <div className="grid items-start gap-4 xl:grid-cols-[minmax(0,1fr)_330px]">
          <div className="space-y-4">
            <AboutCard need={need} />
            <ProblemCard need={need} />
            <SolutionCard need={need} />
            <EvidenceCard evidence={need.evidence} />
          </div>

          <aside className="space-y-4">
            <StatusTimeline steps={buildTimeline(need.status, need.dates)} />
            <AccountabilityCard need={need} verification={meta.verification} />
            {need.project && <LinkedProjectCard project={need.project} />}
            {need.confirmation && <ConfirmationCard confirmation={need.confirmation} />}
            {need.impactSnapshot && <ImpactSummaryCard impact={need.impactSnapshot} />}
            <div id="activity" className="scroll-mt-6">
              <RecentActivity items={need.activity} />
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}