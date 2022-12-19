import styled from "styled-components";
import media from "styled-media-query";
import { BREAKPOINTS } from "utils/breakpoints";

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 100%;
  padding: 0.4rem;
  color: ${(p) => p.theme.colors.textColor};

  cursor: pointer;

  transition: transform ${(p) => p.theme.transition.default};

  box-shadow: ${(p) => p.theme.shadows.small};
  border-radius: 10px;

  img {
    border-radius: 10px;
    @media (max-width: ${BREAKPOINTS.small}) {
      display: none !important;
    }
  }

  &:hover {
    box-shadow: ${(p) => p.theme.shadows.cards};
  }
`;

export const Content = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  gap: 1rem;
  text-align: start;
  width: 80%;

  align-self: flex-start;
  padding: 1rem;

  h4 {
    color: ${(p) => p.theme.colors.primary};
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
    overflow: hidden;
    margin-right: 2rem;

    @media (max-width: ${BREAKPOINTS.medium}) {
      font-size: 1.5rem;
    }
  }

  p {
    display: -webkit-box;
    -webkit-line-clamp: 6;
    -webkit-box-orient: vertical;
    overflow: hidden;

    @media (max-width: ${BREAKPOINTS.medium}) {
      -webkit-line-clamp: 4;
    }
  }

  div {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-wrap: wrap;
    gap: 0.4rem;

    span,
    time {
      display: flex;
      align-items: center;
      gap: 0.4rem;
    }

    svg {
      margin-bottom: 0.2rem;
    }
  }
`;

export const Info = styled.div`
  display: flex;
  flex-wrap: wrap;
  white-space: nowrap;

  @media (max-width: ${BREAKPOINTS.medium}) {
    font-size: 0.85rem;
  }
`;
