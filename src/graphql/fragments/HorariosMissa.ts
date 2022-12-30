import { gql } from "@apollo/client";

export const FR_HORARIOS_MISSAS = gql`
  fragment FR_HORARIOS_MISSAS on HorariosMissa {
    Dia
    Tipo
    Horario {
      Hora
    }
  }
`;
