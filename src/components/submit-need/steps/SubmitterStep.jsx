import { CircleUser } from "lucide-react";
import Field from "@/components/forms/Field";
import Input from "@/components/forms/Input";
import OptionCard from "@/components/forms/OptionCard";
import StepSectionHeader from "../StepSectionHeader";
import { SUBMITTER_TYPES } from "@/data/needForm";
import { useAuth } from "@/context/AuthContext";

export default function SubmitterStep({ data, update, errors }) {
  const { user } = useAuth();

  return (
    <>
      <StepSectionHeader
        title="Submitter type"
        description={
          <>
            Who are you submitting this Need as? <span className="text-danger">*</span>
          </>
        }
        divider
      />

      <div role="radiogroup" aria-label="Submitter type" className="mt-8 grid gap-4 sm:grid-cols-2">
        {SUBMITTER_TYPES.map((t) => (
          <OptionCard
            key={t.value}
            title={t.title}
            description={t.description}
            selected={data.submitterType === t.value}
            onSelect={() => update("submitterType", t.value)}
          />
        ))}
      </div>

      <hr className="my-8 border-line" />

      <StepSectionHeader title="Need Ownership" description="Are you the Need Owner?" />

      <div role="radiogroup" aria-label="Need ownership" className="mt-5 space-y-4">
        <OptionCard
          indicator="radio"
          title="Yes, I am the Need Owner"
          description="You will be assigned as the Need Owner for this submission."
          selected={data.isOwner === "yes"}
          onSelect={() => update("isOwner", "yes")}
        >
          {data.isOwner === "yes" && (
            <div className="mt-3 flex items-center gap-3 border-t border-line pt-3.5">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-neutral-200/70 text-muted">
                <CircleUser size={20} strokeWidth={1.5} />
              </span>
              <div>
                <p className="text-sm font-medium">{user.name}</p>
                <p className="text-[13px] text-muted">Assigned as Need Owner</p>
              </div>
            </div>
          )}
        </OptionCard>

        <OptionCard
          indicator="radio"
          title="No, I am submitting on behalf of someone else"
          description="You will need to provide the Need Owner contact information."
          selected={data.isOwner === "no"}
          onSelect={() => update("isOwner", "no")}
        />
      </div>

      {data.isOwner === "no" && (
        <>
          <hr className="my-8 border-line" />
          <StepSectionHeader
            title="Who is responsible for this Need?"
            description="The Need Owner is the person accountable for this Need and responsible for confirming project progress and milestones."
          />

          <div className="mt-6 space-y-5">
            <Field
              label="Full name"
              required
              htmlFor="ownerName"
              hint="Examples: School Principal, Clinic Administrator, Community Leader, Local Partner Representative."
              error={errors.ownerName}
            >
              <Input
                id="ownerName"
                value={data.ownerName}
                onChange={(e) => update("ownerName", e.target.value)}
                placeholder="e.g. Dr. Emeka Okonkwo"
                error={errors.ownerName}
              />
            </Field>

            <div className="grid gap-5 sm:grid-cols-2">
              <Field label="Role / Position" htmlFor="ownerRole">
                <Input
                  id="ownerRole"
                  value={data.ownerRole}
                  onChange={(e) => update("ownerRole", e.target.value)}
                  placeholder="e.g. School Principal"
                />
              </Field>
              <Field label="Organization or Institution" htmlFor="ownerOrg">
                <Input
                  id="ownerOrg"
                  value={data.ownerOrg}
                  onChange={(e) => update("ownerOrg", e.target.value)}
                  placeholder="e.g. Nsukka Community Health Centre"
                />
              </Field>
              <Field label="Email address" required htmlFor="ownerEmail" error={errors.ownerEmail}>
                <Input
                  id="ownerEmail"
                  type="email"
                  value={data.ownerEmail}
                  onChange={(e) => update("ownerEmail", e.target.value)}
                  placeholder="e.g. emeka@healthcentre.org"
                  error={errors.ownerEmail}
                />
              </Field>
              <Field label="Phone number" htmlFor="ownerPhone">
                <Input
                  id="ownerPhone"
                  type="tel"
                  value={data.ownerPhone}
                  onChange={(e) => update("ownerPhone", e.target.value)}
                  placeholder="e.g. +234 801 234 5678"
                />
              </Field>
            </div>
          </div>
        </>
      )}
    </>
  );
}