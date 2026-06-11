"use client";

import { motion } from "framer-motion";
import MagneticButton from "./MagneticButton";
import Reveal from "./Reveal";

const reasons = [
  {
    n: "01",
    title: "Máme vymakaný procesy",
    text: "Od onboardingu po reporting. Nic nenecháváme náhodě a vy vždycky víte, co se děje a proč.",
  },
  {
    n: "02",
    title: "Bavíte se přímo se specialisty",
    text: "Žádný account manager jako prostředník. Mluvíte s lidmi, kteří vaše kampaně reálně dělají.",
  },
  {
    n: "03",
    title: "Jdeme do hloubky a přemýšlíme strategicky",
    text: "Kampaně jsou jen nástroj. Zajímá nás vaše marže, pozice na trhu a kam chcete firmu dostat.",
  },
];

export default function WhyUs() {
  return (
    <section className="relative mx-auto max-w-7xl px-6 py-28">
      <Reveal>
        <h2 className="font-display text-4xl font-bold tracking-tight sm:text-6xl">
          A proč do toho jít <span className="gradient-text">s námi?</span>
        </h2>
      </Reveal>

      <div className="mt-16 space-y-2">
        {reasons.map((r, i) => (
          <motion.div
            key={r.n}
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{
              delay: i * 0.12,
              duration: 0.8,
              ease: [0.21, 0.47, 0.32, 0.98],
            }}
            className="group flex flex-col gap-4 border-b border-white/8 py-10 transition-colors hover:border-violet-glow/40 sm:flex-row sm:items-start sm:gap-12"
          >
            <span className="font-display text-5xl font-bold text-stroke transition-colors duration-500 group-hover:text-accent-yellow group-hover:[-webkit-text-stroke:0px] sm:text-6xl">
              {r.n}
            </span>
            <div className="flex-1">
              <h3 className="font-display text-2xl font-bold transition-transform duration-500 group-hover:translate-x-2 sm:text-3xl">
                {r.title}
              </h3>
              <p className="mt-3 max-w-2xl text-cream/55 transition-transform duration-500 group-hover:translate-x-2">
                {r.text}
              </p>
            </div>
            <span className="hidden text-3xl opacity-0 transition-all duration-500 group-hover:translate-x-0 group-hover:opacity-100 sm:block sm:-translate-x-4">
              ✨
            </span>
          </motion.div>
        ))}
      </div>

      <Reveal delay={0.2} className="mt-14 text-center">
        <MagneticButton
          href="#kontakt"
          className="group inline-flex items-center gap-2 rounded-full bg-primary px-9 py-4 font-semibold text-white shadow-[0_0_40px_-8px_#5827D5] transition-shadow hover:shadow-[0_0_60px_-6px_#8B5CF6]"
        >
          Pojďme se bavit
          <span className="transition-transform duration-300 group-hover:translate-x-1">
            →
          </span>
        </MagneticButton>
      </Reveal>
    </section>
  );
}
