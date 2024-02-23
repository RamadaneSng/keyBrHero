import { VscGithubInverted } from "react-icons/vsc";

const Footer = () => {
  return (
    <div className="absolute bottom-8">
      <div>
        <div className="flex items-center gap-1 cursor-pointer">
          <VscGithubInverted />
          Github
        </div>
      </div>
    </div>
  );
};

export default Footer;
