import client from "graphql/client";
import { PastoraisQuery, PastoralEntity } from "graphql/generated/schema";
import {
  QR_GET_PASTORAL_BY_SLUG,
  QR_PASTORAIS,
} from "graphql/querys/Pastorals";
import { GetStaticPaths, GetStaticProps } from "next";
import { ParsedUrlQuery } from "querystring";
import PastoralTemplate from "templates/PastoralPageTemplate/PastoralTemplate";

interface SlugParams extends ParsedUrlQuery {
  slug: string | undefined;
}

interface PastoraisPostProps {
  pastoral: PastoralEntity;
}

export default function PastoralPost({ pastoral }: PastoraisPostProps) {
  return <PastoralTemplate pastoral={pastoral} />;
}

export const getStaticPaths: GetStaticPaths = async () => {
  const result = await client.query<PastoraisQuery>({ query: QR_PASTORAIS });

  const paths = result.data.pastorals?.data.map((pastoral) => {
    return {
      params: {
        slug: pastoral.attributes?.Slug as string,
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
  const result = await client.query<PastoraisQuery>({
    query: QR_GET_PASTORAL_BY_SLUG,
    variables: { $slug: slug },
  });

  return {
    props: { pastoral: result.data.pastorals?.data[0] },
    revalidate: 60 * 60, //1 hour
  };
};
