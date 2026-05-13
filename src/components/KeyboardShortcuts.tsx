"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Command } from "lucide-react";

const SHORTCUTS = [
  { keys: ["T"], label: "Toggle theme" },
  { keys: ["G", "H"], label: "Go to Home" },
  { keys: ["G", "A"], label: "Go to About" },
  { keys: ["G", "W"], label: "Go to Work" },
  { keys: ["G", "S"], label: "Go to Tools" },
  { keys: ["G", "C"], label: "Go to Contact" },
  { keys: ["?"], label: "Show shortcuts" },
  { keys: ["Esc"], label: "Close overlay" },
];

export default function KeyboardShortcuts() {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [pendingG, setPendingG] = useState(false);

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
        setPendingG(false);
        return;
      }
      if (k === "?" || (e.shiftKey && k === "/")) {
        e.preventDefault();
        setOpen((v) => !v);
        return;
      }

      const lower = k.toLowerCase();

      if (pendingG) {
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
        }
        setPendingG(false);
        return;
      }

      if (lower === "g") {
        setPendingG(true);
        setTimeout(() => setPendingG(false), 1200);
        return;
      }
      if (lower === "t") {
        e.preventDefault();
        const isLight = document.documentElement.classList.toggle("light");
        localStorage.setItem("theme", isLight ? "light" : "dark");
        return;
      }
    };

    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [navigator, pendingG]);

  return (
    <>
      {/* Hint pill bottom-right */}
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

      {pendingG && (
        <div className="fixed bottom-4 left-1/2 z-50 -translate-x-1/2 rounded-full border border-border bg-card/90 px-3 py-1.5 text-[11px] text-foreground backdrop-blur">
          <kbd className="font-mono">G</kbd> — then H · A · W · S · C
        </div>
      )}

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            onClick={() => setOpen(false)}
          >
            <div className="absolute inset-0 bg-background/70 backdrop-blur-xl" />
            <motion.div
              initial={{ y: 20, opacity: 0, scale: 0.96 }}
              animate={{ y: 0, opacity: 1, scale: 1 }}
              exit={{ y: 20, opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-md rounded-2xl border border-border bg-card/90 p-6 backdrop-blur-2xl shadow-[0_30px_80px_-20px_var(--glow)]"
            >
              <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
                Keyboard Shortcuts
              </p>
              <h3 className="mt-2 text-lg font-semibold tracking-tight">
                Move around faster.
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
                          className="rounded border border-border bg-background/70 px-2 py-0.5 font-mono text-[11px] text-foreground"
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
