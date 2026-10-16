/** Mock notifications. `type` controls the icon; `unread` highlights the row. */
export const unreadCount = 6;

export const notifications = [
  {
    id: 1,
    type: "warning",
    title: "Progress confirmation required",
    body: "Equipment Installation has been marked complete by the provider. Review the deliverable and confirm.",
    time: "Just now",
    unread: false,
  },
  {
    id: 2,
    type: "success",
    title: "Need approved",
    body: 'Your Need "Community Health Centre Equipment" has been approved and is now open to companies.',
    time: "2 hours ago",
    unread: false,
  },
  {
    id: 3,
    type: "project",
    title: "Project progress updated",
    body: '"Community Health Centre Equipment Upgrade" is now 68% complete.',
    time: "Today",
    unread: true,
  },
  {
    id: 4,
    type: "project",
    title: "Deliverable submitted",
    body: 'A new deliverable has been submitted for "Equipment Installation" and is available for review.',
    time: "Yesterday",
    unread: false,
  },
];