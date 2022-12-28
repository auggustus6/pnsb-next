import BetterNextImg from "components/BetterNextImg";
import styled from "styled-components";
import { BREAKPOINTS } from "utils/breakpoints";

export const ContentWrapper = styled.div`
  display: flex;
  gap: 2rem;
  min-height: 480px;

  h4 {
    color: ${(p) => p.theme.colors.primary};
  }

  @media (max-width: ${BREAKPOINTS.medium}) {
    flex-direction: column-reverse;
  }
`;
export const LeftSide = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  min-width: 390px;
`;

export const LeftBg = styled(BetterNextImg)`
  flex: 1;
  width: 100%;
  height: 200px;
  border-radius: 10px;

  @media (max-width: ${BREAKPOINTS.medium}) {
    flex: unset;
  }
`;

export const InfoWrapper = styled.div`
  flex: 0.5;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 100%;
  gap: 1rem;

  max-width: 594px;
  width: 100%;

  p {
    display: flex;
    gap: 0.5rem;
    align-items: center;
  }
`;

export const Social = styled.div`
  ul {
    display: flex;
    list-style: none;
    align-items: center;
    gap: 10px;
    li {
      cursor: pointer;
    }
  }
`;

export const FormSide = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  max-width: 482px;
  width: 100%;

  form {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;
    gap: 2rem;
  }

  @media (max-width: ${BREAKPOINTS.medium}) {
    max-width: initial;
  }
`;

export const StyledIframe = styled.iframe`
  width: 100%;
  height: 400px;
  border: none;
  border-radius: 10px;
`;
