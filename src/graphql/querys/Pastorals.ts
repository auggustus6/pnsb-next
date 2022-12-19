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

export const QR_GET_PASTORAL_BY_SLUG = gql`
  ${FR_PASTORAIS}
  query GetPastoralBySlug($slug: StringFilterInput) {
    pastorals(filters: { Slug: $slug }) {
      data {
        attributes {
          ...FR_PASTORAIS
        }
      }
    }
  }
`;
