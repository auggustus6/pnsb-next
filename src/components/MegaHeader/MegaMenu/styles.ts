import styled from "styled-components";
import media from "styled-media-query";
import { CgClose } from "react-icons/cg";
import Image from "next/image";

type MenuBackgroundData = {
  $imgSrc: string;
};

export const MegaMenu = styled.div`
  /* if the percentage is 100% the megamenu will fill all the screen width */
  --width-percentage: 96%;

  position: absolute;
  left: calc((100% - var(--width-percentage)) / 2);
  top: 100px;

  display: flex;
  justify-content: space-between;
  gap: 1rem;
  padding: 0.5rem;

  opacity: 0;
  visibility: hidden;

  width: var(--width-percentage);
  height: 414px;

  background: white;
  border-radius: 10px;

  transition: top ${(p) => p.theme.transition.default},
    opacity ${(p) => p.theme.transition.default};

  ::before {
    content: "";
    position: absolute;
    top: -44px;
    right: 0;
    width: 100%;
    height: 40px;
  }

  ${media.lessThan("medium")`
    height: 100%;
    gap: 0;
  `}
`;

export const MenuBackground = styled.div<MenuBackgroundData>`
  height: 100%;
  width: 214px;
  border-radius: 10px;

  background: linear-gradient(
      90deg,
      rgba(255, 255, 255, 0) -3.25%,
      #ffffff 95.56%
    ),
    url(${(p) => p.$imgSrc});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;

  ${media.lessThan("medium")`
    display: none;
  `}
`;

export const MegaMenuContent = styled.div`
  display: flex;
  width: 100%;
`;
