import type { CaseIconKey } from "@/lib/cases-data";

// Обложка кейса как векторный компонент: номер берётся из id кейса,
// иллюстрация — из iconKey. Так превью и заголовок кейса никогда не
// разойдутся с порядком кейсов. Размер — 16:9 (1200×675).

const STROKE = "rgba(158,148,240,0.55)";
const STROKE_SOFT = "rgba(158,148,240,0.3)";
const FILL_SOFT = "rgba(123,108,242,0.13)";
const FILL_FAINT = "rgba(123,108,242,0.07)";
const LINE = "rgba(196,190,240,0.5)";
const TEAL = "#2dd4bf";

const star = (cx: number, cy: number, r: number) =>
  `${cx},${cy - r} ${cx + r * 0.28},${cy - r * 0.28} ${cx + r},${cy} ${cx + r * 0.28},${cy + r * 0.28} ${cx},${cy + r} ${cx - r * 0.28},${cy + r * 0.28} ${cx - r},${cy} ${cx - r * 0.28},${cy - r * 0.28}`;

function Icon({ iconKey }: { iconKey: CaseIconKey }) {
  switch (iconKey) {
    case "filter":
      return (
        <g>
          {[
            [720, 214, 6],
            [752, 200, 4],
            [786, 210, 7],
            [812, 228, 4],
            [700, 232, 3],
            [838, 222, 5],
          ].map(([x, y, r], i) => (
            <circle key={i} cx={x} cy={y} r={r} fill={STROKE} />
          ))}
          <polygon
            points="648,250 892,250 800,360 800,420 740,420 740,360"
            fill={FILL_SOFT}
            stroke={STROKE}
            strokeWidth={2.5}
            strokeLinejoin="round"
          />
          {[
            [636, 70, "32A"],
            [722, 84, "IP65"],
            [820, 116, "Siemens"],
          ].map(([x, w, t], i) => (
            <g key={i}>
              <rect
                x={x as number}
                y={444}
                width={w as number}
                height={36}
                rx={18}
                fill={FILL_SOFT}
                stroke={STROKE}
                strokeWidth={1.5}
              />
              <text
                x={(x as number) + (w as number) / 2}
                y={467}
                textAnchor="middle"
                fontSize={17}
                fill={LINE}
              >
                {t}
              </text>
            </g>
          ))}
        </g>
      );

    case "database":
      return (
        <g
          fill="none"
          stroke={STROKE}
          strokeWidth={2.5}
          strokeLinecap="round"
        >
          <path d="M690 288 L690 412" />
          <path d="M850 288 L850 412" />
          <ellipse cx={770} cy={288} rx={80} ry={20} fill={FILL_SOFT} />
          <path d="M690 330 A80 20 0 0 0 850 330" />
          <path d="M690 371 A80 20 0 0 0 850 371" />
          <path d="M690 412 A80 20 0 0 0 850 412" />
          <polygon points={star(884, 300, 16)} fill={TEAL} stroke="none" />
          <polygon points={star(908, 344, 8)} fill={TEAL} stroke="none" />
        </g>
      );

    case "insight":
      return (
        <g>
          {(
            [
              [672, 232],
              [905, 270],
              [918, 422],
              [702, 470],
              [812, 522],
            ] as [number, number][]
          ).map(([x, y], i) => (
            <line
              key={i}
              x1={770}
              y1={360}
              x2={x}
              y2={y}
              stroke={STROKE_SOFT}
              strokeWidth={2}
            />
          ))}
          {(
            [
              [672, 232, 13],
              [905, 270, 13],
              [918, 422, 13],
              [702, 470, 13],
              [812, 522, 13],
            ] as [number, number, number][]
          ).map(([x, y, r], i) => (
            <circle
              key={i}
              cx={x}
              cy={y}
              r={r}
              fill={FILL_SOFT}
              stroke={STROKE}
              strokeWidth={2}
            />
          ))}
          <circle
            cx={770}
            cy={360}
            r={24}
            fill="rgba(123,108,242,0.22)"
            stroke={STROKE}
            strokeWidth={2.5}
          />
        </g>
      );

    case "requirements":
      return (
        <g>
          <rect
            x={636}
            y={272}
            width={320}
            height={262}
            rx={16}
            fill={FILL_FAINT}
            stroke={STROKE_SOFT}
            strokeWidth={2}
          />
          <rect
            x={662}
            y={246}
            width={320}
            height={262}
            rx={16}
            fill={FILL_FAINT}
            stroke={STROKE_SOFT}
            strokeWidth={2}
          />
          <rect
            x={688}
            y={220}
            width={320}
            height={262}
            rx={16}
            fill={FILL_SOFT}
            stroke={STROKE}
            strokeWidth={2}
          />
          {(
            [
              [262, 150],
              [300, 210],
              [338, 240],
              [376, 170],
              [414, 205],
            ] as [number, number][]
          ).map(([y, w], i) => (
            <g key={i}>
              <circle cx={718} cy={y} r={6} fill={STROKE} />
              <rect
                x={740}
                y={y - 6}
                width={w}
                height={11}
                rx={5.5}
                fill={LINE}
                opacity={0.6}
              />
            </g>
          ))}
        </g>
      );

    case "principles":
      return (
        <g>
          {[44, 86, 128, 170].map((r) => (
            <circle
              key={r}
              cx={780}
              cy={360}
              r={r}
              fill="none"
              stroke={STROKE_SOFT}
              strokeWidth={1.5}
            />
          ))}
          <line
            x1={780}
            y1={180}
            x2={780}
            y2={540}
            stroke={STROKE_SOFT}
            strokeWidth={1}
            strokeDasharray="4 6"
          />
          <line
            x1={600}
            y1={360}
            x2={960}
            y2={360}
            stroke={STROKE_SOFT}
            strokeWidth={1}
            strokeDasharray="4 6"
          />
          <polygon points="780,232 793,360 767,360" fill={TEAL} />
          <polygon points="780,488 793,360 767,360" fill="rgba(158,148,240,0.4)" />
          <circle
            cx={780}
            cy={360}
            r={10}
            fill="#e9e7fb"
            stroke={STROKE}
            strokeWidth={2}
          />
        </g>
      );

    case "navigation":
      return (
        <g>
          <rect
            x={628}
            y={232}
            width={312}
            height={236}
            rx={16}
            fill={FILL_SOFT}
            stroke={STROKE}
            strokeWidth={2}
          />
          <line
            x1={628}
            y1={272}
            x2={940}
            y2={272}
            stroke={STROKE_SOFT}
            strokeWidth={1.5}
          />
          <circle cx={648} cy={252} r={5} fill={STROKE} />
          <rect x={668} y={246} width={170} height={12} rx={6} fill={STROKE_SOFT} />
          <line
            x1={712}
            y1={272}
            x2={712}
            y2={468}
            stroke={STROKE_SOFT}
            strokeWidth={1.5}
          />
          {[290, 316, 342, 368, 394].map((y) => (
            <rect
              key={y}
              x={646}
              y={y}
              width={48}
              height={8}
              rx={4}
              fill={LINE}
              opacity={0.5}
            />
          ))}
          {[
            [730, 290],
            [800, 290],
            [870, 290],
            [730, 372],
            [800, 372],
            [870, 372],
          ].map(([x, y], i) => (
            <rect
              key={i}
              x={x}
              y={y}
              width={56}
              height={66}
              rx={8}
              fill={FILL_SOFT}
              stroke={STROKE_SOFT}
              strokeWidth={1.5}
            />
          ))}
        </g>
      );
  }
}

export function CaseCover({
  id,
  iconKey,
  label,
  className,
}: {
  id: string;
  iconKey: CaseIconKey;
  label: string;
  className?: string;
}) {
  const uid = `${iconKey}-${id}`;
  return (
    <svg
      viewBox="0 0 1200 675"
      role="img"
      aria-label={`Обложка кейса ${id} — ${label}`}
      preserveAspectRatio="xMidYMid slice"
      className={className ?? "absolute inset-0 h-full w-full"}
    >
      <defs>
        <linearGradient id={`base-${uid}`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#0a0a14" />
          <stop offset="0.55" stopColor="#16142e" />
          <stop offset="1" stopColor="#2a2356" />
        </linearGradient>
        <radialGradient id={`glow-${uid}`} cx="0.72" cy="0.4" r="0.6">
          <stop offset="0" stopColor="rgba(124,108,242,0.42)" />
          <stop offset="1" stopColor="rgba(124,108,242,0)" />
        </radialGradient>
        <radialGradient id={`glow2-${uid}`} cx="0.12" cy="0.95" r="0.55">
          <stop offset="0" stopColor="rgba(40,70,170,0.32)" />
          <stop offset="1" stopColor="rgba(40,70,170,0)" />
        </radialGradient>
      </defs>

      <rect width="1200" height="675" fill={`url(#base-${uid})`} />
      <rect width="1200" height="675" fill={`url(#glow2-${uid})`} />
      <rect width="1200" height="675" fill={`url(#glow-${uid})`} />

      <Icon iconKey={iconKey} />

      <text
        x={1158}
        y={178}
        textAnchor="end"
        fontSize={190}
        fontWeight={800}
        fill="#7c6cf2"
        fillOpacity={0.85}
        fontFamily="ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, sans-serif"
      >
        {id}
      </text>

      <circle cx={62} cy={612} r={7} fill="#7c6cf2" />
      <text
        x={80}
        y={620}
        fontSize={28}
        fontWeight={500}
        fill="#e7e5f4"
        fontFamily="ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, sans-serif"
      >
        // {label}
      </text>
    </svg>
  );
}
