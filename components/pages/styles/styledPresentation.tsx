import styled from "styled-components";

export const StyledPresentation = styled.div`
  position: relative;
  top: 40vh;
  transform: translate(0, -50%);

  span {
    background-color: #005090;
    padding: 0.5rem 1rem;
    border-radius: 2px;
    position: absolute;
    transform: translate(10px, -20px);
    animation: span 0.3s ease-out both;
    z-index: 1;
    opacity: 0;

    @keyframes span {
      0% {
        opacity: 0;
        transform: translate(10px, -50px);
      }

      100% {
        opacity: 1;
      }
    }
  }

  h1 {
    background-color: #151515;
    padding: 1rem 4rem;
    color: #ddd;
    animation: h1 0.3s ease-out 0.3s both;
    box-shadow: 10px 10px 2px #00000020;

    @keyframes h1 {
      0% {
        opacity: 0;
        transform: translate(50px, 0);
      }

      100% {
        opacity: 1;
      }
    }
  }

  p {
    text-align: center;
    margin: 0.5rem;
    color: #aaa;
    animation: para 0.3s ease-out 0.6s both;

    @keyframes para {
      0% {
        opacity: 0;
        transform: translate(0, 50px);
      }

      100% {
        opacity: 1;
      }
    }
  }
`;
