"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useTheme } from "next-themes";
import { motion, AnimatePresence } from "framer-motion";
import { Command } from "lucide-react";

const SHORTCUTS = [
  { keys: ["Q"], label: "Open Quick Access" },
  { keys: ["T"], label: "Toggle Dark Mode" },
  { keys: ["H"], label: "Go to Home" },
  { keys: ["A"], label: "Go to About" },
  { keys: ["W"], label: "Go to Work" },
  { keys: ["S"], label: "Go to Tools" },
  { keys: ["C"], label: "Go to Contact" },
  { keys: ["?"], label: "Show Shortcuts" },
];

export default function KeyboardShortcuts() {
  const router = useRouter();
  const { theme, setTheme } = useTheme();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const isTyping = (el: EventTarget | null) => {
      const t = el as HTMLElement | null;
      if (!t) return false;
      const tag = t.tagName;
      return tag === "INPUT" || tag === "TEXTAREA" || t.isContentEditable;
    };

    const onKey = (e: KeyboardEvent) => {
      if (isTyping(e.target)) return;
      if (e.metaKey || e.ctrlKey || e.altKey) return;

      const k = e.key;

      if (k === "Escape") {
        setOpen(false);
        return;
      }
      if (k === "?" || (e.shiftKey && k === "/")) {
        e.preventDefault();
        setOpen((v) => !v);
        return;
      }

      const lower = k.toLowerCase();
      const map: Record<string, string> = {
        h: "/",
        a: "/about",
        w: "/work",
        s: "/tools",
        c: "/contact",
      };

      if (map[lower]) {
        e.preventDefault();
        router.push(map[lower]);
        return;
      }

      if (lower === "t") {
        e.preventDefault();
        // Toggle theme directly via next-themes instead of relying on DOM
        setTheme(theme === "dark" ? "light" : "dark");
        return;
      }

      if (lower === "f") {
        e.preventDefault();
        // Notify listeners (eg. Navbar) to toggle focus mode
        window.dispatchEvent(new CustomEvent("toggleFocus"));
        return;
      }

      if (lower === "q") {
        e.preventDefault();
        // Request the quick access drawer to open via a global event
        window.dispatchEvent(new CustomEvent("openQuickAccess"));
        return;
      }
    };

    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [router]);

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        aria-label="Show keyboard shortcuts"
        className="fixed bottom-4 right-4 z-40 hidden items-center gap-2 rounded-full border border-border bg-card/70 px-3 py-1.5 text-[11px] text-muted-foreground backdrop-blur transition-colors hover:text-foreground md:flex"
      >
        <Command className="size-3" />
        Press <kbd className="rounded bg-background/80 px-1 font-mono">
          ?
        </kbd>{" "}
        for shortcuts
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4"
            onClick={() => setOpen(false)}
          >
            <div className="absolute inset-0 bg-background/70 backdrop-blur-xl" />
            <motion.div
              initial={{ y: 20, opacity: 0, scale: 0.96 }}
              animate={{ y: 0, opacity: 1, scale: 1 }}
              exit={{ y: 20, opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-md rounded-2xl border border-border bg-card p-6 shadow-[0_30px_80px_-20px_var(--glow)]"
            >
              <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
                Shortcuts
              </p>
              <h3 className="mt-2 text-lg font-semibold tracking-tight">
                Navigate Faster.
              </h3>
              <ul className="mt-5 space-y-2">
                {SHORTCUTS.map((s) => (
                  <li
                    key={s.label}
                    className="flex items-center justify-between text-sm"
                  >
                    <span className="text-foreground/90">{s.label}</span>
                    <span className="flex items-center gap-1">
                      {s.keys.map((k, i) => (
                        <kbd
                          key={i}
                          className="rounded border border-border bg-muted px-2 py-0.5 font-mono text-[11px] font-bold text-foreground"
                        >
                          {k}
                        </kbd>
                      ))}
                    </span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
