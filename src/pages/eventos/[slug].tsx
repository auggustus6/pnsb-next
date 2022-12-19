import client from "graphql/client";
import { EventEntity, EventsQuery, NoticiasQuery } from "graphql/generated/schema";
import { QR_EVENTS, QR_EVENTS_BY_SLUG } from "graphql/querys/MuralEventos";
import { QR_GET_NOTICIA_BY_SLUG } from "graphql/querys/Noticias";
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

  console.log(result.data.events?.data[0].attributes?.Slug);

  const paths = result.data.events?.data.map((event) => {
    return {
      params: {
        slug: event.attributes?.Slug as string,
      },
    };
  });

  return {
    paths: [...(paths || [])],
    fallback: "blocking",
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { slug } = params as SlugParams;
  const result = await client.query<EventsQuery>({
    query: QR_EVENTS_BY_SLUG,
    variables: { $slug: slug },
  });

  return {
    props: { pastoral: result.data.events?.data[0] },
    revalidate: 60 * 60, //1 hour
  };
};
