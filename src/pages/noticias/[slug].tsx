import client from "graphql/client";
import { NoticiaEntity, NoticiasQuery } from "graphql/generated/schema";
import { QR_GET_NOTICIA_BY_SLUG, QR_NOTICIAS } from "graphql/querys/Noticias";
import { GetStaticPaths, GetStaticProps } from "next";
import { ParsedUrlQuery } from "querystring";
import NoticiaTemplate from "templates/NoticiaPageTemplate/NoticiaTemplate";

interface SlugParams extends ParsedUrlQuery {
  slug: string | undefined;
}

interface NoticiaPostProps {
  noticia: NoticiaEntity;
}

export default function NoticiaPost({ noticia }: NoticiaPostProps) {
  return <NoticiaTemplate noticia={noticia} />;
}

export const getStaticPaths: GetStaticPaths = async () => {
  const result = await client.query<NoticiasQuery>({
    query: QR_GET_NOTICIA_BY_SLUG,
  });

  const paths = result.data.noticias?.data.map((noticia) => {
    return {
      params: {
        slug: noticia.attributes?.Slug as string,
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
  const result = await client.query<NoticiasQuery>({
    query: QR_NOTICIAS,
    variables: { $slug: slug },
  });

  return {
    props: { noticia: result.data.noticias?.data[0] },
    revalidate: 60 * 60, //1 hour
  };
};
