import { Plus, X } from "lucide-react";
import Chip from "@/components/forms/Chip";
import Field from "@/components/forms/Field";
import Input from "@/components/forms/Input";
import Textarea from "@/components/forms/Textarea";
import StepSectionHeader from "../StepSectionHeader";
import { TIMELINES } from "@/data/needForm";

export default function SolutionStep({ data, update, errors }) {
  const setRequirement = (index, value) =>
    update("requirements", data.requirements.map((r, i) => (i === index ? value : r)));
  const addRequirement = () => update("requirements", [...data.requirements, ""]);
  const removeRequirement = (index) =>
    update("requirements", data.requirements.filter((_, i) => i !== index));

  return (
    <>
      <StepSectionHeader
        title="The solution"
        description="Tell us what kind of support or solution is needed."
        divider
      />

      <div className="mt-7 space-y-6">
        <Field label="What is needed?" required htmlFor="whatIsNeeded" error={errors.whatIsNeeded}>
          <Textarea
            id="whatIsNeeded"
            rows={4}
            value={data.whatIsNeeded}
            onChange={(e) => update("whatIsNeeded", e.target.value)}
            placeholder="Describe the solution, support, service, resources or intervention needed."
            error={errors.whatIsNeeded}
          />
        </Field>

        <Field label="What should the solution achieve?" htmlFor="successLooksLike">
          <Textarea
            id="successLooksLike"
            rows={2}
            value={data.successLooksLike}
            onChange={(e) => update("successLooksLike", e.target.value)}
            placeholder="Describe what success would look like after the need is addressed."
          />
        </Field>
      </div>

      <hr className="my-9 border-line" />

      <StepSectionHeader title="Requirements" description="Are there any specific requirements for this need?" />
      <div className="mt-5 space-y-3">
        {data.requirements.map((req, i) => (
          <div key={i} className="flex items-center gap-2">
            <div className="flex-1">
              <Input
                aria-label={`Requirement ${i + 1}`}
                value={req}
                onChange={(e) => setRequirement(i, e.target.value)}
                placeholder={`Requirement ${i + 1}`}
              />
            </div>
            {i > 0 && (
              <button
                type="button"
                onClick={() => removeRequirement(i)}
                aria-label={`Remove requirement ${i + 1}`}
                className="flex h-11 w-11 items-center justify-center rounded-xl text-muted hover:bg-surface hover:text-ink"
              >
                <X size={16} />
              </button>
            )}
          </div>
        ))}
      </div>
      <button
        type="button"
        onClick={addRequirement}
        className="mt-4 inline-flex items-center gap-2 text-sm text-ink/80 hover:text-ink"
      >
        <Plus size={16} /> Add another requirement
      </button>

      <hr className="my-9 border-line" />

      <StepSectionHeader title="Estimated budget" description="Optional — leave blank if you're not sure yet." />
      <div className="mt-5">
        <Field hint="If you have an estimated budget, provide it. This is optional and does not lock in a final cost.">
          <Input
            aria-label="Estimated budget"
            prefix="₦"
            inputMode="numeric"
            value={data.budget ? Number(data.budget).toLocaleString("en-NG") : ""}
            onChange={(e) => update("budget", e.target.value.replace(/\D/g, ""))}
            placeholder="Enter an estimate"
          />
        </Field>
      </div>

      <hr className="my-9 border-line" />

      <StepSectionHeader title="Desired timeline" description="When would you ideally like this need addressed?" />
      <div role="radiogroup" aria-label="Desired timeline" className="mt-5 flex flex-wrap gap-2.5">
        {TIMELINES.map((t) => (
          <Chip key={t} selected={data.timeline === t} onClick={() => update("timeline", t)}>
            {t}
          </Chip>
        ))}
      </div>
    </>
  );
}