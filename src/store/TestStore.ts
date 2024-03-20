import { createText } from "@/lib/utils";
import { create } from "zustand";

interface TestStoreState {
  isActiveTest: boolean;
  words: string;
  letterIndex: number;
  keyTyped: KeyboardEvent | null;
  typingData: {
    [key: number]: {
      isTyped: boolean;
      isSpace: boolean;
      letter: string;
    };
  };

  setIsActiveTest: (isActiveTest: boolean) => void;
  setWords: (words: string) => void;
  setLetterIndex: (num: number) => void;
  setKeyTyped: (keyTyped: KeyboardEvent) => void;
  setTypingData: (typingData: {
    [key: number]: {
      isTyped: boolean;
      isSpace: boolean;
      letter: string;
    };
  }) => void;
}

export const useTestStore = create<TestStoreState>(
  (set) => ({
    isActiveTest: false,
    keyTyped: null,
    letterIndex: 0,
    words: createText(),
    typingData: {},

    setIsActiveTest: (val: boolean) =>
      set({
        isActiveTest: val,
      }),
    setKeyTyped: (keyTyped: KeyboardEvent) =>
      set({ keyTyped }),
    setLetterIndex: (num: number) =>
      set({ letterIndex: num }),
    setWords: (words) => set({ words }),
    setTypingData: (typingData) => set({ typingData }),
  })
);
