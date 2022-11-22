import { DefaultButton } from "components/Buttons";
import styled from "styled-components";

export const Wrapper = styled.div``;

export const MoreAboutButton = styled(DefaultButton)`
  width: 10rem;
  height: 2.5rem;
  background: ${(p) => p.theme.colors.primary};
  color: white;
  font-size: 0.8rem;
`

export const SendEmailButton = styled(DefaultButton)`
  height: 2rem;
  width: 9rem;
  color: white;
  background: ${(p) => p.theme.colors.primary};
  font-size: 0.8rem;
`