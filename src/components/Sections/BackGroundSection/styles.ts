import styled, { css } from "styled-components";

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
