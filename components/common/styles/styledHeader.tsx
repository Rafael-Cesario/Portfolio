import { palette } from "@/styles/palette";
import styled from "styled-components";

export const StyledHeader = styled.header`
  display: flex;
  flex-wrap: wrap;

  a {
    margin-right: 2rem;
    color: #555;
    text-decoration: none;
    font-size: 0.9rem;
    font-weight: bold;
    padding-bottom: 0.5rem;
    border-bottom: 2px solid transparent;

    :last-child {
      margin-right: 0;
    }

    :hover {
      color: #eee;
      border-bottom: 2px solid ${palette.colors.textBlue};
    }
  }

  @media (max-width: 350px) {
    flex-direction: column;
    align-content: flex-start;
    width: 100%;
  }
`;
