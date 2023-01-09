import client from "graphql/client";
import { NoticiasQuery } from "graphql/generated/schema";
import { QR_NOTICIAS } from "graphql/querys/Noticias";
import { GetStaticProps } from "next";
import React from "react";
import NoticiaIndexTemplate from "templates/NoticiaPageTemplate/NoticiaIndexTemplate";

type NoticiasProps = {
  noticias: NoticiasQuery;
};

export default function Noticias({ noticias }: NoticiasProps) {
  return <NoticiaIndexTemplate noticias={noticias} />;
}

export const getStaticProps: GetStaticProps = async () => {
  const result = await client.query<NoticiasQuery>({
    query: QR_NOTICIAS,
    variables: {
      offset: 0,
      limit: 8,
    },
  });

  return {
    props: { noticias: result.data },
  };
};
