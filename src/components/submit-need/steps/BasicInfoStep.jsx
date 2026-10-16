import { MapPin } from "lucide-react";
import Field from "@/components/forms/Field";
import Input from "@/components/forms/Input";
import Select from "@/components/forms/Select";
import Textarea from "@/components/forms/Textarea";
import StepSectionHeader from "../StepSectionHeader";
import { CATEGORIES } from "@/data/needForm";

export default function BasicInfoStep({ data, update, errors }) {
  return (
    <>
      <StepSectionHeader
        title="Basic information"
        description="Give your need a clear title and help us understand where it belongs."
        divider
      />

      <div className="mt-7 space-y-6">
        <Field
          label="Need title"
          required
          htmlFor="title"
          hint="Use a short, specific title that clearly describes the need."
          error={errors.title}
        >
          <Input
            id="title"
            value={data.title}
            onChange={(e) => update("title", e.target.value)}
            placeholder="e.g. Renovation of Community Health Centre"
            error={errors.title}
          />
        </Field>

        <div className="grid items-start gap-6 sm:grid-cols-2">
          <Field label="Category" required htmlFor="category" error={errors.category}>
            <Select
              id="category"
              value={data.category}
              onChange={(e) => update("category", e.target.value)}
              placeholder="Select a category"
              options={CATEGORIES}
              error={errors.category}
            />
          </Field>

          <Field
            label="Location"
            required
            htmlFor="location"
            hint="Tell us where this need exists — a community, town, city, state or region."
            error={errors.location}
          >
            <Input
              id="location"
              icon={MapPin}
              value={data.location}
              onChange={(e) => update("location", e.target.value)}
              placeholder="Search for a location"
              error={errors.location}
            />
          </Field>
        </div>

        <Field
          label="Who is affected?"
          required
          htmlFor="affected"
          hint="For example: students in a community, residents of a rural settlement, or patients served by a health centre."
          error={errors.affected}
        >
          <Textarea
            id="affected"
            rows={2}
            value={data.affected}
            onChange={(e) => update("affected", e.target.value)}
            placeholder="Describe the people, community, organization, or group affected by this need."
            error={errors.affected}
          />
        </Field>

        <Field
          label="Briefly describe the need"
          required
          htmlFor="description"
          hint="Give us enough context to understand the problem. You can provide more detail in the next step."
          error={errors.description}
        >
          <Textarea
            id="description"
            rows={4}
            value={data.description}
            onChange={(e) => update("description", e.target.value)}
            placeholder="What is the problem, and what is currently happening?"
            error={errors.description}
          />
        </Field>
      </div>
    </>
  );
}