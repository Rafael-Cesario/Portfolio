import styled from "styled-components";

export const StyledNotification = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  background-color: #005090;
  border-radius: 2px;
  padding: 0.5rem 2rem;
  padding-right: 3rem;
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

  .txt {
    font-size: 1rem;
  }

  .close {
    position: absolute;
    right: 0;
    top: 2px;
    border: none;
    outline: none;
    padding: 0.5rem 1rem;
    background-color: transparent;
    color: #ddd;
    font-weight: bold;
    border-radius: 2px;
    cursor: pointer;

    :hover {
      color: black;
    }
  }
`;
