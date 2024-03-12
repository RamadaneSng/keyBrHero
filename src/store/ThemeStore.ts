import { create } from "zustand";

type ThemeType = {
  main: string;
  primary: string;
  secondary: string;
  tertiary: string;
  hover: string;
};

interface ThemeStoreType {
  theme: ThemeType;
  setTheme: ({
    main,
    secondary,
    primary,
    tertiary,
    hover,
  }: ThemeType) => void;
}

export const useThemeStore = create<ThemeStoreType>(
  (set) => ({
    theme: {
      main: "",
      primary: "",
      secondary: "",
      tertiary: "",
      hover: "",
    },
    setTheme: ({
      main,
      secondary,
      primary,
      tertiary,
      hover,
    }: ThemeType) =>
      set({
        theme: {
          main,
          primary,
          secondary,
          tertiary,
          hover,
        },
      }),
  })
);
