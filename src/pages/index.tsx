import client from "graphql/client";
import {
  EventsQuery,
  NoticiasQuery,
  PastoraisQuery,
} from "graphql/generated/schema";
import { QR_EVENTS } from "graphql/querys/MuralEventos";
import { QR_NOTICIAS } from "graphql/querys/Noticias";
import { QR_PASTORAIS } from "graphql/querys/Pastorals";
import { GetStaticProps } from "next";
import HomeTemplate from "templates/HomeTemplate";

type HomeProps = {
  pastorais: PastoraisQuery;
  events: EventsQuery;
  news: NoticiasQuery;
};

export default function Home({ pastorais, events, news }: HomeProps) {
  return <HomeTemplate pastorais={pastorais} events={events} news={news} />;
}

export const getStaticProps: GetStaticProps = async () => {
  const pastoral = await client.query<PastoraisQuery>({
    query: QR_PASTORAIS,
    variables: { offset: 0, limit: 4 },
  });
  const events = await client.query<EventsQuery>({
    query: QR_EVENTS,
    variables: { offset: 0, limit: 4 },
  });

  const news = await client.query<NoticiasQuery>({
    query: QR_NOTICIAS,
    variables: { offset: 0, limit: 4 },
  });

  return {
    props: { pastorais: pastoral.data, events: events.data, news: news.data },
  };
};
