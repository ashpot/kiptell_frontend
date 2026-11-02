import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import Button from "@/components/common/Button";
import NotificationIcon from "./NotificationIcon";

export default function NotificationRow({ notification: n, onOpen }) {
  return (
    <li className="relative flex flex-wrap items-start justify-between gap-4 border-b border-line py-5 pl-14 pr-8 last:border-b-0 sm:flex-nowrap">
      {n.unread && (
        <span
          aria-label="Unread"
          className="absolute left-6 top-[44px] h-2.5 w-2.5 -translate-y-1/2 rounded-full bg-brand"
        />
      )}

      <div className="flex min-w-0 items-start gap-5">
        <NotificationIcon kind={n.icon} size="lg" />
        <div className="min-w-0">
          <h3 className="text-[15px] font-semibold leading-6">{n.title}</h3>
          <p className="mt-0.5 text-sm text-muted">{n.body}</p>
          <p className="mt-3 flex flex-wrap items-center gap-3 text-sm text-muted">
            <span className="rounded-full border border-line px-3 py-1 text-xs">{n.context}</span>
            {n.time}
          </p>
        </div>
      </div>

      <Button
        as={Link}
        to={n.action.to}
        onClick={() => onOpen(n.id)}
        size="sm"
        variant={n.action.variant}
        icon={ArrowUpRight}
        className="shrink-0 whitespace-nowrap"
      >
        {n.action.label}
      </Button>
    </li>
  );
}