import { ChevronDown, Search } from "lucide-react";
import Card from "@/components/common/Card";
import Input from "@/components/forms/Input";

function FilterSelect({ label, value, onChange, options }) {
  return (
    <div className="relative">
      <select
        aria-label={label}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="h-11 appearance-none rounded-xl border border-line bg-white pl-4 pr-10 text-sm text-ink focus:border-ink focus:outline-none"
      >
        {options.map((o) => (
          <option key={o.value} value={o.value}>
            {o.label}
          </option>
        ))}
      </select>
      <ChevronDown size={14} className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-muted" />
    </div>
  );
}

export const SORT_OPTIONS = [
  { value: "recent", label: "Recently updated" },
  { value: "oldest", label: "Oldest first" },
  { value: "title", label: "Title A–Z" },
];

export default function NeedsFilterBar({ filters, onChange, statusOptions, categoryOptions }) {
  return (
    <Card className="flex flex-wrap items-center gap-3 p-4">
      <div className="min-w-[240px] flex-1">
        <Input
          icon={Search}
          aria-label="Search needs"
          value={filters.query}
          onChange={(e) => onChange("query", e.target.value)}
          placeholder="Search"
          className="h-12 bg-surface/50"
        />
      </div>
      <span aria-hidden className="hidden h-8 w-px bg-line lg:block" />
      <FilterSelect
        label="Filter by status"
        value={filters.status}
        onChange={(v) => onChange("status", v)}
        options={[{ value: "", label: "All statuses" }, ...statusOptions]}
      />
      <FilterSelect
        label="Filter by category"
        value={filters.category}
        onChange={(v) => onChange("category", v)}
        options={[{ value: "", label: "All categories" }, ...categoryOptions.map((c) => ({ value: c, label: c }))]}
      />
      <FilterSelect label="Sort" value={filters.sort} onChange={(v) => onChange("sort", v)} options={SORT_OPTIONS} />
    </Card>
  );
}