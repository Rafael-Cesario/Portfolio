import Link from "next/link";
import { StyledHeader } from "./styledHeader";

export const Header = () => {
  return (
    <StyledHeader>
      <Link href={"/"}>Inicio</Link>

      <Link href={"/projectsPage"}>Projetos</Link>
      <Link href={"/about"}>Sobre mim</Link>
      <Link href={"/skills"}>Habilidades</Link>
      <Link href={"/contact"}>Contato</Link>
    </StyledHeader>
  );
};
