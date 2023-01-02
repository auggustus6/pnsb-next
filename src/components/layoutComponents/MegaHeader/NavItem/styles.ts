import styled, { css } from "styled-components";
import media from "styled-media-query";
import { BREAKPOINTS } from "utils/breakpoints";

export const MobileItem = styled.span`
  position: relative;
  display: none;
  gap: 0.6rem;
  align-items: center;

  svg {
    color: ${(p) => p.theme.colors.primary};
    font-size: 30px;
    transition: ${(p) => p.theme.transition.fast};
  }

  cursor: pointer;
  width: 100%;
  text-align: start;
  padding: 0.8rem 1rem;
  border-radius: 10px;

  transition: ${(p) => p.theme.transition.fast};

  &:hover {
    background: ${(p) => p.theme.colors.primary};
    color: white;

    .mobile__more__indicator {
      /* transform: rotate(180deg); */
    }

    svg {
      color: white;
    }
  }

  .mobile__more__indicator {
    position: absolute;
    right: 1rem;
  }

  ${media.lessThan("medium")`
    display: flex;
  `}
`;

export const NavItem = styled.span<{ $isOpen: boolean }>`
  @media (min-width: ${BREAKPOINTS.medium}) {
    display: flex;

    &.navitem-active a:after {
      background: ${(p) => p.theme.colors.secondary};
      content: "";
      position: absolute;
      top: 62px;
      left: 0;
      width: 100%;
      height: 4px;
      /* color: ${(p) => p.theme.colors.primary} !important; */
      border-radius: 5px 5px 0 0;
    }

    &:hover {
      a::before {
        opacity: 1;
        visibility: visible;
        transform: scale(1);
        bottom: -44px;
        cursor: initial;

        transition: all ${(p) => p.theme.transition.default};
      }
      & > a {
        background: ${(p) => p.theme.colors.primary};
        color: white !important;
      }
    }

    &:hover {
      & > .megamenu {
        opacity: 1;
        visibility: visible;
        top: 88px;
      }
    }

    /* menu-arrow-indicator */
    & > a {
      position: relative;
      padding: 0.6rem 0.7rem;
      border-radius: 2rem;
      color: white;
      /* esse aqui */
      transition: background ${(p) => p.theme.transition.default};
      font-size: 1rem;
      white-space: nowrap;

      ::before {
        --width-size: 30px;

        content: "";
        position: absolute;
        transform: scale(0);
        left: calc(50% - (var(--width-size) / 2));
        bottom: -49px;

        margin: 0 auto;
        width: var(--width-size);
        height: var(--width-size);

        border-radius: 5px;

        background-image: url(/svgs/menu-indicator.svg);
        background-size: contain;
        background-repeat: no-repeat;

        z-index: ${(p) => p.theme.layers.menu};

        transition: none;

        opacity: 0;
        visibility: hidden;
      }
    }
  }

  /* mobile style */
  @media (max-width: ${BREAKPOINTS.medium}) {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 100%;

    cursor: pointer;

    font-size: 1.4rem;

    .megamenu {
      position: static;
      display: block;
      height: 0px;
      overflow: hidden;
      opacity: 1;
      visibility: visible;
      transition: 0.3s all;
    }

    ${(p) =>
      p.$isOpen &&
      css`
        & > .megamenu {
          height: 100%;
          overflow: hidden;
        }

        & > ${MobileItem} {
          background: ${(p) => p.theme.colors.primary};
          color: white !important;
          svg {
            color: white;
          }
          .mobile__more__indicator {
            color: white;
            transform: rotate(180deg) !important;
          }
        }
      `}

    /* .megamenu span:hover{
      background: red;
    } */

    & > a {
      display: none;
    }

    a::before {
      content: none;
    }
  }
`;
