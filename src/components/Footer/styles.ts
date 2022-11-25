import Container from "components/Container";
import styled from "styled-components";
import media from "styled-media-query";

export const Wrapper = styled.div`
  padding-bottom: 6rem;

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

  ${media.lessThan("small")`
    align-items: flex-start;
`}
`;

export const Box = styled.div`
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.25);
`;

export const LogoImage = styled.div`
  ${media.lessThan("small")`
  display: none;
`}
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

export const ContentTexts = styled.div``;

export const NavFooter = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;

  ${media.lessThan("large")`
    flex-direction: column;
    align-items: center;
    gap: 3rem;
  `}
`;

export const WrapperLinks = styled.div`
  display: flex;
  max-width: 850px;
  justify-content: space-between;
  width: 100%;
  flex-wrap: wrap;

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
  padding-top: 6rem;

  ${media.lessThan("large")`
    gap: 2rem;
    align-items: center;
  `}
`;

export const ContentInfos = styled.div`
  ${media.lessThan("small")`
  padding-top: 14px;
`}
`;

export const Info = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 0.5rem;
  margin-bottom: 1rem;

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
