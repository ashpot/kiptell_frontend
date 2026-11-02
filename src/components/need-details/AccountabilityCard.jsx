import { CircleUser } from "lucide-react";
import Badge from "@/components/common/Badge";
import Card from "@/components/common/Card";
import { SUBMITTER_LABELS } from "@/data/needStatus";

const Label = ({ children }) => (
  <p className="text-[11px] font-medium uppercase tracking-wide text-muted">{children}</p>
);

export default function AccountabilityCard({ need, verification }) {
  const owner = need.owner.sameAsSubmitter ? { name: need.submittedBy, role: "Same as submitter" } : need.owner;

  return (
    <Card className="p-6">
      <h2 className="text-base font-semibold">Need Accountability</h2>

      <div className="mt-4 divide-y divide-line">
        <section className="pb-4">
          <Label>Need owner</Label>
          <div className="mt-3 flex gap-3">
            <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-neutral-100 text-muted">
              <CircleUser size={16} strokeWidth={1.5} />
            </span>
            <div className="min-w-0">
              <p className="text-sm font-semibold leading-5">{owner.name}</p>
              <p className="text-[13px] text-muted">{owner.role}</p>
              {owner.organization && <p className="text-xs text-muted/80">{owner.organization}</p>}
            </div>
          </div>
        </section>

        <section className="py-4">
          <Label>Submitted by</Label>
          <p className="mt-2.5 flex flex-wrap items-center gap-2 text-sm">
            {need.submittedBy}
            <span className="rounded-full border border-line px-2.5 py-0.5 text-xs text-muted">
              {SUBMITTER_LABELS[need.submitterType]}
            </span>
          </p>
        </section>

        <section className="pt-4">
          <Label>Verification</Label>
          <div className="mt-2.5">
            <Badge tone={verification.tone}>{verification.label}</Badge>
          </div>
        </section>
      </div>
    </Card>
  );
}