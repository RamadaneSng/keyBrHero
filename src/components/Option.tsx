import { BsFillKeyboardFill } from "react-icons/bs";
import { MdTimer } from "react-icons/md";

const Option = () => {
  return (
    <div>
      {" "}
      <div className="flex items-center justify-center gap-2">
        <div className="flex gap-1 rounded-lg px-4 justify-center items-center bg-blueDolphin-tertiary">
          <span>
            <MdTimer size="1.2rem" />
          </span>
          <span className="option">15s</span>
          <span className="option">30s</span>
          <span className="option">60s</span>
          <div
            className="w-1 h-6 bg-blueDolphin-main block rounded-sm mx-2"
            aria-hidden="true"
          ></div>
          <span>
            <BsFillKeyboardFill size="1.2rem" />
          </span>
          <span className="option">Azerty</span>
          <span className="option">Qwerty</span>
        </div>
      </div>
      <div className="flex justify-end">
        <span className="bg-blueDolphin-tertiary py-2 px-3 rounded-lg  text-lg lg:text-xl">
          00:30
        </span>
      </div>
    </div>
  );
};

export default Option;
