import Link from "next/link";
import Image from "next/image";
import {
  IconDatabase,
  IconFilter,
  IconMessages,
  IconListCheck,
  IconLayoutDashboard,
  IconCompass,
  IconArrowRight,
} from "@tabler/icons-react";
import { casesData } from "@/lib/cases-data";
import type { CaseIconKey } from "@/lib/cases-data";

const iconMap: Record<CaseIconKey, typeof IconDatabase> = {
  database: IconDatabase,
  filter: IconFilter,
  insight: IconMessages,
  requirements: IconListCheck,
  navigation: IconLayoutDashboard,
  principles: IconCompass,
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
            Одна большая история — как я веду B2B-маркетплейс «из утилиты в
            платформу» — разбитая на связанные кейсы. От интервью с клиентами и
            фундамента требований до редизайна и дизайн-системы. Каждый можно
            открыть и прочитать за пару минут.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          {casesData.map((c) => {
            const Icon = iconMap[c.iconKey];
            return (
              <Link
                key={c.slug}
                href={`/cases/${c.slug}`}
                className="group flex flex-col overflow-hidden rounded-3xl border border-neutral-200 bg-white/50 backdrop-blur transition hover:border-neutral-300 dark:border-neutral-800 dark:bg-neutral-950/50 dark:hover:border-neutral-700"
              >
                <div className="relative aspect-[16/9] w-full overflow-hidden border-b border-neutral-200 dark:border-neutral-800">
                  <Image
                    src={c.image}
                    alt={c.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover transition duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="flex flex-1 flex-col p-6 sm:p-8">
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

                <div className="mt-auto inline-flex items-center gap-1.5 pt-6 text-sm font-medium text-indigo-600 dark:text-indigo-400">
                  Открыть кейс
                  <IconArrowRight className="h-4 w-4" />
                </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
