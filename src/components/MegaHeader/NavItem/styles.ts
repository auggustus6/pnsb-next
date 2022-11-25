import Link from "next/link";
import styled from "styled-components";
import media from "styled-media-query";

export const NavItem = styled.span`
  ${media.greaterThan("medium")`
    display: flex;

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

        z-index: 10;

        transition: none;

        opacity: 0;
        visibility: hidden;
      }
    }
  `}

  /* mobile style */
  ${media.lessThan("medium")`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 100%;

    cursor: pointer;

    font-size: 1.4rem;

    .megamenu{
      position: static;
      display: none;
      opacity: 1;
      visibility: visible;
    }

    &:hover > .megamenu{
      display: block;
    }

    /* .megamenu span:hover{
      background: red;
    } */

    & > a{
      display: none;
    }

    a::before{
      content: none;
    }
  `}
`;

export const MobileItem = styled.span`
  position: relative;
  display: none;
  gap: 0.6rem;
  align-items: center;

  svg{
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

    .mobile__more__indicator{
      transform: rotate(180deg);
    }

    svg{
      color: white;
    }
  }

  .mobile__more__indicator{
    position: absolute;
    right: 1rem;
  }

  ${media.lessThan("medium")`
    display: flex;
  `}
`;
