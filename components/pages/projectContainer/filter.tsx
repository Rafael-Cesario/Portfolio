import { useState } from "react";
import { StyledFilter } from "./styles/styledFilter";

interface FilterProps {
  props: {
    scopeFilter: string;
    setScopeFilter: (newStackFilter: string) => void;
  };
}

export const Filter = ({ props: { scopeFilter, setScopeFilter } }: FilterProps) => {
  const changeStackFilter = (stack: string) => setScopeFilter(scopeFilter === stack ? "" : stack);

  return (
    <StyledFilter>
      <button
        className={scopeFilter === "frontEnd" ? "active" : ""}
        onClick={() => changeStackFilter("frontEnd")}>
        FrontEnd
      </button>

      <button
        className={scopeFilter === "backEnd" ? "active" : ""}
        onClick={() => changeStackFilter("backEnd")}>
        BackEnd
      </button>

      <button
        className={scopeFilter === "fullStack" ? "active" : ""}
        onClick={() => changeStackFilter("fullStack")}>
        FullStack
      </button>
    </StyledFilter>
  );
};
