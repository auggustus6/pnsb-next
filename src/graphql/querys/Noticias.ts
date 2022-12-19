import { gql } from "@apollo/client";
import { FR_NOTICIAS } from "graphql/fragments/Noticias";

export const QR_NOTICIAS = gql`
  ${FR_NOTICIAS}
  query Noticias {
    noticias {
      data {
        attributes {
          ...FR_NOTICIAS
        }
      }
    }
  }
`;

export const QR_GET_NOTICIA_BY_SLUG = gql`
  ${FR_NOTICIAS}
  query GetNoticiaBySlug($slug: StringFilterInput) {
    noticias(filters: { Slug: $slug }) {
      data {
        attributes {
          ...FR_NOTICIAS
        }
      }
    }
  }
`;