"use client";

import { motion } from "framer-motion";
import MagneticButton from "./MagneticButton";
import Reveal from "./Reveal";

export default function Contact() {
  return (
    <section id="kontakt" className="relative overflow-hidden px-6 py-32">
      {/* Background glow */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-1/2 h-[36rem] w-[60rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/25 blur-[160px]" />
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 50, ease: "linear" }}
          className="absolute left-1/2 top-1/2 h-[44rem] w-[44rem] -translate-x-1/2 -translate-y-1/2 rounded-full border border-violet-glow/15"
        />
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ repeat: Infinity, duration: 70, ease: "linear" }}
          className="absolute left-1/2 top-1/2 h-[58rem] w-[58rem] -translate-x-1/2 -translate-y-1/2 rounded-full border border-accent-pink/10"
        />
      </div>

      <div className="mx-auto max-w-4xl text-center">
        <Reveal>
          <h2 className="font-display text-5xl font-bold tracking-tight sm:text-7xl">
            Pojďte to s námi <span className="gradient-text">probrat!</span>
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-lg text-cream/60">
            Napište nám nebo rovnou zavolejte. Do 48 hodin se ozveme s prvními
            nápady, jak nakopnout váš růst.
          </p>
        </Reveal>

        <Reveal delay={0.15} className="mt-12">
          <div className="flex flex-wrap items-center justify-center gap-5">
            <MagneticButton
              href="mailto:petr@ulab.rocks"
              className="group relative inline-flex items-center gap-3 overflow-hidden rounded-full bg-primary px-9 py-5 text-lg font-semibold text-white shadow-[0_0_50px_-8px_#5827D5] transition-shadow hover:shadow-[0_0_70px_-4px_#8B5CF6]"
            >
              <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/25 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
              ✉️ petr@ulab.rocks
            </MagneticButton>
            <MagneticButton
              href="tel:+420731128367"
              className="inline-flex items-center gap-3 rounded-full glass px-9 py-5 text-lg font-semibold text-cream/90 transition-colors hover:text-white"
            >
              📞 +420 731 128 367
            </MagneticButton>
          </div>
          <p className="mt-8 text-sm text-cream/45">
            Dotazy k PPC Bootcampu? →{" "}
            <a
              href="mailto:michaela@ulab.rocks"
              className="text-violet-soft underline-offset-4 transition-colors hover:text-accent-yellow hover:underline"
            >
              michaela@ulab.rocks
            </a>
          </p>
        </Reveal>
      </div>
    </section>
  );
}
