"use client";

import { motion } from "framer-motion";
import { Mail } from "lucide-react";
import GithubIcon from "./icons/GithubIcon";
import LinkedinIcon from "./icons/LinkedinIcon";

const links = [
  { Icon: GithubIcon, href: "https://github.com/JzwylFSE", label: "GitHub" },
  {
    Icon: LinkedinIcon,
    href: "https://www.linkedin.com/in/jahswill-simeon/",
    label: "LinkedIn",
  },
  { Icon: Mail, href: "mailto:cjsimeon090@gmail.com", label: "Email" },
];

export default function Footer() {
  return (
    <footer className="relative px-4 py-16 sm:px-6 sm:py-20">
      <div className="pointer-events-none absolute inset-x-0 top-0 mx-auto h-px max-w-6xl bg-gradient-to-r from-transparent via-border to-transparent" />
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6 }}
        className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 sm:flex-row"
      >
        <div className="text-center sm:text-left">
          <p className="text-sm font-medium text-foreground">
            Jah'swill Simeon
          </p>
          <a
            href="mailto:cjsimeon090@gmail.com"
            className="text-xs text-muted-foreground transition-colors hover:text-foreground"
          >
            cjsimeon090@gmail.com
          </a>
        </div>
        <div className="flex items-center gap-2">
          {links.map(({ Icon, href, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noreferrer"
              aria-label={label}
              className="group flex size-10 items-center justify-center rounded-full border border-border bg-card/40 backdrop-blur transition-all duration-300 hover:scale-110 hover:border-accent/50 hover:bg-card hover:shadow-[0_0_24px_-6px_var(--glow)]"
            >
              <Icon
                className="size-4 text-muted-foreground transition-colors group-hover:text-foreground"
                strokeWidth={1.5}
              />
            </a>
          ))}
        </div>
        <p className="text-xs text-muted-foreground">
          © {new Date().getFullYear()} — Made with caffeine & curiosity.
        </p>
      </motion.div>
    </footer>
  );
}
