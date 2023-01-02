import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  height: 100vh;
  width: 100vw;
  top: 0;
  left: 0;
  background: #101114d3;
  z-index: ${(p) => p.theme.layers.modal};
  padding: 2rem 0;
`;
