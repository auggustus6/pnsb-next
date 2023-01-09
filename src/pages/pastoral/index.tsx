import client from "graphql/client";
import { PastoraisQuery } from "graphql/generated/schema";
import { QR_PASTORAIS } from "graphql/querys/Pastorals";
import { GetStaticProps } from "next";
import React from "react";
import PastoraisIndexTemplate from "templates/PastoralPageTemplate/PastoralIndexTemplate";

type PastoraisProps = {
  pastorais: PastoraisQuery;
  postLength: number;
};

export default function Pastorais({ pastorais, postLength }: PastoraisProps) {
  return (
    <PastoraisIndexTemplate pastorais={pastorais} postLength={postLength} />
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const result = await client.query<PastoraisQuery>({
    query: QR_PASTORAIS,
    variables: {
      offset: 0,
      limit: 8,
    },
  });

  return {
    props: {
      pastorais: result.data,
      postLength: result.data.pastorals?.meta.pagination.total,
    },
  };
};
