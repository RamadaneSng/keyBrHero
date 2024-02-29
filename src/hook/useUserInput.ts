import { createText } from "@/lib/utils";
import { useState } from "react";

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

  const [letters, setLetters] = useState<string>(
    createText()
  );

  const updateText = () => {
    setLetters(createText());
  };

  const handleActiveTest = () => {
    setActiveTest(true);
  };

  let i = 0;
  const handleKeyDown = (e: KeyboardEvent) => {
    //  if (e.key === letters[i]) {
    //    setKeyTyped(e);
    //    i++;
    //    if (i === letters.length) {
    //      console.log(
    //        "Toutes les lettres ont été correctement tapées !"
    //      );
    //      i = 0;
    //    }
    //  } else {
    //    console.log(`Incorrect: ${e.key} at position ${i}`);
    //    i++;
    //  }
    // console.log(letters);
  };

  // useEffect(() => {
  // window.addEventListener("keydown", handleKeyDown);

  // return () => {
  //   window.removeEventListener("keydown", handleKeyDown);
  // };
  // }, []);

  return {
    letters,
    isTyped,
    keytyped,
    activeTest,

    updateText,
    handleActiveTest,
  };
};
