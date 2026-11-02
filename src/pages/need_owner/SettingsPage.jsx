import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, Bell, Lock, ShieldCheck } from "lucide-react";
import Badge from "@/components/common/Badge";
import Button from "@/components/common/Button";
import Toast from "@/components/common/Toast";
import Toggle from "@/components/forms/Toggle";
import ChangePasswordForm from "@/components/settings/ChangePasswordForm";
import { SettingRow, SettingsSection } from "@/components/settings/SettingsSection";
import { useAuth } from "@/context/AuthContext";
import { DEFAULT_PREFS, NOTIFICATION_PREFS } from "@/data/settings";

const PREFS_KEY = "kiptell:notification-prefs";

function loadPrefs() {
  try {
    return { ...DEFAULT_PREFS, ...JSON.parse(localStorage.getItem(PREFS_KEY)) };
  } catch {
    return DEFAULT_PREFS;
  }
}

export default function SettingsPage() {
  const navigate = useNavigate();
  const { user, logout } = useAuth();
  const [prefs, setPrefs] = useState(loadPrefs);
  const [changingPassword, setChangingPassword] = useState(false);
  const [passwordUpdated, setPasswordUpdated] = useState(false);
  const [toast, setToast] = useState("");

  // TODO: save preferences to the API instead of the browser
  useEffect(() => {
    try {
      localStorage.setItem(PREFS_KEY, JSON.stringify(prefs));
    } catch {
      /* storage unavailable: preferences just won't persist */
    }
  }, [prefs]);

  useEffect(() => {
    if (!toast) return;
    const timer = setTimeout(() => setToast(""), 2500);
    return () => clearTimeout(timer);
  }, [toast]);

  const goBack = () => (window.history.length > 1 ? navigate(-1) : navigate("/need-owner/overview"));

  const handlePasswordDone = () => {
    setChangingPassword(false);
    setPasswordUpdated(true);
    setToast("Password updated");
  };

  return (
    <div className="mx-auto max-w-[1440px]">
      <button type="button" onClick={goBack} className="inline-flex items-center gap-2 text-sm text-muted hover:text-ink">
        <ArrowLeft size={16} /> Back
      </button>

      <h1 className="mt-8 text-2xl font-semibold">Settings</h1>
      <p className="mt-1.5 text-muted">Manage your account preferences and security.</p>

      <div className="mt-8 max-w-[680px] space-y-4">
        <SettingsSection icon={Bell} title="Notification Preferences">
          {NOTIFICATION_PREFS.map((p) => (
            <SettingRow key={p.key} title={p.title} description={p.description}>
              <Toggle
                label={p.title}
                checked={prefs[p.key]}
                onChange={(value) => setPrefs((current) => ({ ...current, [p.key]: value }))}
              />
            </SettingRow>
          ))}
        </SettingsSection>

        <SettingsSection icon={Lock} title="Security">
          <SettingRow title="Password" description={`Last updated: ${passwordUpdated ? "Just now" : "Recently"}`}>
            {!changingPassword && (
              <Button variant="outline" size="md" onClick={() => setChangingPassword(true)}>
                Change Password
              </Button>
            )}
          </SettingRow>
          {changingPassword && (
            <ChangePasswordForm onDone={handlePasswordDone} onCancel={() => setChangingPassword(false)} />
          )}
        </SettingsSection>

        <SettingsSection icon={ShieldCheck} title="Account">
          <SettingRow title="Account type">
            <Badge tone="outline" className="px-4 py-1.5 text-sm">
              {user.roleLabel}
            </Badge>
          </SettingRow>
          <SettingRow title="Account status">
            {/* TODO: read the real status from the API */}
            <Badge tone="success" className="px-4 py-1.5 text-sm">
              Active
            </Badge>
          </SettingRow>
          <SettingRow title="Log out" description="Sign out of your Kiptell account.">
            <Button variant="danger" size="md" onClick={logout}>
              Log Out
            </Button>
          </SettingRow>
        </SettingsSection>
      </div>

      <Toast message={toast} />
    </div>
  );
}