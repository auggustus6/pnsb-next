import styled from "styled-components";
import { colorsType } from ".";

interface WrapperData {
  textColor: keyof colorsType;
}

export const Wrapper = styled.div<WrapperData>`
  margin: 2rem 0;
  text-align: start;

  h4 {
    color: ${(p) => p.theme.colors[p.textColor]};
    font-weight: normal;
  }

  p {
    margin-top: 0.4rem;
  }
`;
