import BreadCrumbs from "components/BreadCrumbs";
import Container from "components/Container";
import { BlogContentSection } from "components/Sections";
import BackGroundSection from "components/Sections/FullWidthSection";
import { useModal } from "hooks/useModal";
import DefaultLayout from "layouts/DefaultLayout";
import { NoticiaEntity, PastoralEntity } from "graphql/generated/schema";

interface PastoraisTemplateProps {
  noticia: NoticiaEntity;
}

const NoticiaTemplate = ({ noticia }: PastoraisTemplateProps) => {
  const bgImage = noticia?.attributes?.Galeria?.data[0].attributes?.url;

  return (
    <DefaultLayout>
      <BackGroundSection
        img={bgImage ? bgImage : "/img/voluntarios.jpg"}
        height="320px"
      />
      <Container>
        <div style={{ padding: "1rem 0 2rem" }}>
          <BreadCrumbs />
        </div>
        <BlogContentSection
          title={noticia?.attributes?.Titulo || ""}
          dangerousHtml={noticia?.attributes?.Descricao || ""}
          publishedAt={noticia?.attributes?.publishedAt || ""}
          videoUrl={noticia?.attributes?.Video || ""}
        />
      </Container>
    </DefaultLayout>
  );
};

export default NoticiaTemplate;
