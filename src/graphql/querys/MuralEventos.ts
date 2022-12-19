import { gql } from "@apollo/client";
import { FR_EVENT } from "../fragments/MuralEventos";

export const QR_EVENTS = gql`
  ${FR_EVENT}
  query Events {
    events {
      data {
        attributes {
          ...FR_EVENT
        }
      }
    }
  }
`;

export const QR_EVENTS_BY_SLUG = gql`
  ${FR_EVENT}
  query GetEventBySlug($slug: StringFilterInput) {
    events(filters: { Slug: $slug }) {
      data {
        attributes {
          ...FR_EVENT
        }
      }
    }
  }
`;
