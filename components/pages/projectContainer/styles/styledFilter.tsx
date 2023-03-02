import { palette } from "@/styles/palette";
import styled from "styled-components";

export const StyledFilter = styled.div`
  margin: 2rem 0;
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  max-width: 800px;
  justify-content: flex-start;

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

  .search {
    margin-right: 2rem;
    border: none;
    outline: none;
    /* background-color: ${palette.colors.bgBlue}; */
    background-color: #151515;
    color: #ddd;
    padding: 0.5rem 1rem;
    border-radius: ${palette.element.borderRadius};
    width: 20rem;
    height: fit-content;

    ::placeholder {
      color: #aaa;
    }
  }

  .stack {
    border-radius: ${palette.element.borderRadius};

    .filter {
      display: none;
      position: absolute;
      z-index: 1;
      border-radius: 0.2rem;
      margin: 1rem 0;
    }

    .hide {
      display: flex;
      flex-direction: column;
      animation: drop 0.1s ease-in both;

      @keyframes drop {
        0% {
          opacity: 0;
          transform: translate(0, -1rem);
        }

        100% {
          opacity: 1;
        }
      }
    }
  }
`;
