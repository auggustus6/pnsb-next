import Container from "components/Container";
import styled from "styled-components";

export const Wrapper = styled.header`
  position: fixed;
  z-index: 99;
  height: 90px;
  width: 100%;

  ul {
    list-style: none;
  }
`;

export const MyContainer = styled(Container)`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
