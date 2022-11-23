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

export const MobileTitle = styled.span<{$titleColor: string}>`
  display: none;
  width: 95%;
  margin-left: 1rem;

  padding: 0.8rem 1rem;
  color: ${(p) => p.$titleColor};

  transition: ${(p) => p.theme.transition.fast};

  border-radius: 10px;

  ${media.lessThan("medium")`
    display: flex;
    &:hover{
      background: ${(p) => p.theme.colors.green};
      color: white;
    }
  `}
`;
