import Container from "components/layoutComponents/Container";
import DefaultLayout from "layouts/DefaultLayout";
import { ReactNode } from "react";
import * as Styles from "./styles";

type InstitucionalTemplateProps = {};

const InstitucionalTemplate = ({}: InstitucionalTemplateProps) => {
  return (
    <DefaultLayout>
      <Container>
        <h1>InstitucionalTemplate</h1>
      </Container>
    </DefaultLayout>
  );
};

export default InstitucionalTemplate;
