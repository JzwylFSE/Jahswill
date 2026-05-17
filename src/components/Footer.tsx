"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
  return (
    <footer className="relative mt-24 w-full overflow-hidden">
      {/* The Grid / Bg Boxes Pattern
        Gradually fades in at the top and fades out at the bottom for a smooth transition.
      */}
      <div 
        className="pointer-events-none absolute inset-0 -z-10 opacity-[0.04] dark:opacity-[0.06]"
        style={{
          backgroundImage: "linear-gradient(var(--foreground) 1px, transparent 1px), linear-gradient(90deg, var(--foreground) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
          // Smooth fade in at the top (0% to 15%) and fade out at the bottom (85% to 100%)
          maskImage: "linear-gradient(to bottom, transparent 0%, black 15%, black 85%, transparent 100%)",
          WebkitMaskImage: "linear-gradient(to bottom, transparent 0%, black 15%, black 85%, transparent 100%)"
        }}
      />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6 }}
        className="mx-auto max-w-7xl px-6 pb-12 pt-16 lg:px-8"
      >
        <div className="grid gap-16 lg:grid-cols-12 lg:gap-8">
          
          {/* Left Column: About Me (Spans 5 columns) */}
          <div className="order-2 lg:order-none lg:col-span-5">
            <h3 className="mb-6 text-sm font-extrabold text-gray-500 dark:text-gray-400">
              About Me
            </h3>
            <p className="text-base leading-relaxed text-muted-foreground">
              I'm Jah'swill Simeon, a <strong className="font-extrabold text-foreground">fullstack web developer</strong> who loves creating intuitive frontends, robust backends, and the seamless APIs that connect them.
            </p>
            
            {/* Social Icons */}
            <div className="mt-8 flex items-center gap-5">
              <a
                href="https://github.com/JzwylFSE"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
                className="text-foreground/80 transition-colors hover:text-[#0284c7] dark:hover:text-[#74d4ff]"
              >
                <FontAwesomeIcon icon={faGithub} className="size-6" />
              </a>
              <a
                href="https://www.linkedin.com/in/jahswill-simeon/"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="text-foreground/80 transition-colors hover:text-[#0284c7] dark:hover:text-[#74d4ff]"
              >
                <FontAwesomeIcon icon={faLinkedin} className="size-6" />
              </a>
            </div>
          </div>

          {/* Right Column: Work Links (Spans 3 columns, starts at column 8 to push it to the right) */}
          <div className="order-1 lg:order-none lg:col-span-3 lg:col-start-8">
            <h3 className="mb-6 text-sm font-extrabold text-gray-500 dark:text-gray-400">
              Work
            </h3>
            <ul className="flex flex-col gap-4 text-base font-extrabold text-muted-foreground">
              <li>
                <Link
                  href="/work"
                  className="transition-colors hover:text-[#0284c7] dark:hover:text-[#74d4ff]"
                >
                  Projects
                </Link>
              </li>
              <li>
                <Link
                  href="/work/skills-and-tools"
                  className="transition-colors hover:text-[#0284c7] dark:hover:text-[#74d4ff]"
                >
                  Skills & Tools
                </Link>
              </li>
              <li>
                <Link
                  href="/work/contact"
                  className="transition-colors hover:text-[#0284c7] dark:hover:text-[#74d4ff]"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Copyright Row */}
        <div className="mt-24 flex items-center justify-between text-sm font-medium text-muted-foreground">
          <p>© {new Date().getFullYear()}, Jah'swill Simeon</p>
        </div>
      </motion.div>
    </footer>
  );
}
