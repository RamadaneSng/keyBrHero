import { createText } from "@/lib/utils";
import { useEffect, useState } from "react";

export const useUserInput = () => {
  const [currentTextIndex, setCurrentTextIndex] =
    useState<number>();
  const [keytyped, setKeyTyped] = useState<KeyboardEvent>();
  const [activeTest, setActiveTest] = useState<
    true | false
  >(false);
  const [isTyped, setIsTyped] = useState<true | false>(
    false
  );
  const [letterIndex, setLetterIndex] = useState<number>(0);

  const [letters, setLetters] = useState<string>(
    createText()
  );

  const updateText = () => {
    setLetters(createText());
    setActiveTest(false);
  };

  const handleActiveTest = () => {
    setActiveTest(true);
  };

  let i = 0;
  const handleKeyDown = (e: KeyboardEvent) => {
    setKeyTyped(e);
    if (i <= letters.length) {
      if (e.key === letters[i]) {
        console.log(`correct: ${e.key} at position ${i}`);
        setLetterIndex(i);
        setIsTyped(true)
        i++;
      } else {
        console.log(`Incorrect: ${e.key} at position ${i}`);
        i++;
        setIsTyped(false)
        setLetterIndex(i);
      }
      // console.log(letters);
    } else {
      console.log("Test end !");
    }
  };

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [letters]);

  return {
    letters,
    isTyped,
    keytyped,
    activeTest,
    letterIndex,
    updateText,
    handleActiveTest,
  };
};
