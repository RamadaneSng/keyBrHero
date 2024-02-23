import typingText from "@/config/typinTexts";
import { useEffect, useState } from "react";

export const useUserInput = () => {
  const [currentTextIndex, setCurrentTextIndex] =
    useState<number>();
  const [keytyped, setKeyTyped] = useState<KeyboardEvent>();
  const [activeTest, setActiveTest] = useState<
    true | false
  >(false);
  const letters = [];
  // const [letters, setLetters] = useState();

  const updateIndex = () => {
    const index = Math.floor(
      Math.random() * typingText.length
    );
    console.log(index);

    setCurrentTextIndex(index);

    setActiveTest(false);
  };

  const sentence = typingText.filter(
    (el) => el.id === currentTextIndex
  );
  for (let i = 0; i < sentence[0]?.text.length; i++) {
    letters.push(sentence[0].text[i]);
  }

  const handleActiveTest = () => {
    setActiveTest(true);
  };

  useEffect(() => {
    updateIndex();

    const handleKeyDown = (e: KeyboardEvent) => {
      setKeyTyped(e);
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return {
    letters,
    updateIndex,
    keytyped,
    activeTest,
    handleActiveTest,
  };
};
