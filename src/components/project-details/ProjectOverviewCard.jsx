import Card from "@/components/common/Card";

export default function ProjectOverviewCard({ project }) {
  const rows = [
    ["Sponsor / Organisation", project.sponsor],
    ["Provider", project.provider],
    ["Start date", project.startDate],
    ["Expected completion", project.expectedCompletion],
    ["Budget", project.budget],
  ];
  return (
    <Card className="p-6">
      <h2 className="text-[17px] font-semibold">Project Overview</h2>
      <dl className="mt-4">
        {rows.map(([label, value]) => (
          <div key={label} className="flex items-center justify-between gap-4 border-b border-line py-3.5 last:border-b-0 last:pb-0">
            <dt className="text-sm text-muted">{label}</dt>
            <dd className="text-right text-sm font-semibold">{value}</dd>
          </div>
        ))}
      </dl>
    </Card>
  );
}