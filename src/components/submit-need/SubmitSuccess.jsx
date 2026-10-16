import { Link } from "react-router-dom";
import { Check, Loader } from "lucide-react";
import Badge from "@/components/common/Badge";
import Button from "@/components/common/Button";
import Card from "@/components/common/Card";

export default function SubmitSuccess({ needId, need }) {
  return (
    <Card className="mx-auto mt-4 max-w-[590px] px-8 py-12 text-center sm:px-12">
      <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full border border-success/20 bg-success-50">
        <span className="flex h-7 w-7 items-center justify-center rounded-full bg-success text-white">
          <Check size={16} strokeWidth={3} />
        </span>
      </div>

      <h1 className="mt-8 text-2xl font-semibold">Your Need has been submitted</h1>
      <p className="mx-auto mt-3 max-w-md text-muted">
        Thanks for documenting this need. Kiptell will review the information and notify you when there's an update.
      </p>

      <div className="mt-6 flex items-center justify-center gap-4">
        <Badge tone="warning" icon={Loader} className="px-4 py-2 text-sm">
          Under Review
        </Badge>
        <span aria-hidden className="h-6 w-px bg-line" />
        <p className="text-sm text-muted">
          Need ID: <span className="font-semibold text-ink">{needId}</span>
        </p>
      </div>

      <div className="mt-6 rounded-2xl border border-line bg-surface p-5 text-left">
        <h2 className="font-semibold">{need.title}</h2>
        <p className="mt-2 flex items-center gap-2 text-sm text-muted">
          {need.category}
          <span aria-hidden className="h-1 w-1 rounded-full bg-muted/60" />
          {need.location}
        </p>
        <p className="mt-3 flex items-center gap-2 text-sm text-success">
          <Check size={14} /> Need submitted successfully · Submitted just now
        </p>
      </div>

      <Button as={Link} to="/need-owner/needs" size="lg" className="mt-6 w-full">
        View Need
      </Button>
      <Button as={Link} to="/need-owner/overview" variant="outline" size="lg" className="mt-3 w-full">
        Back to Dashboard
      </Button>
    </Card>
  );
}