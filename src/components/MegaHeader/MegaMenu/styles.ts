import styled from "styled-components";
import media from "styled-media-query";
import { CgClose } from "react-icons/cg";

export const MegaMenu = styled.div`
  /* if the percentage is 100% the megamenu will fill all the screen width */
  --width-percentage: 96%;

  position: absolute;
  left: calc((100% - var(--width-percentage)) / 2);
  top: 100px;

  opacity: 0;
  visibility: hidden;

  width: var(--width-percentage);
  min-height: 446px;

  background: white;
  border-radius: 10px;
  border: 1rem solid transparent;

  transition: ${(p) => p.theme.transition.default};

  ::before {
    content: "";
    position: absolute;
    top: -44px;
    right: 0;
    width: 100%;
    height: 40px;
  }
`;

export const MegaMenuContent = styled.div`
  position: relative;
`;

