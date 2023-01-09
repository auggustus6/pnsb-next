import { gql } from "@apollo/client";
import { FR_EVENT } from "../fragments/MuralEventos";

export const QR_EVENTS = gql`
  ${FR_EVENT}
  query Events($slug: String, $offset: Int, $limit: Int, $afterDate: DateTime) {
    events(
      filters: { Slug: { eq: $slug }, publishedAt: { gt: $afterDate } }
      pagination: { start: $offset, limit: $limit }
      sort: "publishedAt:DESC"
    ) {
      data {
        attributes {
          ...FR_EVENT
        }
      }
    }
  }
`;
