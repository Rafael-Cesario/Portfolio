import Link from "next/link";
import { StyledProject } from "./styles/styledProject";
import { projectsData } from "./utils/projectsData";

export const ProjectContainer = () => {
  return (
    <>
      {projectsData.map(({ name, txt, stack, scope, github }) => {
        return (
          <StyledProject key={name}>
            <h1 className="title">{name}</h1>

            <Link href={github} target={"_blank"}>
              Github
            </Link>

            <p className="txt">{txt}</p>
            <p className="stack">{stack}</p>
            <p className="scope">{scope}</p>
          </StyledProject>
        );
      })}
    </>
  );
};
