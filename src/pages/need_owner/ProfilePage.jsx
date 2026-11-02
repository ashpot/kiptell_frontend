import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import Toast from "@/components/common/Toast";
import CompleteProfileBanner from "@/components/profile/CompleteProfileBanner";
import PersonalInfoCard from "@/components/profile/PersonalInfoCard";
import PersonalInfoForm from "@/components/profile/PersonalInfoForm";
import ProfileSummaryCard from "@/components/profile/ProfileSummaryCard";
import { useAuth } from "@/context/AuthContext";
import { isProfileComplete } from "@/lib/profile";

export default function ProfilePage() {
  const navigate = useNavigate();
  const { user, updateProfile } = useAuth();
  const [editing, setEditing] = useState(false);
  const [toast, setToast] = useState("");

  useEffect(() => {
    if (!toast) return;
    const timer = setTimeout(() => setToast(""), 2500);
    return () => clearTimeout(timer);
  }, [toast]);

  const complete = isProfileComplete(user);
  const goBack = () => (window.history.length > 1 ? navigate(-1) : navigate("/need-owner/overview"));

  const handleSave = (patch) => {
    updateProfile(patch);
    setEditing(false);
    setToast("Profile updated");
  };

  return (
    <div className="mx-auto max-w-[1440px]">
      <button type="button" onClick={goBack} className="inline-flex items-center gap-2 text-sm text-muted hover:text-ink">
        <ArrowLeft size={16} /> Back
      </button>

      <h1 className="mt-8 text-2xl font-semibold">Profile</h1>
      <p className="mt-1.5 text-muted">Manage the information associated with your Kiptell account.</p>

      <div className="mt-8 max-w-[680px] space-y-4">
        {!complete && !editing && <CompleteProfileBanner onComplete={() => setEditing(true)} />}

        {/* The Edit button only shows once the profile is complete, as in the designs */}
        <ProfileSummaryCard user={user} onEdit={complete && !editing ? () => setEditing(true) : undefined} />

        {editing ? (
          <PersonalInfoForm user={user} onSave={handleSave} onCancel={() => setEditing(false)} />
        ) : (
          <PersonalInfoCard user={user} />
        )}
      </div>

      <Toast message={toast} />
    </div>
  );
}