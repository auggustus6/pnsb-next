import Container from "components/Container";
import styled from "styled-components";
import { CgMenu } from "react-icons/cg";
import media from "styled-media-query";

export const Wrapper = styled.header`
  position: fixed;
  z-index: 99;
  height: 90px;
  width: 100%;
`;

export const MyContainer = styled(Container)`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const MenuButton = styled(CgMenu)`
  width: 46px;
  height: 34px;
  margin-right: 1rem;

  border-radius: 5px;

  cursor: pointer;

  background: white;
  color: ${(p) => p.theme.colors.primary};
  box-shadow: ${(p) => p.theme.shadows.small};

  transition: all ${(p) => p.theme.transition.default};

  &:active {
    transform: scale(1.1);
  }

  ${media.greaterThan("medium")`
      display: none;
  `}
`;
