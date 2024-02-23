import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Keyboard from "@/components/Keyboard";
import Option from "@/components/Option";
import TypingText from "@/components/TypingText";
import { qwerty } from "@/config";

export default function Home() {
  return (
    <main className=" max-w-screen-lg mx-auto">
      <Header />
      <Option />
      <TypingText />

      <Keyboard keyBoardData={qwerty[0]} />
      <Footer />
    </main>
  );
}
