import { Link } from "react-router-dom";
import { AuthBackground, AuthCard, AuthFooter } from "@/components/auth/AuthLayout";
import LoginForm from "@/components/auth/LoginForm";
import LogoMark from "@/components/auth/LogoMark";

export default function LoginPage() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-neutral-100 text-ink">
      <AuthBackground vanishX={720} />

      <div className="relative mx-auto flex min-h-screen w-full max-w-[1440px] flex-col items-center px-5 pb-10 pt-14 sm:pt-20">
        <Link to="/" aria-label="Kiptell home">
          <LogoMark />
        </Link>
        <h1 className="mt-6 text-center text-[28px] font-semibold tracking-tight">Login to Kiptell</h1>

        <div className="mt-10 w-full max-w-[616px]">
          <AuthCard>
            <LoginForm />
          </AuthCard>
          <AuthFooter className="mt-6" />
        </div>
      </div>
    </div>
  );
}