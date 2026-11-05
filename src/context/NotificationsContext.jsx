import { createContext, useContext, useMemo, useState } from "react";
import { useAuth } from "@/context/AuthContext";
import { notificationsByRole } from "@/data/notifications";

const NotificationsContext = createContext(null);

/**
 * Shared notification state so the bell dropdown and the Notifications page stay in sync.
 * Shows the list for the signed-in account type. Replace with API calls when the backend exists.
 */
export function NotificationsProvider({ children }) {
  const { user } = useAuth();
  const role = user?.role;
  const [readKeys, setReadKeys] = useState({}); // "role:id" -> true once read

  const value = useMemo(() => {
    const base = notificationsByRole[role] ?? [];
    const items = base.map((n) => (readKeys[`${role}:${n.id}`] ? { ...n, unread: false } : n));
    return {
      notifications: items,
      unreadCount: items.filter((n) => n.unread).length,
      markRead: (id) => setReadKeys((k) => ({ ...k, [`${role}:${id}`]: true })),
      markAllRead: () =>
        setReadKeys((k) => ({ ...k, ...Object.fromEntries(base.map((n) => [`${role}:${n.id}`, true])) })),
    };
  }, [role, readKeys]);

  return <NotificationsContext.Provider value={value}>{children}</NotificationsContext.Provider>;
}

export const useNotifications = () => useContext(NotificationsContext);