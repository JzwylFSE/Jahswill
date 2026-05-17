"use client";

import React from "react";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

// --- MOCK PROJECT DATA (Tailored to your Fullstack Profile) ---
type Project = {
  id: string;
  title: string;
  description: string;
  tags: string[];
  liveUrl?: string;
};

const projectsData: Project[] = [
  {
    id: "hse-system",
    title: "HSE Incident Reporting System",
    description: "A comprehensive web-based platform for reporting, tracking, and managing Health, Safety, and Environment (HSE) incidents. Features role-based access, real-time dashboards, and automated report generation.",
    tags: ["React", "Next.js", "Django", "PostgreSQL", "Tailwind CSS"],
    liveUrl: "#",
  },
  {
    id: "fintech-dashboard",
    title: "FinTech Admin Dashboard",
    description: "A fully functional administrative dashboard for monitoring transactions, managing user accounts, and visualizing financial data metrics with complex charting and real-time updates.",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Supabase", "Recharts"],
    liveUrl: "#",
  },
  {
    id: "e-learning",
    title: "Code Secure Academy",
    description: "A platform for learning and gaining expertise in coding. Pushing boundaries in cybersecurity education with interactive modules, progress tracking, and secure user authentication.",
    tags: ["React", "TypeScript", "Django REST", "PostgreSQL"],
    liveUrl: "#",
  },
  {
    id: "logistics-app",
    title: "Riders Logistics App",
    description: "A fully functional web logistics application for users to book and track their orders, featuring map integration, delivery distance calculation, and a modern UI design.",
    tags: ["Next.js", "JavaScript", "Tailwind CSS", "Google Maps API"],
    liveUrl: "#",
  },
];

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.15 },
  transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
};

export default function Projects() {
  return (
    <main className="relative overflow-x-hidden">
      
      {/* --- TOP WRAPPER (Header and Intro text with Graph Paper Bg) --- */}
      <div className="relative pt-32 pb-16">
        
        {/* Background Grid Pattern */}
        <div 
          className="pointer-events-none absolute inset-0 -z-10 opacity-[0.04] dark:opacity-[0.06]"
          style={{
            backgroundImage: "linear-gradient(var(--foreground) 1px, transparent 1px), linear-gradient(90deg, var(--foreground) 1px, transparent 1px)",
            backgroundSize: "40px 40px",
            maskImage: "linear-gradient(to bottom, transparent 0%, black 15%, black 60%, transparent 100%)",
            WebkitMaskImage: "linear-gradient(to bottom, transparent 0%, black 15%, black 60%, transparent 100%)"
          }}
        />

        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <motion.h1
            {...fadeUp}
            className="text-balance text-[clamp(3rem,6vw,5.5rem)] font-extrabold leading-[1.05] tracking-tight text-foreground"
          >
            Projects
          </motion.h1>

          <motion.p
            {...fadeUp}
            transition={{ ...fadeUp.transition, delay: 0.05 }}
            className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground sm:text-xl"
          >
            Showcase of my fullstack web development and API architecture work.
          </motion.p>
        </div>
      </div>

      {/* --- BOTTOM WRAPPER (Main Content Grid - Clean Background) --- */}
      <div className="relative z-10 mx-auto max-w-6xl px-6 pb-32 lg:px-8">
        
        {/* Section Header */}
        <motion.div 
          {...fadeUp}
          transition={{ ...fadeUp.transition, delay: 0.1 }}
          className="mt-8 mb-12"
        >
          <p className="mb-3 text-xs font-extrabold uppercase tracking-wider text-[#0284c7] dark:text-[#74d4ff]">
            My Work
          </p>
          <h2 className="text-3xl font-extrabold text-foreground sm:text-4xl">Featured Projects</h2>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground">
            A collection of projects that showcase my passion for building modern, scalable, and user-friendly applications from the database to the DOM.
          </p>
        </motion.div>

        {/* 2-Column Projects Grid */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:gap-10">
          {projectsData.map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="group flex flex-col overflow-hidden rounded-[2rem] border border-border/50 bg-card/20 transition-all hover:bg-card/40 hover:shadow-lg"
            >
              {/* Entire Card acts as the clickable link */}
              <a 
                href={project.liveUrl || "#"} 
                target={project.liveUrl && project.liveUrl !== "#" ? "_blank" : "_self"}
                rel="noreferrer"
                className="flex h-full flex-col"
              >
                {/* Top Visual/Image */}
                <div className="relative aspect-[16/10] w-full overflow-hidden border-b border-border/50 bg-muted/30">
                  
                  {/* The dark overlay that fades in on hover */}
                  <div className="absolute inset-0 z-10 flex items-center justify-center bg-black/0 transition-colors duration-300 group-hover:bg-black/40">
                  {/* Top-right External Link icon (small) */}
                  <div className="pointer-events-none absolute right-4 top-4 z-20 flex size-9 scale-50 items-center justify-center rounded-full bg-white opacity-0 transition-all duration-300 group-hover:scale-100 group-hover:opacity-100">
                    <ExternalLink className="size-4 text-black" />
                  </div>
                  </div>

                  {/* Replace this inner div with your actual next/image component */}
                  <div className="flex h-full w-full items-center justify-center bg-gradient-to-tr from-muted to-muted/50 transition-transform duration-500 group-hover:scale-105">
                    <span className="font-mono text-xs font-bold uppercase tracking-widest text-muted-foreground/50">Project Visual</span>
                  </div>
                </div>

                {/* Bottom Content Area */}
                <div className="flex flex-1 flex-col p-8 sm:p-10">
                  {/* Title syncs color on hover of the entire card */}
                  <h3 className="text-2xl font-extrabold text-foreground transition-colors duration-300 group-hover:text-[#0284c7] dark:group-hover:text-[#74d4ff]">
                    {project.title}
                  </h3>
                  <p className="mt-4 line-clamp-3 text-sm leading-relaxed text-muted-foreground">
                    {project.description}
                  </p>

                  {/* Tech Stack Pills - Pushed to the bottom of the card */}
                  <div className="mt-auto pt-6">
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span 
                          key={tag} 
                          className="rounded-lg border border-border/50 bg-background/50 px-3 py-1.5 text-xs font-bold text-foreground/80"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </a>
            </motion.div>
          ))}
        </div>

        {/* Bottom Call to Action */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-20 flex justify-center"
        >
          <a
            href="https://github.com/JzwylFSE"
            target="_blank"
            rel="noreferrer"
            className="group flex items-center gap-2 rounded-full border border-border bg-card/50 px-6 py-3 text-sm font-extrabold text-foreground transition-all hover:border-[#0284c7]/50 hover:bg-card hover:shadow-md dark:hover:border-[#74d4ff]/50"
          >
            View more on GitHub 
            <ExternalLink className="size-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </a>
        </motion.div>

      </div>
    </main>
  );
}
