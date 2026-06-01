import { IconDatabase, IconFilter, IconArrowRight } from "@tabler/icons-react";

type Metric = { value: string; label: string };

type CaseItem = {
  id: string;
  tag: string;
  icon: typeof IconDatabase;
  title: string;
  problem: string;
  actions: string[];
  metrics: Metric[];
  stack: string[];
  chart: "kb" | "filters";
};

const cases: CaseItem[] = [
  {
    id: "01",
    tag: "База знаний · AI",
    icon: IconDatabase,
    title: "База знаний с нуля для всей команды",
    problem:
      "Знания жили в головах и локальных файлах: у фронта свои, у бэка свои, у менеджеров и дизайна — ничего общего. Разработчики переспрашивали, теряли контекст и время, а я превращался в живую энциклопедию.",
    actions: [
      "Перенёс исследования, User Stories и кейсы в общую базу на GitLab со структурой по направлениям",
      "Стал редактором и куратором: обучил менеджеров и ключевых разработчиков вести и связывать статьи",
      "Подключил AI-ассистента Claude — отвечает на типовые вопросы со ссылками на актуальные статьи",
    ],
    metrics: [
      { value: "−55%", label: "вопросов ко мне в личку" },
      { value: "5–10 мин", label: "найти ответ вместо часов переписок" },
      { value: "5", label: "разделов базы по направлениям" },
    ],
    stack: ["GitLab", "Confluence", "Claude", "AI-ассистент", "Онбординг"],
    chart: "kb",
  },
  {
    id: "02",
    tag: "Системный анализ",
    icon: IconFilter,
    title: "Редизайн системы фильтров в B2B-маркетплейсе",
    problem:
      "Старая система фильтров разрослась до монстра: путала клиентов многоуровневыми сценариями и ломала вёрстку при каждом изменении ширины экрана. Категории и фильтры были смешаны в одну логику.",
    actions: [
      "Провёл глубинные интервью с клиентами из разных отраслей: электротехника, сантехника, FMCG",
      "Выявил два сценария поиска товаров и зафиксировал их как требования",
      "Спроектировал решение: категории и фильтры — два независимых блока для дизайна, фронта и бэка",
    ],
    metrics: [
      { value: "2", label: "ключевых сценария поиска" },
      { value: "3", label: "независимых слоя: дизайн · фронт · бэк" },
      { value: "−30%", label: "доработок вёрстки после релиза" },
    ],
    stack: ["Глубинные интервью", "User Story", "BPMN", "Декомпозиция", "SRS"],
    chart: "filters",
  },
];

const CaseChart = ({ variant }: { variant: "kb" | "filters" }) => {
  if (variant === "kb") {
    return (
      <div className="rounded-xl border border-neutral-200 bg-white/60 p-5 dark:border-neutral-800 dark:bg-neutral-950/40">
        <div className="flex items-center justify-between">
          <span className="text-xs font-mono uppercase tracking-wider text-neutral-500 dark:text-neutral-400">
            Вопросы ко мне
          </span>
          <span className="text-sm font-semibold text-emerald-600 dark:text-emerald-400">
            −55%
          </span>
        </div>
        <div className="mt-5 space-y-4">
          <div>
            <div className="mb-1.5 flex items-baseline justify-between text-xs text-neutral-500 dark:text-neutral-400">
              <span>До базы знаний</span>
              <span className="font-medium text-neutral-700 dark:text-neutral-300">
                100%
              </span>
            </div>
            <div className="h-2.5 w-full overflow-hidden rounded-full bg-neutral-200 dark:bg-neutral-800">
              <div className="h-full w-full rounded-full bg-neutral-400 dark:bg-neutral-600" />
            </div>
          </div>
          <div>
            <div className="mb-1.5 flex items-baseline justify-between text-xs text-neutral-500 dark:text-neutral-400">
              <span>После + AI-ассистент</span>
              <span className="font-medium text-neutral-700 dark:text-neutral-300">
                ≈ 45%
              </span>
            </div>
            <div className="h-2.5 w-full overflow-hidden rounded-full bg-neutral-200 dark:bg-neutral-800">
              <div className="h-full w-[45%] rounded-full bg-indigo-500" />
            </div>
          </div>
        </div>
        <p className="mt-5 text-xs leading-relaxed text-neutral-500 dark:text-neutral-400">
          Онбординг нового сотрудника: часы переписок → 5–10 минут самостоятельного
          поиска.
        </p>
      </div>
    );
  }

  return (
    <div className="rounded-xl border border-neutral-200 bg-white/60 p-5 dark:border-neutral-800 dark:bg-neutral-950/40">
      <span className="text-xs font-mono uppercase tracking-wider text-neutral-500 dark:text-neutral-400">
        Архитектура поиска
      </span>
      <div className="mt-5 flex items-center gap-3">
        <div className="flex-1">
          <div className="mb-2 text-[11px] uppercase tracking-wider text-neutral-400 dark:text-neutral-500">
            Было
          </div>
          <div className="rounded-lg border border-dashed border-red-400/50 bg-red-500/5 px-3 py-4 text-center text-xs leading-relaxed text-neutral-600 dark:text-neutral-300">
            Категории и фильтры
            <br />в одном блоке
          </div>
        </div>
        <IconArrowRight className="h-5 w-5 shrink-0 text-neutral-400" />
        <div className="flex-1">
          <div className="mb-2 text-[11px] uppercase tracking-wider text-neutral-400 dark:text-neutral-500">
            Стало
          </div>
          <div className="grid grid-cols-1 gap-2">
            <div className="rounded-lg border border-indigo-400/40 bg-indigo-500/10 px-3 py-2 text-center text-xs font-medium text-indigo-600 dark:text-indigo-300">
              Категории
            </div>
            <div className="rounded-lg border border-indigo-400/40 bg-indigo-500/10 px-3 py-2 text-center text-xs font-medium text-indigo-600 dark:text-indigo-300">
              Фильтры
            </div>
          </div>
        </div>
      </div>
      <p className="mt-5 text-xs leading-relaxed text-neutral-500 dark:text-neutral-400">
        Две сущности вместо одной — раздельно для дизайна, фронтенда и бэкенда.
        Вёрстка перестала ломаться каждый спринт.
      </p>
    </div>
  );
};

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
            решения и измеримого результата.
          </p>
        </div>

        <div className="space-y-6">
          {cases.map((c) => {
            const Icon = c.icon;
            return (
              <article
                key={c.id}
                className="rounded-3xl border border-neutral-200 bg-white/50 p-6 backdrop-blur sm:p-8 dark:border-neutral-800 dark:bg-neutral-950/50"
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
                <p className="mt-3 max-w-3xl text-sm leading-relaxed text-neutral-600 sm:text-base dark:text-neutral-400">
                  {c.problem}
                </p>

                <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-3">
                  {c.metrics.map((m) => (
                    <div
                      key={m.label}
                      className="rounded-2xl border border-neutral-200 bg-white/60 p-4 dark:border-neutral-800 dark:bg-neutral-950/40"
                    >
                      <div className="text-2xl font-bold tracking-tight text-indigo-600 sm:text-3xl dark:text-indigo-400">
                        {m.value}
                      </div>
                      <div className="mt-1 text-xs leading-snug text-neutral-500 dark:text-neutral-400">
                        {m.label}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-6 grid grid-cols-1 gap-6 lg:grid-cols-5">
                  <div className="lg:col-span-3">
                    <h4 className="mb-3 text-sm font-mono uppercase tracking-wider text-neutral-500 dark:text-neutral-400">
                      Что я сделал
                    </h4>
                    <ul className="space-y-2.5">
                      {c.actions.map((a, i) => (
                        <li
                          key={i}
                          className="flex gap-3 text-sm leading-relaxed text-neutral-700 dark:text-neutral-300"
                        >
                          <span className="mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-indigo-500/10 text-[11px] font-mono text-indigo-500 dark:text-indigo-400">
                            {i + 1}
                          </span>
                          <span>{a}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="lg:col-span-2">
                    <CaseChart variant={c.chart} />
                  </div>
                </div>

                <div className="mt-6 flex flex-wrap gap-1.5 border-t border-neutral-200 pt-5 dark:border-neutral-800">
                  {c.stack.map((s) => (
                    <span
                      key={s}
                      className="rounded-md border border-neutral-200 bg-neutral-50 px-2 py-0.5 text-[11px] text-neutral-700 dark:border-neutral-800 dark:bg-neutral-900 dark:text-neutral-300"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
