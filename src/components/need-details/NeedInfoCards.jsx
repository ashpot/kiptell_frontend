import Card from "@/components/common/Card";

function Label({ children }) {
  return <dt className="text-xs font-medium uppercase tracking-wide text-muted">{children}</dt>;
}

function Field({ label, children }) {
  return (
    <div>
      <Label>{label}</Label>
      <dd className="mt-1.5 text-[15px] leading-6">{children}</dd>
    </div>
  );
}

export function AboutCard({ need }) {
  const rows = [
    ["Category", need.category],
    ["Location", need.location],
    ["Who is affected", need.affected],
    ["Severity", need.severity],
    ["Estimated impact", need.impact],
  ];
  return (
    <Card className="p-6">
      <h2 className="text-[17px] font-semibold">About this Need</h2>
      <p className="mt-1 text-sm text-muted">The core information submitted by the Need Owner.</p>
      <dl className="mt-6">
        {rows.map(([label, value]) => (
          <div key={label} className="border-b border-line py-4 first:pt-2 last:border-b-0">
            <Label>{label}</Label>
            <dd className="mt-1.5 text-[15px]">{value}</dd>
          </div>
        ))}
      </dl>
    </Card>
  );
}

export function ProblemCard({ need }) {
  return (
    <Card className="p-6">
      <h2 className="text-[17px] font-semibold">The Problem</h2>
      <dl className="mt-5 space-y-5">
        <Field label="What is happening">{need.whatIsHappening}</Field>
        <Field label="Why this matters">{need.whyMatters}</Field>
        <Field label="What happens if nothing is done">{need.ifNothingDone}</Field>
      </dl>
    </Card>
  );
}

export function SolutionCard({ need }) {
  return (
    <Card className="p-6">
      <h2 className="text-[17px] font-semibold">What Is Needed</h2>
      <dl className="mt-5 space-y-5">
        <Field label="Solution">{need.solution}</Field>
        <Field label="Expected outcome">{need.expectedOutcome}</Field>
        <div>
          <Label>Requirements</Label>
          <dd>
            <ul className="mt-2 space-y-2">
              {need.requirements.map((r) => (
                <li key={r} className="flex items-center gap-3 text-[15px]">
                  <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-neutral-400" />
                  {r}
                </li>
              ))}
            </ul>
          </dd>
        </div>
        <div className="grid gap-5 sm:grid-cols-2">
          <Field label="Estimated budget">{need.budget}</Field>
          <Field label="Desired timeline">{need.timeline}</Field>
        </div>
      </dl>
    </Card>
  );
}