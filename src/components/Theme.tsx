import { themes } from "@/config";
import { FaSearch } from "react-icons/fa";
import ThemeCard from "./ThemeCard";

const Theme = () => {
  return (
    <div className="absolute w-[600px] top-1/2  bg-main  left-1/2 translate-x-[-50%] px-3 border-primary shadow-[0_0_0_.2em] shadow-tertiary rounded-[10px]">
      <div className="flex items-center w-full h-full gap-3">
        <span className="h-full flex items-center justify-center">
          <FaSearch size="1rem" className="text-primary" />
        </span>
        <input
          type="text"
          name=""
          id=""
          placeholder="Rechercher..."
          className=" w-full h-full focus:border-none ring-0 border-0 focus:outline-none py-4 bg-main text-hover text-[1rem] font-bold placeholder:text-[1rem] placeholder:text-primary"
        />
      </div>
      <div className="w-full h-48 overflow-y-scroll scroll-smooth scrollbar-thin scrollbar-track-transparent scrollbar-thumb-primary">
        {themes.map((theme) => (
          <ThemeCard key={theme.name} theme={theme} />
        ))}
      </div>
    </div>
  );
};

export default Theme;
