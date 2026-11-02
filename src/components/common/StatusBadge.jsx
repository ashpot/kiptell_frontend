import { CircleAlert, CircleCheck, CircleX, Clock, Loader } from "lucide-react";
import Badge from "./Badge";

/** Maps a Need/Project status to its badge style. Extend as more statuses appear in designs. */
const STATUS_MAP = {
  approved: { tone: "success", icon: CircleCheck, label: "Approved" },
  under_review: { tone: "warning", icon: Loader, label: "Under Review" },
  changes_required: { tone: "danger", icon: CircleAlert, label: "Changes Required" },
  in_progress: { tone: "neutral", icon: Loader, label: "In Progress" },
  completed: { tone: "success", icon: CircleCheck, label: "Completed" },
  awaiting_confirmation: { tone: "warning", icon: Clock, label: "Awaiting Confirmation" },
  at_risk: { tone: "danger", icon: CircleAlert, label: "At Risk" },
  recorded: { tone: "success", icon: CircleCheck, label: "Recorded" },
  pending: { tone: "warning", icon: Loader, label: "Pending" },
  rejected: { tone: "danger", icon: CircleX, label: "Rejected" },
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