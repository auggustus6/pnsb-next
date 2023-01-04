import { FormSection } from "components/layoutComponents/Sections";
import { CgClose } from "react-icons/cg";

import styled from "styled-components";

export const MyFormSection = styled(FormSection)`
  position: relative;
`

export const CloseButton = styled(CgClose)`
  position: absolute;
  top: 1rem;
  right: 1rem;
  color: white;
  cursor: pointer;
  font-size: 2rem;
`

export const Description = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  justify-content: flex-end;
  align-items: flex-start;
  width: 100%;
  height: 60px;

  text-align: start;


  h6 {
    font-weight: 400;
    color: #555;
  }

  a {
    color: ${(p) => p.theme.colors.primary};
    &:hover {
      color: ${(p) => p.theme.colors.green};
    }
    white-space: nowrap;
  }
`;
