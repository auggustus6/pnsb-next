import styled from "styled-components";

export const Pastoral = styled.div`
  text-align: left;

  h6 {
    color: ${(p) => p.theme.colors.turquoise};
    margin-bottom: 1rem;
  }

  ul {
    display: flex;
    gap: 0.5rem;
    flex-direction: column;
  }
`;
