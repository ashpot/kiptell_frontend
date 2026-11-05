import { Navigate, Route, Routes } from "react-router-dom";
import DashboardLayout from "@/layouts/DashboardLayout";
import ComingSoonPage from "@/pages/shared/ComingSoonPage";

// Need Owner
import NeedOwnerDashboardPage from "@/pages/need_owner/DashboardPage";
import SubmitNeedPage from "@/pages/need_owner/SubmitNeedPage";
import MyNeedsPage from "@/pages/need_owner/MyNeedsPage";
import NeedDetailsPage from "@/pages/need_owner/NeedDetailsPage";
import ProjectsPage from "@/pages/need_owner/ProjectsPage";
import ProjectDetailsPage from "@/pages/need_owner/ProjectDetailsPage";
import ImpactPage from "@/pages/need_owner/ImpactPage";
import ImpactDetailsPage from "@/pages/need_owner/ImpactDetailsPage";
import NotificationsPage from "@/pages/need_owner/NotificationsPage";
import ProfilePage from "@/pages/need_owner/ProfilePage";
import SettingsPage from "@/pages/need_owner/SettingsPage";
import HelpSupportPage from "@/pages/need_owner/HelpSupportPage";
import LandingPage from "@/pages/public/LandingPage";
import SignUpPage from "@/pages/public/SignUpPage";
import LoginPage from "@/pages/public/LoginPage";
import { ROLES } from "@/config/roles";
import GuestRoute from "@/components/auth/GuestRoute";
import ProtectedRoute from "@/components/auth/ProtectedRoute";


// ORGANIZATION
import OrganizationDashboardPage from "@/pages/organization/DashboardPage";

/**
 * Route map, grouped by user type.
 * When you add a page: import it above and add a <Route> in its group below.
 */
export default function AppRoutes() {
  return (
    <Routes>
      {/* ---------- Public ---------- */}
      <Route element={<GuestRoute />}>
      <Route path="/login" element={<LoginPage />} />
      <Route path="/signup" element={<SignUpPage />} />
    </Route>
      <Route path="/" element={<LandingPage />} />
      <Route path="/forgot-password" element={<ComingSoonPage />} />
      <Route path="/terms" element={<ComingSoonPage />} />
      <Route path="/privacy" element={<ComingSoonPage />} />
      <Route path="/explore/*" element={<ComingSoonPage />} />

      {/* ---------- Need Owner ---------- */}
      <Route element={<ProtectedRoute role={ROLES.NEED_OWNER} />}>
      <Route path="/need-owner" element={<DashboardLayout />}>
        <Route index element={<Navigate to="overview" replace />} />
        <Route path="overview" element={<NeedOwnerDashboardPage />} />
        <Route path="needs" element={<MyNeedsPage />} />
        <Route path="needs/:needId" element={<NeedDetailsPage />} />
        <Route path="needs/:needId/*" element={<ComingSoonPage />} />
        <Route path="projects" element={<ProjectsPage />} />
        <Route path="projects/:projectId" element={<ProjectDetailsPage />} />
        <Route path="projects/:projectId/*" element={<ComingSoonPage />} />
        <Route path="impact" element={<ImpactPage />} />
        <Route path="impact/:impactId" element={<ImpactDetailsPage />} />
        <Route path="notifications" element={<NotificationsPage />} />
        <Route path="profile" element={<ProfilePage />} />
        <Route path="settings" element={<SettingsPage />} />
        <Route path="help" element={<HelpSupportPage />} />
        <Route path="submit-need" element={<SubmitNeedPage />} />
      </Route>
      </Route>

      {/* ---------- Admin ---------- */}
      {/* <Route path="/admin" element={<DashboardLayout />}> ... </Route> */}

      {/* ---------- Company ---------- */}
      {/* <Route path="/company" element={<DashboardLayout />}> ... </Route> */}

      {/* ---------- Organization ---------- */}
      <Route element={<ProtectedRoute role={ROLES.ORGANIZATION} />}>
        <Route path="/organization" element={<DashboardLayout />}>
          <Route index element={<Navigate to="overview" replace />} />
          <Route path="overview" element={<OrganizationDashboardPage />} />
          <Route path="notifications" element={<NotificationsPage />} />
          {/* every other Organization page shows the placeholder until it's designed */}
          <Route path="*" element={<ComingSoonPage />} />
        </Route>
      </Route>

      <Route path="*" element={<ComingSoonPage />} />
    </Routes>
  );
}
