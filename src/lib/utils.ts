import typingText from "@/config/typinTexts";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { faker } from "@faker-js/faker";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const createText = () => {
  return faker.word.words(27);
};
