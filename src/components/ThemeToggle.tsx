"use client";

import React from "react";
import { useTheme } from "next-themes";

interface ThemeToggleProps {
  className?: string;
}

const ThemeToggle: React.FC<ThemeToggleProps> = ({ className }) => {
  const { theme, setTheme } = useTheme();

  const isDark = theme === "dark";

  return (
    <button
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className={className}
      aria-label="Toggle theme"
      type="button"
    >
      {isDark ? "☀️" : "🌙"}
    </button>
  );
};

export default ThemeToggle;

