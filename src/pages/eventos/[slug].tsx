import client from "graphql/client";
import {
  EventEntity,
  EventsQuery,
  NoticiasQuery,
} from "graphql/generated/schema";
import { QR_EVENTS } from "graphql/querys/MuralEventos";
import { GetStaticPaths, GetStaticProps } from "next";
import { ParsedUrlQuery } from "querystring";
import EventsTemplate from "templates/EventsPageTemplate/EventsTemplate";

interface SlugParams extends ParsedUrlQuery {
  slug: string | undefined;
}

interface EventsPostProps {
  event: EventEntity;
}

export default function EventsPost({ event }: EventsPostProps) {
  return <EventsTemplate event={event} />;
}

export const getStaticPaths: GetStaticPaths = async () => {
  const result = await client.query<EventsQuery>({
    query: QR_EVENTS,
  });

  const paths = result.data.events?.data.map((event) => {
    return {
      params: {
        slug: event.attributes?.Slug as string,
      },
    };
  });

  return {
    paths: [...(paths || [])],
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { slug } = params as SlugParams;
  const result = await client.query<EventsQuery>({
    query: QR_EVENTS,
    variables: { slug },
  });

  return {
    props: { event: result.data.events?.data[0] },
    revalidate: 60 * 60, //1 hour
  };
};
