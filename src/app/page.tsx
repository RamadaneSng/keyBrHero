import Header from "@/components/Header";
import Keyboard from "@/components/Keyboard";
import { BsFillKeyboardFill } from "react-icons/bs";
import {
  MdOutlineRestartAlt,
  MdTimer,
} from "react-icons/md";
import { PiCursorFill } from "react-icons/pi";

export default function Home() {
  return (
    <main className=" max-w-screen-lg mx-auto">
      <Header />
      <div className="flex items-center justify-center gap-2">
        <div className="flex gap-1 rounded-lg px-1 justify-center items-center bg-blueDolphin-tertiary">
          <span>
            <MdTimer size="1.7rem" />
          </span>
          <span className="time-option">15s</span>
          <span className="time-option">30s</span>
          <span className="time-option">60s</span>
          <div
            className="w-1 h-6 bg-blueDolphin-main block rounded-sm"
            aria-hidden="true"
          ></div>
          <span>
            <BsFillKeyboardFill />
          </span>
          <span>Azerty</span>
          <span>Qwerty</span>
        </div>
      </div>
      <div className="flex justify-end">
        <span className="bg-blueDolphin-tertiary p-3 rounded-lg  text-lg lg:text-xl">
          00:30
        </span>
      </div>
      <div className="flex items-center gap-2">
        <span>
          <PiCursorFill />
        </span>
        <p>Cliquez ici ou commencez à ecire pour activer</p>
      </div>
      {/* TO DO: typing text  */}
      <div className="flex justify-center">
        <div className="cursor-pointer hover:bg-blueDolphin-tertiary p-3 rounded-full hover:rotate-180 duration-100 ease-out delay-200">
          <MdOutlineRestartAlt size="1.7rem" />
        </div>
      </div>
      <Keyboard />
    </main>
  );
}
