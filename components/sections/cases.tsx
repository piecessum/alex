import Link from "next/link";
import {
  IconDatabase,
  IconFilter,
  IconArrowRight,
} from "@tabler/icons-react";
import { casesData } from "@/lib/cases-data";

const iconMap = {
  database: IconDatabase,
  filter: IconFilter,
} as const;

export function Cases() {
  return (
    <section id="cases" className="relative w-full py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-12">
          <span className="text-sm font-mono uppercase tracking-wider text-neutral-500 dark:text-neutral-400">
            // кейсы
          </span>
          <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            Как я решаю задачи
          </h2>
          <p className="mt-4 max-w-3xl text-base text-neutral-600 sm:text-lg dark:text-neutral-400">
            Два примера, где я довёл задачу от проблемы и интервью до архитектуры
            решения и измеримого результата. Нажмите на кейс, чтобы изучить
            подробнее.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          {casesData.map((c) => {
            const Icon = iconMap[c.iconKey];
            return (
              <Link
                key={c.slug}
                href={`/cases/${c.slug}`}
                className="group flex flex-col rounded-3xl border border-neutral-200 bg-white/50 p-6 backdrop-blur transition hover:border-neutral-300 sm:p-8 dark:border-neutral-800 dark:bg-neutral-950/50 dark:hover:border-neutral-700"
              >
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-indigo-500/10 text-indigo-500 dark:text-indigo-400">
                    <Icon className="h-5 w-5" />
                  </div>
                  <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                    <span className="font-mono text-sm text-neutral-400 dark:text-neutral-500">
                      Кейс {c.id}
                    </span>
                    <span className="rounded-md border border-neutral-200 bg-neutral-50 px-2 py-0.5 text-[11px] text-neutral-600 dark:border-neutral-800 dark:bg-neutral-900 dark:text-neutral-300">
                      {c.tag}
                    </span>
                  </div>
                </div>

                <h3 className="mt-5 text-xl font-bold tracking-tight sm:text-2xl">
                  {c.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-neutral-600 dark:text-neutral-400">
                  {c.summary}
                </p>

                <div className="mt-6 grid grid-cols-3 gap-3">
                  {c.metrics.map((m) => (
                    <div key={m.label}>
                      <div className="text-lg font-bold tracking-tight text-indigo-600 sm:text-xl dark:text-indigo-400">
                        {m.value}
                      </div>
                      <div className="mt-1 text-[11px] leading-snug text-neutral-500 dark:text-neutral-400">
                        {m.label}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-auto inline-flex items-center gap-1.5 pt-6 text-sm font-medium text-indigo-600 dark:text-indigo-400">
                  Открыть кейс
                  <IconArrowRight className="h-4 w-4" />
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
