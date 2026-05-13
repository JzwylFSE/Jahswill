"use client";

import type { ReactNode } from "react";

type IconType = (props: { className?: string; style?: React.CSSProperties }) => ReactNode;

const makeIcon = (label: string): IconType => ({ className }) => (
  <span className={className} aria-label={label}>
    {label}
  </span>
);

const SiNextdotjs = makeIcon("Next.js");
const SiReact = makeIcon("React");
const SiTailwindcss = makeIcon("Tailwind CSS");
const SiJavascript = makeIcon("JavaScript");
const SiHtml5 = makeIcon("HTML5");
const SiCss3 = makeIcon("CSS3");
const SiPython = makeIcon("Python");
const SiDjango = makeIcon("Django");
const SiPostgresql = makeIcon("PostgreSQL");
const SiSupabase = makeIcon("Supabase");

export type Project = {
  slug: string;
  title: string;
  tag: string;
  description: string;
  Visual: () => ReactNode;
};

const VisualOne = () => (
  <div className="absolute inset-0">
    <div className="absolute inset-0 bg-gradient-to-br from-accent/20 via-transparent to-transparent" />
    <div className="absolute -right-12 -top-12 size-64 rounded-full bg-accent/30 blur-3xl" />
    <div className="absolute bottom-6 left-6 right-6 rounded-xl border border-border bg-background/60 p-4 backdrop-blur">
      <div className="flex items-center justify-between">
        <div className="h-2 w-20 rounded-full bg-foreground/80" />
        <div className="h-2 w-10 rounded-full bg-muted-foreground/40" />
      </div>
      <div className="mt-4 grid grid-cols-3 gap-2">
        <div className="aspect-square rounded-md bg-muted" />
        <div className="aspect-square rounded-md bg-muted" />
        <div className="aspect-square rounded-md bg-muted" />
      </div>
    </div>
  </div>
);

const VisualTwo = () => (
  <div className="absolute inset-0">
    <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-transparent to-accent/20" />
    <div className="absolute inset-x-6 bottom-6 space-y-2">
      {[60, 80, 45, 70].map((w, i) => (
        <div key={i} className="flex items-center gap-2">
          <div className="h-1.5 w-6 rounded-full bg-muted-foreground/40" />
          <div className="h-1.5 rounded-full bg-foreground/80" style={{ width: `${w}%` }} />
        </div>
      ))}
    </div>
  </div>
);

const VisualThree = () => (
  <div className="absolute inset-0">
    <div className="absolute inset-0 bg-gradient-to-bl from-accent/20 via-transparent to-transparent" />
    <div className="absolute inset-0 flex items-center justify-center">
      <div className="relative size-32">
        <div className="absolute inset-0 rounded-full border border-border" />
        <div className="absolute inset-3 rounded-full border border-border" />
        <div className="absolute inset-6 rounded-full border border-border" />
        <div className="absolute left-1/2 top-1/2 size-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent shadow-[0_0_24px_4px_var(--glow)]" />
      </div>
    </div>
  </div>
);

export const projects: Project[] = [
  {
    slug: "storefront",
    title: "Custom Storefront",
    tag: "E-Commerce",
    description:
      "An end-to-end shop I built for a local brand — checkout, CMS, the works. Conversions went up 3.8x and the owner texted me a 🎉.",
    Visual: VisualOne,
  },
  {
    slug: "dashboard",
    title: "Analytics Dashboard",
    tag: "SaaS",
    description:
      "A multi-tenant dashboard with realtime charts, role-based auth and Stripe billing. The kind of project where the frontend and backend high-five.",
    Visual: VisualTwo,
  },
  {
    slug: "open-source",
    title: "Open Source Library",
    tag: "Collaboration",
    description:
      "Co-maintained with a 12-person team. Typed primitives that quietly ship to a few thousand devs every week.",
    Visual: VisualThree,
  },
];

export type Tool = {
  name: string;
  Icon: IconType;
  level: number;
  color: string;
  group: "Frontend" | "Backend";
};

export const tools: Tool[] = [
  { name: "Next.js", Icon: SiNextdotjs, level: 88, color: "#ffffff", group: "Frontend" },
  { name: "React", Icon: SiReact, level: 92, color: "#61DAFB", group: "Frontend" },
  { name: "Tailwind CSS", Icon: SiTailwindcss, level: 95, color: "#38BDF8", group: "Frontend" },
  { name: "JavaScript", Icon: SiJavascript, level: 90, color: "#F7DF1E", group: "Frontend" },
  { name: "HTML5", Icon: SiHtml5, level: 96, color: "#E34F26", group: "Frontend" },
  { name: "CSS3", Icon: SiCss3, level: 94, color: "#1572B6", group: "Frontend" },
  { name: "Python", Icon: SiPython, level: 87, color: "#3776AB", group: "Backend" },
  { name: "Django", Icon: SiDjango, level: 85, color: "#0C4B33", group: "Backend" },
  { name: "Django REST", Icon: SiDjango, level: 82, color: "#A30000", group: "Backend" },
  { name: "PostgreSQL", Icon: SiPostgresql, level: 78, color: "#4169E1", group: "Backend" },
  { name: "Supabase", Icon: SiSupabase, level: 80, color: "#3ECF8E", group: "Backend" },
];
