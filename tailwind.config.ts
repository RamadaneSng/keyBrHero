import { Config } from "tailwind-merge";

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        _8008: {
          main: "#333a45",
          primary: "#939eae",
          secondary: "#f44c7f",
          tertiary: "#2e343d",
        },
        afterDark: {
          main: "#1b1d36",
          primary: "#99d6ea",
          secondary: "#fca6d1",
          tertiary: "#17182c",
        },
        alduin: {
          main: "#1c1c1c",
          primary: "#444444",
          secondary: "#dfd7af",
          tertiary: "#242424",
        },
        arch: {
          main: "#0c0d11",
          primary: "#454864",
          secondary: "#7ebab5",
          tertiary: "#171a25",
        },
        aurora: {
          main: "#011926",
          primary: "#245c69",
          secondary: "#00e980",
          tertiary: "#000c13",
        },
        bento: {
          main: "#2d394d",
          primary: "#4a768d",
          secondary: "#ff7a90",
          tertiary: "#263041",
        },
        bliss: {
          main: "#262727",
          primary: "#665957",
          secondary: "#f0d3c9",
          tertiary: "#343231",
        },
        blueDolphin: {
          main: "#003950",
          primary: "#00e4ff",
          secondary: "#ffcefb",
          tertiary: "#014961",
        },
        blueberry: {
          main: "#dae0f5",
          primary: "#92a4be",
          secondary: "#506477",
          tertiary: "#c1c7df",
        },
        bouquet: {
          main: "#173f35",
          primary: "#408e7b",
          secondary: "#eaa09c",
          tertiary: "#1f4e43",
        },
        copper: {
          main: "#442f29",
          primary: "#7ebab5",
          secondary: "#b46a55",
          tertiary: "#50362e",
        },
        cyberspace: {
          main: "#181c18",
          primary: "#9578d3",
          secondary: "#00ce7c",
          tertiary: "#131613",
        },
        dark: {
          main: "#111111",
          primary: "#444444",
          secondary: "#eeeeee",
          tertiary: "#191919",
        },
        terra: {
          main: "#0c100e",
          primary: "#436029",
          secondary: "#89c559",
          tertiary: "#0f1d18",
        },
        cheesecake: {
          main: "#fdf0d5",
          primary: "#d91c81",
          secondary: "#8e2949",
          tertiary: "#f3e2bf",
        },
        frozen: {
          main: "#9bf2ea",
          primary: "#b690fd",
          secondary: "#6d44a6",
          tertiary: "#7fe7dd",
        },
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      textColor: {
        _8008: {
          main: "#333a45",
          primary: "#939eae",
          secondary: "#f44c7f",
        },
        afterDark: {
          main: "#1b1d36",
          primary: "#99d6ea",
          secondary: "#fca6d1",
        },
        alduin: {
          main: "#1c1c1c",
          primary: "#444444",
          secondary: "#dfd7af",
        },
        arch: {
          main: "#0c0d11",
          primary: "#454864",
          secondary: "#7ebab5",
        },
        aurora: {
          main: "#011926",
          primary: "#245c69",
          secondary: "#00e980",
        },
        bento: {
          main: "#2d394d",
          primary: "#4a768d",
          secondary: "#ff7a90",
        },
        bliss: {
          main: "#262727",
          primary: "#665957",
          secondary: "#f0d3c9",
        },
        blueDolphin: {
          main: "#003950",
          primary: "#00e4ff",
          secondary: "#ffcefb",
        },
        blueberry: {
          main: "#dae0f5",
          primary: "#92a4be",
          secondary: "#506477",
        },
        bouquet: {
          main: "#173f35",
          primary: "#408e7b",
          secondary: "#eaa09c",
        },
        copper: {
          main: "#442f29",
          primary: "#7ebab5",
          secondary: "#b46a55",
        },
        cyberspace: {
          main: "#181c18",
          primary: "#9578d3",
          secondary: "#00ce7c",
        },
        dark: {
          main: "#111111",
          primary: "#444444",
          secondary: "#eeeeee",
        },
        terra: {
          main: "#0c100e",
          primary: "#436029",
          secondary: "#89c559",
        },
        cheesecake: {
          main: "#fdf0d5",
          primary: "#d91c81",
          secondary: "#8e2949",
        },
        frozen: {
          main: "#9bf2ea",
          primary: "#b690fd",
          secondary: "#6d44a6",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: {
            height: "var(--radix-accordion-content-height)",
          },
        },
        "accordion-up": {
          from: {
            height: "var(--radix-accordion-content-height)",
          },
          to: { height: "0" },
        },
        "cursor-bip": {
          "0%": { opacity: 0 },

          "100%": { opacity: 1 },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;

export default config;
