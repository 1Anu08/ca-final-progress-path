import {
  chaptersOf,
  componentTrackables,
  trackablesOf,
  type Chapter,
  type Paper,
  type PaperComponent,
} from "./syllabus-model";

export type ItemState = { videos?: boolean; questions?: boolean };
/** Keyed by trackable item id. */
export type ProgressState = Record<string, ItemState>;

export type Stat = {
  /** 0 - 100 */
  percent: number;
  completed: number;
  total: number;
};

const EMPTY: ItemState = {};

export function itemState(progress: ProgressState, id: string): ItemState {
  return progress[id] ?? EMPTY;
}

/** 0, 50 or 100 for a single trackable item. */
export function itemPercent(progress: ProgressState, id: string): number {
  const state = itemState(progress, id);
  return (state.videos ? 50 : 0) + (state.questions ? 50 : 0);
}

export function isItemComplete(progress: ProgressState, id: string): boolean {
  const state = itemState(progress, id);
  return Boolean(state.videos && state.questions);
}

function statFromIds(progress: ProgressState, ids: string[]): Stat {
  const completed = ids.filter((id) => isItemComplete(progress, id)).length;
  const total = ids.length;
  return { completed, total, percent: total ? (completed / total) * 100 : 0 };
}

export function chapterStat(progress: ProgressState, chapter: Chapter): Stat {
  return statFromIds(
    progress,
    trackablesOf(chapter).map((item) => item.id),
  );
}

export function componentStat(progress: ProgressState, component: PaperComponent): Stat {
  return statFromIds(
    progress,
    componentTrackables(component).map((item) => item.id),
  );
}

/**
 * Paper progress. For multi-component papers (IBS) each component carries equal
 * weight, so IBS % = (Costing % + Law %) / 2.
 */
export function paperStat(progress: ProgressState, paper: Paper): Stat {
  const stats = paper.components.map((component) => componentStat(progress, component));
  const percent = stats.reduce((sum, stat) => sum + stat.percent, 0) / stats.length;
  return {
    percent,
    completed: stats.reduce((sum, stat) => sum + stat.completed, 0),
    total: stats.reduce((sum, stat) => sum + stat.total, 0),
  };
}

/** Overall progress gives equal weight (1/6) to every paper. */
export function overallPercent(progress: ProgressState, papers: Paper[]): number {
  if (!papers.length) return 0;
  return (
    papers.reduce((sum, paper) => sum + paperStat(progress, paper).percent, 0) /
    papers.length
  );
}

export function chapterCount(component: PaperComponent): number {
  return chaptersOf(component).length;
}

export function formatPercent(percent: number): string {
  return `${Math.round(percent)}%`;
}