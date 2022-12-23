import BreadCrumbs from "components/BreadCrumbs";
import Container from "components/Container";
import { BlogContentSection } from "components/Sections";
import BackGroundSection from "components/Sections/FullWidthSection";
import { useModal } from "hooks/useModal";
import DefaultLayout from "layouts/DefaultLayout";
import { NoticiaEntity, PastoralEntity } from "graphql/generated/schema";
import BlogLayout from "layouts/BlogLayout";

interface PastoraisTemplateProps {
  noticia: NoticiaEntity;
}

const NoticiaTemplate = ({ noticia }: PastoraisTemplateProps) => {
  const bgImage = noticia?.attributes?.Galeria?.data[0].attributes?.url;

  return (
    <BlogLayout
      bgImg={bgImage}
      postTitle={noticia?.attributes?.Titulo}
      postContent={noticia?.attributes?.Descricao || undefined}
      publishedAt={noticia?.attributes?.publishedAt}
      videoUrl={noticia?.attributes?.Video || undefined}
    />
  );
};

export default NoticiaTemplate;
