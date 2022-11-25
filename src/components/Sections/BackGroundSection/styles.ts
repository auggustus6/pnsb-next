import styled, { css } from "styled-components";
import media from "styled-media-query";

interface WrapperData {
  $img?: string;
  $color?: string;
  $height: string;
}

export const Wrapper = styled.div<WrapperData>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  min-height: ${(p) => p.$height};


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

  ${(p) =>
    p.$color &&
    css`
      background-color: ${p.color};
    `};
`;
