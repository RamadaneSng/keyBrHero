"use client";

import { createText } from "@/lib/utils";
import { useWordStore } from "@/store/WordStore";
import { MdOutlineRestartAlt } from "react-icons/md";

const Restart = () => {
  const setName = useWordStore((s) => s.setWord);
  return (
    <div
      className="flex justify-center mt-11"
      onClick={() => setName(createText())}
    >
      <div className="cursor-pointer hover:bg-blueDolphin-tertiary p-3 rounded-full hover:rotate-180 duration-100 ease-out delay-200">
        <MdOutlineRestartAlt size="1.7rem" />
      </div>
    </div>
  );
};

export default Restart;
