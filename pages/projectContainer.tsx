import { Header } from "@/components/header";
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

      <h1>Projetos</h1>

      <div className="project">
        <div className="title">
          <h1>WordList</h1>

          <Link href={"http://github.com/rafael-cesario/wordList"} target={"_blank"}>
            Github
          </Link>
        </div>

        <p className="txt">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta aspernatur dolorum eos, nostrum eligendi dolores laboriosam numquam sequi
          vitae, fuga quaerat vel fugit quae corrupti, et ab. Itaque, reiciendis porro.
        </p>

        <div className="stack">
          <span>React</span>
          <span>Typescript</span>
          <span>React</span>
          <span>React</span>
          <span>React</span>
          <span>Typescript</span>
          <span>Typescript</span>
          <span>Typescript</span>
        </div>

        <p>Full-Stack</p>
      </div>
    </StyledPage>
  );
};

export default ProjectContainer;
