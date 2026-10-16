import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import Card from "@/components/common/Card";
import Toast from "@/components/common/Toast";
import StepIndicator from "@/components/submit-need/StepIndicator";
import StepFooter from "@/components/submit-need/StepFooter";
import SubmitSuccess from "@/components/submit-need/SubmitSuccess";
import BasicInfoStep from "@/components/submit-need/steps/BasicInfoStep";
import SubmitterStep from "@/components/submit-need/steps/SubmitterStep";
import ProblemStep from "@/components/submit-need/steps/ProblemStep";
import SolutionStep from "@/components/submit-need/steps/SolutionStep";
import EvidenceStep from "@/components/submit-need/steps/EvidenceStep";
import ReviewStep from "@/components/submit-need/steps/ReviewStep";
import { INITIAL_FORM, STEP_HEADINGS } from "@/data/needForm";
import { validateStep } from "@/lib/needValidation";
import { submitNeed } from "@/services/needsService";

const DRAFT_KEY = "kiptell:need-draft";
const LAST_STEP = 5;

function loadDraft() {
  try {
    const raw = localStorage.getItem(DRAFT_KEY);
    return raw ? JSON.parse(raw) : null;
  } catch {
    return null;
  }
}

export default function SubmitNeedPage() {
  const [step, setStep] = useState(() => loadDraft()?.step ?? 0);
  const [form, setForm] = useState(() => ({ ...INITIAL_FORM, ...(loadDraft()?.form ?? {}) }));
  const [errors, setErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);
  const [needId, setNeedId] = useState(null);
  const [toast, setToast] = useState("");

  useEffect(() => {
    if (!toast) return;
    const timer = setTimeout(() => setToast(""), 2500);
    return () => clearTimeout(timer);
  }, [toast]);

  const update = (key, value) => {
    setForm((f) => ({ ...f, [key]: value }));
    setErrors((e) => {
      if (!e[key]) return e;
      const { [key]: _removed, ...rest } = e;
      return rest;
    });
  };

  const goTo = (next) => {
    setErrors({});
    setStep(next);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleContinue = () => {
    const found = validateStep(step, form);
    if (Object.keys(found).length) return setErrors(found);
    goTo(step + 1);
  };

  const handleSaveDraft = () => {
    try {
      localStorage.setItem(DRAFT_KEY, JSON.stringify({ step, form }));
      setToast("Draft saved");
    } catch {
      setToast("Couldn't save your draft");
    }
  };

  const handleSubmit = async () => {
    setSubmitting(true);
    try {
      const { id } = await submitNeed(form);
      localStorage.removeItem(DRAFT_KEY);
      setNeedId(id);
      window.scrollTo({ top: 0 });
    } catch {
      setToast("Something went wrong. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  const stepProps = { data: form, update, errors };
  const heading = STEP_HEADINGS[step];
  // Step 2 needs both choices made before moving on
  const canContinue = step !== 1 || (form.submitterType && form.isOwner);

  return (
    <div className="mx-auto max-w-[1440px]">
      <Link
        to="/need-owner/overview"
        className="inline-flex items-center gap-2 text-sm text-muted transition-colors hover:text-ink"
      >
        <ArrowLeft size={16} /> Back to Dashboard
      </Link>

      {needId ? (
        <SubmitSuccess needId={needId} need={form} />
      ) : (
        <div className="mx-auto mt-10 max-w-[940px]">
          <p className="text-sm uppercase tracking-wide text-muted">Submit a Need</p>
          <h1 className="mt-3 text-[28px] font-semibold leading-tight">{heading.title}</h1>
          <p className="mt-2 text-[15px] text-muted">{heading.description}</p>

          <div className="mt-6">
            <StepIndicator current={step} onStepClick={goTo} />
          </div>

          {step === LAST_STEP ? (
            <ReviewStep
              data={form}
              submitting={submitting}
              onEdit={goTo}
              onBack={() => goTo(step - 1)}
              onSaveDraft={handleSaveDraft}
              onSubmit={handleSubmit}
            />
          ) : (
            <Card className="mx-auto mt-6 max-w-[800px] p-8">
              {step === 0 && <BasicInfoStep {...stepProps} />}
              {step === 1 && <SubmitterStep {...stepProps} />}
              {step === 2 && <ProblemStep {...stepProps} />}
              {step === 3 && <SolutionStep {...stepProps} />}
              {step === 4 && <EvidenceStep {...stepProps} />}

              <StepFooter
                step={step}
                canContinue={!!canContinue}
                onBack={() => goTo(step - 1)}
                onSaveDraft={handleSaveDraft}
                onContinue={handleContinue}
              />
            </Card>
          )}
        </div>
      )}

      <Toast message={toast} />
    </div>
  );
}