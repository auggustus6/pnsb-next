import Container from "components/Container";
import styled from "styled-components";

export const Wrapper = styled.div`
  padding: 6rem 0 6rem;
  width: 100%;
  h5 {
    margin-bottom: 1rem;
  }

  span {
    color: ${(p) => p.theme.colors.green};
  }
`;

export const NavFooter = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
`;

export const WrapperLinks = styled.div`
  display: flex;
  width: 700px;
  justify-content: space-between;
  flex-wrap: wrap;
`;

export const ContainerFooter = styled(Container)`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
`;

export const WrapperContent = styled.div`
  display: flex;
  max-width: 480px;
  width: 100%;
  justify-content: space-between;
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
  margin-top: 1rem;
  cursor: pointer;
  ul {
    display: flex;
    list-style: none;
    gap: 10px;
  }
`;
