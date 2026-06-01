const points = [
  {
    title: "Бизнес",
    text: "Выстраиваю требования из интервью со стейкхолдерами. Декомпозирую эпики и веду продукт от исследования до релиза.",
  },
  {
    title: "Пользователь",
    text: "Дизайнерский бэкграунд: понимаю UX, проектирую User Flow, собираю дерево метрик и закрываю проблемы до того, как они уйдут в прод.",
  },
  {
    title: "Разработка",
    text: "Пишу SRS, ставлю задачи в Jira и GitLab, формулирую критерии приёмки и сопровождаю команду до сдачи.",
  },
];

export function About() {
  return (
    <section id="about" className="relative w-full py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div>
          <span className="text-sm font-mono uppercase tracking-wider text-neutral-500 dark:text-neutral-400">
            // обо мне
          </span>
          <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            Понимаю продукт с трёх сторон
          </h2>
          <p className="mt-4 max-w-3xl text-base text-neutral-600 sm:text-lg dark:text-neutral-400">
            Пришёл в аналитику органически. Работая UX-дизайнером в
            B2B-маркетплейсе, самостоятельно выстроил полный цикл работы с
            требованиями — от глубинных интервью до постановки задач и приёмки
            результатов.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-4 md:grid-cols-3">
          {points.map((p, i) => (
            <div
              key={p.title}
              className="group relative rounded-2xl border border-neutral-200 bg-white/50 p-6 backdrop-blur transition hover:border-neutral-300 dark:border-neutral-800 dark:bg-neutral-950/50 dark:hover:border-neutral-700"
            >
              <div className="absolute inset-x-0 -top-px mx-auto h-px w-3/4 bg-gradient-to-r from-transparent via-indigo-500/50 to-transparent opacity-0 transition group-hover:opacity-100" />
              <div className="mb-3 inline-flex h-8 w-8 items-center justify-center rounded-lg bg-indigo-500/10 text-sm font-mono text-indigo-500 dark:text-indigo-400">
                0{i + 1}
              </div>
              <h3 className="text-lg font-semibold">{p.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-neutral-600 dark:text-neutral-400">
                {p.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
