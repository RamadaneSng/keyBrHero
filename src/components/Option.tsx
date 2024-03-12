"use client";

// import { useTimer } from "@/hook/useTimer";
import { useUserInput } from "@/hook/useUserInput";
import { useThemeStore } from "@/store/ThemeStore";
import { useState } from "react";
import { BsFillKeyboardFill } from "react-icons/bs";
import { MdTimer } from "react-icons/md";

const Option = () => {
  const [chosenTime, setChosenTime] = useState(30);
  // const { counter, startCounter } = useTimer(chosenTime);
  const { activeTest } = useUserInput();

  // handleTimer();

  // countdown();
  // startCounter();

  // console.log(counter);
  const counter = 0;
  const theme = useThemeStore((s) => s.theme);

  console.log(theme);

  return (
    <div>
      {" "}
      <div className="flex items-center justify-center gap-2">
        <div
          className={`flex gap-1 rounded-lg px-4 justify-center items-center bg-[${theme.main}]`}
          // style={{ background: theme.tertiary }}
        >
          <span>
            <MdTimer size="1.2rem" />
          </span>
          <span
            className="option"
            onClick={() => setChosenTime(15)}
          >
            15s
          </span>
          <span
            className="option"
            onClick={() => setChosenTime(30)}
          >
            30s
          </span>
          <span
            className="option"
            onClick={() => setChosenTime(60)}
          >
            60s
          </span>
          <div
            className="w-1 h-6 bg-blueDolphin-main block rounded-sm mx-2"
            aria-hidden="true"
          ></div>
          <span>
            <BsFillKeyboardFill size="1.2rem" />
          </span>
          <span className="option text-blueDolphin-secondary">
            Azerty
          </span>
          <span className="option text-blueDolphin-primary hover:text-[#82eaff]">
            Qwerty
          </span>
        </div>
      </div>
      <div className="flex justify-end">
        <span className="bg-blueDolphin-tertiary py-2 px-3 rounded-lg  text-lg lg:text-xl">
          {counter < 10 ? `0${counter}` : counter}:
          {chosenTime}
        </span>
      </div>
    </div>
  );
};

export default Option;
