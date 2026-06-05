"use client";

import { cn } from "@/lib/utils";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import {
  IconChartBar,
  IconCheck,
  IconCode,
  IconDatabase,
  IconFileText,
  IconPalette,
  IconTestPipe,
} from "@tabler/icons-react";

const Tags = ({ items }: { items: string[] }) => (
  <div className="mt-3 flex flex-wrap gap-1.5">
    {items.map((t) => (
      <span
        key={t}
        className="rounded-md border border-neutral-200 bg-neutral-50 px-2 py-0.5 text-[11px] text-neutral-700 dark:border-neutral-800 dark:bg-neutral-900 dark:text-neutral-300"
      >
        {t}
      </span>
    ))}
  </div>
);

const frame =
  "relative flex h-full min-h-32 w-full flex-1 overflow-hidden rounded-xl";

const Header = ({
  variant,
}: {
  variant: "analysis" | "design" | "docs" | "db" | "qa" | "bi";
}) => {
  if (variant === "analysis") {
    return (
      <div
        className={cn(
          frame,
          "items-center justify-center bg-gradient-to-br from-indigo-500/10 via-purple-500/[0.08] to-transparent"
        )}
      >
        <svg
          viewBox="0 0 260 96"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="h-[78%] w-auto transition-transform duration-500 group-hover/bento:scale-[1.03]"
        >
          {/* connectors */}
          <path
            d="M58 48 H92"
            className="stroke-indigo-400/60"
            strokeWidth="2"
          />
          <path
            d="M152 48 H188"
            className="stroke-indigo-400/60"
            strokeWidth="2"
          />
          <path
            d="M122 66 V84 H214 V64"
            className="stroke-purple-400/60"
            strokeWidth="2"
            strokeDasharray="4 4"
          />
          {/* arrowheads */}
          <path d="M92 48 l-7 -3.5 v7 z" className="fill-indigo-400/70" />
          <path d="M188 48 l-7 -3.5 v7 z" className="fill-indigo-400/70" />
          <path d="M214 66 l-3.5 7 l3.5 0 l3.5 -7 z" className="fill-purple-400/70" />
          {/* start node */}
          <circle
            cx="40"
            cy="48"
            r="16"
            className="fill-indigo-500/15 stroke-indigo-500/60"
            strokeWidth="2"
          />
          {/* decision diamond */}
          <path
            d="M122 30 L152 48 L122 66 L92 48 Z"
            className="fill-purple-500/15 stroke-purple-500/60"
            strokeWidth="2"
          />
          {/* task node */}
          <rect
            x="188"
            y="34"
            width="50"
            height="28"
            rx="6"
            className="fill-indigo-500/15 stroke-indigo-500/60"
            strokeWidth="2"
          />
        </svg>
      </div>
    );
  }

  if (variant === "db") {
    return (
      <div
        className={cn(
          frame,
          "flex-col bg-gradient-to-br from-blue-500/10 to-cyan-500/[0.08]"
        )}
      >
        <div className="flex items-center gap-1.5 border-b border-blue-500/15 px-3 py-2">
          <span className="h-2.5 w-2.5 rounded-full bg-red-400/70" />
          <span className="h-2.5 w-2.5 rounded-full bg-yellow-400/70" />
          <span className="h-2.5 w-2.5 rounded-full bg-green-400/70" />
          <span className="ml-2 font-mono text-[10px] text-blue-500/60">
            query.sql
          </span>
        </div>
        <div className="flex flex-1 flex-col justify-center gap-0.5 px-4 font-mono text-[11px] leading-relaxed">
          <div>
            <span className="text-pink-500 dark:text-pink-400">SELECT</span>{" "}
            <span className="text-sky-500 dark:text-sky-300">count</span>
            <span className="text-neutral-400">(*)</span>
          </div>
          <div>
            <span className="text-pink-500 dark:text-pink-400">FROM</span>{" "}
            <span className="text-blue-600 dark:text-blue-300">orders</span>
          </div>
          <div>
            <span className="text-pink-500 dark:text-pink-400">WHERE</span>{" "}
            <span className="text-neutral-500 dark:text-neutral-300">status</span>{" "}
            <span className="text-neutral-400">=</span>{" "}
            <span className="text-emerald-500 dark:text-emerald-400">
              &apos;paid&apos;
            </span>
          </div>
          <div>
            <span className="text-pink-500 dark:text-pink-400">GROUP BY</span>{" "}
            <span className="text-neutral-500 dark:text-neutral-300">
              client_id
            </span>
            <span className="text-neutral-400">;</span>
          </div>
        </div>
      </div>
    );
  }

  if (variant === "docs") {
    return (
      <div
        className={cn(
          frame,
          "items-center justify-center bg-gradient-to-br from-emerald-500/10 to-teal-500/[0.08] p-5"
        )}
      >
        <div className="flex h-full w-full max-w-[200px] flex-col gap-2 rounded-lg border border-emerald-500/20 bg-white/70 p-3.5 shadow-sm transition-transform duration-500 group-hover/bento:scale-[1.03] dark:bg-white/[0.04]">
          <div className="h-2.5 w-1/2 rounded bg-emerald-500/60" />
          <div className="mt-1 space-y-1.5">
            <div className="h-1.5 w-full rounded bg-emerald-500/25" />
            <div className="h-1.5 w-[92%] rounded bg-emerald-500/25" />
            <div className="h-1.5 w-[97%] rounded bg-emerald-500/25" />
          </div>
          <div className="mt-1 space-y-1.5">
            {[85, 70].map((w) => (
              <div key={w} className="flex items-center gap-1.5">
                <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-500/60" />
                <div
                  className="h-1.5 rounded bg-emerald-500/25"
                  style={{ width: `${w}%` }}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  if (variant === "design") {
    return (
      <div
        className={cn(
          frame,
          "items-center justify-center gap-3 bg-gradient-to-br from-pink-500/10 to-orange-500/[0.08] p-4"
        )}
      >
        <div className="flex flex-col gap-1.5 transition-transform duration-500 group-hover/bento:-translate-y-0.5">
          {["bg-pink-500/70", "bg-purple-500/70", "bg-orange-400/70", "bg-rose-400/70"].map(
            (c) => (
              <span
                key={c}
                className={cn("h-6 w-6 rounded-md ring-1 ring-black/5", c)}
              />
            )
          )}
        </div>
        <div className="flex h-[80%] w-28 flex-col gap-2 rounded-lg border border-pink-500/20 bg-white/70 p-2.5 shadow-sm transition-transform duration-500 group-hover/bento:translate-y-0.5 dark:bg-white/[0.04]">
          <div className="h-6 rounded bg-gradient-to-r from-pink-400/50 to-orange-400/50" />
          <div className="flex gap-1.5">
            <span className="h-5 w-5 shrink-0 rounded-full bg-purple-400/50" />
            <div className="flex-1 space-y-1 pt-0.5">
              <div className="h-1.5 w-full rounded bg-neutral-400/30" />
              <div className="h-1.5 w-2/3 rounded bg-neutral-400/30" />
            </div>
          </div>
          <div className="mt-auto h-4 w-16 rounded-md bg-gradient-to-r from-pink-500/60 to-orange-500/60" />
        </div>
      </div>
    );
  }

  if (variant === "qa") {
    const items = [
      { w: "85%", done: true },
      { w: "70%", done: true },
      { w: "78%", done: false },
    ];
    return (
      <div
        className={cn(
          frame,
          "items-center justify-center bg-gradient-to-br from-yellow-500/10 to-amber-500/[0.08] p-4"
        )}
      >
        <div className="w-[78%] space-y-3 transition-transform duration-500 group-hover/bento:scale-[1.03]">
          {items.map((it, i) => (
            <div key={i} className="flex items-center gap-2.5">
              {it.done ? (
                <span className="flex h-4 w-4 shrink-0 items-center justify-center rounded-[5px] bg-emerald-500/80">
                  <IconCheck className="h-3 w-3 text-white" stroke={3} />
                </span>
              ) : (
                <span className="h-4 w-4 shrink-0 rounded-[5px] border-2 border-amber-500/50" />
              )}
              <div
                className={cn(
                  "h-2 rounded",
                  it.done ? "bg-amber-500/25" : "bg-amber-500/40"
                )}
                style={{ width: it.w }}
              />
            </div>
          ))}
        </div>
      </div>
    );
  }

  // bi
  const bars = [40, 70, 50, 90, 60, 80];
  return (
    <div
      className={cn(
        frame,
        "flex-col justify-end bg-gradient-to-br from-sky-500/10 to-indigo-500/[0.08] p-4"
      )}
    >
      <div className="relative flex h-full w-full items-end gap-2">
        {/* grid lines */}
        <div className="pointer-events-none absolute inset-0 flex flex-col justify-between">
          {[0, 1, 2, 3].map((i) => (
            <div key={i} className="h-px w-full bg-sky-500/10" />
          ))}
        </div>
        {/* bars */}
        {bars.map((h, i) => (
          <div
            key={i}
            style={{ height: `${h}%` }}
            className="flex-1 rounded-t bg-gradient-to-t from-sky-500/50 to-sky-400/25 transition-all duration-500 group-hover/bento:from-sky-500/70 group-hover/bento:to-sky-400/40"
          />
        ))}
        {/* trend line */}
        <svg
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
          className="pointer-events-none absolute inset-0 h-full w-full"
        >
          <polyline
            points="8,62 25,32 42,52 58,12 75,42 92,22"
            className="fill-none stroke-indigo-500/70 dark:stroke-indigo-400/70"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
          />
          {[
            [8, 62],
            [25, 32],
            [42, 52],
            [58, 12],
            [75, 42],
            [92, 22],
          ].map(([cx, cy], i) => (
            <circle
              key={i}
              cx={cx}
              cy={cy}
              r="2"
              className="fill-indigo-500 dark:fill-indigo-400"
              vectorEffect="non-scaling-stroke"
            />
          ))}
        </svg>
      </div>
    </div>
  );
};

export function Skills() {
  return (
    <section id="skills" className="relative w-full py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-12">
          <span className="text-sm font-mono uppercase tracking-wider text-neutral-500 dark:text-neutral-400">
            // навыки и стек
          </span>
          <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            Что я умею
          </h2>
        </div>

        <BentoGrid className="md:auto-rows-[22rem] max-w-none mx-0">
          <BentoGridItem
            title="Бизнес-анализ"
            description={
              <div>
                Сбор требований, моделирование процессов, спецификации,
                декомпозиция, приёмочное тестирование.
                <Tags
                  items={[
                    "User Story",
                    "Use Case",
                    "BPMN",
                    "AS-IS / TO-BE",
                    "SRS",
                    "Системный анализ",
                  ]}
                />
              </div>
            }
            header={<Header variant="analysis" />}
            icon={<IconChartBar className="h-4 w-4 text-neutral-500" />}
            className="md:col-span-2"
          />
          <BentoGridItem
            title="Базы данных"
            description={
              <div>
                Пишу SQL-запросы для аналитики, проверяю гипотезы.
                <Tags items={["SQL", "PostgreSQL", "DBeaver", "JSON"]} />
              </div>
            }
            header={<Header variant="db" />}
            icon={<IconDatabase className="h-4 w-4 text-neutral-500" />}
          />
          <BentoGridItem
            title="Документация"
            description={
              <div>
                Веду базу знаний, пишу инструкции, ТЗ, спецификации.
                <Tags
                  items={["Confluence", "Jira", "Obsidian", "Notion", "GitLab"]}
                />
              </div>
            }
            header={<Header variant="docs" />}
            icon={<IconFileText className="h-4 w-4 text-neutral-500" />}
          />
          <BentoGridItem
            title="Дизайн и прототипы"
            description={
              <div>
                User Flow, дерево метрик, дизайн-система, презентации.
                <Tags
                  items={["Figma", "FigJam", "Slides", "Keynote", "Дизайн-система"]}
                />
              </div>
            }
            header={<Header variant="design" />}
            icon={<IconPalette className="h-4 w-4 text-neutral-500" />}
          />
          <BentoGridItem
            title="QA и приёмка"
            description={
              <div>
                Критерии приёмки, ad-hoc тестирование, API-тесты.
                <Tags items={["Postman", "Ad-hoc", "Чек-листы"]} />
              </div>
            }
            header={<Header variant="qa" />}
            icon={<IconTestPipe className="h-4 w-4 text-neutral-500" />}
          />
          <BentoGridItem
            title="BI и аналитика"
            description={
              <div>
                Дашборды, продуктовые метрики, ретроспективные отчёты.
                <Tags items={["ReDash", "Excel", "Google Sheets"]} />
              </div>
            }
            header={<Header variant="bi" />}
            icon={<IconCode className="h-4 w-4 text-neutral-500" />}
            className="md:col-span-2"
          />
        </BentoGrid>
      </div>
    </section>
  );
}
