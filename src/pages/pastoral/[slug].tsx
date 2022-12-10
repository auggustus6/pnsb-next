import {
  PastoraisDocument,
  Pastoral,
  PastoralEntity,
} from "graphql/generated/schema";
import { GetStaticPaths, GetStaticProps } from "next";
import { useRouter } from "next/router";
import { ParsedUrlQuery } from "querystring";
import { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import { gqlRequest } from "services/gqlRequest";
import PastoraisTemplate from "templates/PastoralPageTemplate/PastoralTemplate";

interface SlugParams extends ParsedUrlQuery {
  slug: string | undefined;
}

interface PastoraisPostProps {
  result: PastoralEntity[];
}

export default function PastoraisPost({ result }: PastoraisPostProps) {
  const router = useRouter();
  const { slug } = router.query;

  useEffect(() => {
    console.log(result?.at(0)?.attributes?.Descricao);
  }, [result]);

  return <PastoraisTemplate slug={String(slug)} />;
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: true,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { slug } = params as SlugParams;

  const result = await gqlRequest(PastoraisDocument);

  return {
    props: { result: result.pastorals?.data },
  };
};
