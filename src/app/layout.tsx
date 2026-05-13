import type { Metadata } from "next";
import "./globals.css";
import Providers from "@/components/providers";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
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
            <main>{children}</main>
            <Footer />
          </Providers>
        </ThemeProvider>
      </body>
    </html>
  );
}
