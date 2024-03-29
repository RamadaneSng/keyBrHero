"use client";

import { useClient } from "@/hook/useClient";
import { useUserInput } from "@/hook/useUserInput";
import { cn } from "@/lib/utils";
import { useTestStore } from "@/store/TestStore";
import { useEffect } from "react";
import { MdOutlineRestartAlt } from "react-icons/md";
import { PiCursorFill } from "react-icons/pi";

interface LettersType {
  index: number;
  letter: string;
}

const TypingText = () => {
  const {
    words,
    typingData,
    letterIndex,
    resetTest,
    keyTyped,
    handleActiveTest,
  } = useUserInput();

  const letters: LettersType[] = [];

  for (let i = 0; i < words.length; i++) {
    letters.push({ index: i, letter: words[i] });
  }

  const isActiveTest = useTestStore((s) => s.isActiveTest);

  const isClient = useClient();

  // if (!isClient) {
  //   return (
  //     <div className="absolute top-1/2 left-1/2">
  //       <Icons.spinner className="text-white h-full w-9" />
  //     </div>
  //   );
  // }
  // let i = 0;

  const check = (el: number) => {
    if (typingData[el]?.isTyped === true) {
      return "correct";
    } else if (
      typingData[el]?.isTyped === false &&
      typingData[el].isSpace === true
    ) {
      return "Enter incorrect";
    } else if (typingData[el]?.isTyped === false) {
      return "incorrect";
    }
  };


  return (
    <div>
      <div
        className="
      text-xl
      lg:text-2xl
      list-none
      break-words
     break-all
      text-primary
      relative
     mt-20
      "
      >
        {!isActiveTest && (
          <div className="flex items-center justify-center gap-2  cursor-pointer absolute top-1/2 translate-y-[-50%] z-10 left-1/2 translate-x-[-50%] text-hover">
            <span>
              <PiCursorFill size="1.2rem" />
            </span>

            <p
              className="text-lg "
              onClick={handleActiveTest}
            >
              Cliquez ou appuyez sur Entrée pour activer
            </p>
          </div>
        )}
        {isClient &&
          letters.map((el, index) => {
            return (
              <div
                key={index}
                className="inline relative"
                onFocus={() => console.log("ok")}
              >
                <span
                  aria-hidden
                  className={cn(
                    "inline-block",
                    letterIndex === el.index &&
                      "absolute w-[2px] h-7 bg-red-100 animate-[cursor-bip_1.2s_infinite] bottom-0",
                    !isActiveTest && "hidden"
                  )}
                ></span>
                <span
                  className={cn(
                    "opacity-80 z-0",
                    !isActiveTest && "blur-md",
                    check(el.index) === "correct" &&
                      "text-hover",
                    check(el.index) === "incorrect" &&
                      "text-error",
                    check(el.index) === "Enter incorrect" &&
                      "bg-error w-[13px] h-4 inline-flex items-center"
                  )}
                >
                  {el.letter.toLowerCase()}
                </span>
              </div>
            );
          })}
      </div>
      {/* to do active test with enter  */}
      <div
        className="flex justify-center mt-11"
        onClick={() => resetTest()}
      >
        <div className="cursor-pointer hover:bg-tertiary hover:text-hover text-primary p-3 rounded-full hover:rotate-180 duration-100 ease-out delay-200">
          <MdOutlineRestartAlt size="1.7rem" />
        </div>
      </div>
    </div>
  );
};

export default TypingText;
