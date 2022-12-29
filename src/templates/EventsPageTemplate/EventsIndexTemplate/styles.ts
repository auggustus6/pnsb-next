import styled, { css } from "styled-components";
import { BREAKPOINTS } from "utils/breakpoints";
// import media, {myMedia} from "styled-media-query";

// const teste = media as MediaGenerator<DefaultBreakpoints, typeof theme>;

export const Wrapper = styled.div``;

export const CardsContainer = styled.div<{ $isList: boolean }>`
  display: grid;
  grid-gap: 2rem;
  grid-template-columns: ${(p) =>
    p.$isList ? "1fr" : "repeat(auto-fit, minmax(300px, 1fr))"};
  justify-items: center;
  justify-content: flex-start;
  padding-top: 2rem;

  @media (max-width: ${BREAKPOINTS.medium}) {
    grid-template-columns: 1fr;
  }
`;

export const SectionHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  h1 {
    color: ${(p) => p.theme.colors.secondary};
  }
`;

export const ListButtons = styled.div`
  display: flex;
  gap: 0.5rem;

  .button-active {
    background: ${(p) => p.theme.colors.secondary};
    color: white;
  }

  span {
    display: flex;
    width: 3rem;
    height: 3rem;
    justify-content: center;
    align-items: center;
    color: white;
    /* background: ${(p) => p.theme.colors.secondary}; */
    border-radius: 50%;
    border: 1px solid ${(p) => p.theme.colors.secondary};
    color: ${(p) => p.theme.colors.secondary};
    transition: all ${(p) => p.theme.transition.default};
    cursor: pointer;

    &:hover {
      transform: scale(1.1);
    }
  }
`;

export const PaginationContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  padding: 2rem 0 5rem 0;
`;
