import { createText } from "@/lib/utils";
import { create } from "zustand";

interface WordStoreType {
  word: string;
  setWord: (newWord: string) => void;
}

export const useWordStore = create<WordStoreType>(
  (set) => ({
    word: createText(),
    setWord: (newWord: string) => set({ word: newWord }),
  })
);
