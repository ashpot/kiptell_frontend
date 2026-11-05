import { Link } from "react-router-dom";
import { ArrowRight, Sparkles } from "lucide-react";
import Card from "@/components/common/Card";

export default function RecentImpactCard({ impact }) {
  return (
    <Card className="p-6">
      <h2 className="flex items-center gap-3 text-lg font-semibold leading-tight">
        <Sparkles size={18} className="text-success" fill="currentColor" strokeWidth={1.5} />
        Recent Impact
      </h2>

      <div className="mt-6 rounded-2xl border border-success/30 bg-success-50 p-5">
        <h3 className="text-[15px] font-semibold leading-tight">{impact.title}</h3>
        <p className="mt-1.5 text-sm font-medium text-success">
          {impact.people.toLocaleString("en-NG")} people reached
        </p>
        <p className="mt-2 text-sm text-ink/70">Completed {impact.completed}</p>
        <Link
          to={`/organization/impact/${impact.id}`}
          className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium hover:underline"
        >
          View Impact <ArrowRight size={13} />
        </Link>
      </div>
    </Card>
  );
}