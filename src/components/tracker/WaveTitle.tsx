import { useEffect, useState } from "react";

const SESSION_KEY = "ca-final-study-tracker.wave-played";

export function WaveTitle({ text }: { text: string }) {
  // Always false on the server so SSR markup and the first client render match;
  // the wave is started right after hydration.
  const [play, setPlay] = useState(false);

  useEffect(() => {
    let alreadyPlayed = false;
    try {
      alreadyPlayed = sessionStorage.getItem(SESSION_KEY) === "1";
      sessionStorage.setItem(SESSION_KEY, "1");
    } catch {
      /* storage unavailable — still animate */
    }
    if (alreadyPlayed) return;
    const frame = requestAnimationFrame(() => setPlay(true));
    return () => cancelAnimationFrame(frame);
  }, []);

  const letters = [...text];

  return (
    <h1 className="text-center text-4xl font-extrabold uppercase leading-[1.05] tracking-tight text-brand-red sm:text-5xl md:text-6xl">
      {letters.map((letter, index) => (
        <span
          key={`${letter}-${index}`}
          className={play ? "wave-letter" : "inline-block"}
          style={play ? { animationDelay: `${index * 45}ms` } : undefined}
        >
          {letter === " " ? "\u00A0" : letter}
        </span>
      ))}
    </h1>
  );
}
