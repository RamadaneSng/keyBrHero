import { ScrollArea } from "@/components/ui/scroll-area";
import { themes } from "@/config";
import { FaSearch } from "react-icons/fa";
import ThemeCard from "./ThemeCard";

const Theme = () => {
  return (
    <div className="absolute w-[600px] top-1/2  bg-white  left-1/2 translate-x-[-50%] px-3 border-red-700 border rounded-[10px]">
      <div className="flex items-center w-full h-full gap-3">
        <span className="h-full flex items-center justify-center">
          <FaSearch size="1rem" />
        </span>
        <input
          type="text"
          name=""
          id=""
          placeholder="test"
          className=" w-full h-full focus:border-none ring-0 border-0 focus:outline-none py-4"
        />
      </div>
      <ScrollArea className=" w-full border h-48">
        {themes.map((theme) => (
          <ThemeCard key={theme.name} theme={theme} />
        ))}
      </ScrollArea>
    </div>
  );
};

export default Theme;
