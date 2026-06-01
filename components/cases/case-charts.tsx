import { IconArrowRight } from "@tabler/icons-react";

const Panel = ({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) => (
  <div className="rounded-2xl border border-neutral-200 bg-white/60 p-5 sm:p-6 dark:border-neutral-800 dark:bg-neutral-950/40">
    <span className="text-xs font-mono uppercase tracking-wider text-neutral-500 dark:text-neutral-400">
      {label}
    </span>
    <div className="mt-5">{children}</div>
  </div>
);

const Bar = ({
  caption,
  value,
  width,
  accent,
}: {
  caption: string;
  value: string;
  width: string;
  accent?: boolean;
}) => (
  <div>
    <div className="mb-1.5 flex items-baseline justify-between text-xs text-neutral-500 dark:text-neutral-400">
      <span>{caption}</span>
      <span className="font-medium text-neutral-700 dark:text-neutral-300">
        {value}
      </span>
    </div>
    <div className="h-3 w-full overflow-hidden rounded-full bg-neutral-200 dark:bg-neutral-800">
      <div
        className={`h-full rounded-full ${
          accent ? "bg-indigo-500" : "bg-neutral-400 dark:bg-neutral-600"
        }`}
        style={{ width }}
      />
    </div>
  </div>
);

export const KbChart = () => (
  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
    <Panel label="Вопросы ко мне">
      <div className="mb-4 flex items-baseline gap-2">
        <span className="text-3xl font-bold text-emerald-600 dark:text-emerald-400">
          −55%
        </span>
        <span className="text-xs text-neutral-500 dark:text-neutral-400">
          обращений в личку
        </span>
      </div>
      <div className="space-y-4">
        <Bar caption="До базы знаний" value="100%" width="100%" />
        <Bar caption="После + AI-ассистент" value="≈ 45%" width="45%" accent />
      </div>
    </Panel>

    <Panel label="Что изменилось">
      <div className="space-y-4">
        <div className="flex items-center justify-between gap-3 rounded-xl border border-neutral-200 bg-white/60 px-4 py-3 dark:border-neutral-800 dark:bg-neutral-950/40">
          <span className="text-sm text-neutral-500 line-through dark:text-neutral-500">
            часы переписок
          </span>
          <IconArrowRight className="h-4 w-4 shrink-0 text-neutral-400" />
          <span className="text-sm font-semibold text-indigo-600 dark:text-indigo-400">
            5–10 мин
          </span>
        </div>
        <div className="flex items-center justify-between gap-3 rounded-xl border border-neutral-200 bg-white/60 px-4 py-3 dark:border-neutral-800 dark:bg-neutral-950/40">
          <span className="text-sm text-neutral-500 dark:text-neutral-400">
            редакторы базы: 1
          </span>
          <IconArrowRight className="h-4 w-4 shrink-0 text-neutral-400" />
          <span className="text-sm font-semibold text-indigo-600 dark:text-indigo-400">
            вся команда
          </span>
        </div>
        <p className="text-xs leading-relaxed text-neutral-500 dark:text-neutral-400">
          Онбординг нового сотрудника ускорился: вместо часов переписок —
          самостоятельный поиск в базе за минуты.
        </p>
      </div>
    </Panel>
  </div>
);

export const FiltersChart = () => (
  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
    <Panel label="Архитектура поиска">
      <div className="flex items-center gap-3">
        <div className="flex-1">
          <div className="mb-2 text-[11px] uppercase tracking-wider text-neutral-400 dark:text-neutral-500">
            Было
          </div>
          <div className="rounded-lg border border-dashed border-red-400/50 bg-red-500/5 px-3 py-5 text-center text-xs leading-relaxed text-neutral-600 dark:text-neutral-300">
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
      </p>
    </Panel>

    <Panel label="Два сценария поиска">
      <div className="space-y-3">
        <div className="rounded-xl border border-neutral-200 bg-white/60 p-4 dark:border-neutral-800 dark:bg-neutral-950/40">
          <div className="text-xs font-semibold text-indigo-600 dark:text-indigo-400">
            Сценарий 1 · по спецификации
          </div>
          <p className="mt-1 text-xs leading-relaxed text-neutral-600 dark:text-neutral-300">
            Поиск товара по названию из спецификации → подбор фильтров под этот
            запрос.
          </p>
        </div>
        <div className="rounded-xl border border-neutral-200 bg-white/60 p-4 dark:border-neutral-800 dark:bg-neutral-950/40">
          <div className="text-xs font-semibold text-indigo-600 dark:text-indigo-400">
            Сценарий 2 · по категории
          </div>
          <p className="mt-1 text-xs leading-relaxed text-neutral-600 dark:text-neutral-300">
            Выбор категории → фильтрация по критериям внутри неё → результаты в
            корзину.
          </p>
        </div>
      </div>
    </Panel>
  </div>
);

export function CaseChart({ variant }: { variant: "kb" | "filters" }) {
  return variant === "kb" ? <KbChart /> : <FiltersChart />;
}
