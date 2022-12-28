import styled from "styled-components";
import { BREAKPOINTS } from "utils/breakpoints";

export const Wrapper = styled.div<{ $height: number }>`
  display: flex;
  height: ${(p) => p.$height}px;
  overflow: hidden;
  gap: 34px;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  margin-bottom: 3rem;
  margin: -1rem;
  flex-wrap: wrap;
  row-gap: 5rem;

  @media (max-width: ${BREAKPOINTS.medium}) {
    overflow: visible;
    height: auto;
  }
`;
