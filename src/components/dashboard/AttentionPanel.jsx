import { SquareCheck, MessageCircle } from "lucide-react";
import Card from "@/components/common/Card";
import Button from "@/components/common/Button";
import SectionHeader from "@/components/common/SectionHeader";
import { cn } from "@/lib/cn";

const tones = {
  warning: {
    box: "border-brand-200 bg-brand-50",
    icon: SquareCheck,
    iconColor: "text-brand-600",
    subtitle: "text-brand-600",
    button: "dark",
  },
  danger: {
    box: "border-danger-200 bg-danger-50",
    icon: MessageCircle,
    iconColor: "text-danger",
    subtitle: "text-danger",
    button: "danger",
  },
};

export default function AttentionPanel({ items }) {
  return (
    <Card className="p-6">
      <SectionHeader
        title="Needs Your Attention"
        description="A few items need your response before work can continue."
      />
      <div className="mt-6 space-y-5">
        {items.map((item) => {
          const t = tones[item.tone];
          const Icon = t.icon;
          return (
            <article key={item.id} className={cn("rounded-2xl border p-5", t.box)}>
              <div className="flex gap-3">
                <Icon size={18} fill="currentColor" strokeWidth={0} className={cn("mt-0.5 shrink-0", t.iconColor)} />
                <div>
                  <h3 className="text-sm font-semibold">{item.title}</h3>
                  <p className={cn("mt-0.5 text-sm", t.subtitle)}>{item.subtitle}</p>
                  <p className="mt-3 text-sm text-ink/80">
                    {item.body}
                    {item.highlight && (
                      <>
                        <br />
                        <span className="font-medium text-ink">{item.highlight}</span>
                      </>
                    )}
                  </p>
                </div>
              </div>
              <Button variant={t.button} className="mt-4 w-full">
                {item.cta}
              </Button>
            </article>
          );
        })}
      </div>
    </Card>
  );
}
