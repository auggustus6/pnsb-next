import { gql } from "@apollo/client";

export const FR_PASTORAIS = gql`
  fragment FR_PASTORAIS on Pastoral {
    Titulo
    Descricao
    Galeria {
      data {
        attributes {
          url
          alternativeText
        }
      }
    }
    Slug
    Imagem {
      data {
        attributes {
          url
          alternativeText
        }
      }
    }
    Responsavel
    Video
    publishedAt
  }
`;
