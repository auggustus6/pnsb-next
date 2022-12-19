import client from "graphql/client";
import { NoticiasQuery, PastoraisQuery } from "graphql/generated/schema";
import { QR_NOTICIAS } from "graphql/querys/Noticias";
import { QR_PASTORAIS } from "graphql/querys/Pastorals";
import { GetStaticProps } from "next";
import React from "react";
import NoticiaIndexTemplate from "templates/NoticiaPageTemplate/NoticiaIndexTemplate";
import PastoraisIndexTemplate from "templates/PastoralPageTemplate/PastoralIndexTemplate";

type NoticiasProps = {
  noticias: NoticiasQuery;
};

export default function Noticias({ noticias }: NoticiasProps) {
  return <NoticiaIndexTemplate noticias={noticias} />;
}

export const getStaticProps: GetStaticProps = async () => {
  const result = await client.query<NoticiasQuery>({ query: QR_NOTICIAS });

  return {
    props: { noticias: result.data },
  };
};
