"use client";

import { motion } from "framer-motion";
import CountUp from "./CountUp";
import Reveal from "./Reveal";

const cases = [
  {
    client: "Ovečkárna",
    story: "Z vánočních trhů až k prodeji po celé Evropě",
    stat: { to: 40, suffix: " mil. Kč", label: "zdvojnásobený roční obrat" },
    gradient: "from-primary to-violet-glow",
  },
  {
    client: "Faceup",
    story: "Z nuly na hlavní lead gen kanál",
    stat: { to: 1, prefix: "#", suffix: "", label: "zdroj nových leadů" },
    gradient: "from-accent-coral to-accent-pink",
  },
  {
    client: "Elonga",
    story: "Raketový start spolupráce",
    stat: { to: 5, suffix: " mil. Kč", label: "za první 3 měsíce" },
    gradient: "from-accent-yellow to-accent-mint",
  },
];

export default function CaseStudies() {
  return (
    <section id="vysledky" className="relative mx-auto max-w-7xl px-6 py-28">
      <Reveal>
        <h2 className="font-display text-4xl font-bold tracking-tight sm:text-6xl">
          Na tyhle spolupráce jsme{" "}
          <span className="gradient-text">extra hrdí!</span>
        </h2>
      </Reveal>

      <div className="mt-16 grid gap-8 lg:grid-cols-3">
        {cases.map((c, i) => (
          <motion.article
            key={c.client}
            initial={{ opacity: 0, y: 70, rotate: i % 2 ? 1.5 : -1.5 }}
            whileInView={{ opacity: 1, y: 0, rotate: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{
              delay: i * 0.15,
              duration: 0.9,
              ease: [0.21, 0.47, 0.32, 0.98],
            }}
            whileHover={{ y: -10, transition: { duration: 0.3 } }}
            className="group relative overflow-hidden rounded-3xl glass glass-hover p-9"
          >
            <div
              className={`h-1.5 w-16 rounded-full bg-gradient-to-r ${c.gradient} transition-all duration-500 group-hover:w-28`}
            />
            <h3 className="mt-7 font-display text-2xl font-bold">{c.client}</h3>
            <p className="mt-2 text-cream/55">{c.story}</p>
            <div className="mt-9">
              <CountUp
                to={c.stat.to}
                prefix={c.stat.prefix ?? ""}
                suffix={c.stat.suffix}
                className={`bg-gradient-to-r ${c.gradient} bg-clip-text font-display text-5xl font-bold text-transparent`}
              />
              <p className="mt-2 text-sm uppercase tracking-wider text-cream/45">
                {c.stat.label}
              </p>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
