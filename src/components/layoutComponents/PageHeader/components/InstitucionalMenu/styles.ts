import { DefaultButton } from "components/customHtmlComponents/Buttons";
import styled from "styled-components";

export const MoreAboutButton = styled(DefaultButton)`
  width: 10rem;
  height: 2.5rem;
  background: ${(p) => p.theme.colors.primary};
  color: white;
  font-size: 0.8rem;
`;

export const SendEmailButton = styled(DefaultButton)`
  height: 2rem;
  width: 9rem;
  color: white;
  background: ${(p) => p.theme.colors.primary};
  font-size: 0.8rem;
`;

export const SecretaryTime = styled.div`
  display: flex;
  flex-direction: column;

  p {
    margin-bottom: 0.2rem;
  }
`;

export const PrivacyPolitics = styled.div`
  h5 {
    font-size: 1.25rem;
  }

  p {
    margin-top: 0.5rem;
    font-size: 0.875rem;
    max-width: 90%;
  }
`;
