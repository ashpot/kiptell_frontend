import { Mail, Pencil, Phone } from "lucide-react";
import Avatar from "@/components/common/Avatar";
import Button from "@/components/common/Button";
import Card from "@/components/common/Card";

/** Avatar, name, role and contact line. Pass onEdit to show the Edit Profile button. */
export default function ProfileSummaryCard({ user, onEdit }) {
  return (
    <Card className="flex flex-wrap items-center justify-between gap-4 p-7">
      <div className="flex items-center gap-6">
        <Avatar src={user.avatar} name={user.name} size={84} className="text-2xl" />
        <div className="min-w-0">
          <h2 className="text-[22px] font-semibold leading-tight">{user.name}</h2>
          <p className="mt-1 text-muted">{user.roleLabel}</p>
          <p className="mt-3 flex flex-wrap items-center gap-x-6 gap-y-1 text-sm text-muted">
            <span className="flex items-center gap-2">
              <Mail size={14} /> {user.email}
            </span>
            {user.phone && (
              <span className="flex items-center gap-2">
                <Phone size={14} /> {user.phone}
              </span>
            )}
          </p>
        </div>
      </div>

      {onEdit && (
        <Button variant="outline" size="md" icon={Pencil} iconPosition="left" onClick={onEdit}>
          Edit Profile
        </Button>
      )}
    </Card>
  );
}