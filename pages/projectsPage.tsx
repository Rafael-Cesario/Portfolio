import { Header } from "@/components/header";
import { Filter } from "@/components/pages/projectContainer/filter";
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
      <Filter />
      <ProjectContainer />
    </StyledPage>
  );
};

export default ProjectsPage;
