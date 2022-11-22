import Link from "next/link";
import styled from "styled-components";
import media from "styled-media-query";

export const Row = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.3rem;
  max-width: 340px;
  width: 100%;
  text-align: start;

  & + & {
    margin-left: 1rem;
  }

  ${media.lessThan("medium")`
    display: none;
  `}
`;

export const MobileTitle = styled.span`
  display: none;
  width: 100%;

  color: red;
`;
