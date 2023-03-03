import { palette } from "@/styles/palette";
import styled from "styled-components";

export const StyledFilter = styled.div`
  button {
    border: none;
    outline: none;
    padding: 0.5rem 1rem;
    font-weight: bold;
    color: #ddd;
    background-color: #151515;
    cursor: pointer;

    :hover {
      background-color: #005090;
    }
  }

  .active {
    background-color: ${palette.colors.bgBlue};
  }
`;
