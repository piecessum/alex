import React from "react";
import Link from "next/link";

const COMPANY_URL = "https://3davinci.ru";
const PRODUCT_URL = "https://b2bmotion-site.vercel.app";

// Авто-термины: упоминания компании и продукта.
const TERMS = /(3DaVinci|B2B Движение)/gi;
// Явные ссылки в тексте: [подпись](адрес) — в т.ч. внутренние /cases/...
const MD_LINK = /\[([^\]]+)\]\(([^)]+)\)/g;

const linkClass =
  "font-medium text-indigo-600 underline decoration-indigo-400/40 underline-offset-2 transition hover:text-indigo-500 hover:decoration-indigo-400 dark:text-indigo-400 dark:hover:text-indigo-300";

function anchor(href: string, label: React.ReactNode, key: React.Key) {
  if (href.startsWith("/")) {
    return (
      <Link key={key} href={href} className={linkClass}>
        {label}
      </Link>
    );
  }
  return (
    <a
      key={key}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={linkClass}
    >
      {label}
    </a>
  );
}

// Авто-ссылки на упоминания компании и продукта в обычном тексте.
function autoTerms(text: string, prefix: string): React.ReactNode[] {
  return text.split(TERMS).map((part, i) => {
    const key = `${prefix}-${i}`;
    const low = part.toLowerCase();
    if (low === "3davinci") return anchor(COMPANY_URL, part, key);
    if (low === "b2b движение") return anchor(PRODUCT_URL, part, key);
    return <React.Fragment key={key}>{part}</React.Fragment>;
  });
}

/**
 * Рендерит текст кейса со ссылками:
 * - явные [подпись](адрес), включая внутренние /cases/...;
 * - авто-упоминания «3DaVinci» → сайт компании, «B2B Движение» → сайт продукта.
 */
export function linkify(text: string): React.ReactNode {
  const nodes: React.ReactNode[] = [];
  let last = 0;
  let seg = 0;
  let m: RegExpExecArray | null;
  MD_LINK.lastIndex = 0;
  while ((m = MD_LINK.exec(text)) !== null) {
    if (m.index > last) nodes.push(...autoTerms(text.slice(last, m.index), `s${seg}`));
    nodes.push(anchor(m[2], m[1], `l${seg}`));
    last = m.index + m[0].length;
    seg++;
  }
  if (last < text.length) nodes.push(...autoTerms(text.slice(last), `s${seg}`));
  return nodes;
}
