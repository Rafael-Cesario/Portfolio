import { Header } from "@/components/header";
import { Project } from "@/components/pages/projectContainer/project";
import { Title } from "@/components/pages/projectContainer/title";
import { StyledPage } from "@/styles/styledPage";
import Head from "next/head";
import Link from "next/link";

const ProjectContainer = () => {
  return (
    <StyledPage>
      <Head>
        <title>Rafael</title>
      </Head>

      <Header />
      <Title />

      <Project />
      <Project />
      <Project />
      <Project />
    </StyledPage>
  );
};

export default ProjectContainer;
