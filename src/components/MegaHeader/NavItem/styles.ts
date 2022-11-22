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
        background: red;
      }
    }

    &:hover {
      & > .megamenu {
        opacity: 1;
        visibility: visible;
        top: 90px;
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

    font-size: 1.4rem;

    .megamenu{
      position: static;
      display: block;
      opacity: 1;
      visibility: visible;
    }

    a{
      color: ${(p) => p.theme.colors.primary};
    }

    a::before{
      content: none;
    }
  `}
`;
