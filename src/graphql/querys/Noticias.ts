import { gql } from "@apollo/client";
import { FR_NOTICIAS } from "graphql/fragments/Noticias";

export const QR_NOTICIAS = gql`
  ${FR_NOTICIAS}
  query Noticias($slug: String, $offset: Int, $limit: Int) {
    noticias(
      filters: { Slug: { eq: $slug } }
      pagination: { start: $offset, limit: $limit }
      sort: "publishedAt:DESC"
    ) {
      data {
        attributes {
          ...FR_NOTICIAS
        }
      }
    }
  }
`;
