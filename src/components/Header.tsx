import { BsFillKeyboardFill } from "react-icons/bs";
import { FaInfo } from "react-icons/fa";
import { MdColorLens } from "react-icons/md";
import { Icons } from "./Icons";
import Theme from "./Theme";

const Header = () => {
  return (
    <div className=" flex items-center justify-between py-8">
      <div className="flex items-center gap-6">
        <div className="flex items-center gap-2">
          <Icons.logo className="h-12 w-12" />
          <span className=" text-2xl font-bold lg:text-3xl hover:underline cursor-pointer">
            KeyBrHero.
          </span>
        </div>
        <span className="cursor-pointer">
          <BsFillKeyboardFill size="2rem" />
        </span>
      </div>
      <div className="flex items-center gap-5 ">
        <div className="flex items-center gap-1 cursor-pointer text-xl">
          <span>
            <MdColorLens />
          </span>
          <p>{8008}</p>
        </div>
        <span className="cursor-pointer">
          <FaInfo size="1.3rem" />
        </span>
      </div>
      <Theme />
    </div>
  );
};

export default Header;
