import { Info, Pencil } from "lucide-react";
import Card from "@/components/common/Card";
import StepFooter from "../StepFooter";
import { SEVERITIES } from "@/data/needForm";

const plural = (n, word) => `${n} ${word}${n === 1 ? "" : "s"}`;

function Row({ label, value }) {
  const empty = !value;
  return (
    <div className="grid gap-1 border-b border-line py-3.5 last:border-b-0 sm:grid-cols-[160px_1fr] sm:gap-4">
      <dt className="text-sm text-muted">{label}</dt>
      <dd className={empty ? "text-sm text-muted/70" : "whitespace-pre-line text-sm leading-6"}>
        {empty ? "Not provided" : value}
      </dd>
    </div>
  );
}

function ReviewCard({ title, onEdit, rows }) {
  return (
    <Card className="p-8">
      <div className="mb-2 flex items-center justify-between">
        <h2 className="text-base font-semibold">{title}</h2>
        <button
          type="button"
          onClick={onEdit}
          className="inline-flex items-center gap-1.5 text-sm text-muted hover:text-ink"
        >
          <Pencil size={14} /> Edit
        </button>
      </div>
      <dl>
        {rows.map(([label, value]) => (
          <Row key={label} label={label} value={value} />
        ))}
      </dl>
    </Card>
  );
}

const AFTER_SUBMIT = [
  "Your Need will be sent to Kiptell for review.",
  "Kiptell will assess the information and evidence you've provided.",
  "If approved, the Need can become visible for potential action.",
  "If more information is needed, you'll be notified.",
  "If the Need is not approved, you'll receive a reason and can reapply.",
];

/** Edit buttons jump to step 0 (basic), 2 (problem), 3 (solution), 4 (evidence) */
export default function ReviewStep({ data, submitting, onEdit, onBack, onSaveDraft, onSubmit }) {
  const severity = SEVERITIES.find((s) => s.value === data.severity)?.label;
  const people = data.peopleUnknown ? "Not sure" : data.peopleAffected && `${data.peopleAffected} people`;
  const requirements = data.requirements.filter((r) => r.trim()).join(", ");
  const budget = data.budget && `₦${Number(data.budget).toLocaleString("en-NG")}`;
  const files =
    [
      data.photos.length && plural(data.photos.length, "photo"),
      data.documents.length && plural(data.documents.length, "document"),
    ]
      .filter(Boolean)
      .join(", ") || "None";

  return (
    <div className="mx-auto mt-6 max-w-[800px] space-y-4">
      <ReviewCard
        title="Basic Information"
        onEdit={() => onEdit(0)}
        rows={[
          ["Need title", data.title],
          ["Category", data.category],
          ["Location", data.location],
          ["Who is affected", data.affected],
          ["Description", data.description],
        ]}
      />

      <ReviewCard
        title="The Problem"
        onEdit={() => onEdit(2)}
        rows={[
          ["What is happening", data.whatIsHappening],
          ["Why it matters", data.whyMatters],
          ["If nothing is done", data.ifNothingDone],
          ["Severity", severity],
          ["Estimated impact", people],
          ["Expected outcome", data.expectedImpact],
        ]}
      />

      <ReviewCard
        title="What Is Needed?"
        onEdit={() => onEdit(3)}
        rows={[
          ["What is needed", data.whatIsNeeded],
          ["Success looks like", data.successLooksLike],
          ["Requirements", requirements],
          ["Estimated budget", budget],
          ["Desired timeline", data.timeline],
        ]}
      />

      <ReviewCard
        title="Evidence"
        onEdit={() => onEdit(4)}
        rows={[
          ["Files attached", files],
          ["Additional context", data.additionalContext],
        ]}
      />

      <section className="flex gap-4 rounded-3xl border border-line bg-neutral-100 p-6">
        <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-neutral-200/70 text-muted">
          <Info size={16} strokeWidth={1.5} />
        </span>
        <div>
          <h2 className="text-sm font-semibold">What happens after you submit?</h2>
          <ul className="mt-3 space-y-2">
            {AFTER_SUBMIT.map((item) => (
              <li key={item} className="flex items-start gap-3 text-[13px] text-ink/70">
                <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-muted" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <Card className="p-6">
        <StepFooter
          step={5}
          bordered={false}
          continueLabel="Submit Need"
          loading={submitting}
          onBack={onBack}
          onSaveDraft={onSaveDraft}
          onContinue={onSubmit}
        />
        <p className="mt-5 text-center text-xs text-muted/80">
          By submitting, you confirm that the information provided is accurate to the best of your knowledge.
        </p>
      </Card>
    </div>
  );
}