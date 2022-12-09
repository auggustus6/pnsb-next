import styled from "styled-components";
import { BREAKPOINTS } from "utils/breakpoints";

export const Wrapper = styled.div`
  display: flex;
  max-width: 800px;
  margin: 1rem;
  border-radius: 10px;
  width: 100%;
  min-height: 400px;
  background: white;
  overflow: hidden;

  @media(max-width: ${BREAKPOINTS.medium}){
    flex-direction: column-reverse;
    height: 90%;
  }
`;

export const FormImage = styled.div<{ $imgSrc?: string }>`
  flex: 1;
  background-image: url(${(p) => p.$imgSrc});
  background-position: center;
  background-size: cover;
`;

export const Content = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem;
  gap: 1rem;

  & > button{
    margin-top: auto;
  }
`;
