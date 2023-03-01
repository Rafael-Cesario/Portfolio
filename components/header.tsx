import Link from "next/link";
import { StyledHeader } from "./styledHeader";

export const Header = () => {
  return (
    <StyledHeader>
      <Link href={"/"}>Inicio</Link>

      <Link href={"/projectContainer"} as={"Projetos"}>
        Projetos
      </Link>

      <Link href={"/about"} as={"Sobre-mim"}>
        Sobre mim
      </Link>

      <Link href={"/skills"} as={"Habilidades"}>
        Habilidades
      </Link>

      <Link href={"/contact"} as={"Contato"}>
        Contato
      </Link>
    </StyledHeader>
  );
};
