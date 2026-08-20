import { formatPercent } from "@/lib/progress";
import { cn } from "@/lib/utils";

type Props = {
  percent: number;
  size?: number;
  thickness?: number;
  className?: string;
  showLabel?: boolean;
  labelClassName?: string;
  /** Tailwind text color class used for the ring stroke. */
  colorClassName?: string;
};

export function ProgressRing({
  percent,
  size = 44,
  thickness = 5,
  className,
  showLabel = false,
  labelClassName,
  colorClassName = "text-brand-red",
}: Props) {
  const radius = (size - thickness) / 2;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference * (1 - Math.min(Math.max(percent, 0), 100) / 100);

  return (
    <div
      className={cn("relative inline-flex items-center justify-center", className)}
      style={{ width: size, height: size }}
      role="img"
      aria-label={`${formatPercent(percent)} complete`}
    >
      <svg width={size} height={size} className="-rotate-90">
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          strokeWidth={thickness}
          className="stroke-border"
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
          className={cn("stroke-current transition-[stroke-dashoffset] duration-500 ease-out", colorClassName)}
        />
      </svg>
      {showLabel ? (
        <span className={cn("num absolute text-[0.65rem] font-semibold", labelClassName)}>
          {Math.round(percent)}
        </span>
      ) : null}
    </div>
  );
}