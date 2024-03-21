"use client";

import { themes } from "@/config";
import { useClient } from "@/hook/useClient";
import { useThemeStore } from "@/store/ThemeStore";
import { useHover } from "@uidotdev/usehooks";
import { useTheme } from "next-themes";
import { BsFillKeyboardFill } from "react-icons/bs";
import { FaInfo } from "react-icons/fa";
import { MdColorLens } from "react-icons/md";
import { Icons } from "./Icons";
import Theme from "./Theme";

const Header = () => {
  const setIsOpen = useThemeStore((s) => s.setIsOpen);
  const isOpen = useThemeStore((s) => s.isOpen);
  const [ref, hovering] = useHover();
  const [themeRef, themeHovering] = useHover();
  const { theme } = useTheme();

  const isClient = useClient();

  const getCurrenTheme = () => {
    if (isClient) {
      const currentTheme = themes.find(
        (el) => el.label === theme
      );
      return currentTheme?.name;
    }
  };

  return (
    <div className=" flex items-center justify-between py-8">
      <div className="flex items-center gap-6">
        <div className="flex items-center gap-2">
          <Icons.logo className="h-12 w-12 text-secondary" />
          <span className="text-2xl font-bold lg:text-3xl hover:underline cursor-pointer text-hover">
            KeyBrHero.
          </span>
        </div>
        <span className="cursor-pointer relative" ref={ref}>
          <BsFillKeyboardFill
            size="2rem"
            className="text-primary hover:text-hover"
          />
          {hovering && (
            <span className="absolute inline-block text-white bg-black border-white border w-max p-2 text-xs duration-1000 transition-all">
              Commencer le test
            </span>
          )}
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
          {
            <p
              className="text-[1rem] relative"
              ref={themeRef}
            >
              {getCurrenTheme()}
              {themeHovering && (
                <span className="absolute inline-block text-white bg-black border-white border w-max p-2 text-xs duration-1000 transition-all bottom-[-30px] left-1/2">
                  Choisir thème
                </span>
              )}
            </p>
          }
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
