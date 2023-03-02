import { useState } from "react";
import { StyledFilter } from "./styles/styledFilter";

export const Filter = () => {
  const [stack, setStack] = useState("");

  const showStack = () => {
    setStack(stack.includes("hide") ? "" : "hide");
  };

  return (
    <StyledFilter>
      <input className="search" type="text" placeholder="Framework, nome de projeto..." />

      <div className="stack">
        <button onClick={() => showStack()}>Stack</button>

        <div className={stack + " filter"}>
          <button>FrontEnd</button>
          <button>BackEnd</button>
          <button>FullStack</button>
        </div>
      </div>
    </StyledFilter>
  );
};
