import Container from "components/Container";
import DefaultLayout from "layouts/DefaultLayout";
import * as S from "./styles";

interface PastoraisTemplateProps {
  slug: string;
}

const PastoralTemplate = ({ slug }: PastoraisTemplateProps) => {
  return (
    <DefaultLayout>
      <Container
        style={{ height: "600px", display: "flex", alignItems: "center" }}
      >
        <h1>SLUG: {slug}</h1>
      </Container>
    </DefaultLayout>
  );
};

export default PastoralTemplate;
