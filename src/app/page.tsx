import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Keyboard from "@/components/Keyboard";
import Option from "@/components/Option";
import TypingText from "@/components/TypingText";

export default function Home() {
  return (
    <main className="max-w-screen-lg relative mx-auto m-h-[100vh] min-h-[100vh]">
      <Header />
      <Option />
      <TypingText />
      <Keyboard />
      <Footer />
    </main>
  );
}
