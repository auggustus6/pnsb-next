import Container from "components/Container";
import styled from "styled-components";
import { CgMenu } from "react-icons/cg";
import media from "styled-media-query";
import { BREAKPOINTS } from "utils/breakpoints";
import Logo from "components/Logo";

interface WrapperData {
  $isOnTop: boolean;
  $home: boolean;
}

export const Wrapper = styled.header<WrapperData>`
  position: fixed;
  z-index: ${(p) => p.theme.layers.menu};
  height: 90px;
  width: 100%;

  background: ${(p) => (p.$isOnTop ? "none" : "white")};
  ${(p) => !p.$home && `background: ${p.$home ? "none" : "white"};`}

  transition: ${(p) => p.theme.transition.default};

  box-shadow: ${(p) => (p.$isOnTop ? "none" : p.theme.shadows.cards)};
  /* ${(p) => !p.$home && `box-shadow: ${p.theme.shadows.cards} !important;`} */

  .megamenu_clicked {
    & > .megamenu {
      height: 100%;
      overflow: hidden;
    }
  }

  @media (min-width: ${BREAKPOINTS.medium}) {
    a {
      color: ${(p) =>
        p.$isOnTop ? "inherit" : `${p.theme.colors.gray} !important`};
      ${(p) => !p.$home && `color: ${p.theme.colors.textColor} !important;`}
    }
  }
`;

export const CustomLogo = styled(Logo)`
  height: 68px;
  width: 102px;
  cursor: pointer;
`;

export const MyContainer = styled(Container)`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.6rem;

  a {
    cursor: pointer;
  }
`;

export const MenuButton = styled(CgMenu)`
  width: 40px;
  height: 30px;
  margin-right: 1rem;

  border-radius: 5px;

  cursor: pointer;

  background: white;
  color: ${(p) => p.theme.colors.gray};
  /* box-shadow: ${(p) => p.theme.shadows.small}; */

  transition: all ${(p) => p.theme.transition.default};

  ${media.greaterThan("medium")`
      display: none;
  `}
`;
