import { useState } from "react";
import { StyledFilter } from "./styles/styledFilter";

export const Filter = () => {
  const [stackFilter, setStackFilter] = useState("");
  const [stackMenu, setStackMenu] = useState("");

  const showStack = () => setStackMenu(stackMenu.includes("hide") ? "" : "hide");
  const changeStackFilter = (stack: string) => setStackFilter(stackFilter === stack ? "" : stack);

  return (
    <StyledFilter>
      <input className="search" type="text" placeholder="Framework, nome de projeto..." />

      <div className="stack">
        <button onClick={() => showStack()}>Stack</button>

        <div className={stackMenu + " filter"}>
          <button onClick={() => changeStackFilter("frontEnd")}>FrontEnd</button>
          <button onClick={() => changeStackFilter("backEnd")}>BackEnd</button>
          <button onClick={() => changeStackFilter("fullStack")}>FullStack</button>
        </div>
      </div>
    </StyledFilter>
  );
};
