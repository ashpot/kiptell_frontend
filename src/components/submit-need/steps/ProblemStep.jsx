import Field from "@/components/forms/Field";
import Input from "@/components/forms/Input";
import OptionCard from "@/components/forms/OptionCard";
import Textarea from "@/components/forms/Textarea";
import StepSectionHeader from "../StepSectionHeader";
import { SEVERITIES } from "@/data/needForm";

export default function ProblemStep({ data, update, errors }) {
  return (
    <>
      <StepSectionHeader
        title="The problem"
        description="Help us understand the situation in more detail."
        divider
      />

      <div className="mt-7 space-y-6">
        <Field
          label="What is happening?"
          required
          htmlFor="whatIsHappening"
          hint="Explain the current situation, what is missing, or what is preventing people from getting support."
          error={errors.whatIsHappening}
        >
          <Textarea
            id="whatIsHappening"
            rows={4}
            value={data.whatIsHappening}
            onChange={(e) => update("whatIsHappening", e.target.value)}
            placeholder="Describe the problem in more detail."
            error={errors.whatIsHappening}
          />
        </Field>

        <Field label="Why does this matter?" htmlFor="whyMatters">
          <Textarea
            id="whyMatters"
            rows={2}
            value={data.whyMatters}
            onChange={(e) => update("whyMatters", e.target.value)}
            placeholder="Tell us why this need is important to the people or community affected."
          />
        </Field>

        <Field label="What happens if nothing is done?" htmlFor="ifNothingDone">
          <Textarea
            id="ifNothingDone"
            rows={2}
            value={data.ifNothingDone}
            onChange={(e) => update("ifNothingDone", e.target.value)}
            placeholder="Describe the likely consequences if this problem remains unresolved."
          />
        </Field>
      </div>

      <hr className="my-9 border-line" />

      <StepSectionHeader
        title="Severity"
        description={
          <>
            How urgent is this need? <span className="text-danger">*</span>
          </>
        }
      />
      <div role="radiogroup" aria-label="Severity" className="mt-5 grid gap-4 sm:grid-cols-2">
        {SEVERITIES.map((s) => (
          <OptionCard
            key={s.value}
            indicator="badge"
            title={s.label}
            description={s.description}
            dot={s.dot}
            tone={s.border}
            selected={data.severity === s.value}
            onSelect={() => update("severity", s.value)}
          />
        ))}
      </div>

      <hr className="my-9 border-line" />

      <StepSectionHeader title="Estimated impact" description="What impact could solving this need have?" />
      <div className="mt-5 space-y-6">
        <div>
          <Field label="Estimated number of people affected" htmlFor="peopleAffected">
            <Input
              id="peopleAffected"
              inputMode="numeric"
              value={data.peopleAffected}
              disabled={data.peopleUnknown}
              onChange={(e) => update("peopleAffected", e.target.value.replace(/\D/g, ""))}
              placeholder="e.g. 1240"
            />
          </Field>
          <label className="mt-3 flex cursor-pointer items-center gap-2 text-[13px] text-ink/80">
            <input
              type="checkbox"
              checked={data.peopleUnknown}
              onChange={(e) => {
                update("peopleUnknown", e.target.checked);
                if (e.target.checked) update("peopleAffected", "");
              }}
              className="h-4 w-4 rounded border-line accent-ink"
            />
            I don't know the exact number
          </label>
          <p className="mt-2 text-xs text-muted/80">
            An estimate is fine. This helps us understand the potential scale of the need.
          </p>
        </div>

        <Field label="Expected impact" htmlFor="expectedImpact">
          <Textarea
            id="expectedImpact"
            rows={3}
            value={data.expectedImpact}
            onChange={(e) => update("expectedImpact", e.target.value)}
            placeholder="What could change if this need is successfully addressed?"
          />
        </Field>
      </div>
    </>
  );
}