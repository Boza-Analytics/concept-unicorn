"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import MagneticButton from "./MagneticButton";

const headline = ["Shaping", "unicorns", "side", "by", "side"];

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "35%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.94]);

  return (
    <section
      ref={ref}
      className="relative flex min-h-screen items-center justify-center overflow-hidden pt-24"
    >
      {/* Aurora background */}
      <motion.div style={{ y: yBg }} className="absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-1/4 h-[42rem] w-[42rem] -translate-x-1/2 rounded-full bg-primary/35 blur-[140px] animate-pulse-glow" />
        <div className="absolute left-[12%] top-[55%] h-96 w-96 rounded-full bg-accent-pink/15 blur-[120px] animate-float" />
        <div
          className="absolute right-[10%] top-[18%] h-80 w-80 rounded-full bg-accent-yellow/10 blur-[110px] animate-float"
          style={{ animationDelay: "-3.5s" }}
        />
        {/* Dot grid */}
        <div
          className="absolute inset-0 opacity-[0.13]"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, #A78BFA 1px, transparent 0)",
            backgroundSize: "36px 36px",
            maskImage:
              "radial-gradient(ellipse 70% 60% at 50% 40%, black, transparent)",
          }}
        />
      </motion.div>

      {/* Floating decorative emojis */}
      {[
        { e: "🦄", cls: "left-[8%] top-[28%] text-5xl", d: 0 },
        { e: "✨", cls: "right-[12%] top-[24%] text-4xl", d: -2 },
        { e: "🚀", cls: "left-[15%] bottom-[22%] text-4xl", d: -4 },
        { e: "📈", cls: "right-[9%] bottom-[28%] text-5xl", d: -1.5 },
      ].map((f) => (
        <motion.span
          key={f.e}
          className={`pointer-events-none absolute hidden select-none md:block ${f.cls} animate-float`}
          style={{ animationDelay: `${f.d}s` }}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 0.85, scale: 1 }}
          transition={{ delay: 1.4, duration: 0.7, type: "spring" }}
        >
          {f.e}
        </motion.span>
      ))}

      <motion.div
        style={{ opacity, scale }}
        className="mx-auto max-w-5xl px-6 text-center"
      >
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="mb-8 inline-flex items-center gap-2 rounded-full glass px-4 py-2 text-sm text-cream/80"
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent-mint opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-accent-mint" />
          </span>
          Výkonnostní marketing, který škáluje
        </motion.div>

        <h1 className="font-display text-5xl font-bold leading-[1.05] tracking-tight sm:text-7xl lg:text-8xl">
          {headline.map((word, i) => (
            <span key={word} className="inline-block overflow-hidden pb-2 align-bottom">
              <motion.span
                className={`inline-block pr-[0.22em] ${
                  word === "unicorns" ? "gradient-text" : ""
                }`}
                initial={{ y: "110%" }}
                animate={{ y: 0 }}
                transition={{
                  delay: 0.25 + i * 0.1,
                  duration: 0.9,
                  ease: [0.21, 0.47, 0.32, 0.98],
                }}
              >
                {word}
              </motion.span>
            </span>
          ))}
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="mx-auto mt-8 max-w-2xl text-lg text-cream/65 sm:text-xl"
        >
          Pojďme společně nakopnout růst vaší firmy v&nbsp;Česku
          i&nbsp;v&nbsp;zahraničí! Neřešíme jen kampaně — pomáháme rozvíjet váš
          byznys.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="mt-12 flex flex-wrap items-center justify-center gap-5"
        >
          <MagneticButton
            href="#kontakt"
            className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-primary px-8 py-4 font-semibold text-white shadow-[0_0_40px_-8px_#5827D5] transition-shadow duration-300 hover:shadow-[0_0_60px_-6px_#8B5CF6]"
          >
            <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/25 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
            Pojďme se bavit
            <span className="transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>
          </MagneticButton>
          <MagneticButton
            href="#vysledky"
            className="inline-flex items-center gap-2 rounded-full glass px-8 py-4 font-semibold text-cream/90 transition-colors hover:text-white"
          >
            Naše výsledky
          </MagneticButton>
        </motion.div>
      </motion.div>

      {/* Scroll hint */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.8 }}
          className="flex h-10 w-6 items-start justify-center rounded-full border border-cream/25 p-1.5"
        >
          <div className="h-2 w-1 rounded-full bg-cream/60" />
        </motion.div>
      </motion.div>
    </section>
  );
}
