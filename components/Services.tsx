"use client";

import { motion } from "framer-motion";
import Reveal from "./Reveal";

const services = [
  {
    tag: "B2B / SaaS",
    emoji: "🎯",
    title: "Lead gen, který překoná cold cally",
    text: "Dlouhé rozhodovací cykly, náročné publikum, vysoká hodnota zákazníka. Stavíme full-funnel strategie, které z marketingu udělají váš hlavní lead gen kanál.",
    glow: "from-primary/40 to-violet-glow/10",
    accent: "text-violet-soft",
  },
  {
    tag: "Ecommerce",
    emoji: "🛒",
    title: "Škálování obratu i do zahraničí",
    text: "Feed, kreativa, ROAS i expanze do nových zemí. Umíme zdvojnásobit obrat a růst stovky procent meziročně — a jde to i bez slev.",
    glow: "from-accent-pink/30 to-accent-yellow/10",
    accent: "text-accent-pink",
  },
];

export default function Services() {
  return (
    <section id="sluzby" className="relative mx-auto max-w-7xl px-6 py-28">
      <Reveal>
        <h2 className="font-display text-4xl font-bold tracking-tight sm:text-6xl">
          V čem jsme <span className="gradient-text">machři?</span>
        </h2>
        <p className="mt-5 max-w-2xl text-lg text-cream/60">
          Umíme škálovat B2B/SaaS i ecommerce. Ale přístupy jsou úplně
          rozdílné — proto na každý segment máme vlastní specialisty.
        </p>
      </Reveal>

      <div className="mt-16 grid gap-8 md:grid-cols-2">
        {services.map((s, i) => (
          <motion.article
            key={s.tag}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{
              delay: i * 0.15,
              duration: 0.8,
              ease: [0.21, 0.47, 0.32, 0.98],
            }}
            whileHover={{ y: -8 }}
            className="group relative overflow-hidden rounded-3xl glass glass-hover p-10"
          >
            <div
              className={`pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-gradient-to-br ${s.glow} blur-3xl opacity-0 transition-opacity duration-700 group-hover:opacity-100`}
            />
            <div className="text-5xl">{s.emoji}</div>
            <p
              className={`mt-6 font-display text-sm font-semibold uppercase tracking-[0.25em] ${s.accent}`}
            >
              {s.tag}
            </p>
            <h3 className="mt-3 font-display text-2xl font-bold sm:text-3xl">
              {s.title}
            </h3>
            <p className="mt-4 leading-relaxed text-cream/60">{s.text}</p>
            <a
              href="#kontakt"
              className="mt-8 inline-flex items-center gap-2 font-semibold text-cream transition-colors hover:text-accent-yellow"
            >
              Chci vědět víc
              <span className="transition-transform duration-300 group-hover:translate-x-1.5">
                →
              </span>
            </a>
          </motion.article>
        ))}
      </div>

      <Reveal delay={0.2} className="mt-14 text-center">
        <p className="font-display text-xl text-cream/70 sm:text-2xl">
          Neřešíme jen vaše kampaně —{" "}
          <span className="gradient-text font-semibold">
            pomáháme rozvíjet váš byznys.
          </span>
        </p>
      </Reveal>
    </section>
  );
}
