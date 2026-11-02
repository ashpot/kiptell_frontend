/**
 * Everything that changes with a Project's status: list hint + action, header hint + buttons,
 * and the banner on the details page. Add a status here (and in StatusBadge) to support it.
 */
const base = "/need-owner";
const projectPath = (p, suffix = "") => `${base}/projects/${p.id}${suffix}`;

const viewNeed = (p) => ({ label: "View Need", variant: "outline", to: `${base}/needs/${p.needId}` });
const viewProject = (p) => ({ label: "View Project", variant: "outline", to: projectPath(p) });
const viewImpact = { label: "View Impact", variant: "outline-success", to: `${base}/impact` };
const reviewProgress = (p, variant) => ({ label: "Review Progress", variant, to: projectPath(p, "/review") });

export const STATUS_FILTER_OPTIONS = [
  { value: "in_progress", label: "In Progress" },
  { value: "awaiting_confirmation", label: "Awaiting Confirmation" },
  { value: "at_risk", label: "At Risk" },
  { value: "completed", label: "Completed" },
];

export const PROJECT_STATUS_META = {
  in_progress: {
    barTone: "brand",
    listHint: null,
    listAction: viewProject,
    headerHint: null,
    headerActions: (p) => [viewNeed(p)],
    banner: null,
  },

  awaiting_confirmation: {
    barTone: "brand",
    listHint: "Your Confirmation is needed",
    listAction: (p) => reviewProgress(p, "outline-warning"),
    headerHint: { text: "Awaiting your confirmation", tone: "warning" },
    headerActions: (p) => [viewNeed(p), reviewProgress(p, "primary")],
    banner: {
      border: "border-brand-200",
      icon: "clock",
      title: "Your confirmation is needed",
      description: (p) =>
        `${p.provider} has submitted an update for ${p.confirmation.task}. Review and confirm the reported progress.`,
      actions: (p) => [reviewProgress(p, "primary")],
    },
  },

  at_risk: {
    barTone: "brand",
    listHint: "Requires attention",
    listAction: viewProject,
    headerHint: { text: "Requires attention", tone: "danger" },
    headerActions: (p) => [viewNeed(p)],
    banner: {
      border: "border-danger-200",
      icon: "alert",
      title: "Project needs attention",
      description: (p) => p.attention.message,
      statsLayout: "panel",
      stats: (p) => [
        { label: "Expected", value: p.attention.expected },
        { label: "Latest update", value: p.attention.latestUpdate },
      ],
      actions: (p) => [
        { label: "View Task", variant: "primary", to: projectPath(p, "/tasks") },
        { label: "View Activity", variant: "outline", href: "#activity" },
      ],
    },
  },

  completed: {
    barTone: "success",
    listHint: null,
    listAction: () => viewImpact,
    headerHint: null,
    headerActions: (p) => [viewNeed(p), viewImpact],
    banner: {
      border: "border-success/50",
      icon: "success",
      title: "Project completed",
      description: () => "This project has been completed and verified by Kiptell.",
      statsLayout: "tiles",
      stats: (p) => [
        { label: "Completed", value: p.completion.date },
        { label: "Deliverables", value: p.completion.deliverables },
        { label: "Tasks", value: p.completion.tasks },
      ],
      keyOutcome: (p) => p.completion.keyOutcome,
      actions: (p) => [
        { label: "View Impact", variant: "primary", to: `${base}/impact` },
        viewNeed(p),
      ],
    },
  },
};