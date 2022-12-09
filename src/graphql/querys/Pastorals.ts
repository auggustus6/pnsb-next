import { gql } from "@apollo/client";
import { FR_PASTORAIS } from "../fragments/Pastorais";

export const QR_PASTORAIS = gql`
  ${FR_PASTORAIS}
  query Pastorais {
    pastorals {
      data {
        attributes {
          ...FR_PASTORAIS
        }
      }
    }
  }
`;
