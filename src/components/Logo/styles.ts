import styled from "styled-components";
interface WrapperData {
  $height: number;
  $width: number;
}

export const Wrapper = styled.div<WrapperData>`
  position: relative;
  height: ${(p) => p.$height}px;
  width: ${(p) => p.$width}px;

  .image {
    width: 100%;
    height: 100%;
    position: relative !important;
  }
  /* img{
    height: 100% !important;
    width: 100% !important;
  } */
`;
