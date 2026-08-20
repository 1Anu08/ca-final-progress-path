import { RAW_PAPERS, type RawPaper } from "@/data/syllabus";

/** A trackable item always has exactly two completion flags: videos + questions. */
export type Trackable = {
  id: string;
  title: string;
  /** Set when the trackable item is a unit inside a chapter. */
  label?: string;
};

export type Chapter = {
  id: string;
  title: string;
  label: string | null;
  /** Empty when the chapter itself is the trackable item. */
  units: Trackable[];
  /** The chapter's own trackable item (only when it has no units). */
  self: Trackable | null;
};

export type Section = { id: string; title?: string; chapters: Chapter[] };
export type PaperComponent = { id: string; name?: string; sections: Section[] };
export type Paper = {
  key: string;
  number: number;
  name: string;
  short: string;
  group: "GROUP I" | "GROUP II";
  components: PaperComponent[];
};

function slug(text: string) {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "")
    .slice(0, 60);
}

function buildPaper(raw: RawPaper): Paper {
  return {
    key: raw.key,
    number: raw.number,
    name: raw.name,
    short: raw.short,
    group: raw.group,
    components: raw.components.map((component) => {
      const componentId = `${raw.key}.${component.name ? slug(component.name) : "main"}`;
      let chapterNumber = 1;
      return {
        id: componentId,
        name: component.name,
        sections: component.sections.map((section, si) => ({
          id: `${componentId}.s${si}`,
          title: section.title,
          chapters: section.chapters.map((chapter) => {
            if (section.startNumber !== undefined && section.chapters[0] === chapter) {
              chapterNumber = section.startNumber;
            }
            const numbered = chapter.numbered !== false;
            const label = numbered ? `Chapter ${chapterNumber++}` : null;
            const chapterId = `${componentId}.${slug(chapter.title)}`;
            const units = (chapter.units ?? []).map((unit, ui) => ({
              id: `${chapterId}.${slug(unit.title) || `u${ui}`}`,
              title: unit.title,
              label: `Unit ${ui + 1}`,
            }));
            return {
              id: chapterId,
              title: chapter.title,
              label,
              units,
              self: units.length ? null : { id: chapterId, title: chapter.title },
            };
          }),
        })),
      };
    }),
  };
}

export const PAPERS: Paper[] = RAW_PAPERS.map(buildPaper);

export function getPaper(key: string): Paper | undefined {
  return PAPERS.find((paper) => paper.key === key);
}

export function chaptersOf(component: PaperComponent): Chapter[] {
  return component.sections.flatMap((section) => section.chapters);
}

export function trackablesOf(chapter: Chapter): Trackable[] {
  return chapter.units.length ? chapter.units : chapter.self ? [chapter.self] : [];
}

export function componentTrackables(component: PaperComponent): Trackable[] {
  return chaptersOf(component).flatMap(trackablesOf);
}