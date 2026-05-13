"use client";

import { ThemeProvider as NextThemesProvider } from "next-themes";

export { NextThemesProvider };

export function ThemeProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <NextThemesProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
    >
      {children}
    </NextThemesProvider> 
  );
}
