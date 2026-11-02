/**
 * Everything that changes with a Need's status: which buttons show where,
 * the banner on the details page, and the verification label.
 * Add a new status here (and in StatusBadge) and both pages pick it up.
 */
const base = "/need-owner";
const needPath = (n, suffix = "") => `${base}/needs/${n.id}${suffix}`;
const viewAction = (n) => ({ label: "View", variant: "outline", to: needPath(n) });

export const SUBMITTER_LABELS = {
  individual: "Individual / Community Rep",
  ngo: "NGO",
  government: "Government Agency",
  researcher: "Kiptell Researcher",
};

export const STATUS_FILTER_OPTIONS = [
  { value: "under_review", label: "Under Review" },
  { value: "approved", label: "Approved" },
  { value: "changes_required", label: "Changes Required" },
  { value: "in_progress", label: "In Progress" },
  { value: "completed", label: "Completed" },
  { value: "rejected", label: "Rejected" },
];

export const STATUS_META = {
  approved: {
    verification: { label: "Approved", tone: "success" },
    listAction: viewAction,
    headerAction: () => ({ label: "View Activity", variant: "outline", href: "#activity" }),
    banner: {
      border: "border-success",
      icon: "success",
      title: "Your Need has been approved",
      description: "Your Need is now visible on Kiptell for possible action.",
      nextStep:
        "Organizations can now review this Need and decide whether to support it. You'll be notified when there is an update.",
    },
  },

  under_review: {
    verification: { label: "Under Review", tone: "warning" },
    listAction: viewAction,
    headerAction: null,
    banner: {
      border: "border-brand",
      icon: "clock",
      title: "Kiptell is reviewing this Need",
      description:
        "Your submission and supporting information are currently being reviewed. We'll notify you when there is an update.",
    },
  },

  changes_required: {
    verification: { label: "Pending Verification", tone: "warning" },
    listAction: (n) => ({ label: "Update", variant: "outline-danger", to: needPath(n) }),
    headerAction: (n) => ({ label: "Update Need", variant: "primary", to: needPath(n, "/update") }),
    banner: {
      border: "border-line",
      icon: "alert",
      title: "Additional information needed",
      description: "Kiptell needs some additional information before this Need can be approved.",
      callouts: (n) => [{ label: "What needs to be updated", text: n.feedback.changesRequested, tone: "danger" }],
      actions: (n) => [
        { label: "Update Need", variant: "primary", to: needPath(n, "/update") },
        { label: "View Submission", variant: "outline", to: needPath(n, "/submission") },
      ],
    },
  },

  in_progress: {
    verification: { label: "Approved", tone: "success" },
    listAction: (n) => ({ label: "View Project", variant: "outline", to: needPath(n) }),
    headerAction: () => ({ label: "View Project", variant: "dark", to: `${base}/projects` }),
    banner: {
      // NOTE: the Figma frame reused the "Kiptell is reviewing this Need" copy here, which
      // contradicts the status. Replace these two lines if that wording was intentional.
      border: "border-line",
      icon: "clock",
      title: "Work is underway",
      description:
        "A project has been created for this Need. Follow its progress below and confirm milestones as they're submitted.",
    },
  },

  completed: {
    verification: { label: "Approved", tone: "success" },
    listAction: (n) => ({ label: "View Impact", variant: "outline-success", to: needPath(n) }),
    headerAction: () => ({ label: "View Impact", variant: "dark", to: `${base}/impact` }),
    banner: {
      border: "border-line",
      icon: "success",
      title: "Need completed",
      description: "This Need has been successfully addressed through a completed project.",
    },
  },

  rejected: {
    verification: { label: "Not Approved", tone: "danger" },
    listAction: (n) => ({ label: "View Reason", variant: "outline-muted", to: needPath(n) }),
    headerAction: (n) => ({ label: "Reapply", variant: "primary", to: needPath(n, "/reapply") }),
    banner: {
      border: "border-line",
      icon: "x",
      title: "This Need was not approved",
      description: "Kiptell reviewed the submission and was unable to approve it at this time.",
      callouts: (n) => [
        { label: "Reason", text: n.feedback.rejectionReason, tone: "neutral" },
        { label: "What you can do", text: n.feedback.whatYouCanDo, tone: "neutral" },
      ],
      actions: (n) => [
        { label: "Reapply", variant: "primary", to: needPath(n, "/reapply"), arrow: true },
        { label: "View Submission", variant: "outline", to: needPath(n, "/submission") },
      ],
    },
  },
};