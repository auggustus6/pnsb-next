import { DefaultButton } from "components/customHtmlComponents/Buttons";
import Container from "components/layoutComponents/Container";
import styled from "styled-components";
import { BREAKPOINTS } from "utils/breakpoints";

export const Wrapper = styled(Container)`
  position: relative;
  overflow: hidden;

  min-height: 550px;

  h1,
  h3,
  div {
    text-align: center;
  }

  h1 {
    color: ${(p) => p.theme.colors.primary};
    font-size: 4rem;
    b {
      font-size: 6rem;
    }
  }

  @media (max-width: ${BREAKPOINTS.medium}) {
    h1 {
      font-size: 2rem;
      b {
        font-size: 4rem;
      }
    }
    h3{
      font-size: 1.8rem;
    }
  }

  h3 {
    font-weight: 300;
    max-width: 900px;
    margin: 1rem auto;
    color: ${(p) => p.theme.colors.textColor};
  }

  svg {
    margin: 1rem auto;
    font-size: 8rem;
    color: ${(p) => p.theme.colors.green};
    background: white;
  }

  .map__icon__wrapper {
    position: relative;
    &:before {
      content: "";
      position: absolute;
      height: 2px;
      width: 30%;
      top: 50%;
      left: 10%;
      background: #f0f0f0;
      z-index: -1;
    }
    &:after {
      content: "";
      position: absolute;
      height: 2px;
      width: 30%;
      top: 50%;
      right: 10%;
      background: #f0f0f0;
      z-index: -1;
    }
  }

  img {
    position: absolute;
    width: auto;
    max-height: 500px;
    height: 40vw;
    user-select: none;
    -moz-user-select: none;
    -webkit-user-select: none;
    opacity: 0.5;
    z-index: -1;
  }
`;

export const MyButton = styled(DefaultButton)`
  background: ${(p) => p.theme.colors.primary};
  border-radius: 3px;
  color: white;
  margin: 0 auto;
  margin-top: 2rem;
`;
