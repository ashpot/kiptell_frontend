import { useMemo, useState } from "react";
import FilterBar from "@/components/common/FilterBar";
import { SORT_OPTIONS } from "@/components/my-needs/NeedsFilterBar";
import ProjectsListTable from "@/components/projects/ProjectsListTable";
import { projects } from "@/data/projects";
import { STATUS_FILTER_OPTIONS } from "@/data/projectStatus";

const needOptions = [
  { value: "", label: "All Needs" },
  ...[...new Map(projects.map((p) => [p.needId, p.needTitle]))].map(([value, label]) => ({ value, label })),
];

const isActive = (p) => p.status !== "completed";

export default function ProjectsPage() {
  const [filters, setFilters] = useState({ query: "", status: "", needId: "", sort: "recent" });
  const setFilter = (key) => (value) => setFilters((f) => ({ ...f, [key]: value }));

  const chips = [
    { label: "Active Projects", value: projects.filter(isActive).length },
    { label: "Awaiting Confirmation", value: projects.filter((p) => p.status === "awaiting_confirmation").length },
    { label: "At Risk", value: projects.filter((p) => p.status === "at_risk").length },
    { label: "Completed", value: projects.filter((p) => p.status === "completed").length },
  ];

  const rows = useMemo(() => {
    const q = filters.query.trim().toLowerCase();
    let list = projects.filter(
      (p) =>
        (!filters.status || p.status === filters.status) &&
        (!filters.needId || p.needId === filters.needId) &&
        (!q || [p.title, p.needTitle, p.provider, p.sponsor].some((v) => v.toLowerCase().includes(q)))
    );
    // Data arrives most-recently-updated first, as an API would return it
    if (filters.sort === "oldest") list = [...list].reverse();
    if (filters.sort === "title") list = [...list].sort((a, b) => a.title.localeCompare(b.title));
    return list;
  }, [filters]);

  return (
    <div className="mx-auto max-w-[1440px]">
      <h1 className="text-2xl font-semibold">Projects</h1>
      <p className="mt-1.5 text-muted">Follow the progress of projects created from your approved Needs.</p>

      <div className="mt-6 flex flex-wrap gap-3">
        {chips.map((c) => (
          <div key={c.label} className="flex items-center gap-3 rounded-2xl border border-line bg-white px-5 py-3">
            <span className="text-2xl font-semibold leading-none">{c.value}</span>
            <span className="text-sm text-muted">{c.label}</span>
          </div>
        ))}
      </div>

      <div className="mt-6 space-y-5">
        <FilterBar
          query={filters.query}
          onQueryChange={setFilter("query")}
          selects={[
            {
              label: "Filter by status",
              value: filters.status,
              onChange: setFilter("status"),
              options: [{ value: "", label: "All statuses" }, ...STATUS_FILTER_OPTIONS],
            },
            { label: "Filter by need", value: filters.needId, onChange: setFilter("needId"), options: needOptions },
            { label: "Sort", value: filters.sort, onChange: setFilter("sort"), options: SORT_OPTIONS },
          ]}
        />
        <ProjectsListTable rows={rows} all={projects} />
      </div>
    </div>
  );
}