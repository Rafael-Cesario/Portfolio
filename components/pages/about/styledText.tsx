import styled from "styled-components";

export const StyledText = styled.div`
  margin: 5rem 0;
  max-width: 800px;
  position: relative;

  ::after {
    content: "";
    position: absolute;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: #101010;
    animation: reveal 1s ease-in both;

    @keyframes reveal {
      to {
        top: 100%;
        display: none;
      }
    }
  }

  h1 {
    font-size: 1.5rem;
    font-weight: bold;
  }

  h2 {
    font-size: 1.1rem;
    font-weight: bold;
  }

  p {
    margin: 1rem 0;
    color: #ddd;
  }
`;
