import { ROLES, ROLE_BASE_PATH } from "./roles";

const base = ROLE_BASE_PATH;

/** Top-nav tabs per role. Add admin / company / organization tabs as those screens are designed. */
export const NAV_ITEMS = {
  [ROLES.NEED_OWNER]: [
    {
  label: "Overview",
  to: `${base[ROLES.NEED_OWNER]}/overview`,
  // keep this tab highlighted on these related pages
  alsoActiveOn: [`${base[ROLES.NEED_OWNER]}/submit-need`],
},
    { label: "My Needs", to: `${base[ROLES.NEED_OWNER]}/needs` },
    { label: "Projects", to: `${base[ROLES.NEED_OWNER]}/projects` },
    { label: "Impact", to: `${base[ROLES.NEED_OWNER]}/impact` },
  ],
  [ROLES.ADMIN]: [],
  [ROLES.COMPANY]: [],
  [ROLES.ORGANIZATION]: [
  { label: "Overview", to: `${base[ROLES.ORGANIZATION]}/overview` },
  { label: "Discover Needs", to: `${base[ROLES.ORGANIZATION]}/discover` },
  { label: "Projects", to: `${base[ROLES.ORGANIZATION]}/projects` },
  { label: "Impact", to: `${base[ROLES.ORGANIZATION]}/impact` },
],
};
