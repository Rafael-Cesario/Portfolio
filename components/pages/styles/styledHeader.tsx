import styled from "styled-components";

export const StyledHeader = styled.header`
  a {
    margin-right: 2rem;
    color: #555;
    text-decoration: none;
    font-size: 0.9rem;
    font-weight: bold;
    padding-bottom: 0.5rem;

    :last-child {
      margin-right: 0;
    }

    :hover {
      color: #eee;
      border-bottom: 2px solid #00aaff;
    }
  }
`;