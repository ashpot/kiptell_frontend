/** Mock data for the Need Owner dashboard. Replace with API responses later. */

export const stats = [
  { id: "total", value: 8, title: "Total Needs", caption: "2 active", icon: "file", tone: "brand" },
  { id: "review", value: 8, title: "Under Review", caption: "Awaiting Kiptell review", icon: "hourglass", tone: "neutral" },
  { id: "projects", value: 8, title: "Active Projects", caption: "2 on track · 1 needs attention", icon: "folder", tone: "brand" },
  { id: "done", value: 3, title: "Completed", caption: "Impact available", icon: "check", tone: "success" },
];

export const needs = [
  { id: 1, title: "Community Health Centre Equipment", category: "Healthcare", status: "approved", submitted: "Aug 18, 2026", action: "View" },
  { id: 2, title: "Digital Learning Resources", category: "Education", status: "under_review", submitted: "Aug 22, 2026", action: "View" },
  { id: 3, title: "Community Water Access", category: "Infrastructure", status: "changes_required", submitted: "Aug 24, 2026", action: "Update" },
];

export const projects = [
  { id: 1, title: "Community Health Centre Equipment", status: "on_track", progress: 68, provider: "MedTech Solutions", milestonesDone: 2, milestonesTotal: 3, next: "Equipment Installation" },
  { id: 2, title: "Digital Learning Resources", status: "needs_attention", progress: 35, provider: "EduBridge Africa", milestonesDone: 1, milestonesTotal: 4, next: "Content Delivery Setup" },
  { id: 3, title: "Community Water Access", status: "on_track", progress: 82, provider: "AquaWorks Ltd", milestonesDone: 3, milestonesTotal: 4, next: "Final Inspection" },
];

export const attentionItems = [
  {
    id: 1,
    tone: "warning",
    title: "Community Health Centre Equipment",
    subtitle: "Deliverable awaiting your review",
    body: "Company has submitted evidence for",
    highlight: "Equipment Installation",
    cta: "Review Deliverable",
  },
  {
    id: 2,
    tone: "danger",
    title: "Digital Learning Resources",
    subtitle: "Additional information requested",
    body: "Kiptell needs more information before this Need can be approved.",
    cta: "Update Need",
  },
];

export const impact = [
  { id: "projects", value: "3", label: "Completed Projects", icon: "flag" },
  { id: "reached", value: "1,240", label: "People Reached", icon: "users" },
  { id: "deliverables", value: "8", label: "Deliverables", icon: "package" },
];

export const activity = [
  { id: 1, icon: "approved", title: "Kiptell approved your Need", detail: "Community Health Centre Equipment", time: "2 hours ago" },
  { id: 2, icon: "update", title: "New project update", detail: "Equipment installation milestone has been submitted for review.", time: "Yesterday" },
  { id: 3, icon: "info", title: "Additional information requested", detail: "Digital Learning Resources", time: "2 days ago" },
  { id: 4, icon: "milestone", title: "Project milestone completed", detail: "Community Water Access", time: "3 days ago" },
];
