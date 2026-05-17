"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import {
  Moon,
  Sun,
  X,
  Eye,
  EyeOff,
  Keyboard,
  ChevronRight,
  ChevronDown,
  LayoutGrid,
} from "lucide-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { useTheme } from "next-themes";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const shortcuts = [
  { keys: ["Q"], label: "Quick Access" },
  { keys: ["T"], label: "Toggle Theme" },
  { keys: ["F"], label: "Toggle Focus" },
  { keys: ["?"], label: "All Shortcuts" },
];

export default function Navbar() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();
  const [quickAccessOpen, setQuickAccessOpen] = useState(false);
  const [isFocusMode, setIsFocusMode] = useState(false);
  const pathname = usePathname?.() ?? "/";

  // Handle Hydration
  useEffect(() => setMounted(true), []);

  // Keyboard Event Listeners
  useEffect(() => {
    if (!quickAccessOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setQuickAccessOpen(false);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [quickAccessOpen]);

  // Focus Mode logic (Adds class to body)
  useEffect(() => {
    if (isFocusMode) {
      document.body.classList.add("focus-mode");
    } else {
      document.body.classList.remove("focus-mode");
    }
  }, [isFocusMode]);

  // Listen for global keyboard shortcut events from `KeyboardShortcuts` component
  useEffect(() => {
    const onOpenQuick = () => setQuickAccessOpen(true);
    const onToggleFocus = () => setIsFocusMode((v) => !v);

    window.addEventListener("openQuickAccess", onOpenQuick as EventListener);
    window.addEventListener("toggleFocus", onToggleFocus as EventListener);

    return () => {
      window.removeEventListener(
        "openQuickAccess",
        onOpenQuick as EventListener,
      );
      window.removeEventListener("toggleFocus", onToggleFocus as EventListener);
    };
  }, []);

  const toggleTheme = () => setTheme(theme === "dark" ? "light" : "dark");
  const toggleFocus = () => setIsFocusMode((prev) => !prev);
  const resolvedTheme = theme === "light" ? "light" : "dark";

  // Helpers for active link styling
  const isActive = (path: string) => pathname === path;

  // "Work" pill is active on Home ("/") AND on all "/work/*" pages
  const isWorkActive = () => pathname === "/" || pathname.startsWith("/work");

  // Active state styling logic
  const activePillClass =
    "bg-[#0284c7]/10 text-[#0284c7] dark:bg-[#74d4ff]/15 dark:text-[#74d4ff] font-extrabold";

  // Active link: color + original bold font style
  const activeLinkClass = "text-[#0284c7] dark:text-[#74d4ff] font-extrabold";

  // Inactive class includes hover effects for standard clickable links
  const inactiveClass =
    "text-foreground/70 hover:bg-muted hover:text-foreground font-bold";

  return (
    <>
      <motion.header
        initial={{ opacity: 0, y: -16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="fixed inset-x-0 top-3 z-40 mx-auto flex w-[min(96%,1200px)] items-center justify-between gap-2 rounded-full border border-border bg-card/80 p-2 backdrop-blur-xl shadow-[0_10px_40px_-20px_var(--glow)] sm:top-4 sm:px-4 sm:py-3"
      >
        {/* === LEFT ZONE === */}
        <div className="flex items-center gap-3 md:gap-0 lg:gap-4">
          {/* Logo (Acts as Home) */}
          <Link
            href="/"
            className="flex shrink-0 items-center gap-1.5 px-2 text-lg font-black tracking-tight"
          >
            <div className="flex size-8 items-center justify-center rounded-full bg-[#0284c7] text-sm font-bold text-white dark:bg-[#74d4ff] dark:text-background">
              JS.
            </div>
            <span className="hidden sm:block">
              jah'swill
              <span className="text-[#0284c7] dark:text-[#74d4ff]">dev</span>
            </span>
          </Link>

          {/* MOBILE & TABLET Navigation (Visible up to lg breakpoint) */}
          <nav className="flex items-center gap-1 lg:hidden">
            <Link
              href="/projects"
              className={`rounded-full px-3 py-1.5 text-[13px] sm:text-sm transition-colors ${
                isActive("/projects")
                  ? "text-foreground font-extrabold" // Mobile projects stays dark when active
                  : inactiveClass
              }`}
            >
              Projects
            </Link>

            {/* Mobile/Tablet Work Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button
                  type="button"
                  className={`flex items-center gap-1 rounded-full px-3 py-1.5 text-[13px] sm:text-sm transition-colors ${activePillClass}`}
                >
                  Work{" "}
                  <ChevronDown
                    className="size-3.5 opacity-60"
                    strokeWidth={3}
                  />
                </button>
              </DropdownMenuTrigger>
              <button
                onClick={() => setQuickAccessOpen(true)}
                className="hidden items-center gap-2 rounded-full border border-border bg-background/60 p-2 text-sm font-bold text-foreground/70 transition-colors hover:bg-muted hover:text-foreground lg:flex lg:px-4 lg:py-2"
              >
                <LayoutGrid className="size-4 text-[#0284c7] dark:text-[#74d4ff]" />
                <span className={`hidden lg:inline-block ${inactiveClass}`}>
                  Quick Access Q
                </span>
              </button>
              <DropdownMenuContent>
                <div className="flex flex-col gap-1">
                  <DropdownMenuItem asChild className="p-0">
                    <Link
                      href="/work/skills-and-tools"
                      className={`w-full rounded-full px-4 py-2.5 text-sm transition-colors ${
                        isActive("/work/skills-and-tools")
                          ? activeLinkClass
                          : "font-bold text-foreground/80 hover:bg-muted hover:text-foreground"
                      }`}
                    >
                      Skills & Tools
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild className="p-0">
                    <Link
                      href="/work/contact"
                      className={`w-full rounded-full px-4 py-2.5 text-sm transition-colors ${
                        isActive("/work/contact")
                          ? activeLinkClass
                          : "font-bold text-foreground/80 hover:bg-muted hover:text-foreground"
                      }`}
                    >
                      Contact
                    </Link>
                  </DropdownMenuItem>
                </div>
              </DropdownMenuContent>
            </DropdownMenu>
          </nav>
        </div>

        {/* === CENTER ZONE: DESKTOP Navigation (Visible lg and above) === */}
        <nav className="hidden flex-1 items-center justify-center gap-1 lg:flex">
          <Link
            href="/projects"
            className={`shrink-0 rounded-full px-4 py-2 text-sm transition-colors ${
              isActive("/projects") ? activeLinkClass : inactiveClass
            }`}
          >
            Projects
          </Link>

          {/* Desktop Work Hierarchy (Inline, No Dropdown) */}
          <div className="ml-1 flex shrink-0 items-center rounded-full bg-muted/40 p-1">
            {/* Unclickable "Work" Breadcrumb Label - Permanently active, no hover effect */}
            <div
              className={`flex cursor-default items-center gap-1 rounded-full px-4 py-1.5 text-sm transition-colors ${activePillClass}`}
            >
              Work{" "}
              <ChevronRight className="size-3.5 opacity-60" strokeWidth={3} />
            </div>

            <Link
              href="/work/skills-and-tools"
              className={`rounded-full px-4 py-1.5 text-sm transition-colors ${
                pathname === "/work/skills-and-tools"
                  ? activeLinkClass
                  : inactiveClass
              }`}
            >
              Skills & Tools
            </Link>

            <span className="px-1 font-bold text-muted-foreground/40">·</span>

            <Link
              href="/work/contact"
              className={`rounded-full px-4 py-1.5 text-sm transition-colors ${
                isActive("/work/contact") ? activeLinkClass : inactiveClass
              }`}
            >
              Contact
            </Link>
          </div>
        </nav>

        {/* === RIGHT ZONE === */}
        <div className="flex shrink-0 items-center gap-2 sm:gap-3">
          {/* Socials (Visible on Tablet and Desktop: sm and above) */}
          <Link
            href="https://linkedin.com/in/jahswill-simeon/"
            target="_blank"
            className="hidden rounded-full p-2 text-muted-foreground transition-colors hover:bg-muted hover:text-[#0284c7] dark:hover:text-[#74d4ff] sm:block"
          >
            <FontAwesomeIcon icon={faLinkedin} className="size-4" />
          </Link>
          <Link
            href="https://github.com/JzwylFSE"
            target="_blank"
            className="hidden rounded-full p-2 text-muted-foreground transition-colors hover:bg-muted hover:text-foreground sm:block"
          >
            <FontAwesomeIcon icon={faGithub} className="size-4" />
          </Link>

          {/* Desktop Quick Access Button (Visible lg and above) */}
          <button
            onClick={() => setQuickAccessOpen(true)}
            className="hidden items-center gap-2 rounded-full border border-border bg-background/60 p-2 text-sm font-bold text-foreground/70 transition-colors hover:bg-muted hover:text-foreground lg:flex lg:px-4 lg:py-2"
          >
            <LayoutGrid className="size-4 text-foreground/70" />
            <span className={`hidden lg:inline-block ${inactiveClass}`}>
              Quick Access
            </span>
          </button>

          {/* Mobile & Tablet Quick Access Button (Icon Only, hidden on lg) */}
          <button
            onClick={() => setQuickAccessOpen(true)}
            className="flex size-10 items-center justify-center rounded-full border border-border bg-background/60 text-foreground lg:hidden"
          >
            <LayoutGrid className="size-[18px] text-[#0284c7] dark:text-[#74d4ff]" />
          </button>
        </div>
      </motion.header>

      {/* --- QUICK ACCESS DRAWER (Slides from Right) --- */}
      <AnimatePresence>
        {quickAccessOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setQuickAccessOpen(false)}
              className="fixed inset-0 z-[60] bg-background/40 backdrop-blur-sm"
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed inset-y-0 right-0 z-[70] flex w-full max-w-sm flex-col overflow-y-auto border-l border-border bg-card/95 p-6 shadow-2xl backdrop-blur-xl md:w-96 md:max-w-none"
            >
              <div className="flex items-center justify-between pb-8">
                <h2 className="text-xl font-extrabold tracking-tight">
                  Action Center
                </h2>
                <button
                  onClick={() => setQuickAccessOpen(false)}
                  className="rounded-full border border-border p-2 hover:bg-muted"
                >
                  <X className="size-4" />
                </button>
              </div>

              <div className="flex flex-col gap-8">
                {/* Toggles */}
                <div className="grid grid-cols-2 gap-4">
                  <button
                    onClick={toggleTheme}
                    className="flex flex-col items-start justify-center gap-3 rounded-2xl border border-transparent bg-background/50 p-5 transition-colors hover:border-[#0284c7] dark:hover:border-[#74d4ff]"
                  >
                    {mounted && resolvedTheme === "dark" ? (
                      <Moon className="size-5 text-[#74d4ff]" />
                    ) : (
                      <Sun className="size-5 text-[#0284c7]" />
                    )}
                    <span className="text-sm font-bold">
                      Dark Mode:{" "}
                      {mounted && resolvedTheme === "dark" ? "On" : "Off"}
                    </span>
                  </button>
                  <button
                    onClick={toggleFocus}
                    className="flex flex-col items-start justify-center gap-3 rounded-2xl border border-transparent bg-background/50 p-5 transition-colors hover:border-[#0284c7] dark:hover:border-[#74d4ff]"
                  >
                    {isFocusMode ? (
                      <EyeOff className="size-5 text-[#0284c7] dark:text-[#74d4ff]" />
                    ) : (
                      <Eye className="size-5 text-muted-foreground" />
                    )}
                    <span className="text-sm font-bold">
                      Focus: {isFocusMode ? "On" : "Off"}
                    </span>
                  </button>
                </div>

                {/* Recent Activities */}
                <div>
                  <h3 className="mb-4 text-xl font-extrabold tracking-tight">
                    Recent Activities
                  </h3>
                  <div className="rounded-2xl bg-background/50 p-5">
                    <div className="flex items-center justify-between">
                      <p className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
                        Reaction
                      </p>
                      <p className="text-xs text-muted-foreground">
                        a few seconds ago
                      </p>
                    </div>
                    <p className="mt-3 text-sm font-medium text-foreground">
                      the{" "}
                      <span className="font-extrabold text-[#0284c7] dark:text-[#74d4ff]">
                        Projects
                      </span>{" "}
                      docs got new 👏
                    </p>
                  </div>
                </div>

                {/* Tip Shortcuts (Hidden entirely on Mobile using 'hidden md:block') */}
                <div className="hidden md:block">
                  <div className="mb-4 flex items-center gap-2">
                    <Keyboard className="size-5 text-muted-foreground" />
                    <h3 className="text-xl font-extrabold tracking-tight">
                      TIP: Shortcuts
                    </h3>
                  </div>
                  <p className="mb-4 text-sm text-muted-foreground">
                    Navigate the site with ease using keyboard shortcuts.
                  </p>
                  <div className="space-y-1">
                    {shortcuts.map((s, i) => (
                      <div
                        key={i}
                        className="flex items-center justify-between border-b border-border/50 py-3 last:border-0"
                      >
                        <span className="text-sm font-bold text-foreground/80">
                          {s.label}
                        </span>
                        <span className="flex gap-1">
                          {s.keys.map((k) => (
                            <kbd
                              key={k}
                              className="flex min-w-[24px] items-center justify-center rounded border border-border bg-background px-1.5 py-0.5 font-mono text-xs font-black text-foreground shadow-sm"
                            >
                              {k}
                            </kbd>
                          ))}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
