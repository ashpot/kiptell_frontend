import { ChevronDown, Search } from "lucide-react";
import Card from "@/components/common/Card";
import Input from "@/components/forms/Input";

export function FilterSelect({ label, value, onChange, options }) {
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

/**
 * Search box + any number of dropdown filters.
 * selects: [{ label, value, onChange, options: [{ value, label }] }]
 */
export default function FilterBar({ query, onQueryChange, selects, placeholder = "Search" }) {
  return (
    <Card className="flex flex-wrap items-center gap-3 p-4">
      <div className="min-w-[240px] flex-1">
        <Input
          icon={Search}
          aria-label={placeholder}
          value={query}
          onChange={(e) => onQueryChange(e.target.value)}
          placeholder={placeholder}
          className="h-12 bg-surface/50"
        />
      </div>
      <span aria-hidden className="hidden h-8 w-px bg-line lg:block" />
      {selects.map((s) => (
        <FilterSelect key={s.label} {...s} />
      ))}
    </Card>
  );
}