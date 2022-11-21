import styled from "styled-components";
import media from "styled-media-query";

export const Wrapper = styled.div`

  ${media.lessThan("medium")`
    max-width: 480px;
    width: 100%;
  `}
`;

export const Title = styled.div`
  padding: 1rem;
  background: ${(p) => p.theme.colors.primary};
  border-radius: 10px 10px 0 0;
  color: white;

  font-weight: 400;
  font-size: 1.375rem;
  text-align: start;
`;

export const Content = styled.div`
  background: white;
  padding-bottom: 1rem;


  border-radius: 0 0 10px 10px;

  text-align: start;
`;
