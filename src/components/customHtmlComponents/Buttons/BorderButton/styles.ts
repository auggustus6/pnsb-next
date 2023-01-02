import styled, { css } from "styled-components";
import { colorsType } from ".";

export const Wrapper = styled.button<{$color: keyof colorsType}>`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.4rem;
  margin: 0 auto;

  white-space: nowrap;
  font-size: 1rem;
  font-weight: 700;
  transition: all ${(p) => p.theme.transition.default};

  max-width: 416px;
  width: 100%;
  height: 3.4rem;

  border-radius: 5px;

  border: 1px solid ${(p) => p.theme.colors[p.$color]};
  color: ${(p) => p.theme.colors[p.$color]};
  background: none;

  &:hover {
    background: ${(p) => p.theme.colors[p.$color]};
    color: white;
  }
`;
