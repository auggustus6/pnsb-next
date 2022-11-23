import styled from "styled-components";

export const Wrapper = styled.div`
  width: 302px;
  height: 400px;
  padding: 0.4rem 0;

  cursor: pointer;

  transition: ${(p) => p.theme.transition.default};

  box-shadow: ${(p) => p.theme.shadows.small};
  border-radius: 10px;

  img {
    border-radius: 10px;
  }

  &:hover {
    transform: scale(1.05);
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  text-align: start;

  padding: 1rem;

  h6 {
    font-weight: normal;
    color: ${(p) => p.theme.colors.primary};
  }

  div {
    display: flex;
    justify-content: space-between;
    align-items: center;

    span,time {
      display: flex;
      align-items: center;
      gap: 0.4rem;
    }

    svg{
      margin-bottom: 0.2rem;
    }
  }
`;
