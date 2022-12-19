import BreadCrumbs from "components/BreadCrumbs";
import { DefaultButton } from "components/Buttons";
import Container from "components/Container";
import Modal from "components/Modal";
import { BlogContentSection } from "components/Sections";
import BackGroundSection from "components/Sections/FullWidthSection";
import { FormSection } from "components/Sections";
import { useModal } from "hooks/useModal";
import DefaultLayout from "layouts/DefaultLayout";
import { useRouter } from "next/router";
import { useState } from "react";
import theme from "styles/theme";
import { DefaultInput } from "components/Inputs";
import { customSwal } from "utils/customSwal";
import FormikForm from "./components/FormikForm";
import { PastoralEntity } from "graphql/generated/schema";

interface PastoraisTemplateProps {
  pastoral: PastoralEntity;
}

const PastoralTemplate = ({ pastoral }: PastoraisTemplateProps) => {
  const { toggleModal } = useModal();
  const bgImage = pastoral?.attributes?.Galeria?.data[0].attributes?.url;

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
          title={pastoral?.attributes?.Titulo || ""}
          dangerousHtml={pastoral?.attributes?.Descricao || ""}
          publishedAt={pastoral?.attributes?.publishedAt || ""}
          author={pastoral?.attributes?.Responsavel || ""}
          videoUrl={pastoral?.attributes?.Video || ""}
        />
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
      </Container>
    </DefaultLayout>
  );
};

export default PastoralTemplate;
