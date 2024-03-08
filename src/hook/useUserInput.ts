import { allowedCharacter, createText } from "@/lib/utils";
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
    setTypingData({});
    setLetterIndex(0);
  };

  // const eraseLetter = () => {
  //   if (keytyped?.key === "Backspace")
  //     setLetterIndex(letterIndex - 1);
  // };
  // eraseLetter();

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      setKeyTyped(e);
      if (allowedCharacter(e.key)) {
        if (
          letterIndex <= words.length &&
          letterIndex >= 0
        ) {
          if (e.key !== "Backspace") {
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
            delete typingData[letterIndex - 1];
            setLetterIndex(letterIndex - 1);
          }
          console.log(letterIndex);
        } else {
          console.log("test end !");
          setLetterIndex(0);
        }
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
    setActiveTest,
    handleActiveTest,
  };
};
