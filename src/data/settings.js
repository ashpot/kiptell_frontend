/** Notification preference toggles shown on the Settings page. */
export const NOTIFICATION_PREFS = [
  { key: "needUpdates", title: "Need updates", description: "Get notified when there are important updates to your Needs." },
  { key: "projectUpdates", title: "Project updates", description: "Get notified when Projects linked to your Needs change." },
  { key: "progressConfirmation", title: "Progress confirmation", description: "Get notified when project progress requires your confirmation." },
  { key: "impactUpdates", title: "Impact updates", description: "Get notified when new impact information is available." },
];

export const DEFAULT_PREFS = {
  needUpdates: true,
  projectUpdates: true,
  progressConfirmation: true,
  impactUpdates: false,
};