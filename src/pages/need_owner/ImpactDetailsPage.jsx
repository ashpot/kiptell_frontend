import { Link, useParams } from "react-router-dom";
import { ArrowLeft, ChevronRight } from "lucide-react";
import Button from "@/components/common/Button";
import EvidenceCard from "@/components/need-details/EvidenceCard";
import { ImpactAchievedCard, ImpactHeader } from "@/components/impact/ImpactHeaderCards";
import { ImpactStoryCard, WhoBenefitedCard } from "@/components/impact/ImpactStoryCards";
import { BeforeAfterCard, ProjectStoryCard } from "@/components/impact/ImpactMediaCards";
import { OutcomesCard, TheNeedCard, WhatWasDoneCard } from "@/components/impact/ImpactOverviewCards";
import { ImpactTimelineCard, VerificationCard } from "@/components/impact/ImpactSidebarCards";
import PendingImpactCard from "@/components/impact/PendingImpactCard";
import { getImpactById } from "@/data/impact";

export default function ImpactDetailsPage() {
  const { impactId } = useParams();
  const impact = getImpactById(impactId);

  if (!impact) {
    return (
      <div className="mx-auto max-w-md py-24 text-center">
        <h1 className="text-2xl font-semibold">Impact record not found</h1>
        <p className="mt-2 text-muted">We couldn't find an impact record with the ID {impactId}.</p>
        <Button as={Link} to="/need-owner/impact" size="lg" className="mt-6">
          Back to Impact
        </Button>
      </div>
    );
  }

  const pending = impact.status === "pending";

  return (
    <div className="mx-auto max-w-[1440px]">
      <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-sm">
        <Link to="/need-owner/impact" className="inline-flex items-center gap-2 text-muted hover:text-ink">
          <ArrowLeft size={16} /> Impact
        </Link>
        <ChevronRight size={14} className="text-muted" />
        <span className="font-medium">{impact.title}</span>
      </nav>

      {pending ? (
        <div className="mx-auto mt-8 grid max-w-[1290px] items-start gap-6 lg:grid-cols-2">
          <PendingImpactCard impact={impact} />
          <ImpactTimelineCard steps={impact.timeline} />
        </div>
      ) : (
        <div className="mt-6 space-y-4">
          <ImpactHeader impact={impact} />
          <ImpactAchievedCard impact={impact} />

          <div className="grid items-start gap-4 xl:grid-cols-[minmax(0,1fr)_330px]">
            <div className="space-y-4">
              <TheNeedCard impact={impact} />
              <WhatWasDoneCard impact={impact} />
              <OutcomesCard impact={impact} />
              <BeforeAfterCard beforeAfter={impact.beforeAfter} />
              <EvidenceCard title="Evidence of Impact" evidence={impact.evidence} />
              <WhoBenefitedCard impact={impact} />
              <ImpactStoryCard story={impact.story} />
              <ProjectStoryCard story={impact.projectStory} />
            </div>
            <aside className="space-y-4">
              <VerificationCard />
              <ImpactTimelineCard steps={impact.timeline} />
            </aside>
          </div>
        </div>
      )}
    </div>
  );
}