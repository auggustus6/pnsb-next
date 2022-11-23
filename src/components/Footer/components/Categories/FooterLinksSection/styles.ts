import styled from "styled-components";

interface InstitutionalData {
  $color: string;
}

export const Institutional = styled.div<InstitutionalData>`
  text-align: left;

  h6 {
    margin-bottom: 1rem;
  }

  a,
  b {
    transition: ${(p) => p.theme.transition.fast};
    color: ${(p) => p.theme.colors.gray};
  }

  ul {
    display: flex;
    gap: 0.5rem;
    flex-direction: column;
  }

  b {
    display: block;
    margin-top: 1.4rem;
  }

  a:hover,
  b:hover {
    color: ${(p) => p.$color};
  }
`;