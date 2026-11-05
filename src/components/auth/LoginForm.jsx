import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { CircleUser, Eye, EyeOff, LockKeyhole } from "lucide-react";
import Field from "@/components/forms/Field";
import { ROLE_BASE_PATH } from "@/config/roles";
import { useAuth } from "@/context/AuthContext";
import { loginUser } from "@/services/authService";
import AuthInput from "./AuthInput";

export default function LoginForm() {
  const navigate = useNavigate();
  const location = useLocation();
  const { signIn } = useAuth();

  const [form, setForm] = useState({ identifier: "", password: "", remember: true });
  const [errors, setErrors] = useState({});
  const [formError, setFormError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const set = (key) => (e) => {
    const { value } = e.target; // read now, before the updater runs
    setForm((f) => ({ ...f, [key]: value }));
    setErrors((errs) => ({ ...errs, [key]: undefined }));
    setFormError("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const found = {};
    if (!form.identifier.trim()) found.identifier = "Enter your username or email.";
    if (!form.password) found.password = "Enter your password.";
    if (Object.keys(found).length) return setErrors(found);

    setSubmitting(true);
    setFormError("");
    try {
      const user = await loginUser(form);
      signIn(user, { remember: form.remember });

      // Go back to the page they were trying to open, if it belongs to their dashboard
      const base = ROLE_BASE_PATH[user.role];
      const from = location.state?.from?.pathname;
      navigate(from && from.startsWith(base) ? from : `${base}/overview`, { replace: true });
    } catch (err) {
      setFormError(err.message || "Couldn't log you in. Please try again.");
      setSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} noValidate>
      <div className="space-y-5">
        <Field label="Username or email" htmlFor="identifier" error={errors.identifier}>
          <AuthInput
            id="identifier"
            icon={CircleUser}
            autoComplete="username"
            placeholder="Username or email"
            value={form.identifier}
            onChange={set("identifier")}
            error={errors.identifier}
          />
        </Field>

        <div>
          <div className="mb-2 flex items-center justify-between">
            <label htmlFor="password" className="text-sm font-semibold">
              Password
            </label>
            <Link to="/forgot-password" className="text-sm text-brand-600 hover:underline">
              Forgot Password?
            </Link>
          </div>
          <AuthInput
            id="password"
            type={showPassword ? "text" : "password"}
            icon={LockKeyhole}
            autoComplete="current-password"
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
          {errors.password && (
            <p role="alert" className="mt-2 text-xs text-danger">
              {errors.password}
            </p>
          )}
        </div>
      </div>

      <label className="mt-5 flex cursor-pointer items-center gap-2.5 text-sm">
        <input
          type="checkbox"
          checked={form.remember}
          onChange={(e) => {
            const { checked } = e.target;
            setForm((f) => ({ ...f, remember: checked }));
          }}
          className="h-4 w-4 rounded accent-brand"
        />
        Remember Me
      </label>

      {formError && (
        <p role="alert" className="mt-5 rounded-xl bg-danger-50 px-4 py-3 text-sm text-danger">
          {formError}
        </p>
      )}

      <button
        type="submit"
        disabled={submitting}
        className="mt-6 h-14 w-full rounded-full bg-brand text-base font-semibold text-ink transition-colors hover:bg-brand-600 disabled:cursor-not-allowed disabled:opacity-70"
      >
        {submitting ? "Logging in…" : "Log In"}
      </button>

      <p className="mt-8 text-center text-sm">
        Do not have an account?{" "}
        <Link to="/signup" className="font-medium text-brand-600 hover:underline">
          Sign Up
        </Link>
      </p>
    </form>
  );
}