// BPMN-диаграмма TO-BE для кейса про систему фильтров.
// Один поток пользователя: старт → открыть каталог → XOR-шлюз «как ищет?»
// → ветка А (по спецификации) / ветка Б (по категории) → слияние →
// добавить в спецификацию/КП → конец.

type Box = {
  x: number;
  y: number;
  w: number;
  h: number;
  lines: string[];
};

const TASK_W = 134;
const TASK_H = 48;

const TaskBox = ({ x, y, w, h, lines }: Box) => {
  const cx = x + w / 2;
  const cy = y + h / 2;
  const first = lines.length > 1 ? cy - 5 : cy + 4.5;
  return (
    <g>
      <rect
        x={x}
        y={y}
        width={w}
        height={h}
        rx={10}
        className="fill-indigo-500/10 stroke-indigo-400/60 dark:stroke-indigo-400/50"
        strokeWidth={1.5}
      />
      <text
        x={cx}
        textAnchor="middle"
        className="fill-neutral-700 dark:fill-neutral-200"
        fontSize={12.5}
        fontWeight={500}
      >
        {lines.map((line, i) => (
          <tspan key={i} x={cx} y={first + i * 16}>
            {line}
          </tspan>
        ))}
      </text>
    </g>
  );
};

const Gateway = ({ cx, cy }: { cx: number; cy: number }) => {
  const r = 26;
  return (
    <g>
      <polygon
        points={`${cx - r},${cy} ${cx},${cy - r} ${cx + r},${cy} ${cx},${cy + r}`}
        className="fill-amber-400/15 stroke-amber-500/70"
        strokeWidth={1.5}
      />
      <line
        x1={cx - 8}
        y1={cy - 8}
        x2={cx + 8}
        y2={cy + 8}
        className="stroke-amber-600 dark:stroke-amber-400"
        strokeWidth={1.8}
      />
      <line
        x1={cx - 8}
        y1={cy + 8}
        x2={cx + 8}
        y2={cy - 8}
        className="stroke-amber-600 dark:stroke-amber-400"
        strokeWidth={1.8}
      />
    </g>
  );
};

const Flow = ({ d }: { d: string }) => (
  <path
    d={d}
    fill="none"
    className="stroke-neutral-400 dark:stroke-neutral-600"
    strokeWidth={1.5}
    markerEnd="url(#bpmn-arrow)"
  />
);

export function CaseBpmn() {
  return (
    <div className="mt-6 overflow-x-auto rounded-2xl border border-neutral-200 bg-white/60 p-5 sm:p-6 dark:border-neutral-800 dark:bg-neutral-950/40">
      <svg
        viewBox="0 0 1020 310"
        role="img"
        aria-label="BPMN-диаграмма целевого процесса поиска товара: два сценария от каталога до добавления в спецификацию"
        className="h-auto w-full min-w-[760px]"
      >
        <defs>
          <marker
            id="bpmn-arrow"
            viewBox="0 0 10 10"
            refX={8.5}
            refY={5}
            markerWidth={7}
            markerHeight={7}
            orient="auto-start-reverse"
          >
            <path
              d="M0,0 L10,5 L0,10 z"
              className="fill-neutral-400 dark:fill-neutral-600"
            />
          </marker>
        </defs>

        {/* Потоки */}
        <Flow d="M58 170 H78" />
        <Flow d="M194 170 H218" />
        <Flow d="M270 170 H300 V80 H330" />
        <Flow d="M270 170 H300 V260 H330" />
        <Flow d="M480 80 H510" />
        <Flow d="M480 260 H510" />
        <Flow d="M644 80 H660 V170 H674" />
        <Flow d="M644 260 H660 V170 H674" />
        <Flow d="M726 170 H766" />
        <Flow d="M936 170 H958" />

        {/* Старт */}
        <circle
          cx={40}
          cy={170}
          r={18}
          className="fill-emerald-500/15 stroke-emerald-500/70"
          strokeWidth={1.5}
        />
        <text
          x={40}
          y={210}
          textAnchor="middle"
          className="fill-neutral-500 dark:fill-neutral-400"
          fontSize={10.5}
        >
          Старт
        </text>

        {/* Открыть каталог */}
        <TaskBox x={78} y={146} w={116} h={TASK_H} lines={["Открыть каталог"]} />

        {/* Шлюз «как ищет?» */}
        <Gateway cx={244} cy={170} />
        <text
          x={244}
          y={132}
          textAnchor="middle"
          className="fill-indigo-600 dark:fill-indigo-400"
          fontSize={12}
          fontWeight={600}
        >
          Как ищет?
        </text>

        {/* Ветка А — по спецификации */}
        <text
          x={490}
          y={42}
          textAnchor="middle"
          className="fill-indigo-600 dark:fill-indigo-400"
          fontSize={11.5}
          fontWeight={600}
        >
          А · по спецификации
        </text>
        <TaskBox
          x={330}
          y={56}
          w={150}
          h={TASK_H}
          lines={["Ввести название", "из спецификации"]}
        />
        <TaskBox
          x={510}
          y={56}
          w={TASK_W}
          h={TASK_H}
          lines={["Подобрать", "фильтры"]}
        />

        {/* Ветка Б — по категории */}
        <text
          x={490}
          y={302}
          textAnchor="middle"
          className="fill-indigo-600 dark:fill-indigo-400"
          fontSize={11.5}
          fontWeight={600}
        >
          Б · по категории
        </text>
        <TaskBox
          x={330}
          y={236}
          w={150}
          h={TASK_H}
          lines={["Выбрать", "категорию"]}
        />
        <TaskBox
          x={510}
          y={236}
          w={TASK_W}
          h={TASK_H}
          lines={["Фильтровать", "внутри категории"]}
        />

        {/* Слияние веток */}
        <Gateway cx={700} cy={170} />

        {/* Добавить в спецификацию / КП */}
        <TaskBox
          x={766}
          y={146}
          w={170}
          h={TASK_H}
          lines={["Добавить в", "спецификацию / КП"]}
        />

        {/* Конец */}
        <circle
          cx={976}
          cy={170}
          r={18}
          className="fill-rose-500/10 stroke-rose-500/70"
          strokeWidth={3}
        />
        <text
          x={976}
          y={210}
          textAnchor="middle"
          className="fill-neutral-500 dark:fill-neutral-400"
          fontSize={10.5}
        >
          Готово
        </text>
      </svg>
    </div>
  );
}
