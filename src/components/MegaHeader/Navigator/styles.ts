import { CgClose } from "react-icons/cg";
import styled from "styled-components";
import media from "styled-media-query";

export const Navigator = styled.nav<{ $isOpen: boolean }>`
  display: flex;
  align-items: center;
  left: 100%;

  .not__show__arrow {
    a::before {
      content: none;
    }
  }

  ${media.lessThan<{ $isOpen: boolean }>("medium")`
    --modal-width: 96vw;
    --modal-height: 96vh;

    left: ${(p) =>
      p.$isOpen ? "calc((100vw - var(--modal-width)) / 2)" : "100%"};
    top: calc((100vh - var(--modal-height)) / 2);
    
    transition: left ${(p) => p.theme.transition.default};

    position: fixed;

    width: var(--modal-width);
    height: var(--modal-height);

    border-radius: 10px;

    box-shadow: ${(p) => p.theme.shadows.default};

    background: white;
  `}
`;

export const CloseButton = styled(CgClose)`
  position: absolute;
  right: 1rem;
  top: 1rem;

  cursor: pointer;

  color: black;

  width: 30px;
  height: 30px;

  ${media.greaterThan("medium")`
      display: none;
  `}
`;
