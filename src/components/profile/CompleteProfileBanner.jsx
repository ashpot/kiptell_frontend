import { User } from "lucide-react";
import Button from "@/components/common/Button";
import Card from "@/components/common/Card";

export default function CompleteProfileBanner({ onComplete }) {
  return (
    <Card className="p-7">
      <div className="flex gap-5">
        <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-brand-200 bg-brand-50 text-ink">
          <User size={20} strokeWidth={1.5} />
        </span>
        <div>
          <h2 className="text-[17px] font-semibold leading-tight">Complete your profile</h2>
          <p className="mt-2 max-w-xl leading-6 text-muted">
            Add your contact information to make sure Kiptell can reach you when your Needs require an update.
          </p>
          <Button size="lg" className="mt-5" onClick={onComplete}>
            Complete Profile
          </Button>
        </div>
      </div>
    </Card>
  );
}