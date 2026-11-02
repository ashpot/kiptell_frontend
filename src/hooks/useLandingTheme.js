import { useState } from "react";

const KEY = "kiptell:landing-theme";

function initialTheme() {
  try {
    const saved = localStorage.getItem(KEY);
    if (saved === "dark" || saved === "light") return saved;
  } catch {
    /* storage unavailable */
  }
  const prefersDark = typeof window !== "undefined" && window.matchMedia?.("(prefers-color-scheme: dark)").matches;
  return prefersDark ? "dark" : "light";
}

/** Light/dark for the public landing page only. Starts from the visitor's device setting. */
export default function useLandingTheme() {
  const [theme, setTheme] = useState(initialTheme);

  const toggle = () => {
    const next = theme === "dark" ? "light" : "dark";
    setTheme(next);
    try {
      localStorage.setItem(KEY, next);
    } catch {
      /* ignore */
    }
  };

  return { theme, isDark: theme === "dark", toggle };
}