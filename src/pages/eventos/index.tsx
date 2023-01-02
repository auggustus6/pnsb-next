import client from "graphql/client";
import { EventsQuery } from "graphql/generated/schema";
import { QR_EVENTS } from "graphql/querys/MuralEventos";
import { GetStaticProps } from "next";
import React from "react";
import EventsIndexTemplate from "templates/EventsPageTemplate/EventsIndexTemplate";

type EventsProps = {
  events: EventsQuery;
};

export default function Noticias({ events }: EventsProps) {
  return <EventsIndexTemplate events={events} />;
}

export const getStaticProps: GetStaticProps = async () => {
  const result = await client.query<EventsQuery>({ query: QR_EVENTS });

  return {
    props: { events: result.data },
  };
};
