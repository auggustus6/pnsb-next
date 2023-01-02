import styled from "styled-components";
import { BREAKPOINTS } from "utils/breakpoints";
import { textOverflowVertical } from "utils/cssUtil";

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
    height: 80px;
    min-width: 80px;
    object-fit: cover;
    border-radius: 5px;
  }

  div {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding-right: 0.5rem;
    gap: 0.2rem;
  }

  h5 {
    font-size: 1rem;
    color: ${(p) => p.theme.colors.primary};
  }

  p {
    font-size: 0.825rem;
    ${textOverflowVertical(3, 0.825)}
  }

  @media (max-width: ${BREAKPOINTS.medium}) {
    max-width: 250px;
    img {
      min-width: 60px;
      max-width: 60px;
      height: 60px;
    }
  }

  @media (max-width: ${BREAKPOINTS.small}) {
    max-width: 100%;
  }
`;
