import { palette } from "@/styles/palette";
import styled from "styled-components";

export const StyledNotification = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  background-color: #151515;
  border-radius: ${palette.element.borderRadius};
  padding: 0.5rem 2rem;
  max-width: 400px;
  margin: 1rem;
  animation: notification 0.3s ease-out both;
  box-shadow: 10px 10px 2px #00000020;

  @keyframes notification {
    0% {
      opacity: 0;
      transform: translate(0, -100px);
    }

    100% {
      opacity: 1;
    }
  }

  .title {
    font-size: 1.1rem;
    font-weight: bold;
    margin-bottom: 0.5rem;
    color: #ddd;
  }

  .txt {
    color: #aaa;
  }

  .close {
    position: absolute;
    right: 0;
    top: 0;
    border: none;
    outline: none;
    padding: 0.5rem 1rem;
    background-color: transparent;
    color: #ddd;
    border-radius: 2px;
    cursor: pointer;
    font-size: 1.1rem;
    font-weight: bold;

    :hover {
      color: ${palette.colors.textBlue};
    }
  }
`;
