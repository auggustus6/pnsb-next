import styled from "styled-components";
import media from "styled-media-query";

export const BannerContent = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  gap: 1rem;

  margin-top: 3rem;
  padding: 1rem;

  width: 100%;
  height: 100%;

  ${media.lessThan("medium")`
    flex-direction: column-reverse;
    margin-top: 7rem;
    margin-bottom: 2rem;
  `}
`;
