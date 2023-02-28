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
      font-weight: bold;
      opacity: 0;
    }

    :hover .hide {
      color: #eee;
      opacity: 1;
      animation: test ease 0.3s;
    }
  }

  @keyframes test {
    0% {
      transform: translateX(50px);
      opacity: 0;
    }

    100% {
      opacity: 100;
    }
  }
`;
