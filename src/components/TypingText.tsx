"use client";

import { useClient } from "@/hook/useClient";
import { useUserInput } from "@/hook/useUserInput";
import { cn } from "@/lib/utils";
import { MdOutlineRestartAlt } from "react-icons/md";
import { PiCursorFill } from "react-icons/pi";

interface LettersType {
  index: number;
  letter: string;
}

const TypingText = () => {
  const {
    words,
    activeTest,
    typingData,
    keytyped,
    updateText,
    letterIndex,
    handleActiveTest,
  } = useUserInput();

  const letters: LettersType[] = [];

  for (let i = 0; i < words.length; i++) {
    letters.push({ index: i, letter: words[i] });
  }

  const isClient = useClient();

  // if (!isClient) {
  //   return (
  //     <div className="absolute top-1/2 left-1/2">
  //       <Icons.spinner className="text-white h-full w-9" />
  //     </div>
  //   );
  // }
  let i = 0;
  const check = (el: number) => {
    if (
      // letterIndex === el &&
      // keytyped?.key === letters[el].letter
      // isTyped[el]?.bool === el
      isTyped[el]?.bool === true
    ) {
      return true;
    } else if (
      !isTyped[el]?.bool &&
      isTyped[el]?.index === i
    ) {
      return false;
    }
  };

  // console.log(isTyped);

  return (
    <div>
      <div
        className="
      text-xl
      lg:text-2xl
      text-justify
      list-none
      text-blueDolphin-primary
      relative
     mt-20
      "
      >
        {!activeTest && (
          <div className="flex items-center justify-center gap-2  cursor-pointer absolute top-1/2 translate-y-[-50%] z-10 left-1/2 translate-x-[-50%]">
            <span>
              <PiCursorFill size="1.2rem" />
            </span>

            <p
              className="text-lg"
              onClick={handleActiveTest}
            >
              Cliquez ou appuyez sur Entrée pour activer
            </p>
          </div>
        )}
        {isClient &&
          letters.map((el, index) => {
            return (
              <span
                key={index}
                // style={{
                //   color:
                //     isTyped[letterIndex]?.index ===
                //       el.index && isTyped[letterIndex]?.bool
                //       ? "#ffffff"
                //       : ,
                // }}
                // style={{
                //   color: check(el.index) && "#ffffff"
                // }}
                className={cn(
                  "opacity-80 text-blueDolphin-primary",
                  !activeTest && "blur-md",
                  typingData[el.index]?.isTyped &&
                    "text-white",
                  typingData[el.index]?.isTyped === false &&
                    "text-red-500"
                )}
              >
                {el.letter.toLowerCase()}
              </span>
              // <Letter
              //   letter={el}
              //   key={index}
              //   letterIndex={letterIndex}
              //   typed={check(el.index)}
              // />
            );
          })}
      </div>
      <div
        className="flex justify-center mt-11"
        onClick={() => updateText()}
      >
        <div className="cursor-pointer hover:bg-blueDolphin-tertiary p-3 rounded-full hover:rotate-180 duration-100 ease-out delay-200">
          <MdOutlineRestartAlt size="1.7rem" />
        </div>
      </div>
    </div>
  );
};

export default TypingText;
