import { useQuery } from "@apollo/client";
import BreadCrumbs from "components/BreadCrumbs";
import { DefaultButton } from "components/Buttons";
import { EventCard, NewsCard, ShortcutCard } from "components/Cards";
import Container from "components/Container";
import Footer from "components/Footer";
import { SectionTitle } from "components/Labels";
import PageHeader from "components/PageHeader";
import BackGroundSection from "components/Sections/BackGroundSection";
import { QR_HORARIOS_MISSAS } from "graphql/querys/HorariosMissa";
import DefaultLayout from "layouts/DefaultLayout";
import { useEffect } from "react";

import theme from "styles/theme";
import BannerRecentEvent from "./components/BannerRecentEvent";
import BannerSchedule from "./components/BannerSchedule";
import * as S from "./styles";

import { useHorariosMissasQuery } from "graphql/generated/schema";

const HomeTemplate = () => {
  const { error, loading, data } = useHorariosMissasQuery();

  useEffect(() => {
    console.log(data);
  }, [data]);

  return (
    <DefaultLayout home>
      <BackGroundSection img="/img/bg-main.png" href="#footer">
        <S.BannerContent>
          <BannerRecentEvent />
          <BannerSchedule />
        </S.BannerContent>
      </BackGroundSection>

      <Container style={{ paddingTop: "3rem" }}>
        <SectionTitle
          title={"Próximos eventos"}
          subtitle={"Eventos que ocorrerão nos próximos dias:"}
          titleColor={"green"}
        />
      </Container>

      <Container
        style={{
          padding: "3rem 1rem",
          display: "flex",
          gap: "34px",
          justifyContent: "space-around",
          flexWrap: "wrap",
        }}
      >
        <EventCard />
        <EventCard />
        <EventCard />
        <EventCard />
      </Container>
      <Container
        style={{
          padding: "3rem 1rem",
          display: "flex",
          gap: "34px",
          justifyContent: "space-around",
          flexWrap: "wrap",
        }}
      >
        <NewsCard />
        <NewsCard />
        <NewsCard />
        <NewsCard />
      </Container>
      <Container
        style={{
          padding: "3rem 1rem",
          display: "flex",
          gap: "34px",
          justifyContent: "space-around",
          flexWrap: "wrap",
        }}
      >
        <ShortcutCard />
        <ShortcutCard />
        <ShortcutCard />
        <ShortcutCard />
      </Container>
    </DefaultLayout>
  );
};

export default HomeTemplate;
