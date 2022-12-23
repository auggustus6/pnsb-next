import styled from "styled-components";

export const Wrapper = styled.div`
  padding: 1.4rem 1rem;
  gap: 1rem;
`;

export const Title = styled.div`
  font-size: 1.125rem;
  font-weight: 700;
  color: ${(p) => p.theme.colors.primary};
`;

export const Content = styled.div`
  margin-top: 1rem;
  p{
    margin-top: 0.4rem;
  }
`;
