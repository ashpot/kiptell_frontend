import AuthLayout, { AuthCard } from "@/components/auth/AuthLayout";
import SignUpForm from "@/components/auth/SignUpForm";

export default function SignUpPage() {
  return (
    <AuthLayout>
      <AuthCard>
        <SignUpForm />
      </AuthCard>
    </AuthLayout>
  );
}