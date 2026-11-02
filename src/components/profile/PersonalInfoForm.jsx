import { useState } from "react";
import Button from "@/components/common/Button";
import Card from "@/components/common/Card";
import Field from "@/components/forms/Field";
import Input from "@/components/forms/Input";
import Select from "@/components/forms/Select";
import { COUNTRIES } from "@/lib/profile";

const phoneOk = (v) => /^\+?[\d\s-]{7,}$/.test(v.trim());

function validate(form) {
  const errors = {};
  if (!form.firstName.trim()) errors.firstName = "Enter your first name.";
  if (!form.lastName.trim()) errors.lastName = "Enter your last name.";
  if (form.phone.trim() && !phoneOk(form.phone)) errors.phone = "Enter a valid phone number.";
  return errors;
}

/** Edit mode of the Personal Information card. Email is read-only. */
export default function PersonalInfoForm({ user, onSave, onCancel }) {
  const [form, setForm] = useState({
    firstName: user.firstName,
    lastName: user.lastName,
    phone: user.phone ?? "",
    address: user.address ?? "",
    country: user.country ?? "",
  });
  const [errors, setErrors] = useState({});

  const set = (key) => (e) => {
    const { value } = e.target; // read now: the event target can change before the updater runs
    setForm((f) => ({ ...f, [key]: value }));
    setErrors((errs) => ({ ...errs, [key]: undefined }));
  };

  const handleSave = () => {
    const found = validate(form);
    if (Object.values(found).some(Boolean)) return setErrors(found);
    onSave({
      firstName: form.firstName.trim(),
      lastName: form.lastName.trim(),
      phone: form.phone.trim(),
      address: form.address.trim(),
      country: form.country,
    });
  };

  return (
    <Card className="p-7">
      <h2 className="text-[17px] font-semibold">Personal Information</h2>

      <div className="mt-6 grid items-start gap-x-4 gap-y-5 sm:grid-cols-2">
        <Field label="First name" htmlFor="firstName" error={errors.firstName}>
          <Input id="firstName" value={form.firstName} onChange={set("firstName")} error={errors.firstName} />
        </Field>
        <Field label="Last name" htmlFor="lastName" error={errors.lastName}>
          <Input id="lastName" value={form.lastName} onChange={set("lastName")} error={errors.lastName} />
        </Field>

        <Field
          label="Email"
          htmlFor="email"
          hint="Email address cannot be changed. Contact Kiptell support if you need to update it."
        >
          <Input id="email" value={user.email} disabled readOnly />
        </Field>
        <Field label="Phone Number" htmlFor="phone" error={errors.phone}>
          <Input id="phone" type="tel" value={form.phone} onChange={set("phone")} error={errors.phone} />
        </Field>

        <Field label="Address" htmlFor="address">
          <Input id="address" value={form.address} onChange={set("address")} />
        </Field>
        <Field label="Country" htmlFor="country">
          <Select
            id="country"
            value={form.country}
            onChange={set("country")}
            placeholder="Select country"
            options={COUNTRIES}
          />
        </Field>
      </div>

      <div className="mt-8 flex items-center gap-3 border-t border-line pt-7">
        <Button size="lg" onClick={handleSave}>
          Save Changes
        </Button>
        <Button variant="outline" size="lg" onClick={onCancel}>
          Cancel
        </Button>
      </div>
    </Card>
  );
}