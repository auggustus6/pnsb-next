import BreadCrumbs from "components/BreadCrumbs";
import { DefaultButton } from "components/Buttons";
import Container from "components/Container";
import Modal from "components/Modal";
import { BlogContentSection } from "components/Sections";
import BackGroundSection from "components/Sections/BackGroundSection";
import { FormSection } from "components/Sections";
import { useModal } from "hooks/useModal";
import DefaultLayout from "layouts/DefaultLayout";
import { useRouter } from "next/router";
import { useState } from "react";
import theme from "styles/theme";
import post from "./tempPost.json";
import { DefaultInput } from "components/Inputs";
import { customSwal } from "utils/customSwal";

interface PastoraisTemplateProps {
  slug: string;
}

const PastoralTemplate = ({ slug }: PastoraisTemplateProps) => {
  const [texto, setTexto] = useState("");
  const { toggleModal } = useModal();
  const {closeAllModals} = useModal();

  const handleSubmitButton = () =>{
    closeAllModals();
    customSwal({title: "Teste",text:"Alo? bip bop?", icon: "success", confirmButtonText: "Ok"});
  }

  return (
    <DefaultLayout>
      <BackGroundSection img="/img/voluntarios.jpg" height="320px" />
      <Container>
        <div style={{ padding: "1rem 0 2rem" }}>
          <BreadCrumbs />
        </div>
        <BlogContentSection
          title={post.title}
          dangerousHtml={post.content}
          publishedAt={post.publishedAt}
          author={post.author}
          videoUrl="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
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

          {/* <MyModal isOpen={isModalOpen} setIsOpen={()=> setIsModalOpen(true)} /> */}
          <Modal modalName={"wannaParticipate"}>
            <FormSection imgUrl="/img/jesus.jpg">
              <h4 style={{ color: theme.colors.primary, marginBottom: "1rem" }}>
                Algum Titulo Legal
              </h4>

              <DefaultInput
                state={texto}
                setState={setTexto}
                inputLabel="Nome Completo"
              />
              <DefaultInput
                state={texto}
                setState={setTexto}
                inputLabel="Email"
              />
              <DefaultInput
                state={texto}
                setState={setTexto}
                inputLabel="WhatsApp/Celular"
              />

              <DefaultButton
                bgColor={theme.colors.primary}
                height="3rem"
                width="100%"
                textColor="white"
                style={{ borderRadius: "5px"}}
                onClick={handleSubmitButton}
              >
                Participar
              </DefaultButton>
            </FormSection>
          </Modal>
        </div>
      </Container>
    </DefaultLayout>
  );
};

export default PastoralTemplate;
