import { formatPercent } from "@/lib/progress";

export function OverallProgress({ percent }: { percent: number }) {
  const size = 236;
  const thickness = 22;
  const radius = (size - thickness) / 2;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference * (1 - Math.min(Math.max(percent, 0), 100) / 100);

  return (
    <div className="flex flex-col items-center gap-4">
      <div
        className="relative"
        style={{ width: size, height: size }}
        role="img"
        aria-label={`Overall first study progress ${formatPercent(percent)}`}
      >
        <svg width={size} height={size} className="-rotate-90 drop-shadow-[0_18px_30px_rgba(60,30,20,0.18)]">
          <circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            fill="none"
            strokeWidth={thickness}
            className="stroke-brand-cream"
          />
          <circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            fill="none"
            strokeWidth={thickness}
            strokeLinecap="round"
            strokeDasharray={circumference}
            strokeDashoffset={offset}
            className="stroke-brand-red transition-[stroke-dashoffset] duration-700 ease-out"
          />
        </svg>
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <span className="num text-5xl font-bold tracking-tight text-brand-red sm:text-6xl">
            {Math.round(percent)}
            <span className="text-2xl">%</span>
          </span>
          <span className="mt-1 text-[0.7rem] font-semibold uppercase tracking-[0.22em] text-muted-foreground">
            First Study
          </span>
        </div>
      </div>
    </div>
  );
}