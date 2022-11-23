import { CgClose } from "react-icons/cg";
import styled from "styled-components";
import media from "styled-media-query";

export const Navigator = styled.nav<{ $isOpen: boolean }>`
  --modal-width: 96vw;
  --modal-height: 96vh;
  display: flex;
  align-items: center;
  left: ${(p) =>
    p.$isOpen ? "calc((100vw - var(--modal-width)) / 2)" : "100%"};

  .not__show__arrow {
    a::before {
      content: none;
    }
  }

  ${media.lessThan("medium", )`
    position: fixed;
    top: calc((100vh - var(--modal-height)) / 2);  
    transition: left ${(p) => p.theme.transition.default};

    display: flex;
    flex-direction: column;
    width: var(--modal-width);
    height: var(--modal-height);
    gap: 0.4rem;
    padding: 4rem 1rem 1rem 1rem;
    border-radius: 10px;

    background: white;  
    box-shadow: ${(p) => p.theme.shadows.small};

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
