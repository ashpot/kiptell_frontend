/** Mock data for the Organization dashboard. Replace with API responses later. */
const base = "/organization";

export const stats = [
  { id: "needs", value: 4, title: "Needs Supported", caption: "Across 3 categories", icon: "file", tone: "brand" },
  { id: "active", value: 2, title: "Active Projects", caption: "On track", icon: "briefcase", tone: "neutral" },
  { id: "done", value: 6, title: "Projects Completed", caption: "Last 12 months", icon: "check", tone: "success" },
  { id: "people", value: "3,840", title: "People Reached", caption: "Cumulative impact", icon: "users", tone: "brand" },
];

// tone: "success" (green) or "warning" (yellow). Colours the category pill and the card border.
export const attention = [
  {
    id: "KT-1048",
    category: "Healthcare",
    tone: "success",
    bids: 5,
    title: "Community Health Centre Equipment",
    text: "Companies have submitted proposals for this Need. Review and select the best bid to move it forward.",
    to: `${base}/needs/KT-1048/bids`,
  },
  {
    id: "KT-1060",
    category: "Education",
    tone: "warning",
    bids: 3,
    title: "Primary School Library Renovation",
    text: "Three companies have submitted proposals. Review bids to select the right partner for this project.",
    to: `${base}/needs/KT-1060/bids`,
  },
];

export const recentProjects = [
  { id: "prj-1003", title: "Community Water Access", provider: "AquaBuild Solutions", progress: 75, status: "in_progress" },
  { id: "prj-1005", title: "Digital Learning Resources", provider: "EduBridge Africa", progress: 35, status: "needs_attention" },
];

export const recentImpact = {
  id: "imp-1002",
  title: "Primary School Library Upgrade",
  people: 680,
  completed: "Aug 20, 2026",
};