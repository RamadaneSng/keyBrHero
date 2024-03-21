import { create } from "zustand";

interface ThemeStoreType {
  isOpen: boolean;
  setIsOpen: (val: boolean) => void;
}

export const useThemeStore = create<ThemeStoreType>(
  (set) => ({
    isOpen: false,

    setIsOpen: (val: boolean) =>
      set({
        isOpen: val,
      }),
  })
);
