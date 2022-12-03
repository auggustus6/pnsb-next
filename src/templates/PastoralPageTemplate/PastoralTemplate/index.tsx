import BreadCrumbs from "components/BreadCrumbs";
import Container from "components/Container";
import DefaultLayout from "layouts/DefaultLayout";
import { useRouter } from "next/router";
import * as S from "./styles";

interface PastoraisTemplateProps {
  slug: string;
}

const PastoralTemplate = ({ slug }: PastoraisTemplateProps) => {
  const router = useRouter();
  return (
    <DefaultLayout>
      <Container
        style={{ height: "600px", display: "flex", alignItems: "center" }}
      >
        <S.Wrapper>
          <BreadCrumbs />
          <h1>SLUG: {slug}</h1>
        </S.Wrapper>
      </Container>
    </DefaultLayout>
  );
};

export default PastoralTemplate;
