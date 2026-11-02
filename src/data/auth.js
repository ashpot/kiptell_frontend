import { ROLES } from "@/config/roles";

/** The three account types people can sign up as */
export const SIGNUP_ROLES = [
  { value: ROLES.NEED_OWNER, label: "Need Owner" },
  { value: ROLES.ORGANIZATION, label: "Organization" },
  { value: ROLES.COMPANY, label: "Company" },
];

/** ?role=… values used by the landing page links. "funder" signs up as an Organization. */
export const ROLE_FROM_QUERY = {
  "need-owner": ROLES.NEED_OWNER,
  need_owner: ROLES.NEED_OWNER,
  organization: ROLES.ORGANIZATION,
  funder: ROLES.ORGANIZATION,
  company: ROLES.COMPANY,
};

/** What each account type does, shown beside / below the form */
export const ROLE_BENEFITS = [
  { title: "Need Owner", text: "Submit and track community needs" },
  { title: "Organization", text: "Review and approve need submissions" },
  { title: "Company", text: "Deliver projects and confirm impact" },
];

export const AUTH_FOOTER_LINKS = [
  { label: "Terms", to: "/terms" },
  { label: "Privacy", to: "/privacy" },
  { label: "Docs", to: "/explore/docs" },
  { label: "Help", to: "/explore/help" },
];