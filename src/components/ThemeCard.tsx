"use client";

import { themes } from "@/config";
import { useTheme } from "next-themes";
// import { useTheme } from "@/hook/useTheme";
// import { changeTheme } from "@/lib/utils";
// import { useThemeStore } from "@/store/ThemeStore";

const ThemeCard = ({
  theme,
}: {
  theme: (typeof themes)[number];
}) => {
  // const setTheme = useThemeStore((s) => s.setTheme);
  // const changeTheme = useTheme();

  const { setTheme } = useTheme();

  return (
    <li
      className="list-none flex justify-between m-2 cursor-pointer"
      onClick={() => setTheme(theme.label)}
    >
      <p className="text-[16px] text-primary">
        {theme.name}
      </p>
      <div
        key={theme.colors.main}
        className="flex gap-1 rounded-full items-center px-1 h-5"
        style={{ background: theme.colors.main }}
      >
        <span
          className="block h-3 w-3 rounded-full"
          style={{ background: theme.colors.secondary }}
        ></span>
        <span
          className="block h-3 w-3 rounded-full"
          style={{ background: theme.colors.primary }}
        ></span>
        <span
          className="block h-3 w-3 rounded-full"
          style={{ background: theme.colors.hover }}
        ></span>
      </div>
    </li>
  );
};

export default ThemeCard;
