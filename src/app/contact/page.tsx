"use client";

import { Mail, ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import GithubIcon from "../../components/icons/GithubIcon";
import LinkedinIcon from "../../components/icons/LinkedinIcon";

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const },
};

const channels = [
  {
    Icon: Mail,
    label: "Email",
    value: "cjsimeon090@gmail.com",
    href: "mailto:cjsimeon090@gmail.com",
    note: "Best for projects, roles, or saying hi.",
  },
  {
    Icon: LinkedinIcon,
    label: "LinkedIn",
    value: "in/jahswill-simeon",
    href: "https://www.linkedin.com/in/jahswill-simeon/",
    note: "Connect, message, the whole nine yards.",
  },
  {
    Icon: GithubIcon,
    label: "GitHub",
    value: "@JzwylFSE",
    href: "https://github.com/JzwylFSE",
    note: "Where my code actually lives.",
  },
] as const;

export default function ContactPage() {
  return (
    <main className="relative px-4 pt-28 pb-20 sm:px-6 sm:pt-36 sm:pb-28">
      <div className="mx-auto max-w-3xl">
        <motion.p
          {...fadeUp}
          className="text-xs uppercase tracking-[0.2em] text-muted-foreground"
        >
          Contact
        </motion.p>

        <motion.h1
          {...fadeUp}
          transition={{ ...fadeUp.transition, delay: 0.05 }}
          className="mt-4 text-balance text-4xl font-semibold leading-[1.1] tracking-tight sm:text-5xl md:text-6xl"
        >
          Got an idea?{" "}
          <span className="bg-gradient-to-r from-foreground to-accent bg-clip-text text-transparent">
            Let's chat.
          </span>
        </motion.h1>

        <motion.p
          {...fadeUp}
          transition={{ ...fadeUp.transition, delay: 0.1 }}
          className="mt-5 text-base text-muted-foreground sm:text-lg"
        >
          I'm Jah'swill — fullstack web developer, perpetually curious. I reply
          fast and I'm open to roles, freelance, and collabs that sound fun.
        </motion.p>

        <div className="mt-12 space-y-3">
          {channels.map((c, i) => (
            <motion.a
              key={c.label}
              href={c.href}
              target={c.href.startsWith("http") ? "_blank" : undefined}
              rel={c.href.startsWith("http") ? "noreferrer" : undefined}
              {...fadeUp}
              transition={{ ...fadeUp.transition, delay: 0.1 + i * 0.07 }}
              whileHover={{ x: 4 }}
              className="group flex items-center gap-4 rounded-2xl border border-border bg-card/40 p-5 backdrop-blur transition-colors hover:border-accent/40 hover:bg-card"
            >
              <span className="flex size-11 shrink-0 items-center justify-center rounded-xl border border-border bg-background/60 text-muted-foreground transition-colors group-hover:text-foreground">
                <c.Icon className="size-5" strokeWidth={1.5} />
              </span>

              <div className="min-w-0 flex-1">
                <p className="text-sm font-semibold tracking-tight text-foreground">
                  {c.label}
                </p>
                <p className="truncate text-sm text-muted-foreground">{c.value}</p>
                <p className="mt-1 text-xs text-muted-foreground/70">{c.note}</p>
              </div>

              <ArrowUpRight className="size-5 shrink-0 text-muted-foreground transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-foreground" />
            </motion.a>
          ))}
        </div>

        <motion.p
          {...fadeUp}
          transition={{ ...fadeUp.transition, delay: 0.4 }}
          className="mt-10 text-xs text-muted-foreground"
        >
          Based wherever there's good wifi · Available worldwide.
        </motion.p>
      </div>
    </main>
  );
}
