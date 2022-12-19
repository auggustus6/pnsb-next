import { DefaultButton } from "components/Buttons";
import Container from "components/Container";
import styled from "styled-components";
import media from "styled-media-query";
import { BREAKPOINTS } from "utils/breakpoints";

export const BannerContent = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  gap: 1rem;

  margin-top: 3rem;
  /* padding: 1rem; */
  padding: 1rem;

  width: 100%;
  height: 100%;

  ${media.lessThan("medium")`
    flex-direction: column-reverse;
    margin-top: 7rem;
    margin-bottom: 2rem;
  `}
`;

export const CardsContainer = styled.div<{ $height: number }>`
  padding: 2rem 0;
  display: flex;
  height: ${(p) => p.$height}px;
  overflow: hidden;
  gap: 34px;
  justify-content: space-around;
  flex-wrap: wrap;

  @media (max-width: ${BREAKPOINTS.medium}) {
    overflow: visible;
    height: auto;
  }
`;

export const CustomButton = styled(DefaultButton)`
  color: ${(p) => p.theme.colors.secondary};
  background: white;

  &:hover {
    opacity: 0.8;
  }
`;

export const DonateBanner = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 2rem;
  padding: 1rem;

  @media (max-width: ${BREAKPOINTS.medium}) {
    justify-content: center;
    flex-direction: column;

    h2 {
      font-size: 1.8rem;
    }
  }
`;

export const Left = styled.div`
  flex: 1;
  display: flex;
  gap: 0.5rem;
  div {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
  }

  p {
    font-size: 1.1rem;
    font-weight: 700;
    color: white;
  }

  @media (max-width: ${BREAKPOINTS.medium}) {
    flex-direction: column;
    div {
      justify-content: center;
      text-align: center;
    }
  }
`;

export const RentStudioContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;

  @media (max-width: ${BREAKPOINTS.medium}) {
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
  }
`;

export const RentStudio = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2.6rem;
  position: relative;
  padding-left: ${(p) => p.theme.grid.gutter};
  h2 {
    font-size: 3.5rem;
    font-weight: 700;
    color: ${(p) => p.theme.colors.primary};
    text-align: center;
    max-width: 660px;
    b {
      color: ${(p) => p.theme.colors.darkGreen};
      white-space: nowrap;
    }
    svg {
      transform: rotate(20deg);
      margin-bottom: -0.8rem;
      margin-left: 0.4rem;
    }
  }

  p {
    max-width: 40vw;
    text-align: center;
  }

  @media (max-width: ${BREAKPOINTS.medium}) {
    padding-inline: ${(p) => p.theme.grid.gutter};
    h2 {
      font-size: 3rem;
    }

    p {
      max-width: 90vw;
    }
  }
`;

export const RentStudioBackGround = styled.div<{ $img: string }>`
  flex: 1;
  background: linear-gradient(270deg, rgba(255, 255, 255, 0) 26.66%, #fff 99.1%),
    url(${(p) => p.$img});
  background-size: cover;

  height: 630px;
  width: 100%;

  @media (max-width: ${BREAKPOINTS.medium}) {
    flex: initial;
    height: 250px;
    background: linear-gradient(0, rgba(255, 255, 255, 0) 26.66%, #fff 99.1%),
      url(${(p) => p.$img});
    background-position-y: 40%;
    background-size: cover;
  }
`;

type PastoralContainerData = {
  $width: number;
  $height: number;
};
export const PastoralContainer = styled.div`
  display: flex;
  margin: 8rem 0;
  gap: 2rem;

  @media(max-width:${BREAKPOINTS.medium}){
      flex-direction: column;
  }
`;

export const PastoralImages = styled.div`
  flex: 2;
  display: flex;

  div {
    display: flex;
    flex-direction: column;
    padding-top: 1.5rem;
    padding-left: 2rem;
    gap: 1rem;
  }
`;

export const PastoralImageItem = styled.img<PastoralContainerData>`
  width: ${(p) => p.$width}%;
  height: ${(p) => p.$height}%;
  object-fit: cover;
  border-radius: 20px;
  box-shadow: ${(p) => p.theme.shadows.small};

  transform: perspective(1000px);

  &:hover {
    size: 150px;
  }

  /* @media(max-width: 1250px){
    width: calc(${(p) => p.$width}px - 50px);
    height: calc(${(p) => p.$height}px - 50px);
  }

  @media(max-width: 1080px){
    width: calc(${(p) => p.$width}px - 100px);
    height: calc(${(p) => p.$height}px - 100px);
  } */
`;

export const PastoralText = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3rem;
  flex: 1.5;
  h2 {
    font-size: 3.5rem;
    font-weight: 700;
    color: ${(p) => p.theme.colors.green};
  }
`;
