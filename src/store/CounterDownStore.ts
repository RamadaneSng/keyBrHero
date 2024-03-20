import { create } from "zustand";

export const useCountdownStore = create<{
  time: number;
  counter: number;
  setCount: (nb: number) => void;
  setTime: (time: number) => void;
}>((set) => ({
  counter: 20,
  time: 20,
  setCount: (nb: number) =>
    set({
      counter: nb,
    }),
  setTime: (time: number) =>
    set({
      time: time,
    }),
}));
