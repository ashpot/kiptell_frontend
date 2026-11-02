import { Link } from "react-router-dom";
import { CalendarDays, MapPin } from "lucide-react";
import Button from "@/components/common/Button";
import Card from "@/components/common/Card";
import StatusBadge from "@/components/common/StatusBadge";

export default function NeedHeader({ need, action }) {
  return (
    <Card className="flex flex-wrap items-start justify-between gap-4 p-6">
      <div>
        <div className="flex flex-wrap items-center gap-3">
          <StatusBadge status={need.status} />
          <span className="text-sm text-muted">
            Need ID: <span className="font-semibold text-ink">{need.id}</span>
          </span>
        </div>
        <h1 className="mt-4 text-2xl font-semibold leading-tight">{need.title}</h1>
        <p className="mt-3 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-muted">
          <span className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-neutral-400" />
            {need.category}
          </span>
          <span className="flex items-center gap-2">
            <MapPin size={14} />
            {need.location}
          </span>
          <span className="flex items-center gap-2">
            <CalendarDays size={14} />
            Submitted {need.submittedLabel}
          </span>
        </p>
      </div>

      {action &&
        (action.href ? (
          <Button as="a" href={action.href} variant={action.variant}>
            {action.label}
          </Button>
        ) : (
          <Button as={Link} to={action.to} variant={action.variant}>
            {action.label}
          </Button>
        ))}
    </Card>
  );
}