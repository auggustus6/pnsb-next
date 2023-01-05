import Container from "components/layoutComponents/Container";
import DefaultLayout from "layouts/DefaultLayout";
import { ReactNode, useState } from "react";
import Tabs from "./components/Tabs";
import * as Styles from "./styles";

export type tabsType =
  | "Sobre"
  | "Institucional"
  | "Missas"
  | "Catequese"
  | "Primeira Comunhao";

type InstitucionalTemplateProps = {};

const InstitucionalTemplate = ({}: InstitucionalTemplateProps) => {
  const [tab, setTab] = useState<tabsType>("Sobre");
  return (
    <DefaultLayout>
      <Container>
        {/* <Tabs /> */}
        <h1>InstitucionalTemplate</h1>
      </Container>
    </DefaultLayout>
  );
};

export default InstitucionalTemplate;
