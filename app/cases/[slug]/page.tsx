import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import {
  IconDatabase,
  IconFilter,
  IconArrowLeft,
  IconArrowRight,
  IconCircleCheck,
  IconBulb,
  IconExternalLink,
} from "@tabler/icons-react";
import { ThemeToggle } from "@/components/theme-toggle";
import { CaseChart } from "@/components/cases/case-charts";
import { casesData, getCaseBySlug } from "@/lib/cases-data";

const iconMap = {
  database: IconDatabase,
  filter: IconFilter,
} as const;

export const dynamicParams = false;

export function generateStaticParams() {
  return casesData.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const c = getCaseBySlug(slug);
  if (!c) return { title: "Кейс не найден" };
  return {
    title: `${c.title} — кейс Алексея Масюты`,
    description: c.summary,
  };
}

export default async function CasePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const c = getCaseBySlug(slug);
  if (!c) notFound();

  const Icon = iconMap[c.iconKey];
  const other = casesData.find((x) => x.slug !== c.slug);

  return (
    <main className="relative w-full bg-background">
      <header className="sticky top-0 z-50 border-b border-neutral-200 bg-background/80 backdrop-blur dark:border-neutral-800">
        <div className="mx-auto flex max-w-4xl items-center justify-between px-6 py-4">
          <Link
            href="/#cases"
            className="inline-flex items-center gap-2 text-sm text-neutral-600 transition hover:text-indigo-600 dark:text-neutral-400 dark:hover:text-indigo-400"
          >
            <IconArrowLeft className="h-4 w-4" />
            Все кейсы
          </Link>
          <ThemeToggle />
        </div>
      </header>

      <article className="mx-auto max-w-4xl px-6 py-16 sm:py-20">
        <div className="flex items-center gap-3">
          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-indigo-500/10 text-indigo-500 dark:text-indigo-400">
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

        <h1 className="mt-6 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
          {c.title}
        </h1>
        <p className="mt-4 max-w-2xl text-lg text-neutral-600 dark:text-neutral-400">
          {c.summary}
        </p>

        {/* Ссылки на продукт и компанию */}
        {c.links.length > 0 && (
          <div className="mt-6 flex flex-wrap gap-2.5">
            {c.links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-9 items-center gap-1.5 rounded-full border border-neutral-200 bg-white/70 px-3.5 text-sm text-neutral-700 transition hover:border-neutral-300 hover:text-indigo-600 dark:border-neutral-800 dark:bg-neutral-950/70 dark:text-neutral-300 dark:hover:border-neutral-700 dark:hover:text-indigo-400"
              >
                {l.label}
                <IconExternalLink className="h-3.5 w-3.5" />
              </a>
            ))}
          </div>
        )}

        {/* Обложка кейса */}
        <div className="relative mt-10 aspect-[16/9] w-full overflow-hidden rounded-3xl border border-neutral-200 dark:border-neutral-800">
          <Image
            src={c.image}
            alt={c.title}
            fill
            sizes="(max-width: 896px) 100vw, 896px"
            priority
            className="object-cover"
          />
        </div>

        {/* О проекте */}
        <section className="mt-12">
          <h2 className="text-sm font-mono uppercase tracking-wider text-neutral-500 dark:text-neutral-400">
            // о проекте
          </h2>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-neutral-600 dark:text-neutral-400">
            {c.context}
          </p>
        </section>

        {/* Проблема */}
        <section className="mt-14">
          <h2 className="text-sm font-mono uppercase tracking-wider text-neutral-500 dark:text-neutral-400">
            // проблема
          </h2>
          <p className="mt-4 text-lg font-medium text-neutral-800 dark:text-neutral-200">
            {c.problem}
          </p>
          <ul className="mt-5 space-y-2.5">
            {c.situation.map((s, i) => (
              <li
                key={i}
                className="flex gap-3 text-base leading-relaxed text-neutral-600 dark:text-neutral-400"
              >
                <span className="mt-2.5 inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-neutral-400" />
                <span>{s}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* Как подходил */}
        <section className="mt-14">
          <h2 className="text-sm font-mono uppercase tracking-wider text-neutral-500 dark:text-neutral-400">
            // как я подходил к задаче
          </h2>
          <div className="mt-6 space-y-6">
            {c.actions.map((a, i) => (
              <div key={i} className="flex gap-4">
                <span className="font-mono text-sm text-indigo-500 dark:text-indigo-400">
                  {i + 1}.
                </span>
                <div>
                  <h3 className="font-semibold text-neutral-900 dark:text-neutral-100">
                    {a.title}
                  </h3>
                  <p className="mt-1 text-base leading-relaxed text-neutral-600 dark:text-neutral-400">
                    {a.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* В цифрах */}
        <section className="mt-14">
          <h2 className="text-sm font-mono uppercase tracking-wider text-neutral-500 dark:text-neutral-400">
            // в цифрах
          </h2>
          <div className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-3">
            {c.metrics.map((m) => (
              <div
                key={m.label}
                className="rounded-2xl border border-neutral-200 bg-white/50 p-5 backdrop-blur dark:border-neutral-800 dark:bg-neutral-950/50"
              >
                <div className="text-3xl font-bold tracking-tight text-indigo-600 sm:text-4xl dark:text-indigo-400">
                  {m.value}
                </div>
                <div className="mt-1.5 text-sm leading-snug text-neutral-500 dark:text-neutral-400">
                  {m.label}
                </div>
              </div>
            ))}
          </div>
          <div className="mt-5">
            <CaseChart variant={c.chart} />
          </div>
        </section>

        {/* Результат */}
        <section className="mt-14">
          <h2 className="text-sm font-mono uppercase tracking-wider text-neutral-500 dark:text-neutral-400">
            // результат
          </h2>
          <ul className="mt-5 space-y-3">
            {c.results.map((r, i) => (
              <li
                key={i}
                className="flex gap-3 text-base leading-relaxed text-neutral-700 dark:text-neutral-300"
              >
                <IconCircleCheck className="mt-0.5 h-5 w-5 shrink-0 text-emerald-500" />
                <span>{r}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* Вывод */}
        <section className="mt-14 rounded-2xl border border-indigo-200 bg-indigo-50/50 p-6 dark:border-indigo-900/50 dark:bg-indigo-950/20">
          <div className="flex items-center gap-2 text-sm font-mono uppercase tracking-wider text-indigo-600 dark:text-indigo-400">
            <IconBulb className="h-4 w-4" />
            что я вынес
          </div>
          <p className="mt-3 text-base leading-relaxed text-neutral-700 dark:text-neutral-300">
            {c.lesson}
          </p>
        </section>

        {/* Стек */}
        <div className="mt-10 flex flex-wrap gap-1.5">
          {c.stack.map((s) => (
            <span
              key={s}
              className="rounded-md border border-neutral-200 bg-neutral-50 px-2.5 py-1 text-xs text-neutral-700 dark:border-neutral-800 dark:bg-neutral-900 dark:text-neutral-300"
            >
              {s}
            </span>
          ))}
        </div>

        {/* Навигация снизу */}
        <nav className="mt-16 flex flex-col gap-4 border-t border-neutral-200 pt-8 sm:flex-row sm:items-center sm:justify-between dark:border-neutral-800">
          {other ? (
            <Link
              href={`/cases/${other.slug}`}
              className="group inline-flex items-center gap-2 text-sm text-neutral-600 transition hover:text-indigo-600 dark:text-neutral-400 dark:hover:text-indigo-400"
            >
              <span className="text-neutral-400 dark:text-neutral-500">
                Следующий кейс
              </span>
              {other.title}
              <IconArrowRight className="h-4 w-4" />
            </Link>
          ) : (
            <span />
          )}
          <Link
            href="/#contact"
            className="inline-flex h-11 items-center justify-center rounded-full border border-neutral-200 bg-white/90 px-5 text-sm font-medium text-neutral-900 transition hover:bg-neutral-100 dark:border-neutral-800 dark:bg-neutral-950/90 dark:text-white dark:hover:bg-neutral-900"
          >
            Связаться со мной
          </Link>
        </nav>
      </article>
    </main>
  );
}
