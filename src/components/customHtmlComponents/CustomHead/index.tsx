import Head from "next/head";

type CustomHeadProps = {
  title?: string;
  description?: string;
};

export default function CustomHead({ title, description }: CustomHeadProps) {
  return (
    <Head>
      {title && (
        <>
          <title>{title}</title>
          <meta property="og:title" content={title} />
        </>
      )}
      {description && (
        <>
          <meta name="description" content={description} />
          <meta property="og:type" content={description} />
        </>
      )}
    </Head>
  );
}
