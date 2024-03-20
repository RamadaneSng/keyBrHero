"use client";

import { useUserInput } from "@/hook/useUserInput";
import { cn } from "@/lib/utils";
import { useTestStore } from "@/store/TestStore";
import { useEffect, useState } from "react";
import { BsFillKeyboardFill } from "react-icons/bs";
import { MdTimer } from "react-icons/md";
import { useCountdown } from "usehooks-ts";

const Option = () => {
  const [chosenTime, setChosenTime] = useState(30);
  const [keyboard, setKeyboard] = useState("azerty");

  const { resetTest } = useUserInput();
  const isActiveTest = useTestStore((s) => s.isActiveTest);

  // console.log(isActiveTest);

  const handleChosenTime = (time: number) => {
    setChosenTime(time);
    resetTest();
    localStorage.setItem("chosenTime", time.toString());
  };

  const handleChosenKeyboard = (keyboard: string) => {
    setKeyboard(keyboard);
    localStorage.setItem("keyboard", keyboard);
  };

  const [
    count,
    { startCountdown, stopCountdown, resetCountdown },
  ] = useCountdown({
    countStart: chosenTime,
    intervalMs: 1000,
  });

  useEffect(() => {
    const time = localStorage.getItem("chosenTime");
    const keyboard = localStorage.getItem("keyboard");

    if (keyboard) setKeyboard(keyboard);

    if (time) {
      setChosenTime(parseInt(time));
    }
    if (isActiveTest) {
      startCountdown();
    } else {
      resetCountdown();
    }
  }, [isActiveTest, startCountdown, resetCountdown]);

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
            onClick={() => handleChosenTime(15)}
          >
            15s
          </span>
          <span
            className={cn(
              "option text-primary transition-colors duration-300",
              chosenTime === 30 && "text-secondary"
            )}
            onClick={() => handleChosenTime(30)}
          >
            30s
          </span>
          <span
            className={cn(
              "option text-primary transition-colors duration-300",
              chosenTime === 60 && "text-secondary"
            )}
            onClick={() => handleChosenTime(60)}
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
            onClick={() => handleChosenKeyboard("azerty")}
          >
            Azerty
          </span>
          <span
            className={cn(
              "option text-primary transition-colors duration-300",
              keyboard === "qwerty" && "text-secondary"
            )}
            onClick={() => handleChosenKeyboard("qwerty")}
          >
            Qwerty
          </span>
        </div>
      </div>
      <div
        className="flex justify-end"
        onClick={() => resetTest()}
      >
        <span
          className="bg-tertiary py-2 px-3 rounded-lg  text-lg lg:text-xl text-primary"
          suppressHydrationWarning
        >
          00:{count < 10 ? `0${count}` : count}
        </span>
      </div>
    </div>
  );
};

export default Option;
