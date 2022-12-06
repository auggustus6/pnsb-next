import styled, { css } from "styled-components";
import { BREAKPOINTS } from "utils/breakpoints";
import theme from "styles/theme";

export type colorsType = typeof theme.colors;

type PaginationItemData = {
  $active?: boolean;
  $disabled?: boolean;
};

interface WrapperData {
  $color: keyof colorsType;
}

export const Wrapper = styled.div<WrapperData>`
  --text-color: ${(p) => p.theme.colors[p.$color]};
  display: flex;
  align-items: center;
  gap: 1rem;
`;

export const PaginationItem = styled.span<PaginationItemData>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50px;
  height: 50px;

  @media (max-width: ${BREAKPOINTS["medium"]}) {
    width: 40px;
    height: 40px;
  }

  cursor: pointer;

  background: ${(p) => (p.$active ? "var(--text-color)" : "white")};
  color: ${(p) => (p.$active ? "white" : "var(--text-color)")};
  border-radius: 5px;

  font-size: 1.4rem;
  font-weight: 700;

  transition: all ${(p) => p.theme.transition.default};

  &:hover {
    filter: brightness(0.9);
  }

  ${(p) =>
    p.$active &&
    css`
      &:hover {
        filter: brightness(1.1);
      }
    `};

  ${(p) =>
    p.$disabled &&
    css`
      color: #d1d1d1;
      cursor: initial;
      &:hover {
        filter: brightness(1);
        pointer-events: none;
      }
    `};
`;
