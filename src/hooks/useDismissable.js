import { useEffect, useRef, useState } from "react";

/**
 * State for popovers/dropdowns: closes on outside click and on Escape.
 * Attach `ref` to the wrapper that contains both the trigger and the panel.
 */
export default function useDismissable() {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    if (!open) return;
    const onPointerDown = (e) => {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false);
    };
    const onKeyDown = (e) => e.key === "Escape" && setOpen(false);
    document.addEventListener("mousedown", onPointerDown);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("mousedown", onPointerDown);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  return { ref, open, setOpen, toggle: () => setOpen((o) => !o), close: () => setOpen(false) };
}