import Container from "components/layoutComponents/Container";
import Spacing from "components/layoutComponents/Spacing";
import DefaultLayout from "layouts/DefaultLayout";
import { ReactNode, useEffect, useState } from "react";
import Catequese from "./components/Catequese";
import Institucional from "./components/Institucional";
import Missas from "./components/Missas";
import PrimeiraComunhao from "./components/PrimeiraComunhao";
import Sobre from "./components/Sobre";
import Tabs from "./components/Tabs";
import * as Styles from "./styles";

// export type tabsType =
//   | "Sobre"
//   | "Institucional"
//   | "Missas"
//   | "Catequese"
//   | "Primeira Comunhao";

type InstitucionalTemplateProps = {};

const InstitucionalTemplate = ({}: InstitucionalTemplateProps) => {
  const tabsName = [
    "Sobre",
    "Institucional",
    "Missas",
    "Catequese",
    "Primeira Comunhao",
  ] as const;
  // type tabsType = typeof (tabsName as const)[number];
  type tabsType = typeof tabsName[number];

  const [tab, setTab] = useState<tabsType>("Sobre");

  return (
    <DefaultLayout breadCrumbs>
      <Container>
        <Tabs
          currentTab={tab}
          tabs={tabsName as any}
          setTab={(option) => setTab(option as tabsType)}
        />
        {tab === "Sobre" && <Sobre />}
        {tab === "Institucional" && <Institucional />}
        {tab === "Missas" && <Missas />}
        {tab === "Catequese" && <Catequese />}
        {tab === "Primeira Comunhao" && <PrimeiraComunhao />}
      </Container>

      <Spacing size={8} />
    </DefaultLayout>
  );
};

export default InstitucionalTemplate;
