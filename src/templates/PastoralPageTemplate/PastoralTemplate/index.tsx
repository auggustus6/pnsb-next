import { useModal } from "hooks/useModal";
import theme from "styles/theme";
import FormikForm from "./components/FormikForm";
import { PastoralEntity } from "graphql/generated/schema";
import BlogLayout from "layouts/BlogLayout";
import { DefaultButton } from "components/customHtmlComponents/Buttons";
import Modal from "components/featureComponents/Modal";
import { useRouter } from "next/dist/client/router";

interface PastoraisTemplateProps {
  pastoral: PastoralEntity;
}

const PastoralTemplate = ({ pastoral }: PastoraisTemplateProps) => {
  const router = useRouter();
  const { toggleModal } = useModal();
  const bgImage = pastoral?.attributes?.Imagem?.data?.attributes?.url;

  // console.log(router.back());

  return (
    <BlogLayout
      bgImg={bgImage}
      postTitle={pastoral?.attributes?.Titulo}
      postContent={pastoral?.attributes?.Descricao || undefined}
      publishedAt={pastoral?.attributes?.publishedAt}
      videoUrl={pastoral?.attributes?.Video || undefined}
    >
      <div style={{ padding: "1rem 0 5rem" }}>
        <DefaultButton
          style={{
            background: theme.colors.green,
            color: "white",
            margin: "0 auto",
          }}
          onClick={() => toggleModal("wannaParticipate")}
        >
          Quero participar
        </DefaultButton>

        <Modal modalName={"wannaParticipate"}>
          <FormikForm />
        </Modal>
      </div>
    </BlogLayout>
  );
};

export default PastoralTemplate;
