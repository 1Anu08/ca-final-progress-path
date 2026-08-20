import { itemState } from "@/lib/progress";
import { useProgress } from "@/lib/use-progress";
import { cn } from "@/lib/utils";
import { Check } from "lucide-react";

const FIELDS = [
  { key: "videos", label: "Videos Watched" },
  { key: "questions", label: "Questions Practiced" },
] as const;

export function TrackChecklist({ itemId, className }: { itemId: string; className?: string }) {
  const { progress, toggle } = useProgress();
  const state = itemState(progress, itemId);

  return (
    <div className={cn("flex flex-col gap-2", className)}>
      {FIELDS.map((field) => {
        const checked = Boolean(state[field.key]);
        return (
          <button
            key={field.key}
            type="button"
            role="checkbox"
            aria-checked={checked}
            onClick={() => toggle(itemId, field.key)}
            className="group flex items-center gap-3 rounded-lg px-2 py-1.5 text-left transition-colors hover:bg-brand-cream/60 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
          >
            <span
              className={cn(
                "flex size-5 shrink-0 items-center justify-center rounded-[5px] border-2 transition-all duration-200",
                checked
                  ? "border-brand-sage bg-brand-sage text-primary-foreground"
                  : "border-foreground/30 bg-card group-hover:border-brand-sage",
              )}
            >
              <Check
                className={cn(
                  "size-3.5 transition-transform duration-200",
                  checked ? "scale-100" : "scale-0",
                )}
                strokeWidth={3.5}
              />
            </span>
            <span
              className={cn(
                "text-sm font-medium transition-colors",
                checked ? "text-muted-foreground line-through" : "text-foreground",
              )}
            >
              {field.label}
            </span>
          </button>
        );
      })}
    </div>
  );
}