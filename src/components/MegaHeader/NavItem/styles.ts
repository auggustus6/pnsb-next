import Link from "next/link";
import styled from "styled-components";

export const NavItem = styled.span`
  display: flex;
  align-items: center;
  height: 90px;

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
    & > .mega__menu {
      opacity: 1;
      visibility: visible;
      top: 90px;
    }
  }

  /* menu-arrow-indicator */
  & > a {
    position: relative;
    padding: 0.6rem 1rem;
    border-radius: 2rem;
    color: white;

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
`;
// export const NavItem = styled.span`
//   display: flex;
//   align-items: center;
//   height: 90px;

//   &:hover {
//     a::before {
//       opacity: 1;
//       visibility: visible;
//       transform: scale(1);
//       bottom: -44px;

//       transition: all ${(p) => p.theme.transition.default};
//     }
//     & > a {
//       background: red;
//     }
//   }

//   &:hover {
//     & > .mega__menu {
//       opacity: 1;
//       visibility: visible;
//       top: 90px;
//     }
//   }

//   /* menu-arrow-indicator */
//   & > a {
//     position: relative;
//     padding: 0.6rem 1rem;
//     border-radius: 2rem;
//     color: white;

//     ::before {
//       --width-size: 30px;

//       content: "";
//       position: absolute;
//       transform: scale(0);
//       left: calc(50% - (var(--width-size) / 2));
//       bottom: -49px;

//       margin: 0 auto;
//       width: var(--width-size);
//       height: var(--width-size);

//       border-radius: 5px;

//       background-image: url(/svgs/menu-indicator.svg);
//       background-size: contain;
//       background-repeat: no-repeat;

//       transition: none;

//       opacity: 0;
//       visibility: hidden;
//     }
//   }
// `;
