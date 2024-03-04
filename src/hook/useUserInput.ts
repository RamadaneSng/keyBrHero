import { createText } from "@/lib/utils";
import { useEffect, useState } from "react";

export const useUserInput = () => {
  const [keytyped, setKeyTyped] = useState<KeyboardEvent>();
  const [activeTest, setActiveTest] = useState<
    true | false
  >(false);
  const [typingData, setTypingData] = useState<{
    [key: number]: {
      isTyped: boolean;
      isSpace: boolean;
      letter: string;
    };
  }>({});

  const [letterIndex, setLetterIndex] = useState<number>(0);

  const [words, setWords] = useState<string>(createText());

  const updateText = () => {
    setWords(createText());
    setActiveTest(false);
  };

  const handleActiveTest = () => {
    setActiveTest(true);
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      setKeyTyped(e);

      if (letterIndex < words.length) {
        const updatedTypingData = {
          ...typingData,
          [letterIndex]: {
            isTyped: e.key === words[letterIndex],
            isSpace: words[letterIndex] === " ",
            letter: e.key,
          },
        };

        setTypingData(updatedTypingData);

        setLetterIndex(letterIndex + 1);
      } else {
        console.log("Test end !");
      }
    };
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [words, typingData, letterIndex]);

  return {
    words,
    typingData,
    keytyped,
    activeTest,
    letterIndex,
    updateText,
    handleActiveTest,
  };
};
