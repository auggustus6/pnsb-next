import styled from "styled-components";

export const Wrapper = styled.div`
  width: 304px;
  height: 308px;

  transition: ${(p) => p.theme.transition.default};
  box-shadow: ${(p) => p.theme.shadows.small};

  border-radius: 5px;

  cursor: pointer;

  h6 {
    margin-top: 0.4rem;
    font-weight: normal;
  }

  img{
    border-radius: 5px 5px 0 0;
  }

  &:hover {
    transform: scale(1.05);
  }
`;
