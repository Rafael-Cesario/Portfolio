import { Header } from "@/components/header";
import { ProjectContainer } from "@/components/pages/projectContainer/projectContainer";
import { Title } from "@/components/pages/projectContainer/title";
import { StyledPage } from "@/styles/styledPage";
import Head from "next/head";
import Link from "next/link";

const ProjectsPage = () => {
  return (
    <StyledPage>
      <Head>
        <title>Rafael</title>
      </Head>

      <Header />
      <Title />

      <ProjectContainer />
      <ProjectContainer />
      <ProjectContainer />
      <ProjectContainer />
    </StyledPage>
  );
};

export default ProjectsPage;
