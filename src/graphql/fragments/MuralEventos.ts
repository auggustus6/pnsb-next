import { gql } from "@apollo/client";

export const FR_EVENT = gql`
  fragment FR_EVENT on Event {
    Titulo
    Descricao
    Slug
    Imagem {
      data {
        attributes {
          url
          alternativeText
        }
      }
    }
    publishedAt
  }
`;
