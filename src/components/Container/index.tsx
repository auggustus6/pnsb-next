import styled, { css } from "styled-components";
import media from "styled-media-query";

const Container = styled.div`
  ${({ theme }) => css`
    width: 100%;
    max-width: ${theme.grid.container};
    margin-left: auto;
    margin-right: auto;
    padding-left: calc(${theme.grid.gutter} / 2);
    padding-right: calc(${theme.grid.gutter} / 2);
    /* half of the padding in mobile */
    ${media.lessThan("medium")`
      padding-left: calc(${theme.grid.gutter} / 4);
      padding-right: calc(${theme.grid.gutter} / 4);
  `};
  `}
`;

export default Container;
