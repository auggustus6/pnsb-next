import Container from "components/Container";
import styled from "styled-components";

export const Wrapper = styled.header`
  position: fixed;
  z-index: 99;
  width: 100%;
  background: #242526;
  ul {
    list-style: none;
  }
`;

export const MyContainer = styled(Container)`
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 100%;
`;

export const Navigator = styled.nav`
  height: 100%;

  span {
    height: 100%;
  }

  span:hover {
    background: red !important;
  }
`;

export const MegaMenu = styled.div`
  display: none;
`;

export const MegaMenuContent = styled.div``;

export const Row = styled.div``;
