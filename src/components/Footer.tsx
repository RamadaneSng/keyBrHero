import Link from "next/link";
import { FaTelegram } from "react-icons/fa";
import { FaCodeFork } from "react-icons/fa6";
import { IoLogoWhatsapp } from "react-icons/io";
import { SiDiscord } from "react-icons/si";
import { VscGithubInverted } from "react-icons/vsc";

const Footer = () => {
  return (
    <div className="absolute bottom-8 min-w-full">
      <div className="flex justify-between text-primary">
        <div className="flex gap-8">
          <Link
            href="https://github.com/RamadaneSng"
            target="_blank"
            className="flex items-center gap-1 cursor-pointer hover:text-hover"
          >
            <VscGithubInverted />
            Github
          </Link>
          <Link
            href="https://wa.me/0152627333"
            target="_blank"
            className="flex items-center gap-1 cursor-pointer hover:text-hover"
          >
            <IoLogoWhatsapp />
            Whatsapp
          </Link>
          <Link
            href="https://t.me/unknxwn22_1"
            target="_blank"
            className="flex items-center gap-1 cursor-pointer hover:text-hover"
          >
            <FaTelegram />
            Telegram
          </Link>
          <Link
            href="https://discordapp.com/users/699651497155231785" target="_blank"
            className="flex items-center gap-1 cursor-pointer hover:text-hover"
          >
            <SiDiscord />
            Discord
          </Link>
        </div>

        <div>
          <Link
            href="https://github.com/RamadaneSng/keyBrHero"
            target="_blank"
            className="flex items-center gap-1 cursor-pointer hover:text-hover"
          >
            <FaCodeFork />
            Code source ⭐
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
