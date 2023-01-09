import Disqus from "components/featureComponents/Disqus";
import Container from "components/layoutComponents/Container";
import Spacing from "components/layoutComponents/Spacing";
import { NoticiaEntity } from "graphql/generated/schema";
import BlogLayout from "layouts/BlogLayout";

interface PastoraisTemplateProps {
  noticia: NoticiaEntity;
}

const NoticiaTemplate = ({ noticia }: PastoraisTemplateProps) => {
  const bgImage = noticia?.attributes?.Imagem.data?.attributes?.url

  return (
    <BlogLayout
      bgImg={bgImage || "/svgs/no_content.svg"}
      postTitle={noticia?.attributes?.Titulo}
      postContent={noticia?.attributes?.Descricao || undefined}
      publishedAt={noticia?.attributes?.publishedAt}
      videoUrl={noticia?.attributes?.Video || undefined}
    >
      <Container style={{ maxWidth: "1045px" }}>
        <Disqus />
      </Container>
      <Spacing size={6} />
    </BlogLayout>
  );
};

export default NoticiaTemplate;
