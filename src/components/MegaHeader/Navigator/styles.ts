import styled from "styled-components";
import media from "styled-media-query";

export const Navigator = styled.nav`
  display: flex;
  align-items: center;

  .not__show__arrow {
    a::before {
      content: none;
    }
  }
  ${media.lessThan("large")`
    display: none;
  `}
`;
