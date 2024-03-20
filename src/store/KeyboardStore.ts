import { create } from "zustand";

export const useKeyboardStore = create<{
  chosenKeyboard: string;
  setChosenKeyboard: (chosenKeyboard: string) => void;
}>((set) => ({
  chosenKeyboard: "azerty",
  setChosenKeyboard: (chosenKeyboard) =>
    set({
      chosenKeyboard,
    }),
}));
