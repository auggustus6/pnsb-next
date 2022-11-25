import styled from "styled-components";
import media from "styled-media-query";

export const Wrapper = styled.div`
  width: 302px;
  height: 400px;
  padding: 0.4rem 0;

  position: relative;

  cursor: pointer;

  transition: transform ${(p) => p.theme.transition.default};

  box-shadow: ${(p) => p.theme.shadows.small};
  border-radius: 10px;

  img {
    border-radius: 10px;
  }

  &:hover {
    transform: scale(1.05);
  }

  ${media.lessThan("medium")`
    width: 100%;
    

    & > img,& > span{
      width: 96% !important;
      height: 274px !important;

    }
  `}
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
