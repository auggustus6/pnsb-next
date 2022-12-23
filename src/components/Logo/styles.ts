import BetterNextImg from "components/BetterNextImg";
import styled, { css } from "styled-components";

interface SizeData {
  $height?: number;
  $width?: number;
}

export const CustomImage = styled(BetterNextImg)<SizeData>`
  height: ${(p) => p.$height}px;
  width: ${(p) => p.$width}px;
`;

// substituir link next
export const Wrapper = styled.a<SizeData>`
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
