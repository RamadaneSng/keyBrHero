"use client";

import { useClient } from "@/hook/useClient";
import { useUserInput } from "@/hook/useUserInput";
import { cn } from "@/lib/utils";
import { useMemo } from "react";
import { MdOutlineRestartAlt } from "react-icons/md";
import { PiCursorFill } from "react-icons/pi";
import { Icons } from "./Icons";

const TypingText = () => {
  const {
    letters,
    activeTest,
    isTyped,
    updateText,
    handleActiveTest,
  } = useUserInput();

  const characters = useMemo(() => {
    return letters.split("");
  }, [letters]);

  const isClient = useClient();

  if (!isClient) {
    return (
      <span className="flex justify-center">
        <Icons.spinner className="text-white h-9 w-9" />
      </span>
    );
  }

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
          characters.map((el, index) => (
            <span
            
              key={index}
              className={cn(
                " opacity-80",
                !activeTest && "blur-md"
              )}
            >
              {el.toLowerCase()}
            </span>
          ))}
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
