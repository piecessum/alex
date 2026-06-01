"use client";

import { HoverEffect } from "@/components/ui/card-hover";

const courses = [
  {
    title: "Тестирование ПО",
    description: "Stepik — основы QA, чек-листы, тест-кейсы, API-тестирование.",
    meta: "Stepik · 2025",
  },
  {
    title: "UX-исследования",
    description: "Нетология — анализ данных и выявление требований, глубинные интервью.",
    meta: "Нетология · 2023",
  },
  {
    title: "UX/UI-дизайнер",
    description: "SkillBox — комплексная программа продуктового дизайнера.",
    meta: "SkillBox · 2021",
  },
  {
    title: "Веб-дизайн в Figma",
    description: "Udemy — практические основы UX и UI на проектах.",
    meta: "Udemy · 2021",
  },
  {
    title: "Пользовательский интерфейс",
    description: "Бюро Горбунова — представление информации, интерфейсные приёмы.",
    meta: "Бюро Горбунова · 2021",
  },
];

export function Education() {
  return (
    <section id="education" className="relative w-full py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div>
          <span className="text-sm font-mono uppercase tracking-wider text-neutral-500 dark:text-neutral-400">
            // образование
          </span>
          <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            Учусь постоянно
          </h2>
        </div>

        <div className="mt-8 rounded-2xl border border-neutral-200 bg-white/50 p-6 backdrop-blur dark:border-neutral-800 dark:bg-neutral-950/50">
          <div className="flex flex-wrap items-baseline justify-between gap-2">
            <h3 className="text-lg font-semibold sm:text-xl">
              БГТУ «ВОЕНМЕХ» им. Д.Ф. Устинова
            </h3>
            <span className="text-sm text-neutral-500 dark:text-neutral-400">
              Санкт-Петербург · 2020
            </span>
          </div>
          <p className="mt-1 text-sm text-neutral-600 dark:text-neutral-400">
            Высшее · Факультет информационных и управляющих систем · Радиотехника
          </p>
        </div>

        <div className="mt-4">
          <HoverEffect items={courses} />
        </div>
      </div>
    </section>
  );
}
