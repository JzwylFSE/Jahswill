import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
import Providers from "@/components/providers";

config.autoAddCss = false; // Prevent Font Awesome from injecting CSS automatically (Next.js friendly)
import CustomCursor from "@/components/CustomCursor";
import { ThemeProvider } from "@/components/theme-provider";

export const metadata: Metadata = {
  title: "Jah'swill Simeon — Fullstack Web Developer",
  description:
    "Hi, I'm Jah'swill — a fullstack web developer who genuinely enjoys building end-to-end web apps.",
  openGraph: {
    title: "Jah'swill Simeon — Fullstack Web Developer",
    description: "Frontend, backend, and the bridge between them.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider>
          <Providers>
            <CustomCursor />
            <Navbar />
            <main className="min-h-screen">{children}</main>
            <Footer />
          </Providers>
        </ThemeProvider>
      </body>
    </html>
  );
}
