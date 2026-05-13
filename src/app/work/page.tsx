"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, X } from "lucide-react";
import { projects, type Project } from "@/lib/portfolio-data";

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.15 },
  transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const },
};

const caseStudyContent = {
  problem:
    "The client was bleeding customers at checkout because the legacy stack was slow and clunky. They needed something fast, branded, and friendly without scaring off conversion.",
  stack:
    "Next.js (App Router) + TypeScript + Tailwind on the frontend. Postgres + Drizzle on the data side. Stripe for billing. A headless CMS for content. Deployed to the edge with SSR + ISR.",
  bug: "A nasty race in cart-sync was oversharing stock during traffic spikes. Fixed with optimistic UI on the client and a Postgres advisory lock + idempotent webhooks on the server. Deeply satisfying.",
};

function CaseStudyModal({
  project,
  onClose,
}: {
  project: Project | null;
  onClose: () => void;
}) {
  return (
    <AnimatePresence>
      {project && (
        <motion.div
          className="fixed inset-0 z-50 flex items-end justify-center sm:items-center sm:p-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          <motion.div
            className="absolute inset-0 bg-background/70 backdrop-blur-xl"
            onClick={onClose}
          />
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label={`${project.title} case study`}
            initial={{ y: "100%", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: "100%", opacity: 0 }}
            transition={{
              type: "spring",
              stiffness: 220,
              damping: 28,
              mass: 0.9,
            }}
            className="relative z-10 flex h-[92vh] w-full max-w-6xl flex-col overflow-hidden rounded-t-3xl border border-border bg-card/80 backdrop-blur-2xl shadow-[0_40px_120px_-20px_var(--glow)] sm:h-[86vh] sm:rounded-3xl"
          >
            <button
              onClick={onClose}
              aria-label="Close"
              className="absolute right-4 top-4 z-20 flex size-11 items-center justify-center rounded-full border border-border bg-background/70 text-muted-foreground backdrop-blur transition-all hover:scale-105 hover:border-accent/50 hover:text-foreground"
            >
              <X className="size-5" />
            </button>

            <div className="grid h-full grid-cols-1 overflow-hidden md:grid-cols-2">
              <div className="relative hidden border-r border-border bg-background/40 md:block">
                <div className="absolute inset-0">
                  <project.Visual />
                </div>
                <div className="absolute inset-x-8 bottom-8 flex items-center gap-2">
                  <span className="rounded-full border border-border bg-background/70 px-3 py-1 text-xs text-muted-foreground backdrop-blur">
                    {project.tag}
                  </span>
                </div>
              </div>

              <div className="overflow-y-auto px-6 py-12 sm:px-10 sm:py-16">
                <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
                  Case Study
                </p>
                <h3 className="mt-3 text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
                  {project.title}
                </h3>
                <p className="mt-4 text-muted-foreground">{project.description}</p>

                <div className="mt-10 space-y-8">
                  {[
                    { label: "The Brief", body: caseStudyContent.problem },
                    { label: "What I Used", body: caseStudyContent.stack },
                    {
                      label: "The Bug That Nearly Won",
                      body: caseStudyContent.bug,
                    },
                  ].map((s) => (
                    <div key={s.label}>
                      <h4 className="text-sm uppercase tracking-[0.18em] text-accent">
                        {s.label}
                      </h4>
                      <p className="mt-3 leading-relaxed text-foreground/90">
                        {s.body}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default function WorkPage() {
  const [openIdx, setOpenIdx] = useState<number | null>(null);

  useEffect(() => {
    if (openIdx === null) return;

    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpenIdx(null);
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [openIdx]);

  return (
    <main className="relative px-4 pt-28 pb-20 sm:px-6 sm:pt-36 sm:pb-28">
      <div className="mx-auto max-w-6xl 2xl:max-w-7xl">
        <motion.p
          {...fadeUp}
          className="text-xs uppercase tracking-[0.2em] text-muted-foreground"
        >
          Work
        </motion.p>

        <motion.h1
          {...fadeUp}
          transition={{ ...fadeUp.transition, delay: 0.05 }}
          className="mt-4 max-w-3xl text-balance text-4xl font-semibold leading-[1.1] tracking-tight sm:text-5xl md:text-6xl"
        >
          A few things I've built lately.
        </motion.h1>

        <motion.p
          {...fadeUp}
          transition={{ ...fadeUp.transition, delay: 0.1 }}
          className="mt-5 max-w-2xl text-base text-muted-foreground sm:text-lg"
        >
          Tap any card to peek behind the scenes — the brief, the stack, and the
          one bug that nearly took me out.
        </motion.p>

        <div className="mt-14 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 md:gap-5">
          {projects.map((p, i) => (
            <motion.button
              key={p.slug}
              type="button"
              onClick={() => setOpenIdx(i)}
              {...fadeUp}
              transition={{ ...fadeUp.transition, delay: i * 0.08 }}
              whileHover={{ y: -6 }}
              className="group relative col-span-1 overflow-hidden rounded-2xl border border-border bg-card p-5 text-left transition-shadow duration-300 hover:shadow-[0_30px_80px_-20px_var(--glow)] sm:p-6 sm:col-span-2 md:col-span-1"
              style={{ minHeight: "min(360px, 60vw)" }}
            >
              <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                <div className="absolute inset-px rounded-[15px] ring-1 ring-accent/40" />
              </div>

              <p.Visual />

              <div className="relative z-10 flex h-full flex-col">
                <div className="flex items-center justify-between">
                  <span className="rounded-full border border-border bg-background/60 px-3 py-1 text-xs text-muted-foreground backdrop-blur">
                    {p.tag}
                  </span>
                  <ArrowUpRight className="size-5 text-muted-foreground transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-foreground" />
                </div>

                <div className="mt-auto">
                  <h3 className="text-xl font-semibold tracking-tight sm:text-2xl">
                    {p.title}
                  </h3>
                  <p className="mt-2 max-w-md text-sm text-muted-foreground">
                    {p.description}
                  </p>
                </div>
              </div>
            </motion.button>
          ))}
        </div>
      </div>

      <CaseStudyModal
        project={openIdx !== null ? projects[openIdx] : null}
        onClose={() => setOpenIdx(null)}
      />
    </main>
  );
}
