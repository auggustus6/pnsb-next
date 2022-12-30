import styled from "styled-components";
import { BREAKPOINTS } from "utils/breakpoints";

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 0.6rem;
  max-width: 304px;
  width: 100%;
  background: white;
  transition: all ${(p) => p.theme.transition.default};
  border-radius: 5px;
  cursor: pointer;

  padding: 0.3rem;

  &:hover {
    filter: brightness(0.95);
  }

  img {
    border-radius: 5px;
    height: 80px;
    width: 80px;
    object-fit: cover;
  }

  div {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    padding-right: 0.5rem;
    gap: 0.2rem;
  }

  h5 {
    font-size: 1rem;
    color: ${(p) => p.theme.colors.primary};
  }

  p {
    font-size: 0.825rem;
  }

  @media (max-width: ${BREAKPOINTS.medium}) {
    max-width: 200px;
  }

  @media (max-width: ${BREAKPOINTS.small}) {
    max-width: 100%;
  }
`;
