"use client";

import { azerty, qwerty } from "@/config";
import { useClient } from "@/hook/useClient";
import { useUserInput } from "@/hook/useUserInput";
import { cn } from "@/lib/utils";
import { useKeyboardStore } from "@/store/KeyboardStore";
import { useEffect, useState } from "react";

interface KeyType {
  firstKey: string;
  secondKey?: string;
  seconKey?: string;
  thirdKey?: string;
  label?: string;
}
const Keyboard = () => {
  const isClient = useClient();
  const chosenKeyboard = useKeyboardStore(
    (s) => s.chosenKeyboard
  );

  const [activeKey, setActiveKey] = useState(false);

  const { keyTyped } = useUserInput();

  const [keyBoardData, setKeyboardData] = useState<
    (typeof azerty)[number]
  >(azerty[0]);

  useEffect(() => {
    if (chosenKeyboard === "qwerty") {
      setKeyboardData(qwerty[0]);
    } else if (chosenKeyboard === "azerty") {
      setKeyboardData(azerty[0]);
    }
    const onKeyDown = (e: KeyboardEvent) => {
      setActiveKey(true);
    };
    const onKeyUp = (e: KeyboardEvent) => {
      setActiveKey(false);
    };

    window.addEventListener("keypress", (e) =>
      onKeyDown(e)
    );
    window.addEventListener("keyup", (e) => onKeyUp(e));

    window.removeEventListener("keypress", onKeyDown);
    window.removeEventListener("keyup", onKeyUp);
  }, [chosenKeyboard, activeKey]);

  if (isClient) {
    return (
      <div className="flex justify-center">
        <div className="inline-flex justify-center mt-16 bg-tertiary rounded-xl">
          <div className="border-[12px] rounded-xl border-primary">
            {/* TO DO: add dots on F anf J  */}
            <ul className="flex justify-between">
              {keyBoardData.firstRow.map(
                (key: KeyType, index) => (
                  <li
                    key={index}
                    className={cn(
                      "w-[38px] h-9 flex flex-col m-[1.5px] mt-0 justify-center pl-[10px] text-xs relative bg-main text-primary font-[650px]",
                      key.firstKey === "Backspace" &&
                        "w-[78px] mr-0",
                      key.firstKey === "~" && "ml-0",
                      key.firstKey === "²" && "ml-0"
                    )}
                  >
                    <span
                      className={cn(
                        keyTyped?.key ===
                          key.firstKey.toLowerCase() &&
                          "block text-blue-400"
                      )}
                    >
                      {key.firstKey}
                    </span>
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
                )
              )}
            </ul>
            <ul className="flex justify-between">
              {keyBoardData.secondRow.map((key, index) => (
                <li
                  key={index}
                  className={cn(
                    "w-[38px] h-9 bg-white flex flex-col m-[1.5px] justify-center pl-[10px] text-xs relative bg-main text-primary font-[650px]",
                    key.firstKey === "Tab" &&
                      "w-[58px] ml-0",
                    key.firstKey === "|" && "w-[58px] mr-0",
                    key.firstKey === "Enter" &&
                      "w-[58px] mr-0",
                    key.firstKey.toLowerCase() ===
                      keyTyped?.key &&
                      activeKey &&
                      "bg-hover text-main"
                  )}
                >
                  <span>{key.firstKey}</span>
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
              {keyBoardData.thirdRow.map(
                (key: KeyType, index) => (
                  <li
                    key={index}
                    className={cn(
                      "w-[38px] h-9 bg-white flex flex-col m-[1.5px] justify-center pl-[10px] text-[10px] relative bg-main text-primary font-[650px]",
                      key.firstKey === "Caps Lock" &&
                        "w-[68px] ml-0",
                      key.firstKey === "Enter" &&
                        "w-[88px] mr-0",
                      key.firstKey === "" &&
                        "mr-0 w-[48px] h-[39px] mt-[-2px]",
                      key.firstKey.toLowerCase() ===
                        keyTyped?.key &&
                        activeKey &&
                        "bg-hover text-main"
                    )}
                  >
                    <span className="relative">
                      {key.firstKey}{" "}
                      {key.firstKey === "F" && (
                        <strong className="absolute block bg-secondary w-[6px] h-[6px] rounded-full ml-[9px]"></strong>
                      )}
                      {key.firstKey === "J" && (
                        <strong className="absolute block bg-secondary w-[6px] h-[6px] rounded-full ml-[9px]"></strong>
                      )}
                    </span>
                    <div className="flex gap-3">
                      {key.secondKey && (
                        <span className="">
                          {key.secondKey}
                        </span>
                      )}
                    </div>
                  </li>
                )
              )}
            </ul>
            <ul className="flex justify-between">
              {keyBoardData.fourthRow.map(
                (key: KeyType, index) => (
                  <li
                    key={index}
                    className={cn(
                      "w-[38px] h-9 bg-white flex flex-col m-[1.5px] justify-center pl-[10px] text-xs relative bg-main text-primary font-[650px]",
                      key.firstKey === "Shift" &&
                        "w-[88px] ml-0",
                      key.label === "shift_1" &&
                        "w-[48px] ml-0",
                      key.label === "shift_2" &&
                        "w-[108px] ml-[1px] mr-0",
                      key.firstKey.toLowerCase() ===
                        keyTyped?.key &&
                        activeKey &&
                        "bg-hover text-main"
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
                )
              )}
            </ul>
            <ul className="flex">
              {keyBoardData.fifthRow.map((key, index) => (
                <li
                  key={index}
                  className={cn(
                    "w-[58px] h-9 bg-white flex flex-col m-[1.5px] mb-0 justify-center pl-[10px] text-xs relative bg-main text-primary font-[650px]",
                    key.firstKey === "" && "w-[368px]",
                    key.label === "crtl_1" && "ml-0",
                    key.label === "crtl_2" && "",
                    key.firstKey.toLowerCase() ===
                      keyTyped?.key &&
                      activeKey &&
                      "bg-hover text-main",
                    key.firstKey === "" &&
                      keyTyped?.key === " " &&
                      activeKey &&
                      "bg-hover text-main"
                  )}
                >
                  <span className="">{key.firstKey}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    );
  }
};

export default Keyboard;
