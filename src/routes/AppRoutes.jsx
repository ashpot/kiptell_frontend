import { Navigate, Route, Routes } from "react-router-dom";
import DashboardLayout from "@/layouts/DashboardLayout";
import ComingSoonPage from "@/pages/shared/ComingSoonPage";

// Need Owner
import NeedOwnerDashboardPage from "@/pages/need_owner/DashboardPage";
import SubmitNeedPage from "@/pages/need_owner/SubmitNeedPage";

/**
 * Route map, grouped by user type.
 * When you add a page: import it above and add a <Route> in its group below.
 */
export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/need-owner/overview" replace />} />

      {/* ---------- Need Owner ---------- */}
      <Route path="/need-owner" element={<DashboardLayout />}>
        <Route index element={<Navigate to="overview" replace />} />
        <Route path="overview" element={<NeedOwnerDashboardPage />} />
        <Route path="needs" element={<ComingSoonPage />} />
        <Route path="projects" element={<ComingSoonPage />} />
        <Route path="impact" element={<ComingSoonPage />} />
        <Route path="notifications" element={<ComingSoonPage />} />
        <Route path="profile" element={<ComingSoonPage />} />
        <Route path="settings" element={<ComingSoonPage />} />
        <Route path="help" element={<ComingSoonPage />} />
        <Route path="submit-need" element={<SubmitNeedPage />} />
      </Route>

      {/* ---------- Admin ---------- */}
      {/* <Route path="/admin" element={<DashboardLayout />}> ... </Route> */}

      {/* ---------- Company ---------- */}
      {/* <Route path="/company" element={<DashboardLayout />}> ... </Route> */}

      {/* ---------- Organization ---------- */}
      {/* <Route path="/organization" element={<DashboardLayout />}> ... </Route> */}

      <Route path="*" element={<ComingSoonPage />} />
    </Routes>
  );
}
