import BetterNextImg from "components/customHtmlComponents/BetterNextImg";
import { DefaultButton } from "components/customHtmlComponents/Buttons";
import styled from "styled-components";
import { BREAKPOINTS } from "utils/breakpoints";

export const Wrapper = styled.div``;

export const IntroSectionContainer = styled.div`
  display: flex;
  gap: 1rem;

  h1 {
    color: ${(p) => p.theme.colors.primary};
  }

  @media (max-width: ${BREAKPOINTS.medium}) {
    flex-direction: column-reverse;
  }
`;

export const IntroContent = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 1rem;

  h4 {
    margin-top: 1rem;
    color: ${(p) => p.theme.colors.green};
  }
`;

export const FlexImage = styled(BetterNextImg)`
  flex: 1;
  border-radius: 10px;

  @media (max-width: ${BREAKPOINTS.medium}) {
    flex: unset;
    min-height: 40vw;
  }

  &:hover {
    img {
      transform: scale(1.05);
    }
  }
`;

export const WaysOfHelpContainer = styled.div`
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
  @media(max-width:${BREAKPOINTS.medium}){
      gap: 4rem;
  }
`;

export const Method = styled.div`
  display: flex;
  gap: 1rem;

  /* min-width: 400px; */
  max-width: 640px;
  width: 100%;

  @media (max-width: ${BREAKPOINTS.medium}) {
    flex-direction: column;
  }
`;

export const MethodContent = styled.div`
  flex: 3;
  display: flex;
  flex-direction: column;
  gap: 1rem;

  b {
    margin-top: 2rem;
  }
`;

export const SocialWorkWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6rem;
`;

export const SocialWorkContent = styled.div``;

export const SocialWorkItem = styled.div<{ $inverse?: boolean }>`
  display: flex;
  flex-direction: ${(p) => (p.$inverse ? "row-reverse" : "row")};
  gap: 2rem;

  @media (max-width: ${BREAKPOINTS.medium}) {
    flex-direction: column-reverse;
    height: 100%;
  }

  ${SocialWorkContent} {
    flex: 1.5;
    display: flex;
    justify-content: ${(p) => (p.$inverse ? "flex-end" : "flex-start")};

    div {
      display: flex;
      flex-direction: column;
      gap: 2rem;
      max-width: 604px;
      min-height: 302px;
    }

    h2 {
      padding-bottom: 1rem;
      border-bottom: 1px solid #e9e9e9;
    }

    p {
      max-width: 604px;
    }

    @media (max-width: ${BREAKPOINTS.medium}) {
      justify-content: flex-start;
      div {
        min-height: unset;
      }
    }
  }
`;

export const CustomButton = styled(DefaultButton)`
  background: ${(p) => p.theme.colors.primary};
  color: white;
  border-radius: 5px;
`;

export const List = styled.ul`
  display: flex;
  gap: 2rem;

  div {
    flex: 1;
    display: flex;
    flex-direction: column;
    margin-left: 1rem;
    gap: 1rem;

    li {
      width: 100%;
      &:before {
        content: "●";
        margin-right: 1rem;
        color: ${(p) => p.theme.colors.primary};
      }
    }
  }

  /* margin-left: 2rem;
  list-style: initial;
  

  height: 300px;

  li {
    display: inline-block;
    width: 48%;
  } */
`;
