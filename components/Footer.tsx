"use client";

import Reveal from "./Reveal";

const socials = [
  { label: "Facebook", href: "https://www.facebook.com/unicornslab" },
  { label: "LinkedIn", href: "https://www.linkedin.com/company/unicornslab" },
  { label: "Instagram", href: "https://www.instagram.com/ulab.rocks" },
  { label: "YouTube", href: "https://www.youtube.com/@unicornslab" },
];

export default function Footer() {
  return (
    <footer className="border-t border-white/8 px-6 py-16">
      <Reveal className="mx-auto max-w-7xl">
        <div className="grid gap-12 md:grid-cols-3">
          <div>
            <p className="font-display text-3xl font-bold">
              u<span className="gradient-text">Lab</span>
              <span className="text-accent-yellow">.</span>
            </p>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-cream/50">
              Shaping unicorns side by side. Výkonnostní marketing pro B2B/SaaS
              a ecommerce.
            </p>
          </div>

          <div className="text-sm leading-relaxed text-cream/50">
            <p className="font-display font-semibold uppercase tracking-wider text-cream/70">
              UnicornsLab s.r.o.
            </p>
            <p className="mt-4">
              Kancelář: Štefánikova 114/45, Ponava
              <br />
              602 00 Brno
            </p>
            <p className="mt-3">
              Sídlo: Skřivanova 334/4, Ponava
              <br />
              602 00 Brno
            </p>
            <p className="mt-3">
              IČO: 04761979 · Městský soud Brno, C 91768
            </p>
          </div>

          <div className="text-sm">
            <p className="font-display font-semibold uppercase tracking-wider text-cream/70">
              Sledujte nás
            </p>
            <ul className="mt-4 space-y-2">
              {socials.map((s) => (
                <li key={s.label}>
                  <a
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center gap-2 text-cream/50 transition-colors hover:text-accent-yellow"
                  >
                    {s.label}
                    <span className="opacity-0 transition-all duration-300 group-hover:translate-x-1 group-hover:opacity-100">
                      ↗
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-white/8 pt-8 text-xs text-cream/35 sm:flex-row">
          <p>© {new Date().getFullYear()} UnicornsLab s.r.o. 🦄</p>
          <div className="flex gap-6">
            <a href="#" className="transition-colors hover:text-cream/70">
              Všeobecné obchodní podmínky
            </a>
            <a href="#" className="transition-colors hover:text-cream/70">
              Zásady ochrany osobních údajů
            </a>
          </div>
        </div>
      </Reveal>
    </footer>
  );
}
