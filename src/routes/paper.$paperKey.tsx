import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";

import { ChapterCard } from "@/components/tracker/ChapterCard";
import { ProgressRing } from "@/components/tracker/ProgressRing";
import { componentStat, formatPercent, paperStat } from "@/lib/progress";
import { getPaper, type PaperComponent } from "@/lib/syllabus-model";
import { useProgress } from "@/lib/use-progress";

export const Route = createFileRoute("/paper/$paperKey")({
  loader: ({ params }) => {
    const paper = getPaper(params.paperKey);
    if (!paper) throw notFound();
    return { name: paper.name };
  },
  head: ({ loaderData }) => ({
    meta: loaderData
      ? [
          { title: `${loaderData.name} — CA Final Study Tracker` },
          {
            name: "description",
            content: `Chapter-by-chapter first-study progress for ${loaderData.name}.`,
          },
          { property: "og:title", content: `${loaderData.name} — CA Final Study Tracker` },
          {
            property: "og:description",
            content: `Chapter-by-chapter first-study progress for ${loaderData.name}.`,
          },
          { property: "og:type", content: "article" },
          { name: "twitter:card", content: "summary_large_image" },
        ]
      : [{ title: "Unavailable" }, { name: "robots", content: "noindex" }],
  }),
  component: PaperView,
});

function ComponentSections({ component }: { component: PaperComponent }) {
  return (
    <>
      {component.sections.map((section) => (
        <section key={section.id} className="mt-10">
          {section.title ? (
            <div className="mb-4 flex items-center gap-4">
              <h3 className="num text-xs font-bold uppercase tracking-[0.26em] text-brand-blue">
                {section.title}
              </h3>
              <span className="h-px flex-1 bg-border" />
            </div>
          ) : null}
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
            {section.chapters.map((chapter) => (
              <ChapterCard key={chapter.id} chapter={chapter} />
            ))}
          </div>
        </section>
      ))}
    </>
  );
}

function PaperView() {
  const { paperKey } = Route.useParams();
  const { progress } = useProgress();
  const paper = getPaper(paperKey);
  if (!paper) return null;

  const stat = paperStat(progress, paper);
  const multiComponent = paper.components.length > 1;

  return (
    <main className="mx-auto w-full max-w-6xl px-4 pb-24 pt-10 sm:px-6">
      <Link
        to="/"
        className="num inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground transition-colors hover:text-brand-red"
      >
        <ArrowLeft className="size-4" /> Dashboard
      </Link>

      <header className="mt-6 flex flex-col gap-6 rounded-3xl border border-brand-red/20 bg-brand-cream p-6 sm:flex-row sm:items-center sm:justify-between sm:p-8">
        <div>
          <span className="num text-xs font-semibold uppercase tracking-[0.24em] text-brand-red">
            Paper {paper.number}
          </span>
          <h1 className="mt-2 text-3xl font-extrabold uppercase leading-tight tracking-tight text-foreground sm:text-4xl">
            {paper.name}
          </h1>
          <p className="num mt-2 text-sm text-muted-foreground">
            {stat.completed} / {stat.total} trackable items completed
          </p>
        </div>
        <div className="flex items-center gap-4">
          <ProgressRing percent={stat.percent} size={78} thickness={9} />
          <span className="num text-4xl font-bold text-brand-red">
            {formatPercent(stat.percent)}
          </span>
        </div>
      </header>

      {paper.components.map((component) => {
        const componentProgress = componentStat(progress, component);
        return (
          <div key={component.id}>
            {multiComponent ? (
              <div className="mt-12 flex items-center justify-between gap-4 rounded-2xl border border-border bg-card px-5 py-4 shadow-[var(--shadow-card)]">
                <h2 className="text-xl font-bold uppercase tracking-tight text-foreground">
                  {component.name}
                </h2>
                <div className="flex items-center gap-3">
                  <ProgressRing
                    percent={componentProgress.percent}
                    size={40}
                    thickness={6}
                    colorClassName="text-brand-sage"
                  />
                  <span className="num text-lg font-bold text-brand-sage">
                    {formatPercent(componentProgress.percent)}
                  </span>
                </div>
              </div>
            ) : null}
            <ComponentSections component={component} />
          </div>
        );
      })}
    </main>
  );
}