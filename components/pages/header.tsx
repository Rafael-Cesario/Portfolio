import Link from "next/link";
import { StyledHeader } from "./styles/styledHeader";

export const Header = () => {
  return (
    <StyledHeader>
      <Link href={"/"}>Inicio</Link>
      <Link href={"/"}>Projetos</Link>
      <Link href={"/"}>Sobre mim</Link>
      <Link href={"/"}>Habilidades</Link>
      <Link href={"/"}>Contato</Link>
    </StyledHeader>
  );
};
