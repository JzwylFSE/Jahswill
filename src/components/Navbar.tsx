"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Moon, Sun, Menu, X } from "lucide-react";
import { useTheme } from "next-themes";

const links = [
  { label: "Home", to: "/" as const, hint: "G H" },
  { label: "About", to: "/about" as const, hint: "G A" },
  { label: "Work", to: "/work" as const, hint: "G W" },
  { label: "Tools", to: "/tools" as const, hint: "G S" },
  { label: "Contact", to: "/contact" as const, hint: "G C" },
];

export default function Navbar() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();
  const [open, setOpen] = useState(false);
  const pathname = usePathname?.() ?? "/";

  useEffect(() => setMounted(true), []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  const toggleTheme = () => {
    // next-themes can return "system"; we default to "dark" styles in that case.
    const current = theme === "light" ? "light" : "dark";
    const next = current === "dark" ? "light" : "dark";
    setTheme(next);
  };

  const resolvedTheme: "dark" | "light" =
    theme === "light" ? "light" : "dark";

  return (
    <>
      <motion.header
        initial={{ opacity: 0, y: -16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="fixed inset-x-0 top-3 z-50 mx-auto flex w-[min(94%,860px)] items-center justify-between gap-2 rounded-full border border-border bg-card/70 px-3 py-2 backdrop-blur-xl shadow-[0_10px_40px_-20px_var(--glow)] sm:top-4 sm:px-4"
      >
        <Link
          href="/"
          className="shrink-0 px-1 text-base font-bold tracking-tight sm:text-lg"
        >
          JS<span className="text-accent">.</span>
        </Link>

        <nav className="hidden flex-1 items-center justify-center gap-1 md:flex">
          {links.map((l) => {
            const isActive = pathname === l.to;
            return (
              <Link
                key={l.to}
                href={l.to}
                className={
                  `rounded-full px-3 py-1.5 text-xs transition-colors hover:bg-background/60 hover:text-foreground ` +
                  (isActive
                    ? "text-foreground bg-background/60"
                    : "text-muted-foreground")
                }
              >
                {l.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex shrink-0 items-center gap-1.5">
          <button
            onClick={toggleTheme}
            aria-label="Toggle theme (T)"
            title="Toggle theme · T"
            className="flex size-9 items-center justify-center rounded-full border border-border bg-background/60 text-muted-foreground transition-colors hover:text-foreground"
          >
            {mounted ? (
              <AnimatePresence mode="wait" initial={false}>
                <motion.span
                  key={resolvedTheme}
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  {resolvedTheme === "dark" ? (
                    <Sun className="size-4" />
                  ) : (
                    <Moon className="size-4" />
                  )}
                </motion.span>
              </AnimatePresence>
            ) : (
              <Sun className="size-4 opacity-70" />
            )}
          </button>

          <button
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            className="flex size-9 items-center justify-center rounded-full border border-border bg-background/60 text-muted-foreground transition-colors hover:text-foreground md:hidden"
          >
            <AnimatePresence mode="wait" initial={false}>
              {open ? (
                <motion.span
                  key="x"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.18 }}
                >
                  <X className="size-4" />
                </motion.span>
              ) : (
                <motion.span
                  key="m"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.18 }}
                >
                  <Menu className="size-4" />
                </motion.span>
              )}
            </AnimatePresence>
          </button>
        </div>
      </motion.header>

      <AnimatePresence>
        {open && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              onClick={() => setOpen(false)}
              className="fixed inset-0 z-30 bg-background/60 backdrop-blur-sm md:hidden"
            />
            <motion.nav
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
              className="fixed left-1/2 top-20 z-40 w-[min(94%,420px)] -translate-x-1/2 rounded-2xl border border-border bg-card/90 p-3 backdrop-blur-xl shadow-[0_30px_80px_-20px_var(--glow)] md:hidden"
            >
              <ul className="flex flex-col">
                {links.map((l, i) => (
                  <motion.li
                    key={l.to}
                    initial={{ opacity: 0, x: -8 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.05 + i * 0.05 }}
                  >
                    <Link
                      href={l.to}
                      onClick={() => setOpen(false)}
                      className="flex items-center justify-between rounded-xl px-4 py-3 text-sm font-medium text-foreground/90 transition-colors hover:bg-background/60"
                    >
                      <span>{l.label}</span>
                      <span className="font-mono text-[10px] text-muted-foreground">
                        {l.hint}
                      </span>
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </motion.nav>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
