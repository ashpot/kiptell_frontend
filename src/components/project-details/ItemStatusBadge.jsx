import Badge from "@/components/common/Badge";

/** Status pills used inside Project Details. Same status key can read differently per section. */
const MAPS = {
  task: {
    completed: { tone: "success", label: "Completed" },
    awaiting_confirmation: { tone: "warning", label: "Awaiting Confirmation" },
    upcoming: { tone: "outline", label: "Upcoming" },
  },
  deliverable: {
    verified: { tone: "success", label: "Verified" },
    awaiting_verification: { tone: "outline", label: "Awaiting Kiptell Verification" },
    awaiting_confirmation: { tone: "warning", label: "Awaiting Kiptell Confirmation" },
  },
  payment: {
    released: { tone: "success", label: "Released" },
    awaiting_verification: { tone: "outline", label: "Awaiting Verification" },
    awaiting_confirmation: { tone: "warning", label: "Awaiting Confirmation" },
    pending: { tone: "warning", label: "Pending" },
  },
};

export default function ItemStatusBadge({ kind, status }) {
  const config = MAPS[kind]?.[status];
  if (!config) return null;
  return (
    <Badge tone={config.tone} className="whitespace-nowrap">
      {config.label}
    </Badge>
  );
}