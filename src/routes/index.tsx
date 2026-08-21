import { createFileRoute } from "@tanstack/react-router";

import { OverallProgress } from "@/components/tracker/OverallProgress";
import { PaperCard } from "@/components/tracker/PaperCard";
import { WaveTitle } from "@/components/tracker/WaveTitle";
import { overallPercent, paperStat } from "@/lib/progress";
import { PAPERS } from "@/lib/syllabus-model";
import { useProgress } from "@/lib/use-progress";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "CA Final Study Tracker — First Study Progress" },
      {
        name: "description",
        content:
          "A focused CA Final first-study tracker: mark videos watched and questions practiced chapter by chapter across all six papers.",
      },
      { property: "og:title", content: "CA Final Study Tracker" },
      {
        property: "og:description",
        content: "Track first-study completion across all six CA Final papers.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Dashboard,
});

const GROUPS = ["GROUP I", "GROUP II"] as const;

function Dashboard() {
  const { progress } = useProgress();
  const overall = overallPercent(progress, PAPERS);

  return (
    <main className="mx-auto w-full max-w-6xl px-4 pb-24 pt-12 sm:px-6 sm:pt-16">
      <header className="flex flex-col items-center gap-8">
        <div className="flex flex-col items-center gap-3">
          <span className="num rounded-full border border-brand-red/25 bg-brand-cream px-3 py-1 text-[0.65rem] font-semibold uppercase tracking-[0.24em] text-brand-red">
            FIRST STUDY
          </span>
          <WaveTitle text="CA FINAL STUDY TRACKER" />
        </div>
        <OverallProgress percent={overall} />
      </header>

      {GROUPS.map((group) => (
        <section key={group} className="mt-14">
          <div className="mb-5 flex items-center gap-4">
            <h2 className="num text-sm font-bold uppercase tracking-[0.3em] text-brand-sage">
              {group}
            </h2>
            <span className="h-px flex-1 bg-border" />
          </div>
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {PAPERS.filter((paper) => paper.group === group).map((paper) => (
              <PaperCard key={paper.key} paper={paper} stat={paperStat(progress, paper)} />
            ))}
          </div>
        </section>
      ))}
    </main>
  );
}
