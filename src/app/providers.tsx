"use client";

import { ThemeProvider } from "next-themes";
import { PropsWithChildren } from "react";

export function Providers({ children }: PropsWithChildren) {
  return (
    <ThemeProvider
      themes={[
        "afterDark",
        "alduin",
        "_8008",
        "arch",
        "aurora",
        "bento",
        "copper",
        "bliss",
        "blueDolphin",
        "blueberryLight",
        "bouquet",
        "cyberspace",
        "dark",
        "terra",
        "cheesecake",
        "frozen",
      ]}
      enableSystem={false}
      defaultTheme="alduin"
    >
      {children}
    </ThemeProvider>
  );
}
