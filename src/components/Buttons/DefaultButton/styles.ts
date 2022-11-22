import styled, { css } from "styled-components";

interface WrapperData {
  $width: string;
  $height: string;
  $fontSize: string;
  $bgColor: string;
  $textColor: string;
  $borderColor: string;
}

export const Wrapper = styled.button<WrapperData>`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.4rem;

  white-space: nowrap;

  border-radius: 30px;

  width: ${(p) => p.$width};
  height: ${(p) => p.$height};
  font-size: ${(p) => p.$fontSize};

  background: ${(p) => p.$bgColor};
  color: ${(p) => p.$textColor};

  ${(p) =>
    !!p.$borderColor &&
    css`
      background: none;
      border: 1px solid ${p.$borderColor};
      color:${p.$borderColor};
      &:hover{
        background: ${p.$borderColor};
        color: white;
      }
    `};

  &:hover {
    filter: brightness(1.1);
  }
`;
