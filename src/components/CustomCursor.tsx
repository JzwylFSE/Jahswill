"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function CustomCursor() {
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const sx = useSpring(x, { stiffness: 500, damping: 40, mass: 0.4 });
  const sy = useSpring(y, { stiffness: 500, damping: 40, mass: 0.4 });

  const [hovered, setHovered] = useState(false);
  const [enabled, setEnabled] = useState(false);
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const fine = window.matchMedia("(pointer: fine)").matches;
    if (!fine) return;

    setEnabled(true);

    const root = document.documentElement;

    const syncTheme = () => {
      setIsDark(root.classList.contains("dark"));
    };

    syncTheme();

    const observer = new MutationObserver(() => {
      syncTheme();
    });

    observer.observe(root, { attributes: true, attributeFilter: ["class"] });

    document.documentElement.classList.add("cursor-none-root");

    const move = (e: MouseEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
      const t = e.target as HTMLElement | null;
      setHovered(!!t?.closest('a, button, [role="button"], [data-cursor="hover"]'));
    };

    window.addEventListener("mousemove", move);

    return () => {
      observer.disconnect();
      window.removeEventListener("mousemove", move);
      document.documentElement.classList.remove("cursor-none-root");
    };
  }, [x, y]);

  if (!enabled) return null;

  const baseBg = isDark ? "rgba(17, 24, 39, 0.28)" : "rgba(37, 99, 235, 0.18)";
  const hoverBg = isDark ? "rgba(37, 99, 235, 0.55)" : "rgba(59, 130, 246, 0.45)";

  return (
    <motion.div
      aria-hidden
      className="pointer-events-none fixed left-0 top-0 z-[9999] -translate-x-1/2 -translate-y-1/2 rounded-full border bg-blue-900/10 dark:border-blue-700/60 dark:bg-blue-900/10"
      style={{ x: sx, y: sy }}
      animate={{
        width: hovered ? 44 : 18,
        height: hovered ? 44 : 18,
        backgroundColor: hovered ? hoverBg : baseBg,
      }}
      transition={{ type: "spring", stiffness: 300, damping: 22 }}
    />
  );
}
