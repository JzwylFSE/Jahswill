"use client";

import { motion } from "framer-motion";
import { FileText, LayoutTemplate, MonitorDot, Server } from "lucide-react";

// --- SKILLS DATA ---
type ToolGroup =
  | "Programming Languages"
  | "Frontend Development"
  | "Backend Development"
  | "Software & Tools";

type Tool = { name: string; color: string; level: number; group: ToolGroup };

// Simplified data structure specifically customized to your exact requirements
const tools: Tool[] = [
  // Programming Languages
  { name: "JavaScript", color: "#F7DF1E", level: 100, group: "Programming Languages" },
  { name: "TypeScript", color: "#3178C6", level: 75, group: "Programming Languages" },
  { name: "Python", color: "#3776AB", level: 100, group: "Programming Languages" },

  // Frontend Development
  { name: "React", color: "#61DAFB", level: 100, group: "Frontend Development" },
  { name: "Next.js", color: "#000000", level: 100, group: "Frontend Development" },
  { name: "Tailwind CSS", color: "#06B6D4", level: 100, group: "Frontend Development" },
  { name: "Material UI", color: "#007FFF", level: 70, group: "Frontend Development" },
  { name: "Shadcn UI", color: "#000000", level: 70, group: "Frontend Development" },
  { name: "Framer Motion", color: "#0055FF", level: 90, group: "Frontend Development" },

  // Backend Development
  { name: "Django", color: "#092E20", level: 100, group: "Backend Development" },
  { name: "Django REST Framework (DRF)", color: "#A30000", level: 90, group: "Backend Development" },
  { name: "PostgreSQL", color: "#4169E1", level: 50, group: "Backend Development" },
  { name: "Supabase", color: "#3ECF8E", level: 90, group: "Backend Development" },

  // Software & Tools
  { name: "VS Code", color: "#007ACC", level: 100, group: "Software & Tools" },
  { name: "Git", color: "#F05032", level: 90, group: "Software & Tools" },
  { name: "Postman", color: "#FF6C37", level: 80, group: "Software & Tools" },
  { name: "npm", color: "#CB3837", level: 100, group: "Software & Tools" },
  { name: "pip", color: "#3776AB", level: 100, group: "Software & Tools" },
];

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
};

function InlineToolBar({ t, index }: { t: Tool; index: number }) {
  // Clean, inline layout replacing the boxy cards. No hover effects.
  return (
    <div className="py-2.5">
      <div className="mb-2 flex items-center justify-between text-sm">
        <span className="font-extrabold text-foreground">{t.name}</span>
        <span className="font-bold text-muted-foreground">{t.level}%</span>
      </div>

      <div className="relative h-2 w-full overflow-hidden rounded-full bg-muted/40">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${t.level}%` }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{
            duration: 1.1,
            delay: 0.1 + index * 0.05,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="h-full rounded-full"
          style={{
            background:
              t.name === "Next.js" || t.name === "Shadcn UI"
                ? "var(--foreground)" // Ensure these display properly in dark mode
                : t.color,
          }}
        />
      </div>
    </div>
  );
}

export default function SkillsAndToolsPage() {
  const programmingLangs = tools.filter((t) => t.group === "Programming Languages");
  const frontend = tools.filter((t) => t.group === "Frontend Development");
  const backend = tools.filter((t) => t.group === "Backend Development");
  const software = tools.filter((t) => t.group === "Software & Tools");

  return (
    <main className="relative overflow-x-hidden">
      {/* --- TOP WRAPPER (Header and Intro text with Graph Paper Bg) --- */}
      {/* Background Grid fades out at the bottom of this wrapper */}
      <div className="relative pt-32 pb-24">
        <div
          className="pointer-events-none absolute inset-0 -z-10 opacity-[0.04] dark:opacity-[0.06]"
          style={{
            backgroundImage:
              "linear-gradient(var(--foreground) 1px, transparent 1px), linear-gradient(90deg, var(--foreground) 1px, transparent 1px)",
            backgroundSize: "40px 40px",
            maskImage:
              "linear-gradient(to bottom, transparent 0%, black 15%, black 60%, transparent 100%)",
            WebkitMaskImage:
              "linear-gradient(to bottom, transparent 0%, black 15%, black 60%, transparent 100%)",
          }}
        />

        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <motion.div {...fadeUp} className="mb-2">
            <p className="text-xs font-extrabold uppercase tracking-wider text-[#0284c7] dark:text-[#74d4ff]">
              Work
            </p>
          </motion.div>

          <motion.h1
            {...fadeUp}
            transition={{ ...fadeUp.transition, delay: 0.05 }}
            className="mt-4 max-w-3xl text-balance text-[clamp(2.5rem,5vw,4.5rem)] font-extrabold leading-[1.05] tracking-tight text-foreground"
          >
            Skills and Tools
          </motion.h1>

          <motion.p
            {...fadeUp}
            transition={{ ...fadeUp.transition, delay: 0.1 }}
            className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground sm:text-xl"
          >
            A comprehensive look at my technical skills, tools, and expertise in
            fullstack web development.
          </motion.p>
        </div>
      </div>

      {/* --- BOTTOM WRAPPER (Overview and Naked Skills Lists) --- */}
      <div className="relative z-10 mx-auto max-w-6xl px-6 pb-32 lg:px-8">
        <motion.div {...fadeUp} transition={{ ...fadeUp.transition, delay: 0.15 }}>
          <h2 className="mb-4 text-2xl font-extrabold text-foreground">Overview</h2>
          <p className="max-w-4xl text-base leading-relaxed text-muted-foreground">
            I started my career as a freelance web developer in 2024. I've
            explored various programming languages and tech stacks across
            Back-End and Front-End development, with a strong focus on
            building scalable architectures utilizing Next.js, Django, and
            PostgreSQL.
          </p>
        </motion.div>

        {/* Full-width Stacked Lists (Replacing the boxy cards) */}
        <div className="mt-20 flex flex-col gap-16">
          <section>
            <h2 className="mb-6 border-b border-border/40 pb-4 text-xl font-extrabold text-foreground">
              Programming Languages
            </h2>
            <div className="flex flex-col gap-2">
              {programmingLangs.map((t, i) => (
                <InlineToolBar key={t.name} t={t} index={i} />
              ))}
            </div>
          </section>

          <section>
            <h2 className="mb-6 border-b border-border/40 pb-4 text-xl font-extrabold text-foreground">
              Frontend Development
            </h2>
            <div className="flex flex-col gap-2">
              {frontend.map((t, i) => (
                <InlineToolBar key={t.name} t={t} index={i} />
              ))}
            </div>
          </section>

          <section>
            <h2 className="mb-6 border-b border-border/40 pb-4 text-xl font-extrabold text-foreground">
              Backend Development
            </h2>
            <div className="flex flex-col gap-2">
              {backend.map((t, i) => (
                <InlineToolBar key={t.name} t={t} index={i} />
              ))}
            </div>
          </section>

          <section>
            <h2 className="mb-6 border-b border-border/40 pb-4 text-xl font-extrabold text-foreground">
              Software & Tools
            </h2>
            <div className="flex flex-col gap-2">
              {software.map((t, i) => (
                <InlineToolBar key={t.name} t={t} index={i} />
              ))}
            </div>
          </section>
        </div>

        {/* --- AREAS OF EXPERTISE SECTION --- */}
        <div className="mt-32">
          <motion.h2
            {...fadeUp}
            className="mb-10 text-3xl font-extrabold text-foreground"
          >
            Areas of Expertise
          </motion.h2>

          {/* 2x2 Grid with curved borders matching Onario's style */}
          <motion.div
            {...fadeUp}
            transition={{ ...fadeUp.transition, delay: 0.1 }}
            className="grid gap-6 sm:grid-cols-2"
          >
            {/* Box 1: Web Applications */}
            <div className="flex flex-col gap-4 rounded-[2rem] border border-border/50 bg-card/20 p-8 sm:p-10">
              <div className="text-[#0284c7] dark:text-[#74d4ff]">
                <MonitorDot className="size-6 stroke-[2.5]" />
              </div>
              <div>
                <h3 className="mb-2 text-lg font-extrabold text-foreground">
                  Web Applications
                </h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  Building high-performance, interactive full-stack web
                  applications from end to end.
                </p>
              </div>
            </div>

            {/* Box 2: UI Components */}
            <div className="flex flex-col gap-4 rounded-[2rem] border border-border/50 bg-card/20 p-8 sm:p-10">
              <div className="text-[#0284c7] dark:text-[#74d4ff]">
                <LayoutTemplate className="size-6 stroke-[2.5]" />
              </div>
              <div>
                <h3 className="mb-2 text-lg font-extrabold text-foreground">
                  UI Components
                </h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  Developing clean, accessible, and highly reusable frontend
                  component libraries.
                </p>
              </div>
            </div>

            {/* Box 3: API Architecture */}
            <div className="flex flex-col gap-4 rounded-[2rem] border border-border/50 bg-card/20 p-8 sm:p-10">
              <div className="text-[#0284c7] dark:text-[#74d4ff]">
                <Server className="size-6 stroke-[2.5]" />
              </div>
              <div>
                <h3 className="mb-2 text-lg font-extrabold text-foreground">
                  API Architecture
                </h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  Designing robust, secure, and scalable RESTful endpoints for
                  seamless client-server integration.
                </p>
              </div>
            </div>

            {/* Box 4: Documentation */}
            <div className="flex flex-col gap-4 rounded-[2rem] border border-border/50 bg-card/20 p-8 sm:p-10">
              <div className="text-[#0284c7] dark:text-[#74d4ff]">
                <FileText className="size-6 stroke-[2.5]" />
              </div>
              <div>
                <h3 className="mb-2 text-lg font-extrabold text-foreground">
                  Documentation
                </h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  Creating easy-to-navigate, well-structured technical
                  documentation for systems and APIs.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </main>
  );
}
