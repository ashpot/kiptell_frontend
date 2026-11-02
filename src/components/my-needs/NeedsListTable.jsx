import { Link } from "react-router-dom";
import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";
import Button from "@/components/common/Button";
import Card from "@/components/common/Card";
import StatusBadge from "@/components/common/StatusBadge";
import { STATUS_META } from "@/data/needStatus";
import { cn } from "@/lib/cn";

const COLUMNS = ["Need", "Category", "Location", "Status", "Last updated", "Action"];

function NeedRow({ need }) {
  const action = STATUS_META[need.status].listAction(need);
  return (
    <tr className="border-b border-line last:border-b-0">
      <td className="px-6 py-5">
        <Link to={`/need-owner/needs/${need.id}`} className="font-medium hover:underline">
          {need.title}
        </Link>
        {need.listHint && (
          <p className="mt-1.5 flex items-center gap-2 text-sm text-danger">
            <span className="flex h-4 w-4 items-center justify-center rounded-full bg-danger text-[10px] font-bold leading-none text-white">
              !
            </span>
            {need.listHint}
          </p>
        )}
      </td>
      <td className="px-6 py-5 text-muted">{need.category}</td>
      <td className="px-6 py-5 text-muted">{need.location}</td>
      <td className="px-6 py-5">
        <StatusBadge status={need.status} />
      </td>
      <td className="px-6 py-5 text-muted">{need.updatedLabel}</td>
      <td className="px-6 py-5">
        <Button as={Link} to={action.to} size="sm" variant={action.variant} icon={ArrowUpRight} className="whitespace-nowrap">
          {action.label}
        </Button>
      </td>
    </tr>
  );
}

const pageBtn =
  "inline-flex h-9 min-w-9 items-center justify-center gap-1.5 rounded-xl border px-3 text-sm font-medium transition-colors";

function Pagination({ page, pageCount, onChange }) {
  if (pageCount <= 1) return null;
  return (
    <nav aria-label="Pagination" className="flex items-center gap-2">
      <button
        type="button"
        disabled={page === 1}
        onClick={() => onChange(page - 1)}
        className={cn(pageBtn, "border-line bg-white hover:bg-surface disabled:text-muted/60 disabled:hover:bg-white")}
      >
        <ArrowLeft size={14} /> Previous
      </button>
      {Array.from({ length: pageCount }, (_, i) => i + 1).map((n) => (
        <button
          key={n}
          type="button"
          onClick={() => onChange(n)}
          aria-current={n === page ? "page" : undefined}
          className={cn(pageBtn, n === page ? "border-ink bg-ink text-white" : "border-line bg-white hover:bg-surface")}
        >
          {n}
        </button>
      ))}
      <button
        type="button"
        disabled={page === pageCount}
        onClick={() => onChange(page + 1)}
        className={cn(pageBtn, "border-line bg-white hover:bg-surface disabled:text-muted/60 disabled:hover:bg-white")}
      >
        Next <ArrowRight size={14} />
      </button>
    </nav>
  );
}

export default function NeedsListTable({ rows, total, page, pageSize, onPageChange }) {
  const pageCount = Math.max(1, Math.ceil(total / pageSize));
  const start = total === 0 ? 0 : (page - 1) * pageSize + 1;
  const end = Math.min(page * pageSize, total);

  return (
    <Card className="overflow-hidden">
      <div className="px-8 pb-6 pt-7">
        <h2 className="text-lg font-semibold leading-tight">Your Needs</h2>
        <p className="mt-1 text-sm text-muted">Keep track of every need you've submitted and its current status.</p>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full min-w-[960px] text-left text-[15px]">
          <thead className="border-y border-line bg-surface">
            <tr>
              {COLUMNS.map((col) => (
                <th key={col} className="px-6 py-4 text-xs font-medium uppercase tracking-wide text-muted">
                  {col}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((need) => (
              <NeedRow key={need.id} need={need} />
            ))}
            {rows.length === 0 && (
              <tr>
                <td colSpan={COLUMNS.length} className="px-6 py-16 text-center text-sm text-muted">
                  No needs match your search or filters.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      <div className="flex flex-wrap items-center justify-between gap-3 border-t border-line px-8 py-5">
        <p className="text-sm text-muted">{total > 0 && `Showing ${start}–${end} of ${total} Needs`}</p>
        <Pagination page={page} pageCount={pageCount} onChange={onPageChange} />
      </div>
    </Card>
  );
}