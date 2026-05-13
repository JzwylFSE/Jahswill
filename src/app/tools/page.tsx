"use client";

import { motion, useReducedMotion } from "framer-motion";
import { tools, type Tool } from "@/lib/portfolio-data";

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
};

function ToolBar({ t, index }: { t: Tool; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{
        duration: 0.55,
        delay: index * 0.04,
        ease: [0.22, 1, 0.36, 1],
      }}
      whileHover={{ y: -3 }}
      className="group rounded-2xl border border-border bg-card/40 p-4 backdrop-blur transition-colors hover:bg-card sm:p-5"
    >
      <div className="mb-3 flex items-center justify-between">
        <span className="flex items-center gap-3 text-sm font-medium text-foreground">
          <span
            className="flex size-9 items-center justify-center rounded-lg border border-border bg-background/60 transition-transform group-hover:scale-110"
            style={{ color: t.color }}
          >
            <t.Icon className="size-5" />
          </span>
          {t.name}
        </span>
        <span className="tabular-nums text-xs text-muted-foreground">
          {t.level}%
        </span>
      </div>

      <div className="relative h-1.5 overflow-hidden rounded-full bg-background/60">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${t.level}%` }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{
            duration: 1.1,
            delay: 0.15 + index * 0.04,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="h-full rounded-full"
          style={{
            background: `linear-gradient(90deg, ${t.color}66, ${t.color})`,
            boxShadow: `0 0 18px -2px ${t.color}88`,
          }}
        />
      </div>
    </motion.div>
  );
}

export default function ToolsPage() {
  const reduce = useReducedMotion();
  const frontend = tools.filter((t) => t.group === "Frontend");
  const backend = tools.filter((t) => t.group === "Backend");
  const marquee = [...tools, ...tools];

  return (
    <main className="relative px-4 pt-28 pb-20 sm:px-6 sm:pt-36 sm:pb-28">
      <div className="mx-auto max-w-6xl">
        <motion.p
          {...fadeUp}
          className="text-xs uppercase tracking-[0.2em] text-muted-foreground"
        >
          Tools I use
        </motion.p>

        <motion.h1
          {...fadeUp}
          transition={{ ...fadeUp.transition, delay: 0.05 }}
          className="mt-4 max-w-3xl text-balance text-4xl font-semibold leading-[1.1] tracking-tight sm:text-5xl md:text-6xl"
        >
          The kit I reach for, on both sides of the wire.
        </motion.h1>

        <motion.p
          {...fadeUp}
          transition={{ ...fadeUp.transition, delay: 0.1 }}
          className="mt-5 max-w-2xl text-base text-muted-foreground sm:text-lg"
        >
          Honest comfort levels — not buzzwords. The bars below show how often I
          actually reach for each one.
        </motion.p>

        <div className="mt-14 grid gap-10 lg:grid-cols-2">
          <section>
            <h2 className="mb-5 flex items-center gap-2 text-sm uppercase tracking-[0.2em] text-accent">
              <span className="size-1.5 rounded-full bg-accent shadow-[0_0_12px_2px_var(--glow)]" />
              Frontend
            </h2>
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              {frontend.map((t, i) => (
                <ToolBar key={t.name} t={t} index={i} />
              ))}
            </div>
          </section>

          <section>
            <h2 className="mb-5 flex items-center gap-2 text-sm uppercase tracking-[0.2em] text-accent">
              <span className="size-1.5 rounded-full bg-accent shadow-[0_0_12px_2px_var(--glow)]" />
              Backend
            </h2>
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              {backend.map((t, i) => (
                <ToolBar key={t.name} t={t} index={i} />
              ))}
            </div>
          </section>
        </div>

        <div className="relative mt-20 overflow-hidden marquee-mask">
          <div className={`flex w-max gap-12 ${reduce ? "" : "animate-marquee"}`}>
            {marquee.map((t, i) => (
              <div
                key={i}
                className="flex shrink-0 items-center gap-3 text-lg font-medium text-muted-foreground/80 sm:text-xl md:text-2xl"
              >
                <t.Icon className="size-6 sm:size-7" style={{ color: t.color }} />
                <span>{t.name}</span>
                <span className="ml-8 size-1 rounded-full bg-muted-foreground/30 sm:ml-12" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
