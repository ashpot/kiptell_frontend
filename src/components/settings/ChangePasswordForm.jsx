import { useState } from "react";
import Button from "@/components/common/Button";
import Field from "@/components/forms/Field";
import PasswordInput from "@/components/forms/PasswordInput";
import { changePassword } from "@/services/authService";

/** Inline form that expands inside the Security card */
export default function ChangePasswordForm({ onDone, onCancel }) {
  const [form, setForm] = useState({ current: "", next: "", confirm: "" });
  const [errors, setErrors] = useState({});
  const [saving, setSaving] = useState(false);

  const set = (key) => (e) => {
    const { value } = e.target; // read now, before the updater runs
    setForm((f) => ({ ...f, [key]: value }));
    setErrors((errs) => ({ ...errs, [key]: undefined }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const found = {};
    if (!form.current) found.current = "Enter your current password.";
    if (form.next.length < 8) found.next = "Use at least 8 characters.";
    else if (form.next === form.current) found.next = "Choose a password different from your current one.";
    if (form.confirm !== form.next) found.confirm = "Passwords don't match.";
    if (Object.keys(found).length) return setErrors(found);

    setSaving(true);
    try {
      await changePassword({ currentPassword: form.current, newPassword: form.next });
      onDone();
    } catch (err) {
      setErrors({ current: err.message || "Couldn't update your password. Please try again." });
      setSaving(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} noValidate className="px-7 pb-7 pt-6">
      <h3 className="text-[15px] font-semibold">Change Password</h3>

      <div className="mt-5 space-y-5">
        <Field label="Current password" htmlFor="currentPassword" error={errors.current}>
          <PasswordInput
            id="currentPassword"
            autoComplete="current-password"
            value={form.current}
            onChange={set("current")}
            error={errors.current}
          />
        </Field>
        <Field label="New password" htmlFor="newPassword" error={errors.next}>
          <PasswordInput
            id="newPassword"
            autoComplete="new-password"
            placeholder="At least 8 characters"
            value={form.next}
            onChange={set("next")}
            error={errors.next}
          />
        </Field>
        <Field label="Confirm new password" htmlFor="confirmPassword" error={errors.confirm}>
          <PasswordInput
            id="confirmPassword"
            autoComplete="new-password"
            value={form.confirm}
            onChange={set("confirm")}
            error={errors.confirm}
          />
        </Field>
      </div>

      <div className="mt-6 flex items-center gap-3">
        <Button type="submit" size="lg" disabled={saving}>
          {saving ? "Updating…" : "Update Password"}
        </Button>
        <Button type="button" variant="outline" size="lg" onClick={onCancel}>
          Cancel
        </Button>
      </div>
    </form>
  );
}