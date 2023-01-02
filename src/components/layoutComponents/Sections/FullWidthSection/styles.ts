import styled, { css } from "styled-components";
import media from "styled-media-query";
import { colorsType } from "..";

interface WrapperData {
  $img?: string;
  $color: keyof colorsType;
  $height: string;
}

export const Wrapper = styled.div<WrapperData>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  min-height: ${(p) => p.$height};
  background-color: ${(p) => p.theme.colors[p.$color]};

  ${media.lessThan<WrapperData>("medium")`
    display: flex;
  `}

  position: relative;

  ${(p) =>
    p.$img &&
    css`
      background-image: url(${p.$img});
      background-position: center;
      background-size: cover;
    `};
`;
