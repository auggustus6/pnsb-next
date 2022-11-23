import styled from "styled-components";

export const Wrapper = styled.div`
  width: 302px;
  height: 274px;
  padding: 0.4rem 0;

  transition: ${(p) => p.theme.transition.default};

  cursor: pointer;

  box-shadow: ${(p) => p.theme.shadows.small};
  border-radius: 10px;

  img {
    border-radius: 10px;
    border: 3px solid ${(p) => p.theme.colors.turquoise} !important;
  }

  &:hover {
    transform: scale(1.05);
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
  text-align: start;

  padding: 0.2rem 1rem;

  h6 {
    font-size: 1rem;
    font-weight: normal;
    color: ${(p) => p.theme.colors.turquoise};
  }

  div {
    display: flex;
    justify-content: space-between;
    align-items: center;

    span,
    time {
      display: flex;
      align-items: center;
      gap: 0.4rem;
    }

    svg {
      margin-bottom: 0.2rem;
    }
  }
`;
