import BreadCrumbs from "components/BreadCrumbs";
import Container from "components/Container";
import { BlogContentSection } from "components/Sections";
import BackGroundSection from "components/Sections/FullWidthSection";
import DefaultLayout from "layouts/DefaultLayout";
import { EventEntity } from "graphql/generated/schema";

interface PastoraisTemplateProps {
  event: EventEntity;
}

const EventsTemplate = ({ event }: PastoraisTemplateProps) => {
  const bgImage = event?.attributes?.Imagem?.data?.attributes?.url;

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
          title={event?.attributes?.Titulo || ""}
          dangerousHtml={event?.attributes?.Descricao || ""}
          publishedAt={event?.attributes?.publishedAt || ""}
        />
      </Container>
    </DefaultLayout>
  );
};

export default EventsTemplate;
