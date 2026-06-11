"use client";

import { motion } from "framer-motion";
import Reveal from "./Reveal";

const offerings = [
  {
    emoji: "🎓",
    title: "PPC Bootcamp",
    text: "Praktický PPC kurz, který tě provede od založení účtu až po pravidelnou péči o kampaně.",
  },
  {
    emoji: "📬",
    title: "PPC Digest",
    text: "Každý týden servírujeme přímo do vašich emailových schránek souhrn PPC novinek a nejzajímavějších článků z oboru.",
  },
  {
    emoji: "✍️",
    title: "Blog",
    text: "Vyhodnocujeme testy, oprašujeme back to basics a sdílíme checklisty a praktický tipy.",
  },
];

export default function Industry() {
  return (
    <section id="obor" className="relative mx-auto max-w-7xl px-6 py-28">
      <Reveal>
        <h2 className="font-display text-4xl font-bold tracking-tight sm:text-5xl">
          Posouváme <span className="gradient-text">celý obor</span>
        </h2>
        <p className="mt-5 max-w-2xl text-lg text-cream/60">
          Staráme se, aby se celý obor posouval — pomáháme utvářet best
          practices v online marketingu.
        </p>
      </Reveal>

      <div className="mt-16 grid gap-8 md:grid-cols-3">
        {offerings.map((o, i) => (
          <motion.article
            key={o.title}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{
              delay: i * 0.12,
              duration: 0.8,
              ease: [0.21, 0.47, 0.32, 0.98],
            }}
            whileHover={{ y: -8 }}
            className="group rounded-3xl glass glass-hover p-9"
          >
            <span className="inline-block text-4xl transition-transform duration-500 group-hover:scale-125 group-hover:-rotate-12">
              {o.emoji}
            </span>
            <h3 className="mt-6 font-display text-2xl font-bold">{o.title}</h3>
            <p className="mt-3 leading-relaxed text-cream/55">{o.text}</p>
            <a
              href="#kontakt"
              className="mt-7 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-violet-soft transition-colors hover:text-accent-yellow"
            >
              Chci vědět víc
              <span className="transition-transform duration-300 group-hover:translate-x-1.5">
                →
              </span>
            </a>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
