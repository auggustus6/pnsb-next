import Container from "components/Container";
import styled from "styled-components";

export const Wrapper = styled.header`
  position: fixed;
  width: 100%;
  z-index: ${(p) => p.theme.layers.menu};
  /* background: white; */
`;

export const MegaMenu = styled.nav`
  display: flex;
  justify-content: space-around;
  gap: 1rem;
`;

export const MyContainer = styled(Container)`
  position: relative;
  display: flex;
  justify-content: space-around;
  align-items: center;
  color: white;
`;
