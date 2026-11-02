const STEPS = [
  { key: "submitted", label: "Submitted" },
  { key: "review", label: "Under Review" },
  { key: "approved", label: "Approved" },
  { key: "project", label: "Project" },
  { key: "completed", label: "Completed" },
];

// Index of the step each status is currently on (5 = everything finished)
const CURRENT_STEP = {
  under_review: 1,
  changes_required: 1,
  rejected: 1,
  approved: 2,
  in_progress: 3,
  completed: 5,
};

/** Builds the 5-step "Need Status" timeline from a status and its step dates. */
export function buildTimeline(status, dates = {}) {
  const current = CURRENT_STEP[status] ?? 0;

  return STEPS.map((step, i) => {
    let state = i < current ? "done" : i === current ? "current" : "upcoming";
    let badge = null;

    if (i === current && status === "changes_required") badge = { label: "Changes Needed", tone: "danger" };
    if (i === current && status === "rejected") {
      state = "failed";
      badge = { label: "Not approved", tone: "danger" };
    }

    // "Approved" is a decision, not a phase of work, so it never says "Not started"
    const upcomingNote = step.key === "approved" ? "" : "Not started";
    const note = state === "upcoming" ? upcomingNote : dates[step.key] ?? "";

    return { ...step, state, badge, note };
  });
}