import styled from "styled-components";
import { BREAKPOINTS } from "utils/breakpoints";
// import media, {myMedia} from "styled-media-query";

// const teste = media as MediaGenerator<DefaultBreakpoints, typeof theme>;

export const Wrapper = styled.div``;

export const CardsContainer = styled.div`
  display: grid;
  grid-gap: 2rem;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  justify-content: center;
  justify-items: center;
  padding-top: 1rem;

  @media (max-width: ${BREAKPOINTS.medium}){
    grid-template-columns: 1fr;
  }
`;

export const PaginationContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  padding: 2rem 0 5rem 0;
`;
