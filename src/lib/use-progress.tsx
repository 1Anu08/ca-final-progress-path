import { createContext, useCallback, useContext, useEffect, useMemo, useState } from "react";
import type { ProgressState } from "./progress";

const STORAGE_KEY = "ca-final-study-tracker.v1";

type ProgressApi = {
  progress: ProgressState;
  hydrated: boolean;
  toggle: (itemId: string, field: "videos" | "questions") => void;
};

const ProgressContext = createContext<ProgressApi | null>(null);

function read(): ProgressState {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? (JSON.parse(raw) as ProgressState) : {};
  } catch {
    return {};
  }
}

export function ProgressProvider({ children }: { children: React.ReactNode }) {
  const [progress, setProgress] = useState<ProgressState>({});
  const [hydrated, setHydrated] = useState(false);

  // Read once after hydration so SSR markup and first client render match.
  useEffect(() => {
    setProgress(read());
    setHydrated(true);
  }, []);

  const toggle = useCallback((itemId: string, field: "videos" | "questions") => {
    setProgress((current) => {
      const item = current[itemId] ?? {};
      const next: ProgressState = { ...current, [itemId]: { ...item, [field]: !item[field] } };
      try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
      } catch {
        /* storage unavailable — keep in-memory state */
      }
      return next;
    });
  }, []);

  const value = useMemo(() => ({ progress, hydrated, toggle }), [progress, hydrated, toggle]);

  return <ProgressContext.Provider value={value}>{children}</ProgressContext.Provider>;
}

export function useProgress(): ProgressApi {
  const context = useContext(ProgressContext);
  if (!context) throw new Error("useProgress must be used inside <ProgressProvider>");
  return context;
}