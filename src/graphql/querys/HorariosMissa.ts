import { gql } from "@apollo/client";
import { FR_HORARIOS_MISSAS } from "../fragments/HorariosMissa";

export const QR_HORARIOS_MISSAS = gql`
  ${FR_HORARIOS_MISSAS}
  query {
    horariosMissas {
      data {
        attributes {
          ...FR_HORARIOS_MISSAS
        }
      }
    }
  }
`;
