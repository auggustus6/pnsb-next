import styled from "styled-components";

export const Wrapper = styled.div`
  position: relative;
  overflow: hidden;

  caption {
    position: absolute;
    color: white;
    font-size: 0.875rem;
    font-weight: 300;
    padding: 0.5rem 2rem;
    width: 100%;
    bottom: 0;
    background: rgba(0, 0, 0, 0.7);
  }

  img {
    transition: all ${(p) => p.theme.transition.default};
  }
`;
