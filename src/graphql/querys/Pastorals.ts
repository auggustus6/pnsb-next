import { gql } from "@apollo/client";
import { FR_PASTORAIS } from "../fragments/Pastorais";

export const QR_PASTORAIS = gql`
  ${FR_PASTORAIS}
  query Pastorais($slug: String, $offset: Int, $limit: Int) {
    pastorals(
      filters: { Slug: { eq: $slug } }
      pagination: { start: $offset, limit: $limit }
      sort: "publishedAt:DESC"
    ) {
      data {
        attributes {
          ...FR_PASTORAIS
        }
      }
      meta {
        pagination {
          total
        }
      }
    }
  }
`;
