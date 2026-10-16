import { CircleCheck, CircleAlert, Loader } from "lucide-react";
import Badge from "./Badge";

/** Maps a Need status to its badge style. Extend as more statuses appear in designs. */
const STATUS_MAP = {
  approved: { tone: "success", icon: CircleCheck, label: "Approved" },
  under_review: { tone: "warning", icon: Loader, label: "Under Review" },
  changes_required: { tone: "danger", icon: CircleAlert, label: "Changes Required" },
  on_track: { tone: "success", label: "On Track" },
  needs_attention: { tone: "danger", label: "Needs Attention" },
};

export default function StatusBadge({ status }) {
  const config = STATUS_MAP[status];
  if (!config) return null;
  return (
    <Badge tone={config.tone} icon={config.icon}>
      {config.label}
    </Badge>
  );
}
