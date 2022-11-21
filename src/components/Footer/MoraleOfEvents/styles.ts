import styled from "styled-components";

export const Morale = styled.div`
  text-align: left;

  h6 {
    color: ${(p) => p.theme.colors.green};
    margin-bottom: 1rem;
  }

  ul {
    display: flex;
    gap: 0.5rem;
    flex-direction: column;
  }
`;
