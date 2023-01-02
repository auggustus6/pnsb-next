import styled from "styled-components";
import media from "styled-media-query";
import { BREAKPOINTS } from "utils/breakpoints";

export const Row = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.3rem;
  max-width: 340px;
  width: 100%;
  text-align: start;

  & > h5 {
    font-size: 1.25rem;
    text-transform: capitalize;
  }

  & + & {
    margin-left: 1rem;
  }

  @media (max-width: ${BREAKPOINTS.medium}) {
    padding: 1rem 2rem;
    & + & {
      margin-left: 0rem;
    }
  }
`;

export const MobileTitle = styled.span<{ $titleColor: string }>`
  display: none;
  width: 95%;
  margin-left: 1rem;

  padding: 0.8rem 1rem;
  color: ${(p) => p.$titleColor};

  transition: ${(p) => p.theme.transition.fast};

  border-radius: 10px;

  ${media.lessThan("medium")`
    display: flex;
    &:hover{
      background: ${(p) => p.theme.colors.green};
      color: white;
    }
  `}
`;
