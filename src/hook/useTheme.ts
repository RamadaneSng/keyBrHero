// import { useEffect, useState } from "react";

// export const useTheme = () => {
//   const [theme, setTheme] = useState(() => {
//     if (typeof window !== "undefined") {
//       return localStorage.getItem("theme") || "default";
//     }
//     return "";
//   });

//   const changeTheme = (selectedTheme: string) => {
//     setTheme(selectedTheme);
//     localStorage.setItem("theme", selectedTheme);

//     document
//       .querySelector("html")
//       ?.setAttribute("data-theme", selectedTheme);
//   };

//   useEffect(() => {
//     document
//       .querySelector("html")
//       ?.setAttribute("data-theme", theme);
//   }, [theme]);

//   // Retournez à la fois la fonction de changement de thème et le thème actuel
//   return changeTheme;
// };
