import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import Button from "@/components/common/Button";
import Card from "@/components/common/Card";

export default function ConfirmationCard({ confirmation }) {
  return (
    <Card className="p-6">
      <h2 className="text-base font-semibold">Your Confirmation</h2>
      <p className="mt-1.5 text-[13px] leading-5 text-muted">
        Project progress submitted by the provider may require your confirmation.
      </p>

      <div className="mt-4 flex gap-3 rounded-2xl border border-danger-200 bg-danger-50 px-4 py-3.5">
        <span className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-danger text-[10px] font-bold leading-none text-white">
          !
        </span>
        <div>
          <p className="text-sm font-semibold leading-5">{confirmation.milestone}</p>
          <p className="text-[13px] text-danger">{confirmation.note}</p>
        </div>
      </div>

      <Button as={Link} to="/need-owner/projects" size="lg" icon={ArrowRight} className="mt-4 w-full">
        Review Progress
      </Button>
    </Card>
  );
}