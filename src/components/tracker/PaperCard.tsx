import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { ArrowRight } from "lucide-react";

import { ProgressRing } from "./ProgressRing";
import { formatPercent, type Stat } from "@/lib/progress";
import type { Paper } from "@/lib/syllabus-model";

export function PaperCard({ paper, stat }: { paper: Paper; stat: Stat }) {
  const [flipped, setFlipped] = useState(false);

  return (
    <div className="flip-scene h-56">
      <div
        className="flip-inner size-full"
        style={{ transform: flipped ? "rotateY(180deg)" : "rotateY(0deg)" }}
      >
        {/* Front */}
        <button
          type="button"
          onClick={() => setFlipped(true)}
          aria-hidden={flipped}
          tabIndex={flipped ? -1 : 0}
          className="flip-face absolute inset-0 flex flex-col justify-between rounded-3xl border border-border bg-card p-6 text-left shadow-[var(--shadow-card)] transition-shadow duration-300 hover:shadow-[var(--shadow-lift)]"
        >
          <span className="num text-xs font-semibold uppercase tracking-[0.2em] text-brand-blue">
            Paper {paper.number}
          </span>
          <h3 className="text-xl font-bold uppercase leading-tight tracking-tight text-foreground">
            {paper.name}
          </h3>
          <div className="flex items-center gap-3">
            <ProgressRing percent={stat.percent} size={44} thickness={6} />
            <span className="num text-2xl font-bold text-brand-red">
              {formatPercent(stat.percent)}
            </span>
          </div>
        </button>

        {/* Back */}
        <div
          className="flip-face absolute inset-0 flex flex-col justify-between rounded-3xl border border-brand-red/25 bg-brand-cream p-6"
          style={{ transform: "rotateY(180deg)" }}
          aria-hidden={!flipped}
        >
          <div>
            <h3 className="text-lg font-bold uppercase leading-tight tracking-tight text-foreground">
              {paper.name}
            </h3>
            <p className="num mt-2 text-3xl font-bold text-brand-red">
              {formatPercent(stat.percent)}
            </p>
            <p className="num text-sm text-muted-foreground">
              {stat.completed} / {stat.total} completed
            </p>
          </div>
          <div className="flex items-center justify-between gap-2">
            <Link
              to="/paper/$paperKey"
              params={{ paperKey: paper.key }}
              tabIndex={flipped ? 0 : -1}
              className="inline-flex items-center gap-2 rounded-full bg-brand-red px-4 py-2 text-sm font-semibold text-primary-foreground transition-transform duration-200 hover:scale-[1.03]"
            >
              Continue Studying <ArrowRight className="size-4" />
            </Link>
            <button
              type="button"
              onClick={() => setFlipped(false)}
              tabIndex={flipped ? 0 : -1}
              className="num text-xs uppercase tracking-widest text-muted-foreground underline-offset-4 hover:underline"
            >
              Back
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}