import styled from "styled-components";
import media from "styled-media-query";
import { BREAKPOINTS } from "utils/breakpoints";
import Container from "../Container";

export const Wrapper = styled.div`
  h5 {
    margin-bottom: 1rem;
  }

  span {
    color: ${(p) => p.theme.colors.green};
  }
`;

export const ContainerFooterLogo = styled(Container)`
  display: flex;
  justify-content: space-between;
  align-items: center;

  gap: 0.5rem;

  height: 150px;

  @media (max-width: ${BREAKPOINTS.small}) {
    justify-content: center;
  }
`;

export const Box = styled.div`
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.25);
`;

export const LogoImage = styled.div`
  @media (max-width: ${BREAKPOINTS.small}) {
    display: none;
  }
`;

export const ContentLogo = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 0 1rem 0;
  gap: 2rem;

  h6 {
    text-align: left;
  }

  p {
    text-align: left;
  }
`;

export const ContentTexts = styled.div`
  @media (max-width: ${BREAKPOINTS.medium}) {
    display: none;
  }
`;

export const NavFooter = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  gap: 0.5rem;

  @media (max-width: ${BREAKPOINTS.large}) {
    flex-direction: column;
    align-items: center;
    gap: 3rem;
  }
`;

export const WrapperLinks = styled.div`
  display: flex;
  max-width: 850px;
  justify-content: space-between;
  width: 100%;
  flex-wrap: wrap;
  gap: 0.5rem;

  ${media.lessThan("small")`
  flex-direction: column;
    gap: 2rem;
    align-items: center;
    justify-content: center;
  `}
`;

export const ContainerFooter = styled(Container)`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  padding-top: 3rem;
  padding-bottom: 6rem;

  ${media.lessThan("large")`
    gap: 2rem;
    align-items: center;
  `}
`;

export const ContentInfos = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

export const Info = styled.a`
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 0.5rem;
  text-decoration: none;
  color: ${(p) => p.theme.colors.textColor};

  &:visited {
    color: ${(p) => p.theme.colors.textColor};
  }

  svg {
    min-width: 2rem;
    min-height: 2rem;
    fill: ${(p) => p.theme.colors.green};
  }

  max-width: 281px;
  width: 100%;

  &:hover {
    color: ${(p) => p.theme.colors.primary};
  }
`;

export const WrapperContent = styled.div`
  display: flex;
  max-width: 480px;
  width: 100%;
  justify-content: space-between;

  ${media.lessThan("small")`
    flex-direction: column;
    gap: 2rem;
    align-items: center;
  `}
`;

export const ContentLineText = styled.div`
  max-width: 220px;
  width: 100%;

  p {
    text-align: justify;
  }
`;

export const ContainerItems = styled.div`
  display: flex;
  flex-direction: column;

  p {
    margin-bottom: 1rem;
  }
  span {
    color: ${(p) => p.theme.colors.gray};
    font-weight: 700;
  }
`;

export const Social = styled.div`
  margin-top: 30px;
  cursor: pointer;

  ul {
    display: flex;
    list-style: none;
    gap: 10px;
  }
`;

export const FooterByID = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.2rem;
  height: 2.2rem;
  /* background: ${(p) => p.theme.colors.secondary}; */
  background: #333;
  color: white;
  letter-spacing: 1px;
  font-size: 0.875rem;

  a {
    margin-top: 0.1rem;
  }

  img {
    height: 16px;
    width: fill;
  }
`;
