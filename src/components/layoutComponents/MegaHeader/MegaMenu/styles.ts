import styled from "styled-components";
import media from "styled-media-query";
import { CgClose } from "react-icons/cg";
import Image from "next/image";
import { BREAKPOINTS } from "utils/breakpoints";

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

  cursor: initial;

  opacity: 0;
  visibility: hidden;

  width: var(--width-percentage);
  min-height: 350px;

  background: white;
  border-radius: 10px;

  box-shadow: ${(p) => p.theme.shadows.small};

  transition: top ${(p) => p.theme.transition.default},
    opacity ${(p) => p.theme.transition.default};

  ::before {
    content: "";
    position: absolute;
    top: -28px;
    right: 0;
    width: 100%;
    height: 28px;
  }

  ${media.lessThan("medium")`
    width: 100%;
    padding: 0;
    min-height: 0;
    gap: 0;
    box-shadow: none;
  `}
`;

export const MenuBackground = styled.div<MenuBackgroundData>`
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

  ${media.lessThan("large")`
    display: none;
  `}
`;

export const MegaMenuContent = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
  padding: 1rem;

  max-height: 50vh;
  overflow-y: scroll;

  gap: 1rem;

  @media (max-width: ${BREAKPOINTS.medium}) {
    flex-direction: column;
    justify-content: flex-start;
    text-align: start;
    gap: 0.4rem;
    font-size: 1.1rem;
    width: 100%;
    padding: 0;

    background: #f6f6f6;

    border-radius: 0 0 10px 10px;

    a {
      padding: 0.6rem 0;
      width: 100%;
      padding-left: 1rem;
    }
  }
`;
