"use client";

import { motion } from "framer-motion";
import Reveal from "./Reveal";

const testimonials = [
  {
    quote: "Já vidím v sales bomby, můžeme jít výš? 🚀",
    name: "Vojta Hlavenka",
    company: "Elonga",
    initials: "VH",
    gradient: "from-primary to-violet-glow",
  },
  {
    quote:
      "Povedlo se to, co bylo hlavním cílem rozjetí spolupráce s vámi — online marketing dalece překonal cold call. Díky za to!",
    name: "Jan Sláma",
    company: "Faceup",
    initials: "JS",
    gradient: "from-accent-coral to-accent-pink",
  },
  {
    quote: "Polsko růst 460 % meziročně! Jde to i bez slev ✨",
    name: "Michal Kempa",
    company: "Goldea",
    initials: "MK",
    gradient: "from-accent-yellow to-accent-mint",
  },
];

export default function Testimonials() {
  return (
    <section className="relative mx-auto max-w-7xl px-6 py-28">
      <div className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-[30rem] w-[30rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/15 blur-[140px]" />

      <Reveal className="text-center">
        <h2 className="font-display text-4xl font-bold tracking-tight sm:text-6xl">
          Co o nás říkají <span className="gradient-text">klienti?</span>
        </h2>
      </Reveal>

      <div className="mt-16 grid gap-8 lg:grid-cols-3">
        {testimonials.map((t, i) => (
          <motion.figure
            key={t.name}
            initial={{ opacity: 0, scale: 0.92, y: 40 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{
              delay: i * 0.15,
              duration: 0.8,
              ease: [0.21, 0.47, 0.32, 0.98],
            }}
            whileHover={{ scale: 1.03, transition: { duration: 0.3 } }}
            className={`relative rounded-3xl glass glass-hover p-9 ${
              i === 1 ? "lg:-translate-y-6" : ""
            }`}
          >
            <span className="font-display text-6xl leading-none text-violet-glow/40">
              &ldquo;
            </span>
            <blockquote className="mt-2 text-lg leading-relaxed text-cream/85">
              {t.quote}
            </blockquote>
            <figcaption className="mt-8 flex items-center gap-4">
              <span
                className={`flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br ${t.gradient} font-display text-sm font-bold text-ink`}
              >
                {t.initials}
              </span>
              <div>
                <p className="font-semibold">{t.name}</p>
                <p className="text-sm text-cream/50">{t.company}</p>
              </div>
            </figcaption>
          </motion.figure>
        ))}
      </div>
    </section>
  );
}
