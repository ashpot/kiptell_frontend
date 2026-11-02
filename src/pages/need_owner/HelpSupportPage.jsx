import { useNavigate } from "react-router-dom";
import { ArrowLeft, CircleHelp, Mail, MessageSquare } from "lucide-react";
import Button from "@/components/common/Button";
import Card from "@/components/common/Card";
import { useAuth } from "@/context/AuthContext";
import { SUPPORT } from "@/data/support";

function InfoRow({ icon: Icon, label, children }) {
  return (
    <div className="flex items-center gap-4 rounded-2xl border border-line bg-surface px-4 py-4">
      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-line bg-white text-muted">
        <Icon size={16} strokeWidth={1.5} />
      </span>
      <div className="min-w-0">
        <p className="text-xs font-medium uppercase tracking-wide text-muted">{label}</p>
        <p className="mt-0.5 break-words text-[15px] font-medium">{children}</p>
      </div>
    </div>
  );
}

export default function HelpSupportPage() {
  const navigate = useNavigate();
  const { user } = useAuth();

  const goBack = () => (window.history.length > 1 ? navigate(-1) : navigate("/need-owner/overview"));
  const mailto = `mailto:${SUPPORT.email}?subject=${encodeURIComponent(`Support request from ${user.name}`)}`;

  return (
    <div className="mx-auto max-w-[1440px]">
      <button type="button" onClick={goBack} className="inline-flex items-center gap-2 text-sm text-muted hover:text-ink">
        <ArrowLeft size={16} /> Back
      </button>

      <h1 className="mt-8 text-2xl font-semibold">Help &amp; Support</h1>
      <p className="mt-1.5 text-muted">Get help with your Needs and Projects.</p>

      <Card className="mt-8 max-w-[510px] p-8">
        <span className="flex h-[50px] w-[50px] items-center justify-center rounded-2xl bg-neutral-100 text-muted">
          <CircleHelp size={22} strokeWidth={1.5} />
        </span>

        <h2 className="mt-8 text-xl font-semibold">Help &amp; Support</h2>
        <p className="mt-3 leading-7 text-muted">
          Need help with your Needs or Projects? Get in touch with the Kiptell team and we will help you out.
        </p>

        <div className="mt-8 space-y-3">
          <InfoRow icon={MessageSquare} label="Response time">
            {SUPPORT.responseTime}
          </InfoRow>
          <InfoRow icon={Mail} label="Support email">
            {SUPPORT.email}
          </InfoRow>
        </div>

        <Button as="a" href={mailto} size="lg" className="mt-6 w-full">
          Contact Support
        </Button>
      </Card>
    </div>
  );
}