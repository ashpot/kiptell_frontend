/** Static content + initial state for the Submit a Need flow. */

export const STEPS = [
  { id: "basic", label: "Basic Information" },
  { id: "submitter", label: "Submitter & Ownership" },
  { id: "problem", label: "Tell Us More" },
  { id: "solution", label: "What is Needed" },
  { id: "evidence", label: "Evidence" },
  { id: "review", label: "Review & Submit" },
];

export const STEP_HEADINGS = [
  { title: "Tell us about the need", description: "Start by giving us the basic details about the problem you want to address." },
  { title: "Tell us about the need", description: "Start by giving us the basic details about the problem you want to address." },
  { title: "Help us understand the problem", description: "Give us more context so Kiptell can understand the severity and potential impact of this need." },
  { title: "What would solving this need look like?", description: "Help us understand the kind of support or solution that is needed." },
  { title: "Add supporting evidence", description: "Supporting evidence helps Kiptell understand and verify the need." },
  { title: "Review your Need", description: "Take a moment to check the information before sending it to Kiptell for review." },
];

export const CATEGORIES = [
  "Healthcare",
  "Education",
  "Infrastructure",
  "Water & Sanitation",
  "Energy",
  "Agriculture",
  "Environment",
  "Livelihoods & Employment",
  "Other",
];

export const SUBMITTER_TYPES = [
  { value: "individual", title: "Individual / Community Representative", description: "Submit a Need directly for yourself or your community." },
  { value: "ngo", title: "NGO", description: "Submit a Need on behalf of a community, institution, or beneficiary group." },
  { value: "government", title: "Government Agency", description: "Submit a Need on behalf of a government department, agency, or public institution." },
  { value: "researcher", title: "Kiptell Researcher", description: "Submit a Need identified independently through Kiptell research." },
];

export const SEVERITIES = [
  { value: "low", label: "Low", description: "The issue exists but does not require immediate intervention.", dot: "bg-neutral-300", border: "border-line" },
  { value: "medium", label: "Medium", description: "The issue is affecting people and should be addressed.", dot: "bg-neutral-400", border: "border-line" },
  { value: "high", label: "High", description: "The issue is significantly affecting people and needs timely action.", dot: "bg-brand-600", border: "border-brand-200" },
  { value: "critical", label: "Critical", description: "The issue requires urgent attention because of serious consequences.", dot: "bg-danger", border: "border-danger-200" },
];

export const TIMELINES = [
  "As soon as possible",
  "Within 1 month",
  "1–3 months",
  "3-6 months",
  "More than 6 months",
  "Not sure",
];

export const INITIAL_FORM = {
  // 1. Basic information
  title: "",
  category: "",
  location: "",
  affected: "",
  description: "",
  // 2. Submitter & ownership
  submitterType: "",
  isOwner: "", // "yes" | "no"
  ownerName: "",
  ownerRole: "",
  ownerOrg: "",
  ownerEmail: "",
  ownerPhone: "",
  // 3. Tell us more
  whatIsHappening: "",
  whyMatters: "",
  ifNothingDone: "",
  severity: "medium",
  peopleAffected: "",
  peopleUnknown: false,
  expectedImpact: "",
  // 4. What is needed
  whatIsNeeded: "",
  successLooksLike: "",
  requirements: [""],
  budget: "",
  timeline: "",
  // 5. Evidence
  photos: [],
  documents: [],
  additionalContext: "",
};