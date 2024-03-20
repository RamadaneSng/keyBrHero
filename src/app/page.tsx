import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Keyboard from "@/components/Keyboard";
import Option from "@/components/Option";
import TypingText from "@/components/TypingText";
import { qwerty } from "@/config";

export default function Home() {
  // const theme = useThemeStore((s) => s.theme);

  return (
    <main
      className=" max-w-screen-lg mx-auto m-h-full "
      // style={{ background: theme.main }}
    >
      <Header />
      <Option />
      <TypingText />

      <Keyboard />
      <Footer />
    </main>
  );
}
