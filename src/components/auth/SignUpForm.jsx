import { useEffect, useState } from "react";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import { EyeOff, Eye, LockKeyhole, Mail, Phone, UserRound } from "lucide-react";
import Field from "@/components/forms/Field";
import Toast from "@/components/common/Toast";
import { ROLE_BASE_PATH } from "@/config/roles";
import { useAuth } from "@/context/AuthContext";
import { ROLE_FROM_QUERY, SIGNUP_ROLES } from "@/data/auth";
import { validateSignUp } from "@/lib/authValidation";
import { cn } from "@/lib/cn";
import { registerUser } from "@/services/authService";
import AuthInput from "./AuthInput";
import GoogleButton from "./GoogleButton";

export default function SignUpForm() {
  const navigate = useNavigate();
  const [params] = useSearchParams();
  const { signIn } = useAuth();

  const [form, setForm] = useState({
    role: ROLE_FROM_QUERY[params.get("role")] ?? "",
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [toast, setToast] = useState("");

  useEffect(() => {
    if (!toast) return;
    const timer = setTimeout(() => setToast(""), 2500);
    return () => clearTimeout(timer);
  }, [toast]);

  const set = (key) => (e) => {
    const { value } = e.target; // read now, before the updater runs
    setForm((f) => ({ ...f, [key]: value }));
    setErrors((errs) => ({ ...errs, [key]: undefined }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const found = validateSignUp(form);
    if (Object.keys(found).length) return setErrors(found);

    setSubmitting(true);
    try {
      await registerUser(form);
      signIn({
        role: form.role,
        firstName: form.firstName.trim(),
        lastName: form.lastName.trim(),
        email: form.email.trim(),
        phone: form.phone.trim(),
      });
      navigate(`${ROLE_BASE_PATH[form.role]}/overview`, { replace: true });
    } catch (err) {
      setErrors({ [err.field ?? "email"]: err.message || "Couldn't create your account. Please try again." });
      setSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} noValidate>
      <p className="text-center text-[17px]">Signup as:</p>
      <div role="radiogroup" aria-label="Signup as" className="mt-5 grid grid-cols-3 gap-3 sm:gap-5">
        {SIGNUP_ROLES.map((r) => {
          const selected = form.role === r.value;
          return (
            <button
              key={r.value}
              type="button"
              role="radio"
              aria-checked={selected}
              onClick={() => {
                setForm((f) => ({ ...f, role: r.value }));
                setErrors((errs) => ({ ...errs, role: undefined }));
              }}
              className={cn(
                "h-[52px] rounded-2xl border px-1 text-[15px] transition-colors sm:h-[58px]",
                selected ? "border-ink bg-ink text-white" : "border-line bg-neutral-100 text-ink hover:bg-neutral-200/70"
              )}
            >
              {r.label}
            </button>
          );
        })}
      </div>
      {errors.role && (
        <p role="alert" className="mt-2 text-center text-xs text-danger">
          {errors.role}
        </p>
      )}

      <div className="mt-8 grid gap-x-5 gap-y-6 sm:grid-cols-2">
        <Field label="First Name" htmlFor="firstName" error={errors.firstName}>
          <AuthInput id="firstName" icon={UserRound} autoComplete="given-name" placeholder="First Name" value={form.firstName} onChange={set("firstName")} error={errors.firstName} />
        </Field>
        <Field label="Last Name" htmlFor="lastName" error={errors.lastName}>
          <AuthInput id="lastName" icon={UserRound} autoComplete="family-name" placeholder="Last Name" value={form.lastName} onChange={set("lastName")} error={errors.lastName} />
        </Field>
        <Field label="Phone" htmlFor="phone" error={errors.phone} className="sm:col-span-2">
          <AuthInput id="phone" type="tel" icon={Phone} autoComplete="tel" placeholder="Phone number" value={form.phone} onChange={set("phone")} error={errors.phone} />
        </Field>
        <Field label="Email" htmlFor="email" error={errors.email} className="sm:col-span-2">
          <AuthInput id="email" type="email" icon={Mail} autoComplete="email" placeholder="Email" value={form.email} onChange={set("email")} error={errors.email} />
        </Field>
        <Field
          label="Password"
          htmlFor="password"
          error={errors.password}
          hint="Minimum length is 8 characters."
          className="sm:col-span-2"
        >
          <AuthInput
            id="password"
            type={showPassword ? "text" : "password"}
            icon={LockKeyhole}
            autoComplete="new-password"
            placeholder="Password"
            value={form.password}
            onChange={set("password")}
            error={errors.password}
            right={
              <button
                type="button"
                onClick={() => setShowPassword((s) => !s)}
                aria-label={showPassword ? "Hide password" : "Show password"}
                className="flex h-8 w-8 items-center justify-center text-ink"
              >
                {showPassword ? <Eye size={20} strokeWidth={1.5} /> : <EyeOff size={20} strokeWidth={1.5} />}
              </button>
            }
          />
        </Field>
      </div>

      <button
        type="submit"
        disabled={submitting}
        className="mt-6 h-14 w-full rounded-full bg-brand text-base font-semibold text-ink transition-colors hover:bg-brand-600 disabled:cursor-not-allowed disabled:opacity-70"
      >
        {submitting ? "Creating account…" : "Sign Up"}
      </button>

      <p className="mt-6 text-[15px] leading-6 text-neutral-500">
        By creating an account, you agree to the{" "}
        <Link to="/terms" className="font-medium text-ink hover:underline">
          Terms of Service.
        </Link>{" "}
        We'll occasionally send you account-related emails.
      </p>

      <div className="my-8 flex items-center gap-4 text-[15px]">
        <span className="h-px flex-1 bg-neutral-300" />
        or
        <span className="h-px flex-1 bg-neutral-300" />
      </div>

      {/* TODO: connect Google sign-in */}
      <GoogleButton onClick={() => setToast("Google sign-up isn't connected yet.")} />

      <p className="mt-8 text-center text-[15px]">
        Already have an account?{" "}
        <Link to="/login" className="font-medium text-brand-600 hover:underline">
          Login
        </Link>
      </p>

      <Toast message={toast} />
    </form>
  );
}