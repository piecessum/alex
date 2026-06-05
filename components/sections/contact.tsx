"use client";

import { Mail, Phone, Send, MessageCircle, Copy, Check, ArrowUpRight } from "lucide-react";
import { useState } from "react";
import { FRIENDS_URL } from "@/lib/site";

const contacts = [
  {
    label: "Телефон",
    value: "+7 (900) 630-40-81",
    copy: "+79006304081",
    href: "tel:+79006304081",
    icon: Phone,
    note: "предпочитаемый способ",
  },
  {
    label: "Email",
    value: "tiger.masuta@gmail.com",
    copy: "tiger.masuta@gmail.com",
    href: "mailto:tiger.masuta@gmail.com",
    icon: Mail,
  },
  {
    label: "Telegram",
    value: "@pieces_sum",
    copy: "@pieces_sum",
    href: "https://t.me/pieces_sum",
    icon: Send,
  },
  {
    label: "Max",
    value: "max.ru/u/f9LHodD0",
    copy: "https://max.ru/u/f9LHodD0cOIu5G1Xs1-YWcYVsgz2n-ejN6pq6q1Z0tqsg0_0vQZfelru9RU",
    href: "https://max.ru/u/f9LHodD0cOIu5G1Xs1-YWcYVsgz2n-ejN6pq6q1Z0tqsg0_0vQZfelru9RU",
    icon: MessageCircle,
  },
];

const resumeLinks = [
  {
    label: "hh.ru",
    sub: "Резюме · бизнес-аналитик",
    href: "https://spb.hh.ru/resume/e767be73ff0fffb18b0039ed1f5536684d4e4f",
    mono: "hh",
    color: "#d6001c",
  },
  {
    label: "Хабр Карьера",
    sub: "Резюме · career.habr.com",
    href: "https://career.habr.com/alex_sum",
    mono: "@",
    color: "#0a8f3c",
  },
  {
    label: "ArbiHunter",
    sub: "Резюме · arbihunter.com",
    href: "https://arbihunter.com/resumes/middle-business-analyst-9856",
    mono: "ah",
    color: "#6d28d9",
  },
  {
    label: "budu.jobs",
    sub: "Резюме · budu.jobs",
    href: "https://budu.jobs/cv/p/6a21a807-51f1-4fe6-ab3f-ea1c1c5013cd",
    mono: "bu",
    color: "#ef5a2a",
  },
  {
    label: "HireHi",
    sub: "Резюме · hirehi.ru",
    href: "https://hirehi.ru/resume/zZAwnIBYVX",
    mono: "hi",
    color: "#0ea5e9",
  },
];

export function Contact() {
  const [copied, setCopied] = useState<string | null>(null);

  const onCopy = async (text: string, key: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(key);
      setTimeout(() => setCopied(null), 1500);
    } catch {
      /* noop */
    }
  };

  return (
    <section id="contact" className="relative w-full py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div>
          <span className="text-sm font-mono uppercase tracking-wider text-neutral-500 dark:text-neutral-400">
            // контакты
          </span>
          <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            Связаться со мной
          </h2>
          <p className="mt-4 max-w-2xl text-base text-neutral-600 sm:text-lg dark:text-neutral-400">
            Открыт к предложениям по позиции бизнес-аналитика. Удалёнка, готов к
            командировкам.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2">
          {contacts.map((c, i) => {
            const Icon = c.icon;
            const isCopied = copied === c.label;
            return (
              <div
                key={c.label}
                className="group relative overflow-hidden rounded-2xl border border-neutral-200 bg-white/50 p-5 backdrop-blur transition hover:border-neutral-300 dark:border-neutral-800 dark:bg-neutral-950/50 dark:hover:border-neutral-700"
              >
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-indigo-500/10 text-indigo-500 dark:text-indigo-400">
                    <Icon className="h-5 w-5" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-baseline gap-2">
                      <span className="text-xs uppercase tracking-wider text-neutral-500 dark:text-neutral-400">
                        {c.label}
                      </span>
                      {c.note && (
                        <span className="text-[11px] text-emerald-600 dark:text-emerald-400">
                          {c.note}
                        </span>
                      )}
                    </div>
                    <a
                      href={c.href}
                      target={c.href.startsWith("http") ? "_blank" : undefined}
                      rel={c.href.startsWith("http") ? "noopener noreferrer" : undefined}
                      className="mt-1 block truncate text-base font-medium text-neutral-900 transition hover:text-indigo-600 dark:text-neutral-100 dark:hover:text-indigo-400"
                    >
                      {c.value}
                    </a>
                  </div>
                  <button
                    type="button"
                    onClick={() => onCopy(c.copy, c.label)}
                    aria-label="Скопировать"
                    className="shrink-0 rounded-md p-1.5 text-neutral-400 transition hover:bg-neutral-100 hover:text-neutral-700 dark:hover:bg-neutral-900 dark:hover:text-neutral-200"
                  >
                    {isCopied ? (
                      <Check className="h-4 w-4 text-emerald-500" />
                    ) : (
                      <Copy className="h-4 w-4" />
                    )}
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-10">
          <span className="text-xs font-mono uppercase tracking-wider text-neutral-500 dark:text-neutral-400">
            // резюме на площадках
          </span>
          <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
            {resumeLinks.map((r) => (
              <a
                key={r.label}
                href={r.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-4 rounded-2xl border border-neutral-200 bg-white/50 p-5 backdrop-blur transition hover:border-neutral-300 dark:border-neutral-800 dark:bg-neutral-950/50 dark:hover:border-neutral-700"
              >
                <div
                  className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg text-base font-bold lowercase text-white"
                  style={{ backgroundColor: r.color }}
                >
                  {r.mono}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="font-medium text-neutral-900 dark:text-neutral-100">
                    {r.label}
                  </div>
                  <div className="truncate text-sm text-neutral-500 dark:text-neutral-400">
                    {r.sub}
                  </div>
                </div>
                <ArrowUpRight className="h-4 w-4 shrink-0 text-neutral-400 transition group-hover:text-indigo-500" />
              </a>
            ))}
          </div>
        </div>

        <div className="mt-16 flex flex-col items-center gap-3 border-t border-neutral-200 pt-8 text-center text-sm text-neutral-500 dark:border-neutral-800 dark:text-neutral-400">
          <a
            href={FRIENDS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-neutral-600 transition hover:text-indigo-600 dark:text-neutral-400 dark:hover:text-indigo-400"
          >
            Мой личный сайт — заметки, пластинки, вишлист
            <ArrowUpRight className="h-3.5 w-3.5" />
          </a>
          <span>
            © {new Date().getFullYear()} Алексей Масюта · Сделано на Next.js,
            Aceternity UI и кофе
          </span>
        </div>
      </div>
    </section>
  );
}
