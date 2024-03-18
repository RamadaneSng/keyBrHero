"use client";

import { cn } from "@/lib/utils";
// import { useTimer } from "@/hook/useTimer";
import { useState } from "react";
import { BsFillKeyboardFill } from "react-icons/bs";
import { MdTimer } from "react-icons/md";

const Option = () => {
  const [chosenTime, setChosenTime] = useState(30);
  const [keyboard, setKeyboard] = useState("azerty");

  return (
    <div>
      <div className="flex items-center justify-center gap-2">
        <div className="flex gap-1 rounded-lg px-4 justify-center items-center bg-tertiary">
          <span>
            <MdTimer
              size="1.2rem"
              className="text-secondary"
            />
          </span>
          <span
            className={cn(
              "option text-primary transition-colors duration-300",
              chosenTime === 15 && "text-secondary"
            )}
            onClick={() => setChosenTime(15)}
          >
            15s
          </span>
          <span
            className={cn(
              "option text-primary transition-colors duration-300",
              chosenTime === 30 && "text-secondary"
            )}
            onClick={() => setChosenTime(30)}
          >
            30s
          </span>
          <span
            className={cn(
              "option text-primary transition-colors duration-300",
              chosenTime === 60 && "text-secondary"
            )}
            onClick={() => setChosenTime(60)}
          >
            60s
          </span>
          <div
            className="w-1 h-6 bg-main block rounded-sm mx-2"
            aria-hidden="true"
          ></div>
          <span>
            <BsFillKeyboardFill
              size="1.2rem"
              className="text-secondary"
            />
          </span>
          <span
            className={cn(
              "option text-primary transition-colors duration-300",
              keyboard === "azerty" && "text-secondary"
            )}
            onClick={() => setKeyboard("azerty")}
          >
            Azerty
          </span>
          <span
            className={cn(
              "option text-primary transition-colors duration-300",
              keyboard === "qwerty" && "text-secondary"
            )}
            onClick={() => setKeyboard("qwerty")}
          >
            Qwerty
          </span>
        </div>
      </div>
      <div className="flex justify-end">
        <span className="bg-tertiary py-2 px-3 rounded-lg  text-lg lg:text-xl text-primary">
          {/* {counter < 10 ? `0${counter}` : counter}: */}
          {chosenTime}
        </span>
      </div>
    </div>
  );
};

export default Option;
