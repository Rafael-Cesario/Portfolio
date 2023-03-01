import { Header } from "@/components/header";
import { Project } from "@/components/pages/projectContainer/project";
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

      <h1>Projects</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore nesciunt ea eum dolor quas excepturi modi architecto ipsam at odit.</p>

      <Project />
      <Project />
      <Project />
      <Project />
    </StyledPage>
  );
};

export default ProjectContainer;
