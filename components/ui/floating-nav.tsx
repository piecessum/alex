"use client";

import React from "react";
import { cn } from "@/lib/utils";
import { ThemeToggle } from "@/components/theme-toggle";

export const FloatingNav = ({
  navItems,
  className,
}: {
  navItems: {
    name: string;
    link: string;
    icon?: React.ReactNode;
  }[];
  className?: string;
}) => {
  const shadow =
    "shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.05),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.05)]";

  return (
    <div
      className={cn(
        "fixed top-6 inset-x-0 mx-auto z-50 flex max-w-fit items-center justify-center gap-2 sm:gap-3",
        className
      )}
    >
      {/* Овал со всеми пунктами навигации */}
      <div
        className={cn(
          "flex items-center gap-1 rounded-full border border-neutral-200 bg-white/70 px-2 py-2 backdrop-blur sm:gap-2 sm:px-4 dark:border-white/[0.15] dark:bg-black/70",
          shadow
        )}
      >
        {navItems.map((item, idx) => (
          <a
            key={`nav-${idx}`}
            href={item.link}
            className={cn(
              "relative flex items-center gap-1 rounded-full px-3 py-1.5 text-sm text-neutral-700 transition hover:bg-neutral-100 dark:text-neutral-200 dark:hover:bg-neutral-900"
            )}
          >
            {item.icon && <span className="block">{item.icon}</span>}
            <span className="hidden sm:block">{item.name}</span>
          </a>
        ))}
      </div>

      {/* Отдельный кружок переключения темы */}
      <span className={cn("inline-flex rounded-full", shadow)}>
        <ThemeToggle />
      </span>
    </div>
  );
};
