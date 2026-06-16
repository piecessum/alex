import Image from "next/image";
import { linkify } from "./linkify";

export type GalleryShot = { src: string; text?: string };

export type GalleryPair = {
  label: string;
  before: string;
  after: string;
  beforeText?: string;
  afterText?: string;
  extraAfter?: GalleryShot[];
};

const Column = ({
  src,
  alt,
  state,
  text,
}: {
  src: string;
  alt: string;
  state: "before" | "after";
  text?: string;
}) => (
  <div className="w-[88vw] shrink-0 snap-start md:w-[47vw]">
    <div className="relative overflow-hidden rounded-xl border border-neutral-200 dark:border-neutral-800">
      {/* width/height сохраняют пропорции 1556×1016 — скриншот не обрезается */}
      <Image
        src={src}
        alt={alt}
        width={1556}
        height={1016}
        sizes="(max-width: 768px) 88vw, 47vw"
        className="h-auto w-full"
      />
      <span
        className={
          "absolute left-3 top-3 rounded-md px-2.5 py-1 text-xs font-medium backdrop-blur " +
          (state === "before"
            ? "bg-red-500/15 text-red-600 dark:text-red-300"
            : "bg-indigo-500/20 text-indigo-700 dark:text-indigo-200")
        }
      >
        {state === "before" ? "Было" : "Стало"}
      </span>
    </div>
    {text && (
      <p className="mt-3 text-[15px] leading-relaxed text-neutral-600 dark:text-neutral-400">
        {linkify(text)}
      </p>
    )}
  </div>
);

export function RedesignGallery({ pairs }: { pairs: GalleryPair[] }) {
  return (
    // full-bleed: блок выходит на всю ширину экрана из колонки статьи
    <div className="relative left-1/2 mt-6 w-screen -translate-x-1/2">
      <div className="space-y-12">
        {pairs.map((p) => (
          <figure key={p.label}>
            <figcaption className="mb-3 px-6 text-lg font-semibold text-neutral-800 dark:text-neutral-200">
              {p.label}
            </figcaption>
            <div className="flex snap-x snap-mandatory scroll-pl-6 scroll-pr-6 items-start gap-4 overflow-x-auto px-6 pb-3 [scrollbar-width:thin]">
              <Column
                src={p.before}
                alt={`${p.label} — было`}
                state="before"
                text={p.beforeText}
              />
              <Column
                src={p.after}
                alt={`${p.label} — стало`}
                state="after"
                text={p.afterText}
              />
              {p.extraAfter?.map((shot, i) => (
                <Column
                  key={shot.src}
                  src={shot.src}
                  alt={`${p.label} — стало ${i + 2}`}
                  state="after"
                  text={shot.text}
                />
              ))}
            </div>
          </figure>
        ))}
      </div>
    </div>
  );
}
