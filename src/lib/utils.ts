import { faker } from "@faker-js/faker";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const createText = () => {
  return faker.word.words(27);
};

export const allowedCharacter = (char: string) => {
  const charRegex = /^[a-zA-Z\s]$/;

  if (char === "Backspace" || char === "-") {
    return true;
  }
  return charRegex.test(char);
};
