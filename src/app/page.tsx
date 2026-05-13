"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight, FileDown } from "lucide-react";

export default function Home() {
  const headline = "I build end-to-end web apps/sites and have fun doing it.";
  const words = headline.split(" ");

  return (
    <section className="relative flex min-h-[100svh] items-center justify-center overflow-hidden px-4 pt-24 pb-16 sm:px-6 sm:pt-28">
      <div className="pointer-events-none absolute inset-0 bg-spotlight" />
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(var(--foreground) 1px, transparent 1px), linear-gradient(90deg, var(--foreground) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
          maskImage:
            "radial-gradient(ellipse 60% 50% at 50% 40%, black, transparent 75%)",
        }}
      />

      <div className="relative z-10 mx-auto w-full max-w-5xl text-center 2xl:max-w-6xl 3xl:max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-6 inline-flex max-w-full items-center gap-2 rounded-full border border-border bg-card/50 px-3 py-1.5 text-[11px] text-muted-foreground backdrop-blur sm:px-4 sm:text-xs"
        >
          <span className="size-1.5 rounded-full bg-accent shadow-[0_0_12px_2px_var(--glow)]" />
          <span className="truncate">
            Open to fullstack roles & fun collabs
          </span>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.05 }}
          className="mb-4 text-[clamp(1.25rem,3.5vw,2rem)] font-semibold tracking-tight text-foreground sm:mb-6"
        >
          Hi, I'm{" "}
          <span className="relative inline-block rounded-md bg-accent/10 px-2 py-0.5 text-sky-500 dark:text-sky-300 font-semibold">
            Jah'swill
          </span>{" "}
          <span className="text-foreground">Simeon</span>{" "}
          <motion.span
            aria-hidden
            initial={{ rotate: -10 }}
            animate={{ rotate: [0, 18, -8, 14, 0] }}
            transition={{ duration: 1.4, delay: 0.4, ease: "easeInOut" }}
            className="inline-block origin-[70%_70%]"
          >
            👋
          </motion.span>
        </motion.p>

        <motion.h1
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: {
              transition: { staggerChildren: 0.06, delayChildren: 0.1 },
            },
          }}
          className="text-balance text-[clamp(2.25rem,8vw,7rem)] font-semibold leading-[1.05] tracking-tight 2xl:text-[7.5rem] 3xl:text-[9rem]"
          aria-label={headline}
        >
          {words.map((word, i) => (
            <span key={i} className="inline-block overflow-hidden align-bottom">
              <motion.span
                variants={{
                  hidden: { y: "110%", opacity: 0 },
                  visible: { y: "0%", opacity: 1 },
                }}
                transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                className="inline-block"
              >
                {word}
              </motion.span>
              {i < words.length - 1 && (
                <span className="inline-block">&nbsp;</span>
              )}
            </span>
          ))}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="mx-auto mt-6 max-w-xl leading-relaxed text-sm text-muted-foreground sm:mt-8 sm:text-base md:text-lg 3xl:text-xl"
        >
          Frontend code, backend logic, APIs, the wiring in between — I love all
          of it. I get genuinely happy turning ideas into apps people can
          actually click around in.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-8 flex flex-col items-stretch justify-center gap-3 sm:mt-10 sm:flex-row sm:items-center"
        >
          {/* 3. Changed "to" prop to "href" */}
          <Link
            href="/work"
            className="group inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-sky-500 to-indigo-500 px-6 py-3 text-sm font-semibold text-white shadow-lg transform transition duration-200 hover:-translate-y-1 hover:scale-105 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-sky-300/40"
          >
            See what I've built
            <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
          <Link
            href="/about"
            className="inline-flex items-center justify-center gap-2 rounded-full border border-border bg-card/40 px-6 py-3 text-sm font-medium text-foreground backdrop-blur transition-transform duration-200 hover:translate-y-0.5 hover:bg-card/70 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-border/30"
          >
            <FileDown className="size-4" />
            Get to know me
          </Link>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.1 }}
          className="mt-12 hidden text-[11px] text-muted-foreground md:block"
        >
          Tip: press{" "}
          <kbd className="rounded border border-border bg-background/60 px-1 font-mono">
            ?
          </kbd>{" "}
          for keyboard shortcuts.
        </motion.p>
      </div>
    </section>
  );
}
