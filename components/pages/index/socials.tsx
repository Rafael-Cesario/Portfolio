import Link from "next/link";
import Image from "next/image";
import { StyledSocials } from "./styles/styledSocials";
import { Notification } from "../../notification";
import { useState } from "react";

interface SocialsProps {
  props: {
    setNotification: (newState: { active: boolean; txt: string }) => void;
  };
}

export const Socials = ({ props: { setNotification } }: SocialsProps) => {
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

      <Link
        className="link"
        href={"#"}
        onClick={() => {
          navigator.clipboard.writeText("rafaeloliveiracds@gmail.com");
          setNotification({ active: true, txt: "O meu gmail deve ter sido copiado para sua área de transfêrencia." });
        }}
      >
        <Image className="image" alt="gmail icon" src={"/icons/email.png"} width={"20"} height={"20"} />
        <span className="hide">RafaelOliveiracds@gmail.com</span>
      </Link>
    </StyledSocials>
  );
};
