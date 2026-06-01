"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => setMounted(true), []);

  const isDark = mounted ? theme === "dark" : true;

  return (
    <button
      type="button"
      aria-label="Переключить тему"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="relative inline-flex h-9 w-9 items-center justify-center rounded-full border border-neutral-200 bg-white/60 backdrop-blur dark:border-neutral-800 dark:bg-neutral-950/60 hover:bg-neutral-100 dark:hover:bg-neutral-900"
    >
      {isDark ? (
        <Moon className="h-4 w-4 text-neutral-200" />
      ) : (
        <Sun className="h-4 w-4 text-neutral-700" />
      )}
    </button>
  );
}
