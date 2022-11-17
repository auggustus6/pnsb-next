import styled from "styled-components";

export const MegaMenu = styled.div`
  /* if the percentage is 100% the megamenu will fill all the screen width */
  --width-percentage: 96%;

  position: absolute;
  left: calc((100% - var(--width-percentage)) / 2);
  top: 90px;

  opacity: 0;
  visibility: hidden;

  width: var(--width-percentage);
  min-height: 446px;

  background: white;
  border-radius: 10px;
  border: 1rem solid transparent;

  transition: ${(p) => p.theme.transition.default};
`;

export const MegaMenuContent = styled.div``;
