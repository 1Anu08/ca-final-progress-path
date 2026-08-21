import { useState } from "react";

/**
 * Module-level flag: the wave plays once per application load, not on every
 * dashboard visit via client-side navigation. Computed during the first render
 * so SSR markup and the first client render agree.
 */
let hasPlayed = false;

export function WaveTitle({ text }: { text: string }) {
  const [play] = useState(() => {
    if (hasPlayed) return false;
    hasPlayed = true;
    return true;
  });

  const letters = [...text];

  return (
    <h1 className="text-center text-4xl font-extrabold uppercase leading-[1.05] tracking-tight text-brand-red sm:text-5xl md:text-6xl">
      {letters.map((letter, index) => (
        <span
          key={`${letter}-${index}`}
          className={play ? "wave-letter" : undefined}
          style={play ? { animationDelay: `${index * 45}ms` } : undefined}
        >
          {letter === " " ? "\u00A0" : letter}
        </span>
      ))}
    </h1>
  );
}