import styled from "styled-components";
import { colorsType } from ".";

type ColorData = {
  $color: keyof colorsType;
};

export const Wrapper = styled.div<ColorData>`
  h1 {
    text-align: center;
    color: ${(p) => p.theme.colors[p.$color]};
  }
  
  .iframe-video{
    display: flex;
    justify-content: center;
  }
`;

export const Title = styled.h1``;
export const PostInfo = styled.div`
  text-align: center;
  margin-top: 0.5rem;
  padding-bottom: 1rem;
  color: ${(p) => p.theme.colors.gray};

  span {
    margin: 0 0.5rem;
  }
`;

export const Content = styled.div`
  color: ${(p) => p.theme.colors.textColor};
  p {
    margin: 1rem 0;
    text-align: justify;
  }
  h2,
  h3,
  h4,
  h5,
  h6 {
    color: ${(p) => p.theme.colors.primary};
    margin-top: 2rem;
    margin-bottom: 1rem;
  }

  ul,
  ol {
    list-style: initial;
    padding: 0.5rem 3rem;
  }

  li {
    margin: 1rem 0;
    font-size: 0.925rem;
  }

  blockquote {
    position: relative;
    max-width: 864px;
    width: 100%;

    margin: 2rem auto;

    border-radius: 10px;

    padding: 3rem 2.625rem;

    background: #f5f9ff;

    ::before, ::after {
      content: '"';
      position: absolute;
      font-size: 4.5rem;
      font-family: 'Secular One', sans-serif;
    }

    ::before{
      top: -0.5rem;
      left: 0.5rem;
    }

    ::after{
      bottom: -2.5rem;
      right: 0.5rem;
      color: #c1c4c8;
    }
  }
`;
