// import { useState } from "react";
// import { useUserInput } from "./useUserInput";

// export const useTimer = (timer: number) => {
//   const [counter, setCounter] = useState(0);
//   let interval: NodeJS.Timeout;

//   // const { activeTest } = useUserInput();

//   const startCounter = () => {
//     interval = setInterval(() => {
//       setCounter(counter + 1);
//     }, 1000);

//     if (counter === timer) {
//       clearInterval(interval);
//     }
//   };

//   // startCounter();

//   const resetCounter = () => {
//     clearTimeout(interval);
//     setCounter(0);
//   };

//   return {
//     counter,
//     startCounter,
//     resetCounter,
//   };
// };
