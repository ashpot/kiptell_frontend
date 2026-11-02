/** Mock data for Projects + Project Details. Replace with API responses later. */

// ---- building blocks shared by the mock projects ----
const timeline = (currentDone = false) => [
  { label: "Project Started", date: "Aug 22", state: "done" },
  { label: "Planning Complete", date: "Aug 25", state: "done" },
  { label: "Site Preparation", date: "Sep 02", state: "done" },
  { label: "Equipment Delivery", date: "Sep 18", state: "done" },
  { label: "Equipment Installation", date: "Oct 04", state: currentDone ? "done" : "current" },
  { label: "Project Completion", date: "Nov 20", state: currentDone ? "done" : "upcoming" },
];

const milestoneGroups = (allDone = false) => {
  const groups = [
    { title: "Milestone 1", tasks: [
      { name: "Site Preparation", due: "Sep 02", status: "completed" },
      { name: "Equipment Procurement", due: "Sep 12", status: "completed" },
    ] },
    { title: "Milestone 2", tasks: [
      { name: "Equipment Delivery", due: "Sep 18", status: "completed" },
      { name: "Equipment Installation", due: "Oct 04", status: "awaiting_confirmation" },
    ] },
    { title: "Milestone 3", tasks: [
      { name: "Final Inspection", due: "Nov 12", status: "upcoming" },
      { name: "Project Sign-off", due: "Nov 20", status: "upcoming" },
    ] },
  ];
  return allDone
    ? groups.map((g) => ({ ...g, tasks: g.tasks.map((t) => ({ ...t, status: "completed" })) }))
    : groups;
};

const deliverables = (firstStatus, firstDate = "Today") => [
  { id: 1, title: "Equipment Installation Report", date: firstDate, files: "3 photos · 1 PDF", status: firstStatus },
  { id: 2, title: "Equipment Delivery Confirmation", date: "Sep 18", files: "2 photos · 1 PDF", status: "verified" },
  { id: 3, title: "Site Preparation Record", date: "Sep 02", files: "2 photos", status: "verified" },
];

const payments = (second, third) => [
  { id: 1, percent: 40, title: "Initial stage", note: "Project start", status: "released" },
  { id: 2, percent: 30, title: "Progress stage", note: "Milestone 2 completion", status: second },
  { id: 3, percent: 30, title: "Final stage", note: "Project completion", status: third },
];

const activity = (provider) => [
  { id: 1, icon: "submitted", title: "Progress confirmed", detail: "You confirmed Equipment Installation progress.", time: "Today" },
  { id: 2, icon: "update", title: "Deliverable submitted", detail: `${provider} uploaded the installation report.`, time: "Today" },
  { id: 3, icon: "milestone", title: "Task completed", detail: "Equipment Delivery marked complete.", time: "Sep 18" },
  { id: 4, icon: "update", title: "Project update", detail: "Project reached 50% completion.", time: "Sep 15" },
];

const common = {
  startDate: "Aug 22, 2026",
  expectedCompletion: "Nov 20, 2026",
  budget: "₦4,500,000",
  milestones: { done: 2, total: 3 },
  tasksStat: { done: 8, total: 12 },
};

export const projects = [
  {
    ...common,
    id: "prj-1001",
    title: "Community Health Centre Equipment Upgrade",
    needId: "KT-1048",
    needTitle: "Community Health Centre Equipment",
    status: "in_progress",
    provider: "MedTech Solutions",
    sponsor: "Community Health Initiative",
    progress: 68,
    nextMilestone: "Equipment Installation",
    updatedLabel: "2 days ago",
    timeline: timeline(),
    milestoneGroups: milestoneGroups(),
    deliverables: deliverables("awaiting_verification"),
    payments: payments("awaiting_verification", "pending"),
    activity: activity("MedTech Solutions"),
  },

  {
    ...common,
    id: "prj-1002",
    title: "Rural Skills Training Centre",
    needId: "KT-1051",
    needTitle: "Rural Skills Training Centre",
    status: "awaiting_confirmation",
    provider: "SkillBridge Africa",
    sponsor: "FutureWorks Foundation",
    progress: 82,
    nextMilestone: "Training Completion Report",
    updatedLabel: "Yesterday",
    confirmation: { task: "Equipment Installation" },
    timeline: timeline(),
    milestoneGroups: milestoneGroups(),
    deliverables: deliverables("awaiting_verification"),
    payments: payments("awaiting_verification", "pending"),
    activity: activity("MedTech Solutions"),
  },

  {
    ...common,
    id: "prj-1003",
    title: "Community Water Access",
    needId: "KT-1050",
    needTitle: "Community Water Access",
    status: "at_risk",
    provider: "AquaBuild Solutions",
    sponsor: "Community Impact Fund",
    progress: 54,
    nextMilestone: "Borehole Installation",
    updatedLabel: "2 days ago",
    attention: {
      message: "Equipment Installation is behind its expected timeline.",
      expected: "Oct 04",
      latestUpdate: "Oct 09",
    },
    timeline: timeline(),
    milestoneGroups: milestoneGroups(),
    deliverables: deliverables("awaiting_confirmation"),
    payments: payments("awaiting_confirmation", "pending"),
    activity: activity("MedTech Solutions"),
  },

  {
    ...common,
    id: "prj-1004",
    title: "Primary School Library Upgrade",
    needId: "KT-1053",
    needTitle: "Primary School Library Upgrade",
    status: "completed",
    provider: "LearnBuild Africa",
    sponsor: "Education Forward",
    progress: 100,
    nextMilestone: "Project Completed",
    updatedLabel: "Aug 18, 2026",
    milestones: { done: 3, total: 3 },
    tasksStat: { done: 12, total: 12 },
    completion: {
      date: "Nov 20, 2026",
      deliverables: "8",
      tasks: "12 of 12",
      keyOutcome: "Community health centre now has access to the required equipment.",
    },
    impactSnapshot: { people: "1,240", deliverables: "8", duration: "3 mo" },
    timeline: timeline(true),
    milestoneGroups: milestoneGroups(true),
    deliverables: deliverables("verified", "Oct 04"),
    payments: payments("released", "released"),
    activity: [
      { id: 1, icon: "milestone", title: "Project completed", detail: "All deliverables verified and project signed off.", time: "Nov 20, 2026" },
      { id: 2, icon: "submitted", title: "Progress confirmed", detail: "You confirmed Final Inspection progress.", time: "Nov 12" },
      { id: 3, icon: "update", title: "Deliverable submitted", detail: "LearnBuild Africa uploaded the completion report.", time: "Nov 12" },
      { id: 4, icon: "milestone", title: "Milestone 2 complete", detail: "Equipment Installation marked complete.", time: "Oct 04" },
      { id: 5, icon: "update", title: "Project update", detail: "Project reached 50% completion.", time: "Sep 15" },
    ],
  },
];

export const getProjectById = (id) => projects.find((p) => p.id === id);