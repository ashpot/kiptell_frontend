/**
 * Content for the public landing page.
 * Images: add photos to src/assets/landing/, import them here and set `image`
 * (until then each slot shows a coloured placeholder).
 */
import heroWater from "@/assets/landing/hero-water.jpg";
import communityBorehold from "@/assets/landing/community-borehole.jpg";
import ictLab from "@/assets/landing/ict-lab.jpg";
import schoolLibrary from "@/assets/landing/school-library.jpg";
import solarLight from "@/assets/landing/solar-light.jpg";
import checklist from "@/assets/landing/checklist.jpg";


export const NAV_LINKS = [
  { label: "How It Works", href: "#how-it-works" },
  { label: "Explore Needs", href: "#featured" },
  { label: "Who We Serve", href: "#who-we-serve" },
  { label: "Accountability", href: "#accountability" },
  { label: "Impact", href: "#impact" },
];

export const HERO_PROJECT = {
  category: "Infrastructure",
  title: "School Water Access",
  location: "Abia State",
  progress: 65,
  image: heroWater,
};

export const IMPACT_IMAGE = checklist; // the sticky-note photo beside the Impact section

export const STEPS = [
  { id: 1, icon: "need", tone: "yellow", title: "Identify a Need", text: "A community Need is submitted with relevant details and evidence." },
  { id: 2, icon: "fund", tone: "blue", title: "Fund a Project", text: "Funders discover eligible Needs and companies can submit bids to carry out the work." },
  { id: 3, icon: "verify", tone: "green", title: "Verify Progress", text: "Progress submissions and supporting evidence are reviewed through the appropriate accountability process." },
  { id: 4, icon: "report", tone: "purple", title: "Report Impact", text: "Completed work and its outcomes are documented so stakeholders can understand what was achieved." },
];

export const FEATURED = [
  { id: "primary-school-library", title: "Primary School Library Renovation", category: "Education", location: "Enugu State", funding: "₦2,000,000", progress: 85, status: "In Progress", image: schoolLibrary, tone: "library" },
  { id: "solar-street-lights", title: "Solar Street Lights", category: "Infrastructure", location: "Ogun State", funding: "₦5,000,000", progress: 30, status: "In Progress", image: solarLight, tone: "solar" },
  { id: "community-borehole", title: "Community Borehole", category: "Infrastructure", location: "Abia State", funding: "₦8,700,000", progress: 100, status: "Completed", image: communityBorehold, tone: "tower" },
  { id: "ict-lab", title: "ICT Lab", category: "Talent & Creative Support", location: "Kaduna State", funding: "₦14,000,000", progress: 25, status: "In Progress", image: ictLab, tone: "office" },
];

export const ROLES = [
  { id: "need-owner", icon: "users", tone: "teal", title: "Need Owners", text: "Help communities and accountable representatives bring genuine needs forward and follow project progress.", cta: "Get Started as Need Owner" },
  { id: "funder", icon: "wallet", tone: "green", title: "Funders", text: "Help organizations and individual philanthropists discover needs, evaluate proposals and review documented outcomes.", cta: "Get Started as Funder" },
  { id: "company", icon: "building", tone: "yellow", title: "Companies", text: "Help capable businesses find relevant opportunities, submit bids and deliver projects with clear accountability.", cta: "Get Started as Company" },
];

// x / y are the circle centres as a % of the diagram box (desktop zig-zag)
export const ACCOUNTABILITY = [
  { id: 1, icon: "flag", tone: "gray", x: 22, y: 9, title: "Milestone defined", text: "Scope and deliverables agreed before work begins." },
  { id: 2, icon: "camera", tone: "peach", x: 72, y: 25, title: "Company update with evidence", text: "Site photos and a progress report submitted." },
  { id: 3, icon: "review", tone: "yellow", x: 14, y: 41, title: "Need Owner review", text: "Deliverables accepted or returned with reasons." },
  { id: 4, icon: "verify", tone: "green", x: 77, y: 58, title: "Kiptell verification", text: "Applied where the milestone requires it." },
  { id: 5, icon: "target", tone: "blue", x: 30, y: 74, title: "Outcome recorded", text: "Results documented against category metrics." },
];

export const IMPACT_CATEGORIES = [
  { id: "infrastructure", icon: "infrastructure", tone: "blue", title: "Infrastructure", measures: ["People with new access", "Water-quality test results"] },
  { id: "healthcare", icon: "healthcare", tone: "green", title: "Healthcare", measures: ["Patients served", "Clinic attendances"] },
  { id: "education", icon: "education", tone: "yellow", title: "Education", measures: ["Students enrolled or retained", "Classrooms rebuilt"] },
  { id: "talent", icon: "talent", tone: "purple", title: "Talent & Creative Support", measures: ["Opportunities secured", "Income earned"] },
  { id: "environment", icon: "environment", tone: "green", title: "Environment", measures: ["Households reached", "Supplies distributed"] },
];

export const FOOTER_LINKS = {
  product: NAV_LINKS,
  legal: [
    { label: "Terms", to: "/terms" },
    { label: "Privacy Policy", to: "/privacy" },
    { label: "Support", to: "/explore/support" },
    { label: "Log in", to: "/login" },
  ],
};