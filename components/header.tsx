import Link from "next/link";
import { StyledHeader } from "./styledHeader";

export const Header = () => {
  return (
    <StyledHeader>
      <Link href={"/"}>Inicio</Link>

      <Link href={"/projectsPage"}>Projetos</Link>
      <Link href={"/about"}>Sobre mim</Link>
    </StyledHeader>
  );
};
