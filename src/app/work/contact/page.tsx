"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
};

export default function Contact() {
  const [activeSection, setActiveSection] = useState("overview");

  // Simple scroll spy to highlight TOC links
  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        "overview",
        "professional-contact",
        "direct-communication",
        "social-media-presence",
        "primary-platforms",
      ];
      const scrollPosition = window.scrollY + 200; // Offset for top padding

      for (const section of sections) {
        const element = document.getElementById(section);
        if (
          element &&
          element.offsetTop <= scrollPosition &&
          element.offsetTop + element.offsetHeight > scrollPosition
        ) {
          setActiveSection(section);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 100, // Offset for fixed headers if any
        behavior: "smooth",
      });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <main className="relative overflow-x-hidden">
      {/* --- TOP WRAPPER (Header and Intro text with Graph Paper Bg) --- */}
      <div className="relative pt-32 pb-16">
        {/* Background Grid Pattern (Confined strictly to the top section) */}
        <div
          className="pointer-events-none absolute inset-0 -z-10 opacity-[0.04] dark:opacity-[0.06]"
          style={{
            backgroundImage:
              "linear-gradient(var(--foreground) 1px, transparent 1px), linear-gradient(90deg, var(--foreground) 1px, transparent 1px)",
            backgroundSize: "40px 40px",
            maskImage:
              "linear-gradient(to bottom, transparent 0%, black 15%, black 60%, transparent 100%)",
            WebkitMaskImage:
              "linear-gradient(to bottom, transparent 0%, black 15%, black 60%, transparent 100%)",
          }}
        />

        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <motion.div {...fadeUp} className="mb-2">
            <p className="text-xs font-extrabold uppercase tracking-wider text-[#0284c7] dark:text-[#74d4ff]">
              Work
            </p>
          </motion.div>

          <motion.h1
            {...fadeUp}
            transition={{ ...fadeUp.transition, delay: 0.05 }}
            className="mt-4 max-w-3xl text-balance text-[clamp(2.5rem,5vw,4.5rem)] font-extrabold leading-[1.05] tracking-tight text-foreground"
          >
            Contact
          </motion.h1>

          <motion.p
            {...fadeUp}
            transition={{ ...fadeUp.transition, delay: 0.1 }}
            className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground sm:text-xl"
          >
            Get in touch with me anytime, through social media, e-mail, or
            phone number.
          </motion.p>
        </div>
      </div>

      {/* --- BOTTOM WRAPPER (Main Content & Sticky TOC) --- */}
      <div className="relative z-10 mx-auto max-w-6xl px-6 pb-32 lg:px-8">
        <div className="flex flex-col-reverse gap-16 lg:flex-row lg:items-start lg:gap-20">
          {/* LEFT SIDE: Main Content */}
          <div className="flex-1 pb-20">
            {/* Overview Section */}
            <motion.div
              {...fadeUp}
              id="overview"
              className="scroll-mt-32 pb-16"
            >
              <h2 className="mb-6 text-3xl font-extrabold text-foreground">
                Overview
              </h2>
              <p className="text-base leading-relaxed text-muted-foreground">
                Just a friendly reminder that the information provided here is
                for{" "}
                <strong className="font-extrabold text-foreground">
                  business purposes only
                </strong>
                . If you have any questions, feel free to chat with me directly
                on my social media.
                <br />
                <br />
                I appreciate your understanding in using this responsibly.
              </p>
            </motion.div>

            {/* Professional Contact Section */}
            <motion.div
              {...fadeUp}
              id="professional-contact"
              className="scroll-mt-32 pb-16"
            >
              <h2 className="mb-8 text-3xl font-extrabold text-foreground">
                Professional Contact
              </h2>

              <div id="direct-communication" className="scroll-mt-32">
                <h3 className="mb-6 text-xl font-extrabold text-foreground">
                  Direct Communication
                </h3>

                {/* Table-like Layout */}
                <div className="mb-6 w-full border-y border-border/40">
                  <div className="grid grid-cols-3 border-b border-border/40 py-4 text-sm">
                    <div className="col-span-1 font-extrabold text-foreground">
                      Method
                    </div>
                    <div className="col-span-2 font-extrabold text-foreground">
                      Details
                    </div>
                  </div>
                  <div className="grid grid-cols-3 border-b border-border/40 py-4 text-sm">
                    <div className="col-span-1 font-bold text-muted-foreground">
                      Location
                    </div>
                    <div className="col-span-2 text-foreground">
                      Port Harcourt, Rivers State, Nigeria
                    </div>
                  </div>
                  <div className="grid grid-cols-3 border-b border-border/40 py-4 text-sm">
                    <div className="col-span-1 font-bold text-muted-foreground">
                      Time Zone
                    </div>
                    <div className="col-span-2 text-foreground">
                      UTC/GMT +1
                    </div>
                  </div>
                  <div className="grid grid-cols-3 py-4 text-sm">
                    <div className="col-span-1 font-bold text-muted-foreground">
                      Email
                    </div>
                    <div className="col-span-2 text-[#0284c7] hover:underline dark:text-[#74d4ff]">
                      <a href="mailto:cjsimeon090@gmail.com">
                        cjsimeon090@gmail.com
                      </a>
                    </div>
                  </div>
                </div>

                <p className="text-sm text-muted-foreground">
                  For additional contact methods, such as phone number,
                  please reach out via email first.
                </p>
              </div>
            </motion.div>

            {/* Social Media Presence Section */}
            <motion.div
              {...fadeUp}
              id="social-media-presence"
              className="scroll-mt-32"
            >
              <h2 className="mb-8 text-3xl font-extrabold text-foreground">
                Social Media Presence
              </h2>

              <div id="primary-platforms" className="scroll-mt-32">
                <h3 className="mb-6 text-xl font-extrabold text-foreground">
                  Primary Platforms
                </h3>

                <p className="mb-6 text-base leading-relaxed text-muted-foreground">
                  You can find me on most platforms as{" "}
                  <strong className="font-extrabold text-foreground">
                    @jahswill_dev
                  </strong>
                  . Below are my most active social channels:
                </p>

                {/* Table-like Layout */}
                <div className="mb-6 w-full border-y border-border/40">
                  <div className="grid grid-cols-3 border-b border-border/40 py-4 text-sm">
                    <div className="col-span-1 font-extrabold text-foreground">
                      Platform
                    </div>
                    <div className="col-span-2 font-extrabold text-foreground">
                      Profile & Link
                    </div>
                  </div>

                  <div className="grid grid-cols-3 border-b border-border/40 py-4 text-sm">
                    <div className="col-span-1 font-bold text-muted-foreground">
                      LinkedIn
                    </div>
                    <div className="col-span-2 text-[#0284c7] hover:underline dark:text-[#74d4ff]">
                      <a
                        href="https://www.linkedin.com/in/jahswill-simeon/"
                        target="_blank"
                        rel="noreferrer"
                      >
                        Jah'swill Simeon
                      </a>
                    </div>
                  </div>

                  <div className="grid grid-cols-3 border-b border-border/40 py-4 text-sm">
                    <div className="col-span-1 font-bold text-muted-foreground">
                      X (Twitter)
                    </div>
                    <div className="col-span-2 text-[#0284c7] hover:underline dark:text-[#74d4ff]">
                      <a
                        href="https://x.com/jahswill_dev"
                        target="_blank"
                        rel="noreferrer"
                      >
                        @jahswill_dev
                      </a>
                    </div>
                  </div>

                  <div className="grid grid-cols-3 border-b border-border/40 py-4 text-sm">
                    <div className="col-span-1 font-bold text-muted-foreground">
                      Instagram
                    </div>
                    <div className="col-span-2 text-[#0284c7] hover:underline dark:text-[#74d4ff]">
                      <a
                        href="https://instagram.com/iam_jzwyl"
                        target="_blank"
                        rel="noreferrer"
                      >
                        @iam_jzwyl
                      </a>
                    </div>
                  </div>

                  <div className="grid grid-cols-3 border-b border-border/40 py-4 text-sm">
                    <div className="col-span-1 font-bold text-muted-foreground">
                      TikTok
                    </div>
                    <div className="col-span-2 text-[#0284c7] hover:underline dark:text-[#74d4ff]">
                      <a
                        href="https://tiktok.com/@jzwylcancode"
                        target="_blank"
                        rel="noreferrer"
                      >
                        @jzwylcancode
                      </a>
                    </div>
                  </div>

                  <div className="grid grid-cols-3 py-4 text-sm">
                    <div className="col-span-1 font-bold text-muted-foreground">
                      GitHub
                    </div>
                    <div className="col-span-2 text-[#0284c7] hover:underline dark:text-[#74d4ff]">
                      <a
                        href="https://github.com/JzwylFSE"
                        target="_blank"
                        rel="noreferrer"
                      >
                        @JzwylFSE
                      </a>
                    </div>
                  </div>
                </div>

                <p className="text-sm text-muted-foreground">
                  Feel free to follow or message me on any of these platforms
                  for a quicker response.
                </p>
              </div>
            </motion.div>
          </div>

          {/* RIGHT SIDE: Sticky Table of Contents */}
          <div className="w-full lg:sticky lg:top-32 lg:w-64 shrink-0">
            <div className="rounded-2xl border border-border/50 bg-card/30 p-6 backdrop-blur-sm">
              <div className="mb-4 flex items-center justify-between">
                <h4 className="text-sm font-extrabold text-foreground">
                  Table of Contents
                </h4>
                <button
                  onClick={scrollToTop}
                  className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground transition-colors hover:text-foreground"
                >
                  scroll to top
                </button>
              </div>

              <ul className="flex flex-col gap-3 text-sm font-medium">
                <li>
                  <button
                    onClick={() => scrollToSection("overview")}
                    className={`transition-colors ${
                      activeSection === "overview"
                        ? "text-[#0284c7] dark:text-[#74d4ff]"
                        : "text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    Overview
                  </button>
                </li>
                <li>
                  <button
                    onClick={() =>
                      scrollToSection("professional-contact")
                    }
                    className={`transition-colors ${
                      activeSection === "professional-contact"
                        ? "text-[#0284c7] dark:text-[#74d4ff]"
                        : "text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    Professional Contact
                  </button>
                </li>
                <li className="pl-4">
                  <button
                    onClick={() => scrollToSection("direct-communication")}
                    className={`transition-colors ${
                      activeSection === "direct-communication"
                        ? "text-[#0284c7] dark:text-[#74d4ff]"
                        : "text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    Direct Communication
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection("social-media-presence")}
                    className={`transition-colors ${
                      activeSection === "social-media-presence"
                        ? "text-[#0284c7] dark:text-[#74d4ff]"
                        : "text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    Social Media Presence
                  </button>
                </li>
                <li className="pl-4">
                  <button
                    onClick={() => scrollToSection("primary-platforms")}
                    className={`transition-colors ${
                      activeSection === "primary-platforms"
                        ? "text-[#0284c7] dark:text-[#74d4ff]"
                        : "text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    Primary Platforms
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
