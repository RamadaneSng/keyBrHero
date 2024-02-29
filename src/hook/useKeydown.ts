import { useEffect, useState } from "react";

export const useKeydown = (letters: string[]) => {
  const [keytyped, setKeyTyped] = useState<KeyboardEvent>();

  let i = 0;
  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.key === letters[i]) {
      setKeyTyped(e);
      i++;
      if (i === letters.length) {
        console.log(
          "Toutes les lettres ont été correctement tapées !"
        );
        i = 0;
      }
    } else {
      console.log(`Incorrect: ${e.key} at position ${i}`);
      i++;
    }

    // console.log(letters);
  };

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return {
    keytyped,
  };
};
