import { Globe, MapPin, Users } from "lucide-react";
import Card from "@/components/common/Card";

export function WhoBenefitedCard({ impact }) {
  return (
    <Card className="p-6">
      <h2 className="flex items-center gap-2.5 text-base font-semibold">
        <Users size={15} className="text-muted" /> Who Benefited
      </h2>
      <div className="mt-5 flex items-center gap-3.5 rounded-2xl bg-surface px-4 py-3.5">
        <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-success-50 text-success">
          <Globe size={16} strokeWidth={1.5} />
        </span>
        <div>
          <p className="text-lg font-semibold leading-tight">{impact.beneficiaries.headline}</p>
          <p className="text-[13px] text-muted">{impact.beneficiaries.description}</p>
        </div>
      </div>
      <p className="mt-4 flex items-center gap-2 text-[13px] text-muted">
        <MapPin size={14} /> {impact.location}
      </p>
    </Card>
  );
}

export function ImpactStoryCard({ story }) {
  const sections = [
    ["The challenge", story.challenge],
    ["What was done", story.done],
    ["The outcome", story.outcome],
  ];
  return (
    <Card className="p-6">
      <h2 className="text-base font-semibold">The Impact Story</h2>
      <div className="mt-5">
        {sections.map(([label, text]) => (
          <section key={label} className="border-b border-line py-5 first:pt-0 last:border-b-0 last:pb-0">
            <h3 className="text-[11px] font-medium uppercase tracking-wide text-muted">{label}</h3>
            <p className="mt-2 text-sm leading-6">{text}</p>
          </section>
        ))}
      </div>
    </Card>
  );
}