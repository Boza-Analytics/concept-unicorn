"use client";

import { motion } from "framer-motion";
import Reveal from "./Reveal";

const team = {
  "B2B / SaaS": [
    "Markéta Kabátová",
    "Gonzalo Fernández",
    "Kateřina Scholasterová",
    "Lucie Pokorná",
    "Adam Lahvička",
  ],
  Ecommerce: [
    "Petr Bureš",
    "Richard Herzog",
    "Iveta Dudová",
    "Jolana Zemánková",
    "Ilona Dobrovolná",
    "Nikola Kotrbová",
    "Eva Cieslarová",
    "Huy Tien Hoang",
    "Adéla Kožoušková",
    "Štěpánka Dujková",
    "Nikola Petrášová",
  ],
};

const gradients = [
  "from-primary to-violet-glow",
  "from-accent-pink to-accent-coral",
  "from-accent-yellow to-accent-mint",
  "from-violet-glow to-accent-pink",
  "from-accent-mint to-primary",
];

function initials(name: string) {
  return name
    .split(" ")
    .map((p) => p[0])
    .slice(0, 2)
    .join("");
}

export default function Team() {
  return (
    <section id="tym" className="relative mx-auto max-w-7xl px-6 py-28">
      <Reveal>
        <h2 className="font-display text-4xl font-bold tracking-tight sm:text-6xl">
          Kdo bude makat na <span className="gradient-text">vašem růstu?</span>
        </h2>
        <p className="mt-5 max-w-2xl text-lg text-cream/60">
          Seznamte se s naším týmem! Žádní junioři na hraní — specialisti,
          kteří dýchají pro výkon.
        </p>
      </Reveal>

      {Object.entries(team).map(([group, members]) => (
        <div key={group} className="mt-14">
          <Reveal>
            <p className="font-display text-sm font-semibold uppercase tracking-[0.25em] text-violet-soft">
              {group}
            </p>
          </Reveal>
          <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
            {members.map((name, i) => (
              <motion.div
                key={name}
                initial={{ opacity: 0, y: 30, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ delay: (i % 4) * 0.08, duration: 0.6 }}
                whileHover={{ y: -6, transition: { duration: 0.25 } }}
                className="group flex items-center gap-4 rounded-2xl glass glass-hover p-4"
              >
                <span
                  className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-gradient-to-br ${gradients[i % gradients.length]} font-display text-sm font-bold text-ink transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6`}
                >
                  {initials(name)}
                </span>
                <span className="text-sm font-medium leading-tight text-cream/85">
                  {name}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
}
