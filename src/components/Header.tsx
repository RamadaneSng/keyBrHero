"use client";

import { useThemeStore } from "@/store/ThemeStore";
import { useState } from "react";
import { BsFillKeyboardFill } from "react-icons/bs";
import { FaInfo } from "react-icons/fa";
import { MdColorLens } from "react-icons/md";
import { Icons } from "./Icons";
import Theme from "./Theme";

const Header = () => {
  const [showTheme, setShowTheme] = useState(false);

  const setIsOpen = useThemeStore((s) => s.setIsOpen);
  const isOpen = useThemeStore((s) => s.isOpen);

  return (
    <div className=" flex items-center justify-between py-8">
      <div className="flex items-center gap-6">
        <div className="flex items-center gap-2">
          <Icons.logo className="h-12 w-12 text-secondary" />
          <span className="text-2xl font-bold lg:text-3xl hover:underline cursor-pointer text-hover">
            KeyBrHero.
          </span>
        </div>
        <span className="cursor-pointer">
          <BsFillKeyboardFill
            size="2rem"
            className="text-primary hover:text-hover"
          />
        </span>
      </div>
      <div className="flex items-center gap-5 ">
        <div
          className="flex items-center gap-1 cursor-pointer text-xl text-primary hover:text-hover"
          onClick={() => setIsOpen(true)}
        >
          <span>
            <MdColorLens />
          </span>
          <p>{8008}</p>
        </div>
        <span className="cursor-pointer text-primary hover:text-hover">
          <FaInfo size="1.3rem" />
        </span>
      </div>
      {isOpen && <Theme />}
    </div>
  );
};

export default Header;
