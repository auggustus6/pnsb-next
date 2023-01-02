import client from "graphql/client";
import { PastoraisQuery } from "graphql/generated/schema";
import { QR_PASTORAIS } from "graphql/querys/Pastorals";
import { GetStaticProps } from "next";
import React from "react";
import PastoraisIndexTemplate from "templates/PastoralPageTemplate/PastoralIndexTemplate";

type PastoraisProps = {
  pastorais: PastoraisQuery;
};

export default function Pastorais({ pastorais }: PastoraisProps) {
  return <PastoraisIndexTemplate pastorais={pastorais} />;
}

export const getStaticProps: GetStaticProps = async () => {
  const result = await client.query<PastoraisQuery>({ query: QR_PASTORAIS });

  return {
    props: { pastorais: result.data },
  };
};
