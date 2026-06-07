import { IconArrowRight, IconArrowDown } from "@tabler/icons-react";
import type { CaseChartKey } from "@/lib/cases-data";

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

const Swap = ({ from, to }: { from: string; to: string }) => (
  <div className="flex items-center justify-between gap-3 rounded-xl border border-neutral-200 bg-white/60 px-4 py-3 dark:border-neutral-800 dark:bg-neutral-950/40">
    <span className="text-sm text-neutral-500 line-through dark:text-neutral-500">
      {from}
    </span>
    <IconArrowRight className="h-4 w-4 shrink-0 text-neutral-400" />
    <span className="text-sm font-semibold text-indigo-600 dark:text-indigo-400">
      {to}
    </span>
  </div>
);

const BeforeAfter = ({
  before,
  after,
  caption,
}: {
  before: React.ReactNode;
  after: React.ReactNode;
  caption?: string;
}) => (
  <>
    <div className="flex items-center gap-3">
      <div className="flex-1">
        <div className="mb-2 text-[11px] uppercase tracking-wider text-neutral-400 dark:text-neutral-500">
          Было
        </div>
        <div className="rounded-lg border border-dashed border-red-400/50 bg-red-500/5 px-3 py-5 text-center text-xs leading-relaxed text-neutral-600 dark:text-neutral-300">
          {before}
        </div>
      </div>
      <IconArrowRight className="h-5 w-5 shrink-0 text-neutral-400" />
      <div className="flex-1">
        <div className="mb-2 text-[11px] uppercase tracking-wider text-neutral-400 dark:text-neutral-500">
          Стало
        </div>
        <div className="rounded-lg border border-indigo-400/40 bg-indigo-500/10 px-3 py-5 text-center text-xs font-medium text-indigo-600 dark:text-indigo-300">
          {after}
        </div>
      </div>
    </div>
    {caption && (
      <p className="mt-5 text-xs leading-relaxed text-neutral-500 dark:text-neutral-400">
        {caption}
      </p>
    )}
  </>
);

const FlowStep = ({ children }: { children: React.ReactNode }) => (
  <div className="rounded-lg border border-indigo-400/40 bg-indigo-500/10 px-3 py-2 text-center text-xs font-medium text-indigo-600 dark:text-indigo-300">
    {children}
  </div>
);

export const KbChart = () => (
  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
    <Panel label="Где живут знания">
      <div className="flex items-center gap-3">
        <div className="flex-1">
          <div className="mb-2 text-[11px] uppercase tracking-wider text-neutral-400 dark:text-neutral-500">
            Было
          </div>
          <div className="rounded-lg border border-dashed border-red-400/50 bg-red-500/5 px-3 py-5 text-center text-xs leading-relaxed text-neutral-600 dark:text-neutral-300">
            В головах и
            <br />локальных файлах
          </div>
        </div>
        <IconArrowRight className="h-5 w-5 shrink-0 text-neutral-400" />
        <div className="flex-1">
          <div className="mb-2 text-[11px] uppercase tracking-wider text-neutral-400 dark:text-neutral-500">
            Стало
          </div>
          <div className="rounded-lg border border-indigo-400/40 bg-indigo-500/10 px-3 py-5 text-center text-xs font-medium text-indigo-600 dark:text-indigo-300">
            Общая база
            <br />в GitLab
          </div>
        </div>
      </div>
      <p className="mt-5 text-xs leading-relaxed text-neutral-500 dark:text-neutral-400">
        Доступ и чтение — у всей команды, без посредника.
      </p>
    </Panel>

    <Panel label="Что изменилось">
      <div className="space-y-3">
        <Swap from="часы переписок" to="ответ в базе" />
        <Swap from="базу вёл я один" to="ведёт вся команда" />
        <Swap from="справки вручную" to="AI-ассистент" />
      </div>
      <p className="mt-5 text-xs leading-relaxed text-neutral-500 dark:text-neutral-400">
        Онбординг ускорился — новичок находит ответы сам.
      </p>
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

export const InsightChart = () => (
  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
    <Panel label="Что услышали на интервью">
      <div className="space-y-3">
        <Swap from="захожу со списком" to="захожу в историю" />
        <Swap from="система обслуживает" to="система продаёт" />
        <Swap from="заказал и ушёл" to="вижу, понимаю, остаюсь" />
      </div>
      <p className="mt-5 text-xs leading-relaxed text-neutral-500 dark:text-neutral-400">
        Клиенты сравнивали нас с Ozon и Wildberries — и ждали тех же эмоций.
      </p>
    </Panel>

    <Panel label="Куда движемся">
      <BeforeAfter
        before={
          <>
            Склад
            <br />под готовый запрос
          </>
        }
        after={
          <>
            Платформа,
            <br />что сама продаёт
          </>
        }
        caption="Из утилиты — в среду, где клиенты продают, показывают и растут."
      />
    </Panel>
  </div>
);

export const RequirementsChart = () => (
  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
    <Panel label="От чего ушли">
      <BeforeAfter
        before={
          <>
            Требования
            <br />в головах
          </>
        }
        after={
          <>
            Общая карта
            <br />для всей команды
          </>
        }
        caption="Споры «а как правильно» превратились в ссылку на документ."
      />
    </Panel>

    <Panel label="Цепочка требований">
      <div className="space-y-2">
        <FlowStep>7 архетипов ЦА</FlowStep>
        <div className="flex justify-center">
          <IconArrowDown className="h-4 w-4 text-neutral-400" />
        </div>
        <FlowStep>79 User Stories · P0–P2</FlowStep>
        <div className="flex justify-center">
          <IconArrowDown className="h-4 w-4 text-neutral-400" />
        </div>
        <FlowStep>24 User Cases со сценариями</FlowStep>
      </div>
      <p className="mt-5 text-xs leading-relaxed text-neutral-500 dark:text-neutral-400">
        Любое требование можно пройти по цепочке до его источника.
      </p>
    </Panel>
  </div>
);

export const NavigationChart = () => (
  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
    <Panel label="Главная страница">
      <BeforeAfter
        before={
          <>
            Папка
            <br />с документами
          </>
        }
        after={
          <>
            Витрина
            <br />со списками
          </>
        }
        caption="Главная стала местом, где клиент видит предложения, а не ищет накладную."
      />
    </Panel>

    <Panel label="Что изменилось">
      <div className="space-y-3">
        <Swap from="разрозненные блоки" to="единая навигация" />
        <Swap from="воздух на экране" to="списки и сводки" />
        <Swap from="предлагает только главная" to="предлагает каждый блок" />
      </div>
      <p className="mt-5 text-xs leading-relaxed text-neutral-500 dark:text-neutral-400">
        Тот же экран стал нести больше пользы — и продавать.
      </p>
    </Panel>
  </div>
);

export const PrinciplesChart = () => (
  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
    <Panel label="Принципы продукта">
      <div className="space-y-2">
        <FlowStep>Сделка важнее витрины</FlowStep>
        <FlowStep>Повторяемость по умолчанию</FlowStep>
        <FlowStep>Прозрачность условий</FlowStep>
        <FlowStep>Минимум сюрпризов</FlowStep>
        <FlowStep>Поддержка согласования</FlowStep>
      </div>
      <p className="mt-5 text-xs leading-relaxed text-neutral-500 dark:text-neutral-400">
        8 принципов с названиями — на них можно сослаться в любом споре о решении.
      </p>
    </Panel>

    <Panel label="Главный инсайт">
      <BeforeAfter
        before={
          <>
            Бизнес-задача решена,
            <br />потребность — нет
          </>
        }
        after={
          <>
            Потребность закрыта,
            <br />путь короче
          </>
        }
        caption="И бизнес-задача при этом решается проще, чем «в лоб»."
      />
    </Panel>
  </div>
);

const chartMap: Record<CaseChartKey, () => React.ReactElement> = {
  kb: KbChart,
  filters: FiltersChart,
  insight: InsightChart,
  requirements: RequirementsChart,
  navigation: NavigationChart,
  principles: PrinciplesChart,
};

export function CaseChart({ variant }: { variant: CaseChartKey }) {
  const Chart = chartMap[variant];
  return <Chart />;
}
