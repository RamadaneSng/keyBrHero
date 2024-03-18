import { themes } from "@/config";
import { useOnClickOutside } from "@/hook/useOnclickOutside";
import { useThemeStore } from "@/store/ThemeStore";
import { useRef } from "react";
import { FaSearch } from "react-icons/fa";
import ThemeCard from "./ThemeCard";

const Theme = () => {
  const themeRef = useRef(null);

  const setIsOpen = useThemeStore((s) => s.setIsOpen);

  useOnClickOutside(themeRef, () => setIsOpen(false));
  return (
    <div
      className="w-full h-full fixed top-0 left-0 z-50 overflow-hidden"
      // ref={themeRef}
    >
      <div
        className="absolute w-[550px] top-1/2 bg-main left-1/2 z-50 translate-x-[-50%] translate-y-[-50%] border-primary shadow-[0_0_0_.2em] shadow-tertiary rounded-[10px]"
        ref={themeRef}
      >
        <div className="flex items-center w-full h-full gap-3 px-4">
          <span className="h-full flex items-center justify-center">
            <FaSearch
              size="1.1rem"
              className="text-primary"
            />
          </span>
          <input
            type="text"
            name=""
            id=""
            placeholder="Rechercher..."
            className=" w-full h-full focus:border-none ring-0 border-0 focus:outline-none py-4 bg-main text-hover text-[1rem] font-bold placeholder:text-[1rem] placeholder:text-primary"
          />
        </div>
        <div className="w-full h-[380px] overflow-y-scroll scroll-smooth scrollbar-thin scrollbar-track-transparent scrollbar-thumb-primary">
          {themes.map((currentTheme) => (
            <ThemeCard
              key={currentTheme.name}
              currentTheme={currentTheme}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Theme;
