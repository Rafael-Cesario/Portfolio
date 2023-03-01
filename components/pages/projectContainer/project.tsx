import Link from "next/link";
import { StyledProject } from "./styles/styledProject";

export const Project = () => {
  return (
    <StyledProject>
      <h1 className="title">WordList</h1>

      <Link href={"http://github.com/rafael-cesario/wordList"} target={"_blank"}>
        Github
      </Link>
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

      <p className="scope">Full-Stack</p>
    </StyledProject>
  );
};
