"use client";

import { Timeline } from "@/components/ui/timeline";

const achievements = [
  "Сопроводил запуск 24 крупных фич от исследования до релиза",
  "Выявил паттерны взаимодействия, объединил их в дизайн-систему — упростил навигацию, сократил отток пользователей на 20%",
  "Провёл глобальный редизайн на основе исследований — ускорил разработку фронтенда в 1,5 раза, снизил количество правок на 30%",
  "Внедрил QA-ориентированный процесс — повысил качество релизов и снизил постпрод-баги на 25%",
  "Подключил AI-ассистента Claude к базе знаний — ускорил поиск, упростил онбординг, выросла точность ретроспективных отчётов",
];

const duties = [
  "Сбор и формализация требований: User Stories, Use Cases, AS-IS / TO-BE в BPMN, stakeholder-интервью",
  "Планирование и прототипирование User Flow, дерево метрик",
  "Декомпозиция эпиков, управление бэклогом, постановка задач в Jira и GitLab, критерии приёмки",
  "Координация команды из 6 разработчиков, DevOps, QA и маркетолога",
  "Ведение документации в Confluence и GitLab (SRS, Единая база, Система решений)",
  "Подготовка и проведение презентаций и КП — помогали привлекать клиентов",
];

const Achievements = () => (
  <ul className="space-y-2">
    {achievements.map((a, i) => (
      <li
        key={i}
        className="flex gap-2 text-sm text-neutral-700 sm:text-base dark:text-neutral-300"
      >
        <span className="mt-2 inline-block h-1 w-1 shrink-0 rounded-full bg-indigo-500" />
        <span>{a}</span>
      </li>
    ))}
  </ul>
);

const data = [
  {
    title: "2021 — сейчас",
    content: (
      <div>
        <div className="mb-2 flex flex-wrap items-baseline gap-2">
          <h3 className="text-xl font-bold sm:text-2xl">
            Аналитик · UX/UI-дизайнер
          </h3>
        </div>
        <p className="text-sm text-neutral-500 dark:text-neutral-400">
          Студия 3DaVinci · Воронеж · 5 лет 3 месяца
        </p>
        <p className="mt-4 text-sm leading-relaxed text-neutral-700 sm:text-base dark:text-neutral-300">
          B2B-маркетплейс для перевода оптовых продаж в онлайн. 20 активных
          компаний-клиентов (электротехника, сантехника, FMCG, стройматериалы,
          светотехника и др.). Пришёл как UX-дизайнер, вырос до бизнес-аналитика:
          самостоятельно выстроил цикл работы с требованиями — от исследований
          до приёмки.
        </p>

        <div className="mt-6">
          <h4 className="mb-3 text-sm font-mono uppercase tracking-wider text-neutral-500 dark:text-neutral-400">
            Ключевые достижения
          </h4>
          <Achievements />
        </div>

        <div className="mt-6">
          <h4 className="mb-3 text-sm font-mono uppercase tracking-wider text-neutral-500 dark:text-neutral-400">
            Зона ответственности
          </h4>
          <ul className="space-y-2">
            {duties.map((d, i) => (
              <li
                key={i}
                className="flex gap-2 text-sm text-neutral-600 dark:text-neutral-400"
              >
                <span className="mt-2 inline-block h-1 w-1 shrink-0 rounded-full bg-neutral-400" />
                <span>{d}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    ),
  },
];

export function Experience() {
  return (
    <section id="experience" className="relative w-full py-12">
      <div className="mx-auto max-w-6xl px-6 pt-12">
        <span className="text-sm font-mono uppercase tracking-wider text-neutral-500 dark:text-neutral-400">
          // опыт работы
        </span>
        <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
          5 лет 3 месяца в B2B
        </h2>
      </div>
      <Timeline data={data} />
    </section>
  );
}
