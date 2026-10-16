import { ArrowLeft, ArrowRight, Save } from "lucide-react";
import Button from "@/components/common/Button";
import { cn } from "@/lib/cn";

/** Back · Save as Draft ........ Continue */
export default function StepFooter({
  step,
  canContinue = true,
  bordered = true,
  continueLabel = "Continue",
  loading = false,
  onBack,
  onSaveDraft,
  onContinue,
}) {
  return (
    <div
      className={cn(
        "flex flex-wrap items-center justify-between gap-3",
        bordered && "mt-8 border-t border-line pt-6"
      )}
    >
      <div className="flex items-center gap-2">
        {step > 0 && (
          <Button variant="ghost" size="lg" icon={ArrowLeft} iconPosition="left" onClick={onBack}>
            Back
          </Button>
        )}
        <Button variant="outline" size="lg" icon={Save} iconPosition="left" onClick={onSaveDraft}>
          Save as Draft
        </Button>
      </div>
      <Button size="lg" icon={ArrowRight} disabled={!canContinue || loading} onClick={onContinue}>
        {loading ? "Submitting…" : continueLabel}
      </Button>
    </div>
  );
}