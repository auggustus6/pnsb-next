import styled from "styled-components";
import media from "styled-media-query";

export const Wrapper = styled.div`
  width: 304px;
  height: 308px;

  transition: transform ${(p) => p.theme.transition.default};
  box-shadow: ${(p) => p.theme.shadows.small};

  border-radius: 5px;

  cursor: pointer;

  h6 {
    margin-top: 0.4rem;
    font-weight: normal;
  }

  img {
    border-radius: 5px 5px 0 0;
  }

  &:hover {
    transform: scale(1.05);
  }

  ${media.lessThan("medium")`
    width: 100%;
    

    & > img,& > span{
      width: 96% !important;
      height: 268px !important;

    }
  `}
`;
