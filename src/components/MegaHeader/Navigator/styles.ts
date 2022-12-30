import { CgClose } from "react-icons/cg";
import styled, { css } from "styled-components";
import media from "styled-media-query";
import { BREAKPOINTS } from "utils/breakpoints";

export const Navigator = styled.nav<{ $isOpen: boolean }>`
  --modal-width: 96vw;
  --modal-height: 96vh;
  display: flex;
  align-items: center;
  left: ${(p) =>
    p.$isOpen ? "calc((100vw - var(--modal-width)) / 2)" : "105%"};

  .not__show__arrow {
    a::before {
      content: none;
    }
  }

  @media (max-width: ${BREAKPOINTS.medium}) {
    position: fixed;
    top: calc(((100vh - var(--modal-height)) / 2) + 5vh);
    transition: left ${(p) => p.theme.transition.default};

    display: flex;
    flex-direction: column;
    width: var(--modal-width);
    height: calc(var(--modal-height) - 5vh);
    gap: 0.4rem;
    padding: 1rem;
    border-radius: 10px;

    background: white;
    box-shadow: ${(p) => p.theme.shadows.small};

    overflow: auto;

    &:before {
      content: "";
      position: fixed;
      top: calc((100vh - var(--modal-height)) / 2);

      transition: left ${(p) => p.theme.transition.default};
      left: ${(p) =>
        p.$isOpen ? "calc((100vw - var(--modal-width)) / 2)" : "105%"};

      border-radius: 10px 10px 0 0;
      z-index: 1;
      width: calc(var(--modal-width));
      height: 60px;
      background: white;
    }
  }
`;

export const CloseButton = styled(CgClose)<{ $isOpen: boolean }>`
  position: fixed;
  right: ${(p) => (p.$isOpen ? "4vw" : "-105%")};
  top: 2rem;
  transition: right ${(p) => p.theme.transition.default};

  cursor: pointer;

  z-index: 2;

  color: black;

  width: 30px;
  height: 30px;

  @media (min-width: ${BREAKPOINTS.medium}) {
    display: none;
  }
`;
