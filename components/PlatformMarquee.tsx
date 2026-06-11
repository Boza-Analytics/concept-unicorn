"use client";

import Reveal from "./Reveal";

const platforms = [
  "Google Ads",
  "Sklik",
  "Instagram",
  "Facebook",
  "YouTube",
  "Reddit",
  "Quora",
  "TikTok",
  "Pinterest",
  "LinkedIn",
];

function Row({ reverse = false }: { reverse?: boolean }) {
  const items = [...platforms, ...platforms];
  return (
    <div className="flex overflow-hidden no-scrollbar [mask-image:linear-gradient(to_right,transparent,black_12%,black_88%,transparent)]">
      <div
        className={`flex shrink-0 items-center gap-4 pr-4 ${
          reverse ? "animate-marquee-reverse" : "animate-marquee"
        }`}
      >
        {items.map((p, i) => (
          <span
            key={`${p}-${i}`}
            className="glass whitespace-nowrap rounded-full px-7 py-3.5 font-display text-lg text-cream/75 transition-colors hover:text-accent-yellow"
          >
            {p}
          </span>
        ))}
      </div>
    </div>
  );
}

export default function PlatformMarquee() {
  return (
    <section className="relative py-24">
      <Reveal className="mx-auto mb-12 max-w-7xl px-6 text-center">
        <p className="font-display text-sm uppercase tracking-[0.3em] text-violet-soft">
          Pokryjeme všechny relevantní kanály
        </p>
      </Reveal>
      <div className="space-y-4">
        <Row />
        <Row reverse />
      </div>
    </section>
  );
}
