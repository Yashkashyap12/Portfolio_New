"use client";

import { useEffect, useState } from "react";
import { FiMoon, FiSun } from "react-icons/fi";

type Theme = "light" | "dark";

export default function ThemeToggle({ className = "" }: { className?: string }) {
  const [theme, setTheme] = useState<Theme | null>(null);

  // Sync with the class set by the inline script in layout.tsx
  useEffect(() => {
    setTheme(
      document.documentElement.classList.contains("dark") ? "dark" : "light",
    );
  }, []);

  const toggle = () => {
    const next: Theme = theme === "dark" ? "light" : "dark";
    document.documentElement.classList.toggle("dark", next === "dark");
    try {
      localStorage.setItem("theme", next);
    } catch {}
    setTheme(next);
  };

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={theme === "dark" ? "Switch to light theme" : "Switch to dark theme"}
      className={`flex h-11 w-11 items-center justify-center rounded-full border border-zinc-200 text-zinc-900 transition-colors hover:border-amber-600 hover:text-amber-700 dark:border-zinc-700 dark:text-zinc-100 dark:hover:text-amber-400 ${className}`}
    >
      {theme === "dark" ? <FiSun size={19} /> : <FiMoon size={19} />}
    </button>
  );
}