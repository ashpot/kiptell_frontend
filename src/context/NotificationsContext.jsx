import { createContext, useContext, useMemo, useState } from "react";
import { notifications as initialNotifications } from "@/data/notifications";

const NotificationsContext = createContext(null);

/**
 * Shared notification state so the bell dropdown and the Notifications page stay in sync.
 * Replace the local state with API calls when the backend exists.
 */
export function NotificationsProvider({ children }) {
  const [items, setItems] = useState(initialNotifications);

  const value = useMemo(
    () => ({
      notifications: items,
      unreadCount: items.filter((n) => n.unread).length,
      markRead: (id) => setItems((list) => list.map((n) => (n.id === id ? { ...n, unread: false } : n))),
      markAllRead: () => setItems((list) => list.map((n) => ({ ...n, unread: false }))),
    }),
    [items]
  );

  return <NotificationsContext.Provider value={value}>{children}</NotificationsContext.Provider>;
}

export const useNotifications = () => useContext(NotificationsContext);