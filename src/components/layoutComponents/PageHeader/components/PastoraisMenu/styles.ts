import { DefaultButton } from "components/customHtmlComponents/Buttons";
import MegaMenuItem from "components/layoutComponents/MegaHeader/MegaMenuItem";
import styled from "styled-components";
import { BREAKPOINTS } from "utils/breakpoints";
import { textOverflowVertical } from "utils/cssUtil";

export const Wrapper = styled.div``;

export const Item = styled(MegaMenuItem)`
  .megamenu__card__text {
    ${textOverflowVertical(4)}
  }
`;

export const Button = styled(DefaultButton)`
  width: 10rem;
  height: 2rem;
  background: ${(p) => p.theme.colors.primary};
  color: white;
  font-size: 0.8rem;
`;


export const CustomSpace = styled.div`
  padding-top: 1.5rem;

  @media(max-width:${BREAKPOINTS.medium}){
      padding-top: 0;
      margin-top: -2.5rem;
  }
`