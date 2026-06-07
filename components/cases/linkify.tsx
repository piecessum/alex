import React from "react";

const COMPANY_URL = "https://3davinci.ru";
const PRODUCT_URL = "https://b2bmotion-site.vercel.app";

// Захватывающая группа нужна, чтобы split() вернул и сами совпадения.
const TERMS = /(3DaVinci|B2B Движение)/gi;

const linkClass =
  "font-medium text-indigo-600 underline decoration-indigo-400/40 underline-offset-2 transition hover:text-indigo-500 hover:decoration-indigo-400 dark:text-indigo-400 dark:hover:text-indigo-300";

/**
 * Превращает упоминания «3DaVinci» и «B2B Движение» в тексте кейса в ссылки
 * на сайт компании и сайт продукта соответственно. Регистр сохраняется.
 */
export function linkify(text: string): React.ReactNode {
  const parts = text.split(TERMS);
  return parts.map((part, i) => {
    const key = part.toLowerCase();
    if (key === "3davinci") {
      return (
        <a
          key={i}
          href={COMPANY_URL}
          target="_blank"
          rel="noopener noreferrer"
          className={linkClass}
        >
          {part}
        </a>
      );
    }
    if (key === "b2b движение") {
      return (
        <a
          key={i}
          href={PRODUCT_URL}
          target="_blank"
          rel="noopener noreferrer"
          className={linkClass}
        >
          {part}
        </a>
      );
    }
    return <React.Fragment key={i}>{part}</React.Fragment>;
  });
}
