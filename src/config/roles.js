export const ROLES = {
  NEED_OWNER: "need_owner",
  ADMIN: "admin",
  COMPANY: "company",
  ORGANIZATION: "organization",
};

/** Base URL segment for each role's section of the app */
export const ROLE_BASE_PATH = {
  [ROLES.NEED_OWNER]: "/need-owner",
  [ROLES.ADMIN]: "/admin",
  [ROLES.COMPANY]: "/company",
  [ROLES.ORGANIZATION]: "/organization",
};


/** Human-readable role names */
export const ROLE_LABELS = {
  [ROLES.NEED_OWNER]: "Need Owner",
  [ROLES.ADMIN]: "Admin",
  [ROLES.COMPANY]: "Company",
  [ROLES.ORGANIZATION]: "Organization",
};