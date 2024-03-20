import { allowedCharacter, createText } from "@/lib/utils";
import { useTestStore } from "@/store/TestStore";
import { useCallback, useEffect } from "react";

export const useUserInput = () => {
  const {
    setIsActiveTest,
    words,
    setWords,
    typingData,
    setTypingData,
    letterIndex,
    setLetterIndex,
    keyTyped,
    setKeyTyped,
  } = useTestStore();

  const resetTest = useCallback(() => {
    setWords(createText());
    setIsActiveTest(false);
    setTypingData({});
  }, [setWords, setIsActiveTest, setTypingData]);

  const handleActiveTest = useCallback(() => {
    setTypingData({});
    setLetterIndex(0);
    setIsActiveTest(true);
  }, [setTypingData, setLetterIndex, setIsActiveTest]);

  useEffect(() => {
    if (keyTyped?.key === "Enter") {
      handleActiveTest();
    }
  }, [keyTyped?.key, handleActiveTest]);

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
  }, [
    words,
    typingData,
    letterIndex,
    setLetterIndex,
    setTypingData,
    setKeyTyped,
  ]);

  return {
    words,
    typingData,
    keyTyped,
    letterIndex,
    resetTest,
    handleActiveTest,
  };
};
