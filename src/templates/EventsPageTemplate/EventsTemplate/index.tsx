import { EventEntity } from "graphql/generated/schema";
import BlogLayout from "layouts/BlogLayout";

interface PastoraisTemplateProps {
  event: EventEntity;
}

const EventsTemplate = ({ event }: PastoraisTemplateProps) => {
  const bgImage = event?.attributes?.Imagem?.data?.attributes?.url;

  return (
      <BlogLayout
        bgImg={bgImage}
        postTitle={event?.attributes?.Titulo}
        postContent={event?.attributes?.Descricao || ""}
        publishedAt={event?.attributes?.publishedAt}
      />
  );
};

export default EventsTemplate;
