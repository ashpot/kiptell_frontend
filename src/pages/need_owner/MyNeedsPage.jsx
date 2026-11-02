import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { Plus } from "lucide-react";
import Button from "@/components/common/Button";
import NeedsFilterBar from "@/components/my-needs/NeedsFilterBar";
import NeedsListTable from "@/components/my-needs/NeedsListTable";
import { needs, needsSummary } from "@/data/myNeeds";
import { STATUS_FILTER_OPTIONS } from "@/data/needStatus";

const PAGE_SIZE = 6;

const chips = [
  { label: "Total Needs", value: needsSummary.total },
  { label: "Under Review", value: needsSummary.underReview },
  { label: "Approved", value: needsSummary.approved },
  { label: "Completed", value: needsSummary.completed },
];

const categoryOptions = [...new Set(needs.map((n) => n.category))].sort();

export default function MyNeedsPage() {
  const [filters, setFilters] = useState({ query: "", status: "", category: "", sort: "recent" });
  const [page, setPage] = useState(1);

  const setFilter = (key, value) => {
    setFilters((f) => ({ ...f, [key]: value }));
    setPage(1);
  };

  const filtered = useMemo(() => {
    const q = filters.query.trim().toLowerCase();
    let list = needs.filter(
      (n) =>
        (!filters.status || n.status === filters.status) &&
        (!filters.category || n.category === filters.category) &&
        (!q || [n.title, n.category, n.location].some((v) => v.toLowerCase().includes(q)))
    );
    // The list arrives most-recently-updated first, as an API would return it
    if (filters.sort === "oldest") list = [...list].reverse();
    if (filters.sort === "title") list = [...list].sort((a, b) => a.title.localeCompare(b.title));
    return list;
  }, [filters]);

  const rows = filtered.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);

  return (
    <div className="mx-auto max-w-[1440px]">
      <div className="flex flex-wrap items-start justify-between gap-4">
        <div>
          <h1 className="text-2xl font-semibold">My Needs</h1>
          <p className="mt-1.5 text-muted">View and manage the needs you've submitted to Kiptell.</p>
        </div>
        <Button as={Link} to="/need-owner/submit-need" size="lg" icon={Plus} iconPosition="left">
          Submit a Need
        </Button>
      </div>

      <div className="mt-6 flex flex-wrap gap-3">
        {chips.map((c) => (
          <div key={c.label} className="flex items-center gap-3 rounded-2xl border border-line bg-white px-5 py-3">
            <span className="text-2xl font-semibold leading-none">{c.value}</span>
            <span className="text-sm text-muted">{c.label}</span>
          </div>
        ))}
      </div>

      <div className="mt-6 space-y-5">
        <NeedsFilterBar
          filters={filters}
          onChange={setFilter}
          statusOptions={STATUS_FILTER_OPTIONS}
          categoryOptions={categoryOptions}
        />
        <NeedsListTable rows={rows} total={filtered.length} page={page} pageSize={PAGE_SIZE} onPageChange={setPage} />
      </div>
    </div>
  );
}