import { useMemo, useState } from "react";
import FilterBar from "@/components/common/FilterBar";
import StatCard from "@/components/dashboard/StatCard";
import ImpactListCard from "@/components/impact/ImpactListCard";
import { impactRecords, impactSummary } from "@/data/impact";

const toOptions = (values, allLabel) => [
  { value: "", label: allLabel },
  ...values.map((v) => ({ value: String(v), label: String(v) })),
];

const yearOptions = toOptions([...new Set(impactRecords.map((r) => r.year))].sort((a, b) => b - a), "All years");
const categoryOptions = toOptions([...new Set(impactRecords.map((r) => r.category))].sort(), "All categories");
const statusOptions = [
  { value: "", label: "All statuses" },
  { value: "recorded", label: "Recorded" },
  { value: "pending", label: "Pending" },
];

export default function ImpactPage() {
  const [filters, setFilters] = useState({ query: "", year: "", category: "", status: "" });
  const setFilter = (key) => (value) => setFilters((f) => ({ ...f, [key]: value }));

  const rows = useMemo(() => {
    const q = filters.query.trim().toLowerCase();
    return impactRecords.filter(
      (r) =>
        (!filters.year || String(r.year) === filters.year) &&
        (!filters.category || r.category === filters.category) &&
        (!filters.status || r.status === filters.status) &&
        (!q || [r.title, r.needTitle, r.category].some((v) => v.toLowerCase().includes(q)))
    );
  }, [filters]);

  return (
    <div className="mx-auto max-w-[1440px]">
      <h1 className="text-2xl font-semibold">Impact</h1>
      <p className="mt-1.5 text-muted">See the outcomes created through the Needs you've raised.</p>

      <div className="mt-6 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {impactSummary.map((s) => (
          <StatCard key={s.title} {...s} />
        ))}
      </div>

      <p className="mt-5 px-1 text-[13px] text-muted/80">
        Your completed Projects contribute to the impact recorded on Kiptell.
      </p>

      <div className="mt-5 space-y-5">
        <FilterBar
          query={filters.query}
          onQueryChange={setFilter("query")}
          selects={[
            { label: "Filter by year", value: filters.year, onChange: setFilter("year"), options: yearOptions },
            { label: "Filter by category", value: filters.category, onChange: setFilter("category"), options: categoryOptions },
            { label: "Filter by status", value: filters.status, onChange: setFilter("status"), options: statusOptions },
          ]}
        />
        <ImpactListCard rows={rows} />
      </div>
    </div>
  );
}