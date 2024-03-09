import { ScrollArea } from "@/components/ui/scroll-area";
import { FaSearch } from "react-icons/fa";

const Theme = () => {
  return (
    <div className="absolute w-[600px] h-10 top-1/2  bg-white  left-1/2 translate-x-[-50%]">
      <div className="flex items-center">
        <span>
          <FaSearch />
        </span>
        <input
          type="text"
          name=""
          id=""
          placeholder="test"
          className="h-4"
        />
      </div>
      <ScrollArea className="h-[200px] w-full rounded-md border p-4">
        jhh
      </ScrollArea>
    </div>
  );
};

export default Theme;
