import styled from "styled-components";
import media from "styled-media-query";
import { BREAKPOINTS } from "utils/breakpoints";

export const Wrapper = styled.div`
  width: 302px;
  height: 400px;
  padding: 0.5rem;

  background: #f9f9f9;
  box-shadow: ${(p) => p.theme.shadows.small};
  border-radius: 10px;

  transition: all ${(p) => p.theme.transition.fast};
  transform: scale(1.001);
  will-change: contents;

  cursor: pointer;

  &:hover {
    transform: scale(1.04);
  }

  @media (max-width: ${BREAKPOINTS.medium}) {
    width: 100%;
  }
`;

export const CardImg = styled.div`
  position: relative;
  width: 100%;
  height: 247px;
  border-radius: 10px;
  overflow: hidden;
`;

export const Content = styled.div<{ $info: boolean }>`
  padding: 0.8rem 0.4rem 0rem 0.4rem;
  max-height: 135px;
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  h6 {
    font-weight: 500;
    color: ${(p) => p.theme.colors.primary};
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    max-width: 100%;
  }

  .defaultcard__info {
    display: flex;
    justify-content: space-between;
    align-items: center;

    span,
    time {
      display: flex;
      align-items: center;
      gap: 0.2rem;
      font-weight: 300;
      color: #777;
    }
  }

  p {
    display: -webkit-box;
    -webkit-line-clamp: 3;
    max-height: 4rem;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }
`;
