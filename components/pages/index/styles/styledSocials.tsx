import styled from "styled-components";

export const StyledSocials = styled.div`
  display: flex;
  flex-direction: column;

  position: fixed;
  left: 0;
  top: 40vh;
  margin: 1rem;

  .link {
    display: flex;
    align-items: center;
    text-decoration: none;
    margin-bottom: 1rem;

    .image {
      margin-right: 1rem;
      opacity: 0.5;

      :hover {
        opacity: 1;
      }
    }

    .hide {
      position: absolute;
      font-weight: bold;
      display: none;
      transform: translateX(2rem);
    }

    :hover .hide {
      color: #ddd;
      display: inline;
      animation: showContent ease 0.3s both;
    }
  }

  @keyframes showContent {
    0% {
      transform: translateX(5rem);
      display: none;
    }

    100% {
      opacity: 100;
      display: inline;
    }
  }

  @media (max-width: 1000px) {
    left: 50vw;
    top: 70vh;
    flex-direction: row;
    transform: translate(-50%, -50%);

    .link {
      flex-direction: column;
      margin-right: 1rem;

      .hide {
        transform: translate(-10%, 2rem);

        @keyframes showContent {
          0% {
            transform: translate(-10%, 4rem);
            display: none;
          }

          100% {
            opacity: 100;
            display: inline;
          }
        }
      }
    }
  }
`;
