"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { 
  FileText, 
  MonitorDot, 
  Server, 
  DatabaseZap, 
  LayoutTemplate, 
  Code2, 
  Database,
  MonitorSmartphone,
  ShieldCheck,
  Zap,
  Sparkles,
  TestTube
} from "lucide-react";

// --- RAW SVGS FOR TECH STACK ---
// Using raw SVGs means zero npm dependencies and pixel-perfect brand logos.
const NextJsIcon = ({ className }: { className?: string }) => (
  <svg role="img" viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M9 16.2L4.8 8H3v8h1.5v-5.6l3.8 7.3A8 8 0 0 0 15 16V8h-1.5v5.8l-4-7.8H8v10h1Z" />
    <path fillRule="evenodd" d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm0-18.5a8.5 8.5 0 1 0 0 17 8.5 8.5 0 0 0 0-17z" clipRule="evenodd" />
  </svg>
);
const ReactIcon = ({ className }: { className?: string }) => (
  <svg role="img" viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M11.955 4.545c3.09 0 5.918.663 8.082 1.83 2.155 1.163 3.463 2.746 3.463 4.625s-1.308 3.462-3.463 4.625c-2.164 1.167-4.992 1.83-8.082 1.83-3.09 0-5.918-.663-8.082-1.83C1.718 14.462.41 12.879.41 11s1.308-3.462 3.463-4.625c2.164-1.167 4.992-1.83 8.082-1.83zm0 1.455c-2.73 0-5.18.563-7.009 1.545-1.82.977-2.782 2.2-2.782 3.455s.962 2.478 2.782 3.455c1.829.982 4.28 1.545 7.009 1.545 2.73 0 5.18-.563 7.009-1.545 1.82-.977 2.782-2.2 2.782-3.455s-.962-2.478-2.782-3.455c-1.829-.982-4.28-1.545-7.009-1.545zM12 8.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5z" />
  </svg>
);
const TailwindIcon = ({ className }: { className?: string }) => (
  <svg role="img" viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.337 6.182 14.976 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624 1.177 1.194 2.538 2.576 5.512 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C8.337 13.382 6.976 12 6.001 12z" />
  </svg>
);
const DjangoIcon = ({ className }: { className?: string }) => (
  <svg role="img" viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M11.378 14.398c-.147.962-.89 1.512-1.951 1.512-1.42 0-2.146-1.127-2.146-3.268v-.037c0-2.118.789-3.245 2.173-3.245.986 0 1.691.569 1.879 1.486h1.961c-.247-1.989-1.696-3.218-3.832-3.218-2.603 0-4.225 1.769-4.225 4.96v.037c0 3.208 1.595 5.006 4.225 5.006 2.063 0 3.566-1.183 3.878-3.233h-1.962zm5.727.697c-1.155 0-1.852-.807-1.852-2.319v-4.996h-1.998v5.198c0 2.457 1.347 3.905 3.657 3.905h2.154v-1.788h-1.961zM4.936 8.922h1.998v8.525H4.936zM5.935 4.364c-.66 0-1.182.523-1.182 1.183 0 .651.522 1.182 1.182 1.182.66 0 1.183-.531 1.183-1.182 0-.66-.523-1.183-1.183-1.183zM21 7.78V4.871h-1.998v12.576H21V7.78z" />
  </svg>
);
const PostgresIcon = ({ className }: { className?: string }) => (
  <svg role="img" viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M6.358 23.364c1.17 1.488 4.225.86 4.225.86l.602-1.921c-1.57.172-2.106-.11-2.106-.11l3.585-7.795-1.535-1.127-3.791 8.232c-.528 1.187-.15 1.861-.15 1.861zm4.847-1.374a42.923 42.923 0 011.83-5.28l1.455 1.144c-.604 1.706-1.503 4.246-1.503 4.246s-.377.202-1.782-.11zm2.34-5.376c1.375-3.328 2.016-5.293 2.016-5.293l1.83.678s-1.077 3.016-2.583 6.002l-1.263-1.387zM2.87 21.056c1.077 1.34 3.731.864 3.731.864l.58-1.854c-1.472.164-1.98-.106-1.98-.106l5.772-12.548A14.281 14.281 0 005.155.08s-.703.111-1.312.391C1.042 1.737.585 5.535.585 5.535l1.636-1.053c.123-1.52.887-2.613.887-2.613s3.473-1.107 4.966 2.07c-2.316-.25-4.48 1.383-4.48 1.383-2.096 1.874-1.97 4.275-1.97 4.275s.018 2.21 1.722 3.654c1.611 1.365 3.323.774 3.323.774l-3.799 8.03z"/>
  </svg>
);
const SupabaseIcon = ({ className }: { className?: string }) => (
  <svg role="img" viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M21.36 8.441a1.235 1.235 0 0 0-1.173-.021l-9.06 4.63V1.692a1.233 1.233 0 0 0-2.023-.943L2.247 8.358A1.236 1.236 0 0 0 2.8 10.551l9.08 4.63v11.354a1.235 1.235 0 0 0 2.026.945l6.858-7.61a1.236 1.236 0 0 0-.001-1.637l-7.585-8.423a1.234 1.234 0 0 0-1.85.123v-5.69l8.608 4.398a1.236 1.236 0 0 0 1.424-5.2zm-10.233 6.946v6.17l-5.748-6.38 6.921-3.535v-6.17l5.748 6.38-6.921 3.535z" />
  </svg>
);
const VSCodeIcon = ({ className }: { className?: string }) => (
  <svg role="img" viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M23.15 2.587L18.21.21a1.494 1.494 0 0 0-1.705.29l-9.46 8.63-4.12-3.128a.999.999 0 0 0-1.276.057L.327 7.261A1 1 0 0 0 .326 8.74L3.899 12 .326 15.26a1 1 0 0 0 .001 1.479L1.65 17.94a.999.999 0 0 0 1.276.057l4.12-3.128 9.46 8.63a1.492 1.492 0 0 0 1.704.29l4.942-2.377A1.5 1.5 0 0 0 24 20.06V3.939a1.5 1.5 0 0 0-.85-1.352zm-5.146 14.861L10.826 12l7.178-5.448v10.896z" />
  </svg>
);
const JavascriptIcon = ({ className }: { className?: string }) => (
  <svg role="img" viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M0 0h24v24H0V0zm22.034 18.276c-.175-1.095-.888-2.015-3.003-2.873-.736-.345-1.554-.585-1.797-1.14-.091-.33-.105-.51-.046-.705.15-.463.693-.761 1.205-.733.513.028.986.31 1.207.766.195.404.425.43.743.27l1.095-.548c.32-.16.326-.452.12-.767-.34-.52-1.036-1.026-1.75-1.157-.714-.131-1.637-.156-2.314.153-1.01.46-1.523 1.396-1.543 2.378-.02 1.05.512 1.95 2.112 2.585 1.107.441 1.637.755 1.72 1.298.053.35.04.743-.377.94-.417.197-1.08.13-1.5-.16-.42-.29-.757-.935-.74-1.397.02-.46-.15-.658-.458-.808l-1.127-.563c-.308-.154-.606-.118-.767.14-.294.47-.645 1.474-.46 2.457.185.983.84 1.71 1.657 2.12 1.543.778 3.51.815 4.965.176 1.454-.639 2.185-1.685 2.157-2.909zm-8.86-5.06c-.463-.375-1.002-.51-1.573-.357-.57.152-.942.613-.984 1.156-.042.543.14 1.173.805 1.464 1.48.653 2.186 2.593 1.83 4.22-.357 1.626-1.554 2.656-3.235 2.873-1.68.217-3.486-.33-4.14-1.72-.185-.39-.14-.658.12-.808l1.065-.533c.26-.13.565-.05.743.21.36.52.88 1.05 1.58 1.156.7.106 1.58-.093 1.9-.675.32-.582.02-1.378-.66-1.72-1.42-.693-2.404-1.55-2.614-2.882-.21-1.333.37-2.605 1.614-3.265 1.243-.66 2.913-.67 4.14-.06.39.19.46.46.33.808l-.53 1.065c-.13.26-.454.343-.787.067z" />
  </svg>
);
const TypescriptIcon = ({ className }: { className?: string }) => (
  <svg role="img" viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M1.125 0C.502 0 0 .502 0 1.125v21.75C0 23.498.502 24 1.125 24h21.75c.623 0 1.125-.502 1.125-1.125V1.125C24 .502 23.498 0 22.875 0H1.125zm16.51 16.326c1.692 0 2.922.753 3.528 2.053l-1.659 1.026c-.347-.643-.807-.988-1.597-.988-1.002 0-1.603.626-1.603 1.343 0 2.215 4.887 1.258 4.887 4.417 0 1.76-1.46 2.823-3.69 2.823-2.215 0-3.69-1.077-4.226-2.583l1.734-.963c.435.955 1.125 1.42 2.378 1.42 1.156 0 1.727-.552 1.727-1.33 0-2.316-4.888-1.433-4.888-4.405 0-1.643 1.38-2.813 3.41-2.813zM10.9 26.69H7.644v-9.615H3.072v-1.923H15.47v1.923h-4.57v9.615z" />
  </svg>
);
const PythonIcon = ({ className }: { className?: string }) => (
  <svg role="img" viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M14.25.18l.9.2.73.26.59.3.45.32.34.34.25.34.16.33.1.3.04.26.02.2-.01.13V8.5l-.05.63-.13.55-.21.46-.26.38-.3.31-.33.25-.35.19-.35.14-.33.1-.3.07-.26.04-.21.02H8.77l-.69.05-.59.14-.5.22-.41.27-.33.32-.27.35-.2.36-.15.37-.1.35-.07.32-.04.27-.02.21v3.06H3.17l-.21-.03-.28-.07-.32-.12-.35-.18-.36-.26-.36-.36-.35-.46-.32-.59-.28-.73-.21-.88-.14-1.05-.05-1.23.06-1.22.16-1.04.24-.87.32-.71.36-.57.43-.44.5-.33.56-.24.64-.18.71-.12h.77V7.05l.04-.63.14-.55.22-.46.27-.38.3-.31.33-.25.35-.19.35-.14.33-.1.3-.07.26-.04.21-.02H14.25zm-3.9 1.98a1.39 1.39 0 1 0 0 2.78 1.39 1.39 0 0 0 0-2.78zM9.75 23.82l-.9-.2-.73-.26-.59-.3-.45-.32-.34-.34-.25-.34-.16-.33-.1-.3-.04-.26-.02-.2.01-.13V15.5l.05-.63.13-.55.21-.46.26-.38.3-.31.33-.25.35-.19.35-.14.33-.1.3-.07.26-.04.21-.02h5.48l.69-.05.59-.14.5-.22.41-.27.33-.32.27-.35.2-.36.15-.37.1-.35.07-.32.04-.27.02-.21v-3.06h5.28l.21.03.28.07.32.12.35.18.36.26.36.36.35.46.32.59.28.73.21.88.14 1.05.05 1.23-.06 1.22-.16 1.04-.24.87-.32.71-.36.57-.43.44-.5.33-.56.24-.64.18-.71.12h-.77v2.84l-.04.63-.14.55-.22.46-.27.38-.3.31-.33.25-.35.19-.35.14-.33.1-.3.07-.26.04-.21.02H9.75zm3.9-1.98a1.39 1.39 0 1 0 0-2.78 1.39 1.39 0 0 0 0 2.78z" />
  </svg>
);

// Define your stack and exact brand hex colors here
const myStack = [
  { name: "Next.js", Icon: NextJsIcon, color: "#000000", darkColor: "#ffffff" },
  { name: "React", Icon: ReactIcon, color: "#61DAFB", darkColor: "#61DAFB" },
  { name: "Tailwind CSS", Icon: TailwindIcon, color: "#06B6D4", darkColor: "#06B6D4" },
  { name: "Django", Icon: DjangoIcon, color: "#092E20", darkColor: "#44B78B" },
  { name: "PostgreSQL", Icon: PostgresIcon, color: "#4169E1", darkColor: "#4169E1" },
  { name: "Supabase", Icon: SupabaseIcon, color: "#3ECF8E", darkColor: "#3ECF8E" },
];

const allLanguages = [
  { name: "JavaScript", Icon: JavascriptIcon, color: "#F7DF1E" },
  { name: "TypeScript", Icon: TypescriptIcon, color: "#3178C6" },
  { name: "React", Icon: ReactIcon, color: "#61DAFB" },
  { name: "Next.js", Icon: NextJsIcon, color: "#000000", darkColor: "#ffffff" },
  { name: "Tailwind CSS", Icon: TailwindIcon, color: "#06B6D4" },
  { name: "Python", Icon: PythonIcon, color: "#3776AB" },
  { name: "Django", Icon: DjangoIcon, color: "#092E20", darkColor: "#44B78B" },
  { name: "PostgreSQL", Icon: PostgresIcon, color: "#4169E1" },
  { name: "Supabase", Icon: SupabaseIcon, color: "#3ECF8E" },
];

export default function Home() {
  // State for the interactive Development Focus section
  const [activeTab, setActiveTab] = useState(0);

  const focusData = [
    {
      title: "Frontend Development",
      desc: "Crafting responsive, accessible, and dynamic user interfaces using React, Next.js, and modern CSS frameworks.",
      icon: <MonitorDot className="size-5" />,
      windowTitle: "components / Hero.tsx"
    },
    {
      title: "Backend Architecture",
      desc: "Designing secure and scalable server-side logic and RESTful APIs with Python and Django.",
      icon: <Server className="size-5" />,
      windowTitle: "api / views.py"
    },
    {
      title: "Database Integration",
      desc: "Structuring efficient relational databases with PostgreSQL and integrating real-time features via Supabase.",
      icon: <DatabaseZap className="size-5" />,
      windowTitle: "schema / users.sql"
    },
    {
      title: "Clean Code",
      desc: "Writing maintainable, DRY code prioritizing strict typing, modularity, and optimized performance.",
      icon: <Code2 className="size-5" />,
      windowTitle: "utils / helpers.ts"
    }
  ];

  return (
    <main className="min-h-screen pb-20 overflow-x-hidden">
      <div className="pointer-events-none fixed inset-0 bg-spotlight" />

      {/* --- TOP WRAPPER (Hero + Tech Stack with Grid Background) --- */}
      <div className="relative pt-32 pb-12">
        
        {/* The Grid / Bg Boxes (Fades out at the bottom) */}
        <div 
          className="pointer-events-none absolute inset-0 -z-10 opacity-[0.04] dark:opacity-[0.06]"
          style={{
            backgroundImage: "linear-gradient(var(--foreground) 1px, transparent 1px), linear-gradient(90deg, var(--foreground) 1px, transparent 1px)",
            backgroundSize: "40px 40px",
            maskImage: "linear-gradient(to bottom, black 80%, transparent 100%)",
            WebkitMaskImage: "linear-gradient(to bottom, black 80%, transparent 100%)"
          }}
        />

        {/* --- HERO SECTION --- */}
        <section className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-8">
            
            {/* Left Column: Text (Adjusted to 7 columns) */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="flex flex-col items-start lg:col-span-7"
            >
              <div className="mb-4 inline-flex items-center gap-2 text-xl font-medium sm:text-2xl">
                hi! <motion.span animate={{ rotate: [0, 15, -10, 15, 0] }} transition={{ repeat: Infinity, duration: 1.5, repeatDelay: 3 }} className="inline-block origin-bottom-right">👋</motion.span>
              </div>
              
              <h1 className="text-balance text-[clamp(2.5rem,6vw,5.5rem)] font-extrabold leading-[1.05] tracking-tight text-foreground">
                I'm <span className="text-[#0284c7] dark:text-[#74d4ff]">Jah'swill</span> Simeon,
              </h1>
              
              <p className="mt-6 max-w-xl text-lg text-muted-foreground sm:text-xl">
                a <strong className="font-bold text-foreground">fullstack web developer</strong> who loves creating intuitive frontends, robust backends, and the seamless APIs that connect them.
              </p>

              <div className="mt-10 flex flex-wrap gap-4">
                <Link 
                  href="/contact" 
                  className="group inline-flex h-14 items-center justify-center gap-2 rounded-2xl bg-[#0284c7] dark:bg-[#74d4ff] px-8 text-sm font-extrabold text-white dark:text-slate-950 transition-transform hover:-translate-y-1 hover:shadow-lg"
                >
                  Get In Touch
                </Link>
                <Link 
                  href="/resume.pdf" 
                  target="_blank" 
                  className="inline-flex h-14 items-center justify-center gap-2 rounded-2xl border-2 border-transparent bg-muted/50 px-8 text-sm font-bold text-foreground transition-colors hover:bg-muted"
                >
                  <FileText className="size-4 opacity-80" /> RESUME
                </Link>
              </div>
            </motion.div>

            {/* Right Column: Image (Adjusted to 5 columns, larger max width) */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative mx-auto w-full max-w-[300px] sm:max-w-[360px] lg:col-span-5 lg:max-w-none lg:ml-auto lg:mr-0"
            >
              {/* Using 4/5 aspect ratio for a larger, taller portrait */}
              <div className="aspect-[4/5] w-full rounded-[2.5rem] bg-gradient-to-tr from-[#0284c7]/20 to-[#74d4ff]/20 p-2 shadow-[0_0_40px_-10px_var(--glow)]">
                <div className="flex h-full w-full items-center justify-center overflow-hidden rounded-[2.2rem] bg-card object-cover">
                   <span className="text-center font-mono text-xs text-muted-foreground px-4">Your Portrait<br/>Image Here</span>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* --- TECH STACK ROW --- */}
        <section className="relative z-10 mx-auto mt-20 max-w-7xl px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <p className="mb-5 text-sm font-medium text-muted-foreground">
              current favorite tech stack/tools:
            </p>
            <div className="flex flex-wrap items-center gap-5 sm:gap-7">
              
              <div className="group cursor-pointer transition-transform hover:-translate-y-1" title="Next.js">
                <NextJsIcon className="size-7 text-[#6b7280] transition-colors duration-300 group-hover:text-black dark:group-hover:text-white sm:size-8" />
              </div>

              <div className="group cursor-pointer transition-transform hover:-translate-y-1" title="React">
                <ReactIcon className="size-7 text-[#6b7280] transition-colors duration-300 group-hover:text-[#61DAFB] sm:size-8" />
              </div>

              <div className="group cursor-pointer transition-transform hover:-translate-y-1" title="Tailwind CSS">
                <TailwindIcon className="size-7 text-[#6b7280] transition-colors duration-300 group-hover:text-[#06B6D4] sm:size-8" />
              </div>

              <div className="group cursor-pointer transition-transform hover:-translate-y-1" title="Django">
                <DjangoIcon className="size-7 text-[#6b7280] transition-colors duration-300 group-hover:text-[#092E20] dark:group-hover:text-[#44B78B] sm:size-8" />
              </div>
              
              <div className="group cursor-pointer transition-transform hover:-translate-y-1" title="PostgreSQL">
                <PostgresIcon className="size-7 text-[#6b7280] transition-colors duration-300 group-hover:text-[#4169E1] sm:size-8" />
              </div>

              <div className="group cursor-pointer transition-transform hover:-translate-y-1" title="Supabase">
                <SupabaseIcon className="size-7 text-[#6b7280] transition-colors duration-300 group-hover:text-[#3ECF8E] sm:size-8" />
              </div>

              {/* Vertical Separator */}
              <div className="mx-1 pb-1 text-2xl font-light text-border sm:mx-2">|</div>

              {/* VS Code */}
              <div className="group cursor-pointer transition-transform hover:-translate-y-1" title="VS Code">
                <VSCodeIcon className="size-7 text-[#6b7280] transition-colors duration-300 group-hover:text-[#007ACC] sm:size-8" />
              </div>

            </div>
          </motion.div>
        </section>
      </div>

      {/* --- COMPACT PILLARS SECTION --- */}
      <section className="relative z-10 mx-auto mt-28 max-w-7xl px-6 lg:px-8">
        <div className="grid gap-4 md:grid-cols-3 md:gap-6">
          
          {/* Frontend */}
          <div className="flex gap-4 rounded-2xl border border-border bg-card p-5 shadow-sm transition-colors hover:border-[#0284c7]/50 dark:hover:border-[#74d4ff]/50">
            <div className="mt-1 flex shrink-0 items-center justify-center rounded-lg bg-[#61DAFB]/10 p-2.5">
              <MonitorDot className="size-5 text-[#0284c7] dark:text-[#61DAFB]" />
            </div>
            <div>
              <h3 className="mb-1.5 text-base font-extrabold text-foreground">Frontend Excellence</h3>
              <p className="text-[13px] text-muted-foreground leading-relaxed sm:text-sm">
                Building beautiful, accessible, and responsive interfaces using React, Next.js, and modern CSS frameworks.
              </p>
            </div>
          </div>
          
          {/* Backend */}
          <div className="flex gap-4 rounded-2xl border border-border bg-card p-5 shadow-sm transition-colors hover:border-[#0284c7]/50 dark:hover:border-[#74d4ff]/50">
            <div className="mt-1 flex shrink-0 items-center justify-center rounded-lg bg-[#092E20]/10 p-2.5 dark:bg-[#44B78B]/20">
              <Server className="size-5 text-[#092E20] dark:text-[#44B78B]" />
            </div>
            <div>
              <h3 className="mb-1.5 text-base font-extrabold text-foreground">Backend Architecture</h3>
              <p className="text-[13px] text-muted-foreground leading-relaxed sm:text-sm">
                Structuring scalable server logic and business rules utilizing Python, Django, and modern runtimes.
              </p>
            </div>
          </div>
          
          {/* API */}
          <div className="flex gap-4 rounded-2xl border border-border bg-card p-5 shadow-sm transition-colors hover:border-[#0284c7]/50 dark:hover:border-[#74d4ff]/50">
            <div className="mt-1 flex shrink-0 items-center justify-center rounded-lg bg-[#3ECF8E]/10 p-2.5">
              <DatabaseZap className="size-5 text-[#0284c7] dark:text-[#3ECF8E]" />
            </div>
            <div>
              <h3 className="mb-1.5 text-base font-extrabold text-foreground">Data & API Integration</h3>
              <p className="text-[13px] text-muted-foreground leading-relaxed sm:text-sm">
                Connecting the dots with robust REST APIs, PostgreSQL databases, and real-time Supabase integration.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* --- PASSION STATEMENT SECTION --- */}
      <section className="relative z-10 mx-auto mt-32 mb-24 max-w-5xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center justify-center gap-5 text-center md:flex-row md:gap-8 md:text-left"
        >
          {/* Decorative Bars */}
          <div className="flex gap-2">
            <div className="h-10 w-3 -skew-x-12 bg-muted-foreground/20 sm:h-14 sm:w-4" />
            <div className="h-10 w-3 -skew-x-12 bg-muted-foreground/20 sm:h-14 sm:w-4" />
          </div>
          
          {/* Typography Contrast */}
          <h2 className="text-balance text-[clamp(1.75rem,4vw,3.5rem)] leading-[1.2] text-muted-foreground">
            <span className="font-extrabold italic">Thriving</span>{" "}
            <span className="font-light">where intuitive</span>{" "}
            <span className="font-extrabold italic">design</span>{" "}
            <span className="font-light">meets solid</span>{" "}
            <span className="font-extrabold italic">logic</span>.
          </h2>
        </motion.div>
      </section>

      {/* --- TOP LANGUAGES GRID SECTION --- */}
      <section className="relative z-10 mx-auto mt-32 max-w-7xl px-6 lg:px-8">
        <div className="mb-12 text-center md:text-left">
          <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">Top Languages & Technologies</h2>
          <p className="mt-4 text-muted-foreground">My go-to tools for building powerful, scalable applications.</p>
        </div>

        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
          {allLanguages.map((tool, i) => (
            <motion.div
              key={tool.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: i * 0.05 }}
              className="group flex flex-col items-center justify-center gap-4 rounded-3xl border border-border bg-card p-6 transition-all hover:border-[#0284c7]/50 dark:hover:border-[#74d4ff]/50 hover:shadow-lg"
            >
              <style jsx>{`
                .hover-lang-${tool.name.replace(/\s+|\./g, '')} {
                  color: ${tool.color};
                }
                :global(.dark) .hover-lang-${tool.name.replace(/\s+|\./g, '')} {
                  color: ${tool.darkColor || tool.color};
                }
              `}</style>
              <div className={`transition-colors duration-300 hover-lang-${tool.name.replace(/\s+|\./g, '')}`}>
                <tool.Icon className="size-10 sm:size-12" />
              </div>
              <span className="text-[13px] font-extrabold sm:text-sm">{tool.name}</span>
            </motion.div>
          ))}
        </div>
      </section>

      {/* --- INTERACTIVE DEVELOPMENT FOCUS (Numbered Tabs) --- */}
      <section className="relative z-10 mx-auto mt-32 max-w-7xl px-6 lg:px-8">
        <div className="mb-12">
          <p className="mb-2 text-xs font-extrabold uppercase tracking-wider text-[#0284c7] dark:text-[#74d4ff]">
            End-to-End Development
          </p>
          <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">Fullstack Architecture Focus</h2>
          <p className="mt-4 max-w-2xl text-muted-foreground">
            Specializing in creating exceptional, high-performance web applications from the database schema up to the interactive DOM.
          </p>
        </div>

        <div className="grid gap-12 lg:grid-cols-12 lg:gap-8">
          
          {/* Left Side: Numbered Tabs */}
          <div className="flex flex-col gap-4 lg:col-span-5">
            {focusData.map((item, index) => {
              const isActive = activeTab === index;
              return (
                <button
                  key={item.title}
                  onClick={() => setActiveTab(index)}
                  className={`flex items-start gap-4 rounded-3xl border p-6 text-left transition-all duration-300 ${
                    isActive 
                      ? "border-[#0284c7]/50 bg-[#0284c7]/5 dark:border-[#74d4ff]/50 dark:bg-[#74d4ff]/5 shadow-md" 
                      : "border-transparent hover:bg-muted"
                  }`}
                >
                  <div className={`flex shrink-0 items-center justify-center rounded-xl px-4 py-2 font-mono text-2xl font-black transition-colors ${
                    isActive ? "bg-[#0284c7] text-white dark:bg-[#74d4ff] dark:text-slate-950" : "text-muted-foreground/50"
                  }`}>
                    {index + 1}
                  </div>
                  <div>
                    <h3 className={`mb-2 text-lg font-extrabold ${isActive ? "text-foreground" : "text-foreground/80"}`}>
                      {item.title}
                    </h3>
                    <p className={`text-sm leading-relaxed ${isActive ? "text-muted-foreground" : "text-muted-foreground/70"}`}>
                      {item.desc}
                    </p>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Right Side: Visual Mock Window */}
          <div className="lg:col-span-7 lg:col-start-6">
            <div className="sticky top-32 w-full overflow-hidden rounded-3xl border border-border bg-card shadow-2xl">
              <div className="flex items-center justify-between border-b border-border bg-muted/40 px-4 py-3">
                <div className="flex gap-2">
                  <div className="size-3 rounded-full bg-red-500/80" />
                  <div className="size-3 rounded-full bg-yellow-500/80" />
                  <div className="size-3 rounded-full bg-green-500/80" />
                </div>
                <div className="rounded-md bg-background px-3 py-1 font-mono text-[10px] text-muted-foreground">
                  {focusData[activeTab].windowTitle}
                </div>
                <div className="size-3" />
              </div>

              <div className="relative aspect-video w-full bg-background p-8">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeTab}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.3 }}
                    className="flex h-full flex-col items-center justify-center text-center"
                  >
                    <div className="mb-6 rounded-2xl bg-[#0284c7]/10 p-6 text-[#0284c7] dark:bg-[#74d4ff]/10 dark:text-[#74d4ff]">
                      {focusData[activeTab].icon}
                    </div>
                    <h4 className="mb-2 text-xl font-extrabold text-foreground">{focusData[activeTab].title}</h4>
                    <p className="max-w-xs text-sm text-muted-foreground">
                      Executing modern web standards and architectural best practices.
                    </p>
                    
                    <div className="mt-8 flex w-full max-w-sm flex-col gap-3 opacity-50 grayscale">
                      <div className="h-2 w-3/4 rounded-full bg-muted-foreground/30" />
                      <div className="h-2 w-full rounded-full bg-muted-foreground/20" />
                      <div className="h-2 w-5/6 rounded-full bg-muted-foreground/20" />
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* --- FULLSTACK PRECISION (Detail Oriented) --- */}
      <section className="relative z-10 mx-auto mt-32 mb-20 max-w-7xl px-6 lg:px-8">
        <div className="flex flex-col gap-10 lg:flex-row lg:items-start lg:gap-16">
          
          {/* Left Side: Sticky Paragraph Header */}
          <div className="lg:sticky lg:top-32 lg:w-1/3 shrink-0">
            <p className="mb-3 text-xs font-extrabold uppercase tracking-wider text-[#0284c7] dark:text-[#74d4ff]">
              Fullstack Precision
            </p>
            <h2 className="text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">
              Keen Eye for Architecture and Interface Details.
            </h2>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              Meticulous attention to both the user-facing experience and the underlying server architecture ensures applications that are as reliable as they are beautiful.
            </p>
          </div>

          {/* Right Side: Free-Roaming Static Grid */}
          <div className="relative flex-1 lg:py-6">
            
            {/* Soft, faded graph paper background */}
            <div 
              className="pointer-events-none absolute inset-0 -z-10 opacity-[0.04] dark:opacity-[0.06]"
              style={{
                backgroundImage: "linear-gradient(var(--foreground) 1px, transparent 1px), linear-gradient(90deg, var(--foreground) 1px, transparent 1px)",
                backgroundSize: "40px 40px",
                maskImage: "radial-gradient(circle at center, black 40%, transparent 100%)",
                WebkitMaskImage: "radial-gradient(circle at center, black 40%, transparent 100%)"
              }}
            />

            {/* Naked, static grid items */}
            <div className="grid gap-8 sm:grid-cols-2 lg:gap-12">
              
              <div className="flex items-start gap-4">
                <div className="mt-0.5 shrink-0 text-[#0284c7] dark:text-[#74d4ff]">
                  <MonitorSmartphone className="size-5 stroke-[2.5]" />
                </div>
                <div>
                  <h3 className="mb-1 text-[15px] font-extrabold text-foreground">Responsive Design</h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    Pixel-perfect layouts that adapt seamlessly across all devices and screen sizes.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="mt-0.5 shrink-0 text-[#0284c7] dark:text-[#74d4ff]">
                  <ShieldCheck className="size-5 stroke-[2.5]" />
                </div>
                <div>
                  <h3 className="mb-1 text-[15px] font-extrabold text-foreground">Secure Architecture</h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    Maintaining uniform security protocols and architecture rules across the entire backend.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="mt-0.5 shrink-0 text-[#0284c7] dark:text-[#74d4ff]">
                  <Database className="size-5 stroke-[2.5]" />
                </div>
                <div>
                  <h3 className="mb-1 text-[15px] font-extrabold text-foreground">Data Integrity</h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    Structuring normalized PostgreSQL schemas and implementing safe Supabase policies.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="mt-0.5 shrink-0 text-[#0284c7] dark:text-[#74d4ff]">
                  <Zap className="size-5 stroke-[2.5]" />
                </div>
                <div>
                  <h3 className="mb-1 text-[15px] font-extrabold text-foreground">Performance Optimization</h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    Optimized load times, smooth animations, and efficient resource management.
                  </p>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* --- PRETTY & OPTIMIZED --- */}
      <section className="relative z-10 mx-auto mt-32 mb-20 max-w-7xl px-6 lg:px-8">
        <div className="flex flex-col gap-10 lg:flex-row lg:items-start lg:gap-16">
          
          {/* Left Side: Sticky Paragraph Header */}
          <div className="lg:sticky lg:top-32 lg:w-1/3 shrink-0">
            <p className="mb-3 text-xs font-extrabold uppercase tracking-wider text-[#0284c7] dark:text-[#74d4ff]">
              Pretty & Optimized
            </p>
            <h2 className="text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">
              Comprehensible and Optimized Code.
            </h2>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              Writing clean code is a top priority while keeping it as optimized as possible.
            </p>
          </div>

          {/* Right Side: Free-Roaming Static Grid */}
          <div className="relative flex-1 lg:py-6">
            
            {/* Soft, faded graph paper background floating behind the text */}
            <div 
              className="pointer-events-none absolute inset-0 -z-10 opacity-[0.04] dark:opacity-[0.06]"
              style={{
                backgroundImage: "linear-gradient(var(--foreground) 1px, transparent 1px), linear-gradient(90deg, var(--foreground) 1px, transparent 1px)",
                backgroundSize: "40px 40px",
                maskImage: "radial-gradient(circle at center, black 40%, transparent 100%)",
                WebkitMaskImage: "radial-gradient(circle at center, black 40%, transparent 100%)"
              }}
            />

            {/* Naked, static grid items */}
            <div className="grid gap-8 sm:grid-cols-2 lg:gap-12">
              
              {/* Box 1 */}
              <div className="flex items-start gap-4">
                <div className="mt-0.5 shrink-0 text-[#0284c7] dark:text-[#74d4ff]">
                  <Code2 className="size-5 stroke-[2.5]" />
                </div>
                <div>
                  <h3 className="mb-1 text-[15px] font-extrabold text-foreground">Clean Architecture</h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    Following SOLID principles and clean code practices for maintainable applications.
                  </p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    <span className="rounded-md bg-gray-100 px-2.5 py-1 text-[10px] font-extrabold uppercase tracking-wider text-muted-foreground dark:bg-white/5">TypeScript</span>
                    <span className="rounded-md bg-gray-100 px-2.5 py-1 text-[10px] font-extrabold uppercase tracking-wider text-muted-foreground dark:bg-white/5">React</span>
                    <span className="rounded-md bg-gray-100 px-2.5 py-1 text-[10px] font-extrabold uppercase tracking-wider text-muted-foreground dark:bg-white/5">React Native</span>
                  </div>
                </div>
              </div>

              {/* Box 2 */}
              <div className="flex items-start gap-4">
                <div className="mt-0.5 shrink-0 text-[#0284c7] dark:text-[#74d4ff]">
                  <Zap className="size-5 stroke-[2.5]" />
                </div>
                <div>
                  <h3 className="mb-1 text-[15px] font-extrabold text-foreground">Performance First</h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    Implementing lazy loading, code splitting, and efficient state management.
                  </p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    <span className="rounded-md bg-gray-100 px-2.5 py-1 text-[10px] font-extrabold uppercase tracking-wider text-muted-foreground dark:bg-white/5">Next.js</span>
                    <span className="rounded-md bg-gray-100 px-2.5 py-1 text-[10px] font-extrabold uppercase tracking-wider text-muted-foreground dark:bg-white/5">Redux</span>
                    <span className="rounded-md bg-gray-100 px-2.5 py-1 text-[10px] font-extrabold uppercase tracking-wider text-muted-foreground dark:bg-white/5">React Query</span>
                  </div>
                </div>
              </div>

              {/* Box 3 */}
              <div className="flex items-start gap-4">
                <div className="mt-0.5 shrink-0 text-[#0284c7] dark:text-[#74d4ff]">
                  <Sparkles className="size-5 stroke-[2.5]" />
                </div>
                <div>
                  <h3 className="mb-1 text-[15px] font-extrabold text-foreground">Modern Development</h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    Using latest features while maintaining backwards compatibility.
                  </p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    <span className="rounded-md bg-gray-100 px-2.5 py-1 text-[10px] font-extrabold uppercase tracking-wider text-muted-foreground dark:bg-white/5">ES6+</span>
                    <span className="rounded-md bg-gray-100 px-2.5 py-1 text-[10px] font-extrabold uppercase tracking-wider text-muted-foreground dark:bg-white/5">Hooks</span>
                    <span className="rounded-md bg-gray-100 px-2.5 py-1 text-[10px] font-extrabold uppercase tracking-wider text-muted-foreground dark:bg-white/5">Tailwind CSS</span>
                  </div>
                </div>
              </div>

              {/* Box 4 */}
              <div className="flex items-start gap-4">
                <div className="mt-0.5 shrink-0 text-[#0284c7] dark:text-[#74d4ff]">
                  <TestTube className="size-5 stroke-[2.5]" />
                </div>
                <div>
                  <h3 className="mb-1 text-[15px] font-extrabold text-foreground">Testing & Quality</h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    Comprehensive testing and continuous integration for reliable code.
                  </p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    <span className="rounded-md bg-gray-100 px-2.5 py-1 text-[10px] font-extrabold uppercase tracking-wider text-muted-foreground dark:bg-white/5">Jest</span>
                    <span className="rounded-md bg-gray-100 px-2.5 py-1 text-[10px] font-extrabold uppercase tracking-wider text-muted-foreground dark:bg-white/5">React Testing Library</span>
                    <span className="rounded-md bg-gray-100 px-2.5 py-1 text-[10px] font-extrabold uppercase tracking-wider text-muted-foreground dark:bg-white/5">Cypress</span>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

    </main>
  );
}