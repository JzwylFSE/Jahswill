"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight, Coffee, Code2, Server, Sparkles } from "lucide-react";

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const },
};

const beats = [
  {
    Icon: Code2,
    title: "Frontend feels like painting",
    body: "I love getting layouts to behave, animations to land, and interactions to feel right. Pixel calm + motion polish.",
  },
  {
    Icon: Server,
    title: "Backend feels like puzzles",
    body: "Modeling data, designing APIs, debugging that one query — I genuinely enjoy the quiet thinking it requires.",
  },
  {
    Icon: Sparkles,
    title: "Connecting them is the magic",
    body: "The moment a clean API meets a snappy UI and the whole thing just works — that's the bit I'm here for.",
  },
];

export default function AboutPage() {
  return (
    <main className="relative px-4 pt-28 pb-20 sm:px-6 sm:pt-36 sm:pb-28">
      <div className="mx-auto max-w-3xl">
        <motion.p
          {...fadeUp}
          className="text-xs uppercase tracking-[0.2em] text-muted-foreground"
        >
          About
        </motion.p>

        <motion.h1
          {...fadeUp}
          transition={{ ...fadeUp.transition, delay: 0.05 }}
          className="mt-4 text-balance text-4xl font-semibold leading-[1.1] tracking-tight sm:text-5xl md:text-6xl"
        >
          A fullstack dev who genuinely{" "}
          <span className="bg-gradient-to-r from-foreground to-accent bg-clip-text text-transparent">
            loves the whole stack.
          </span>
        </motion.h1>

        <motion.div
          {...fadeUp}
          transition={{ ...fadeUp.transition, delay: 0.1 }}
          className="mt-8 space-y-5 text-base leading-relaxed text-foreground/85 sm:text-lg"
        >
          <p>
            I'm Jah'swill Simeon. I build end-to-end web apps — that means I'm
            equally at home wiring up a clean Django API, modeling a Postgres
            schema, or polishing a Tailwind layout until it feels just right.
          </p>
          <p>
            What makes me happy? Honestly, all of it. Writing frontend code and
            making things look intentional, designing backend logic that doesn't
            fight you, and most of all — connecting the two so the whole product
            just <em>works</em>.
          </p>
          <p>
            I like making things that feel friendly. I like reading docs at
            weird hours. I like that one moment when a stubborn bug finally
            gives up. If we get to build something together, expect curiosity,
            care, and maybe a few terrible jokes.
          </p>
        </motion.div>

        <div className="mt-14 grid gap-4 sm:grid-cols-3">
          {beats.map((b, i) => (
            <motion.div
              key={b.title}
              {...fadeUp}
              transition={{ ...fadeUp.transition, delay: 0.1 + i * 0.08 }}
              className="rounded-2xl border border-border bg-card/50 p-5 backdrop-blur transition-colors hover:bg-card"
            >
              <b.Icon className="size-5 text-accent" strokeWidth={1.5} />
              <h3 className="mt-3 text-sm font-semibold tracking-tight text-foreground">
                {b.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {b.body}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          {...fadeUp}
          transition={{ ...fadeUp.transition, delay: 0.2 }}
          className="mt-12 flex flex-wrap items-center gap-3"
        >
          <Link
            href="/tools"
            className="group inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition-transform hover:scale-[1.04]"
          >
            See the tools I use
            <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>

          <Link
            href="/contact"
            className="inline-flex items-center gap-2 rounded-full border border-border bg-card/40 px-5 py-2.5 text-sm text-foreground transition-colors hover:bg-card"
          >
            <Coffee className="size-4" />
            Say hi
          </Link>
        </motion.div>
      </div>
    </main>
  );
}
