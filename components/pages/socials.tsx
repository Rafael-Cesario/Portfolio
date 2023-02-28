import Link from "next/link";
import Image from "next/image";
import { StyledSocials } from "./styles/styledSocials";

export const Socials = () => {
  return (
    <StyledSocials>
      <Link target={"_blank"} className="link" href={"http://github.com/rafael-cesario"}>
        <Image className="image" alt="Github icon" src={"/icons/github.png"} width={"20"} height={"20"} />
        <span className="hide">Github</span>
      </Link>

      <Link target={"_blank"} className="link" href={"https://www.linkedin.com/in/rafael-cesario/"}>
        <Image className="image" alt="Github icon" src={"/icons/linkedin.png"} width={"20"} height={"20"} />
        <span className="hide">Linkedin</span>
      </Link>

      <Link onClick={() => navigator.clipboard.writeText("rafaeloliveiracds@gmail.com")} className="link" href={"#"}>
        <Image className="image" alt="gmail icon" src={"/icons/email.png"} width={"20"} height={"20"} />
        <span className="hide">RafaelOliveiracds@gmail.com</span>
      </Link>
    </StyledSocials>
  );
};
