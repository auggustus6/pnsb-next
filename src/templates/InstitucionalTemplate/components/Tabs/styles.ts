import styled from "styled-components";
import { BREAKPOINTS } from "utils/breakpoints";

export const Wrapper = styled.div`
  display: flex;
  border-radius: 5px;
  overflow: hidden;

  @media (max-width: ${BREAKPOINTS.medium}) {
    flex-wrap: wrap;
  }
`;

export const Item = styled.div`
  padding-inline: 2rem;
  display: inline;
  /* margin-inline: -1px; */

  @media (max-width: ${BREAKPOINTS.medium}) {
    padding-inline: 0.5rem;
    font-size: 0.9rem;
  }
`;

export const ItemWrapper = styled.div<{ $isActive: boolean }>`
  padding: 0.8rem 0;
  background: ${(p) => (p.$isActive ? p.theme.colors.primary : "#f6f6f6")};
  color: ${(p) => (p.$isActive ? "white" : "initial")};

  cursor: pointer;

  transition: all ${(p) => p.theme.transition.default};

  & + & > ${Item} {
    border-left: 1px solid #dcdcdc;
    /* margin-left: -1px; */
  }

  &:last-child {
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;
  }

  &:hover {
    background: ${(p) => p.theme.colors.primary};
    color: white;

    ${Item} {
      border-color: transparent !important;
    }
  }
`;
