import styled from "styled-components";

export const Wrapper = styled.div`
  /* height: 2rem; */
  background: #F6F6F6;
  border-radius: 5px;
`;

export const Item = styled.div<{ $isActive: boolean }>`
  padding: 1rem 2rem;
  background: turquoise;
  & + &:after{
    content: "";
    border-left: 1px solid #dcdcdc;
  }
`;
