"use client";

import { themes } from "@/config";
import { cn } from "@/lib/utils";
import { useThemeStore } from "@/store/ThemeStore";
import {
  useHover,
  useLocalStorage,
} from "@uidotdev/usehooks";
import { useTheme } from "next-themes";
import { FaCheck } from "react-icons/fa";

const ThemeCard = ({
  currentTheme,
}: {
  currentTheme: (typeof themes)[number];
}) => {
  const [ref, hovering] = useHover();
  const setIsOpen = useThemeStore((s) => s.setIsOpen);

  const [activedTheme = "", setActivedTheme] =
    useLocalStorage("");

  const { theme, setTheme } = useTheme();

  const changeTheme = () => {
    setTheme(currentTheme.label);
    setActivedTheme(theme);
    setIsOpen(false);
  };

  return (
    <li
      className="list-none flex justify-between items-center cursor-pointer hover:bg-hover px-4 py-1 pl-10 hover:text-main"
      ref={ref}
      onClick={() => changeTheme()}
      onMouseEnter={() => setTheme(currentTheme.label)}
      onMouseLeave={() => setTheme(activedTheme)}
      // onMouseLeave={() => setTheme(activedTheme)}
    >
      <div className="relative">
        {activedTheme === currentTheme.label && (
          <span
            className={cn(
              "absolute left-[-22px] top-1/2 translate-y-[-50%] text-primary",
              hovering && "text-main"
            )}
          >
            <FaCheck size="0.8rem" />
          </span>
        )}
        <p
          className={cn(
            "text-[0.75rem] text-primary hover:text-main",
            hovering && "text-main"
          )}
        >
          {currentTheme.name}
        </p>
      </div>
      <div
        key={currentTheme.colors.main}
        className="flex gap-[0.5rem] rounded-[1rem] items-center px-1 h-5"
        style={{ background: currentTheme.colors.main }}
      >
        <span
          className="block h-[0.75rem] w-[0.75rem] rounded-full"
          style={{
            background: currentTheme.colors.secondary,
          }}
        ></span>
        <span
          className="block h-[0.75rem] w-[0.75rem] rounded-full"
          style={{
            background: currentTheme.colors.primary,
          }}
        ></span>
        <span
          className="block h-[0.75rem] w-[0.75rem] rounded-full"
          style={{ background: currentTheme.colors.hover }}
        ></span>
      </div>
    </li>
  );
};

export default ThemeCard;
