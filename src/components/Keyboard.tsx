import { qwerty } from "@/config";
import { cn } from "@/lib/utils";

const Keyboard = () => {
  return (
    <div className="flex justify-center">
      <div className="border-[12px] rounded-lg">
        <ul className="flex justify-between">
          {qwerty[0].firstRow.map((key) => (
            <li
              key={key.firstKey}
              className={cn(
                "w-[38px] h-9 bg-white flex flex-col m-[1px] mt-0 justify-center items-center text-xs relative",
                key.firstKey === "Backspace" &&
                  "w-[78px] mr-0",
                key.firstKey === "~" && "ml-0"
              )}
            >
              <span className="">{key.firstKey}</span>
              {key.seconKey && (
                <span className="">{key.seconKey}</span>
              )}
            </li>
          ))}
        </ul>
        <ul className="flex justify-between">
          {qwerty[0].secondRow.map((key) => (
            <li
              key={key.firstKey}
              className={cn(
                "w-[38px] h-9 bg-white flex flex-col m-[1px] justify-center items-center text-xs relative",
                key.firstKey === "Tab" && "w-[58px] ml-0",
                key.firstKey === "|" && "w-[58px] mr-0"
              )}
            >
              <span className="">{key.firstKey}</span>
              {key.seconKey && (
                <span className="">{key.seconKey}</span>
              )}
            </li>
          ))}
        </ul>
        <ul className="flex justify-between">
          {qwerty[0].thirdRow.map((key) => (
            <li
              key={key.firstKey}
              className={cn(
                "w-[38px] h-9 bg-white flex flex-col m-[1px] justify-center items-center text-xs relative",
                key.firstKey === "Caps Lock" &&
                  "w-[68px] ml-0",
                key.firstKey === "Enter" && "w-[88px] mr-0"
              )}
            >
              <span className="">{key.firstKey}</span>
              {key.seconKey && (
                <span className="">{key.seconKey}</span>
              )}
            </li>
          ))}
        </ul>
        <ul className="flex justify-between">
          {qwerty[0].fourthRow.map((key) => (
            <li
              key={key.firstKey}
              className={cn(
                "w-[38px] h-9 bg-white flex flex-col m-[1px] justify-center items-center text-xs relative",
                key.firstKey === "Shift" && "w-[88px] ml-0",
                key.label === "shift_2" &&
                  "w-[108px] ml-[1px] mr-0"
              )}
            >
              <span className="">{key.firstKey}</span>
              {key.seconKey && (
                <span className="">{key.seconKey}</span>
              )}
            </li>
          ))}
        </ul>
        <ul className="flex">
          {qwerty[0].fifthRow.map((key) => (
            <li
              key={key.firstKey}
              className={cn(
                "w-[58px] h-9 bg-white flex flex-col m-[1px] mb-0 justify-center items-center text-xs relative",
                key.firstKey === "" && "w-[358px]",
                key.label === "crtl_1" && "ml-0",
                key.label === "crtl_2" && "mr-0"
              )}
            >
              <span className="">{key.firstKey}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Keyboard;
