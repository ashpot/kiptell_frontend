import { Link } from "react-router-dom";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import Card from "@/components/common/Card";
import Button from "@/components/common/Button";
import SectionHeader from "@/components/common/SectionHeader";
import StatusBadge from "@/components/common/StatusBadge";

const COLUMNS = ["Need", "Category", "Status", "Submitted", "Action"];

export default function MyNeedsTable({ needs }) {
  return (
    <Card className="p-8">
      <SectionHeader
        title="My Needs"
        description="Track the needs you've submitted and see where they are in the Kiptell process."
        action={
          <Link
            to="/need-owner/needs"
            className="inline-flex items-center gap-1.5 text-sm text-muted hover:text-ink"
          >
            View all <ArrowRight size={14} />
          </Link>
        }
      />

      <div className="mt-8 overflow-x-auto">
        <table className="w-full min-w-[640px] text-left text-sm">
          <thead>
            <tr className="border-b border-line">
              {COLUMNS.map((col) => (
                <th key={col} className="pb-4 pr-4 text-xs font-medium uppercase tracking-wide text-muted">
                  {col}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {needs.map((need) => (
              <tr key={need.id} className="border-b border-line last:border-b-0">
                <td className="py-4 pr-4 font-medium">{need.title}</td>
                <td className="py-4 pr-4 text-muted">{need.category}</td>
                <td className="py-4 pr-4">
                  <StatusBadge status={need.status} />
                </td>
                <td className="py-4 pr-4 text-muted">{need.submitted}</td>
                <td className="py-4">
                  <Button
                    size="sm"
                    variant={need.action === "Update" ? "outline-danger" : "outline"}
                    icon={ArrowUpRight}
                  >
                    {need.action}
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Card>
  );
}
