"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useState } from "react";
import MagneticButton from "./MagneticButton";

const links = [
  { label: "B2B a SaaS", href: "#sluzby" },
  { label: "Ecommerce", href: "#sluzby" },
  { label: "Case studies", href: "#vysledky" },
  { label: "Tým", href: "#tym" },
  { label: "Blog", href: "#obor" },
];

export default function Navbar() {
  const { scrollY } = useScroll();
  const bg = useTransform(
    scrollY,
    [0, 120],
    ["rgba(11, 5, 20, 0)", "rgba(11, 5, 20, 0.82)"]
  );
  const border = useTransform(
    scrollY,
    [0, 120],
    ["rgba(255,255,255,0)", "rgba(255,255,255,0.08)"]
  );
  const [open, setOpen] = useState(false);

  return (
    <motion.header
      style={{ backgroundColor: bg, borderColor: border }}
      className="fixed top-0 inset-x-0 z-50 border-b backdrop-blur-md"
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <motion.a
          href="#"
          className="font-display text-2xl font-bold tracking-tight"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
        >
          u<span className="gradient-text">Lab</span>
          <span className="text-accent-yellow">.</span>
        </motion.a>

        <div className="hidden items-center gap-8 md:flex">
          {links.map((l, i) => (
            <motion.a
              key={l.label}
              href={l.href}
              className="group relative text-sm text-cream/70 transition-colors hover:text-cream"
              initial={{ opacity: 0, y: -12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 + i * 0.07, duration: 0.5 }}
            >
              {l.label}
              <span className="absolute -bottom-1 left-0 h-px w-0 bg-gradient-to-r from-violet-glow to-accent-pink transition-all duration-300 group-hover:w-full" />
            </motion.a>
          ))}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
          >
            <MagneticButton
              href="#kontakt"
              className="rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-white shadow-[0_0_24px_-6px_#5827D5] transition-shadow hover:shadow-[0_0_36px_-4px_#8B5CF6]"
            >
              Kontakt
            </MagneticButton>
          </motion.div>
        </div>

        <button
          aria-label="Menu"
          onClick={() => setOpen(!open)}
          className="flex flex-col gap-1.5 md:hidden"
        >
          <span
            className={`h-0.5 w-6 bg-cream transition-transform ${open ? "translate-y-2 rotate-45" : ""}`}
          />
          <span
            className={`h-0.5 w-6 bg-cream transition-opacity ${open ? "opacity-0" : ""}`}
          />
          <span
            className={`h-0.5 w-6 bg-cream transition-transform ${open ? "-translate-y-2 -rotate-45" : ""}`}
          />
        </button>
      </nav>

      {open && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          className="border-t border-white/5 bg-ink/95 px-6 py-4 md:hidden"
        >
          {[...links, { label: "Kontakt", href: "#kontakt" }].map((l) => (
            <a
              key={l.label}
              href={l.href}
              onClick={() => setOpen(false)}
              className="block py-3 text-cream/80"
            >
              {l.label}
            </a>
          ))}
        </motion.div>
      )}
    </motion.header>
  );
}
