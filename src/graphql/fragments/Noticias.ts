import { gql } from "@apollo/client";

export const FR_NOTICIAS = gql`
  fragment FR_NOTICIAS on Noticia {
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
    Video
    publishedAt
  }
`;
