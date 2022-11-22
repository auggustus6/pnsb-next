import Logo from "components/Logo";
import styled from "styled-components";
import media from "styled-media-query";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  width: 480px;

  ${media.lessThan("medium")`
    flex-direction: column-reverse;
    max-width:482px;
    width: 100%;
  `}
`;
export const StreamButton = styled.div`
  display: flex;
  align-items: center;
  width: 180px;
  height: 2.2rem;

  padding: 0 0.4rem;

  cursor: pointer;

  background: white;
  font-size: 0.8rem;
  color: ${(p) => p.theme.colors.black};
  border-radius: 50px;

  svg {
    margin-right: 0.4rem;
    color: ${(p) => p.theme.colors.primary};
  }

  &:hover {
    background: ${(p) => p.theme.colors.primary};
    color: white;
    svg {
      color: white;
    }
  }

  ${media.lessThan("medium")`
    align-self: flex-end;
    margin-top: -4.4rem;
  `}

  ${media.lessThan("small")`
    align-self: center;
    margin-top: 0;
  `}
`;

export const RecentEventInfoContainer = styled.div`
  display: flex;
  gap: 1rem;

  ${media.lessThan("small")`
    flex-direction: column;
    align-items: center;
    img{
      object-fit: contain;
    } 
  `}
`;

export const MyLogo = styled(Logo)`
  ${media.lessThan("medium")`
    display: none !important;
  `}
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  text-align: start;
  gap: 1rem;
  max-width: 200px;
  width: 100%;

  color: white;

  a {
    font-size: ${(p) => p.theme.font.sizes.xsmall_s};
    color: white;
    font-weight: ${(p) => p.theme.font.bold};
    transition: ${(p) => p.theme.transition.fast};

    &:hover {
      color: ${(p) => p.theme.colors.primary};
    }
  }
`;
