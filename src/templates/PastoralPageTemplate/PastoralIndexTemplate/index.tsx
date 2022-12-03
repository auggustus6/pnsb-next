import BreadCrumbs from "components/BreadCrumbs";
import Container from "components/Container";
import DefaultLayout from "layouts/DefaultLayout";
import * as S from "./styles";

const PastoralIndexTemplate = () => {
  return (
    <DefaultLayout>
      <Container
        style={{ height: "600px", display: "flex", alignItems: "center" }}
      >
        <BreadCrumbs />
        <h1>PastoralIndexTemplate</h1>
      </Container>
    </DefaultLayout>
  );
};

export default PastoralIndexTemplate;
