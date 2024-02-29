"use client";

import { useClient } from "@/hook/useClient";
import { cn } from "@/lib/utils";

type KeyboardValue = {
  firstKey: string;
  secondKey?: string;
  thirdKey?: string;
  label?: string;
};
interface KeyboardProps {
  keyBoardData: {
    firstRow: KeyboardValue[];
    secondRow: KeyboardValue[];
    thirdRow: KeyboardValue[];
    fourthRow: KeyboardValue[];
    fifthRow: KeyboardValue[];
  };
}

const Keyboard = ({ keyBoardData }: KeyboardProps) => {
  const isClient = useClient();

  if (isClient) {
    return (
      <div className="flex justify-center mt-16">
        <div className="border-[12px] rounded-xl">
          <ul className="flex justify-between">
            {keyBoardData.firstRow.map((key, index) => (
              <li
                key={index}
                className={cn(
                  "w-[38px] h-9 bg-white flex flex-col m-[1px] mt-0 justify-center pl-[10px] text-xs relative",
                  key.firstKey === "Backspace" &&
                    "w-[78px] mr-0",
                  key.firstKey === "~" && "ml-0",
                  key.firstKey === "²" && "ml-0"
                )}
              >
                <span className="">{key.firstKey}</span>
                <div className="flex gap-3">
                  {key.secondKey && (
                    <span className="">
                      {key.secondKey}
                    </span>
                  )}
                  {key.thirdKey && (
                    <span>{key.thirdKey}</span>
                  )}
                </div>
              </li>
            ))}
          </ul>
          <ul className="flex justify-between">
            {keyBoardData.secondRow.map((key, index) => (
              <li
                key={index}
                className={cn(
                  "w-[38px] h-9 bg-white flex flex-col m-[1px] justify-center pl-[10px] text-xs relative",
                  key.firstKey === "Tab" && "w-[58px] ml-0",
                  key.firstKey === "|" && "w-[58px] mr-0",
                  key.firstKey === "Enter" &&
                    "w-[58px] mr-0"
                )}
              >
                <span className="">{key.firstKey}</span>
                <div className="flex gap-3">
                  {key.secondKey && (
                    <span className="">
                      {key.secondKey}
                    </span>
                  )}
                  {key.thirdKey && (
                    <span>{key.thirdKey}</span>
                  )}
                </div>
              </li>
            ))}
          </ul>
          <ul className="flex justify-between">
            {keyBoardData.thirdRow.map((key, index) => (
              <li
                key={index}
                className={cn(
                  "w-[38px] h-9 bg-white flex flex-col m-[1px] justify-center pl-[10px] text-[10px] relative",
                  key.firstKey === "Caps Lock" &&
                    "w-[68px] ml-0",
                  key.firstKey === "Enter" &&
                    "w-[88px] mr-0",
                  key.firstKey === "" &&
                    "mr-0 w-[48px] h-[39px] mt-[-2px]"
                )}
              >
                <span className="">{key.firstKey}</span>
                <div className="flex gap-3">
                  {key.secondKey && (
                    <span className="">
                      {key.secondKey}
                    </span>
                  )}
                  {key.thirdKey && (
                    <span>{key.thirdKey}</span>
                  )}
                </div>
              </li>
            ))}
          </ul>
          <ul className="flex justify-between">
            {keyBoardData.fourthRow.map((key, index) => (
              <li
                key={key.firstKey}
                className={cn(
                  "w-[38px] h-9 bg-white flex flex-col m-[1px] justify-center pl-[10px] text-xs relative",
                  key.firstKey === "Shift" &&
                    "w-[88px] ml-0",
                  key.label === "shift_1" &&
                    "w-[48px] ml-0",
                  key.label === "shift_2" &&
                    "w-[108px] ml-[1px] mr-0"
                )}
              >
                <span className="">{key.firstKey}</span>
                <div className="flex gap-3">
                  {key.secondKey && (
                    <span className="">
                      {key.secondKey}
                    </span>
                  )}
                  {key.thirdKey && (
                    <span>{key.thirdKey}</span>
                  )}
                </div>
              </li>
            ))}
          </ul>
          <ul className="flex">
            {keyBoardData.fifthRow.map((key) => (
              <li
                key={key.firstKey}
                className={cn(
                  "w-[58px] h-9 bg-white flex flex-col m-[1px] mb-0 justify-center pl-[10px] text-xs relative",
                  key.firstKey === "" && "w-[358px]",
                  key.label === "crtl_1" && "ml-0",
                  key.label === "crtl_2" && "mr-0"
                )}
              >
                <span className="">{key.firstKey}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
};

export default Keyboard;
