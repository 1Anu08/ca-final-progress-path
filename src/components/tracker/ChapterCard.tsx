import { useState } from "react";
import { ChevronDown } from "lucide-react";

import { ProgressRing } from "./ProgressRing";
import { TrackChecklist } from "./TrackChecklist";
import { chapterStat, formatPercent, itemPercent } from "@/lib/progress";
import { useProgress } from "@/lib/use-progress";
import type { Chapter } from "@/lib/syllabus-model";
import { cn } from "@/lib/utils";

function UnitRow({ unitId, label, title }: { unitId: string; label?: string; title: string }) {
  const { progress } = useProgress();
  const [open, setOpen] = useState(false);
  const percent = itemPercent(progress, unitId);

  return (
    <li className="rounded-xl border border-border/70 bg-background/60">
      <button
        type="button"
        onClick={() => setOpen((value) => !value)}
        aria-expanded={open}
        className="flex w-full items-center gap-3 px-3 py-2.5 text-left"
      >
        <ProgressRing percent={percent} size={30} thickness={4} colorClassName="text-brand-blue" />
        <span className="min-w-0 flex-1">
          {label ? (
            <span className="num block text-[0.65rem] font-semibold uppercase tracking-[0.16em] text-brand-blue">
              {label}
            </span>
          ) : null}
          <span className="block text-sm font-semibold leading-snug text-foreground">{title}</span>
        </span>
        <span className="num text-xs font-semibold text-muted-foreground">
          {formatPercent(percent)}
        </span>
        <ChevronDown
          className={cn("size-4 shrink-0 text-muted-foreground transition-transform duration-300", open && "rotate-180")}
        />
      </button>
      {open ? <TrackChecklist itemId={unitId} className="reveal-down px-3 pb-3" /> : null}
    </li>
  );
}

export function ChapterCard({ chapter }: { chapter: Chapter }) {
  const { progress } = useProgress();
  const [open, setOpen] = useState(false);
  const stat = chapterStat(progress, chapter);
  const complete = stat.total > 0 && stat.completed === stat.total;

  return (
    <article className="flex flex-col rounded-2xl border border-border bg-card p-5 shadow-[var(--shadow-card)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[var(--shadow-lift)]">
      <button
        type="button"
        onClick={() => setOpen((value) => !value)}
        aria-expanded={open}
        className="text-left"
      >
        <div className="flex items-start justify-between gap-4">
          <div className="min-w-0">
            {chapter.label ? (
              <span className="num text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-brand-sage">
                {chapter.label}
              </span>
            ) : null}
            <h4 className="mt-1 text-base font-bold leading-snug text-foreground">
              {chapter.title}
            </h4>
          </div>
          <ChevronDown
            className={cn(
              "mt-1 size-4 shrink-0 text-muted-foreground transition-transform duration-300",
              open && "rotate-180",
            )}
          />
        </div>
        <div className="mt-4 flex items-center gap-3">
          <ProgressRing percent={stat.percent} size={38} thickness={5} />
          <div className="flex flex-col">
            <span className="num text-lg font-bold leading-none text-brand-red">
              {formatPercent(stat.percent)}
            </span>
            {complete ? (
              <span className="num text-[0.6rem] font-semibold uppercase tracking-[0.18em] text-brand-sage">
                Complete
              </span>
            ) : (
              <span className="num text-[0.6rem] uppercase tracking-[0.16em] text-muted-foreground">
                {stat.completed}/{stat.total} items
              </span>
            )}
          </div>
        </div>
      </button>

      {open ? (
        <div className="reveal-down mt-4 border-t border-border pt-4">
          {chapter.units.length ? (
            <ul className="flex flex-col gap-2">
              {chapter.units.map((unit) => (
                <UnitRow key={unit.id} unitId={unit.id} label={unit.label} title={unit.title} />
              ))}
            </ul>
          ) : chapter.self ? (
            <TrackChecklist itemId={chapter.self.id} />
          ) : null}
        </div>
      ) : null}
    </article>
  );
}