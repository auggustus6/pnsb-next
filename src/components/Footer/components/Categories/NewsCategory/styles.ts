import styled from "styled-components";

export const News = styled.div`
  text-align: left;

  h6 {
    color: ${(p) => p.theme.colors.primary};
    margin-bottom: 1rem;
  }

  ul {
    display: flex;
    gap: 0.5rem;
    flex-direction: column;
  }
`;
