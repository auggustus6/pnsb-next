import Container from "components/Container";
import styled from "styled-components";
import { CgMenu } from "react-icons/cg";
import media from "styled-media-query";

interface WrapperData {
  $isOnTop: boolean;
}

export const Wrapper = styled.header<WrapperData>`
  position: fixed;
  z-index: ${(p) => p.theme.layers.menu};
  height: 90px;
  width: 100%;
  background: ${(p) => (p.$isOnTop ? "none" : "white")};
  transition: ${(p) => p.theme.transition.default};

  box-shadow: ${(p) => p.$isOnTop ? "none" : p.theme.shadows.cards};


  ${media.greaterThan<WrapperData>("medium")`
    a {
      color: ${(p) =>
        p.$isOnTop ? "inherit" : `${p.theme.colors.gray} !important`};
    }
  `}

`;

export const MyContainer = styled(Container)`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.6rem;
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
