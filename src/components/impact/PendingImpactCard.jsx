import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import Button from "@/components/common/Button";
import Card from "@/components/common/Card";

function Tile({ label, children }) {
  return (
    <div className="rounded-2xl bg-surface px-5 py-4">
      <dt className="text-xs font-medium uppercase tracking-wide text-muted">{label}</dt>
      <dd className="mt-2">{children}</dd>
    </div>
  );
}

export default function PendingImpactCard({ impact }) {
  return (
    <Card className="p-8">
      <div className="flex items-center gap-4">
        <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-brand-50">
          <span className="flex h-5 w-5 items-center justify-center rounded-full bg-brand text-xs font-bold leading-none text-white">
            !
          </span>
        </span>
        <div>
          <p className="text-xs font-medium uppercase tracking-wide text-brand-600">Impact pending</p>
          <h1 className="text-[22px] font-semibold leading-tight">{impact.title}</h1>
        </div>
      </div>

      <p className="mt-6 text-base leading-7 text-muted">
        This project has been completed. Impact data is still being compiled and will be available here once it has been
        recorded.
      </p>

      <dl className="mt-6 grid gap-3 sm:grid-cols-2">
        <Tile label="Project completed">
          <p className="text-base font-semibold">{impact.completedLabel}</p>
        </Tile>
        <Tile label="Category">
          <p className="text-base font-semibold">{impact.category}</p>
        </Tile>
        <Tile label="Deliverables">
          <p className="text-base font-semibold">{impact.deliverables}</p>
        </Tile>
        <Tile label="Tasks">
          <p className="text-base font-semibold">{impact.tasks}</p>
        </Tile>
      </dl>

      <div className="mt-4 rounded-2xl bg-surface px-5 py-5">
        <p className="text-xs font-medium uppercase tracking-wide text-muted">People reached</p>
        <p className="mt-2 text-lg italic text-muted">Not yet recorded</p>
        <p className="mt-2 text-sm text-muted/80">Impact metrics for this Project have not been recorded yet.</p>
      </div>

      <Button
        as={Link}
        to={`/need-owner/projects/${impact.projectId}`}
        variant="outline"
        size="lg"
        icon={ArrowRight}
        className="mt-6"
      >
        View Project
      </Button>
    </Card>
  );
}