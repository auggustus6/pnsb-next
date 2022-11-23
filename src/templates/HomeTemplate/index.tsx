import { DefaultButton } from "components/Buttons";
import { EventCard, NewsCard, ShortcutCard } from "components/Cards";
import Container from "components/Container";
import Footer from "components/Footer";
import PageHeader from "components/PageHeader";
import BackGroundSection from "components/Sections/BackGroundSection";

import theme from "styles/theme";
import BannerRecentEvent from "./components/BannerRecentEvent";
import BannerSchedule from "./components/BannerSchedule";
import * as S from "./styles";

const HomeTemplate = () => (
  <S.Wrapper>
    <PageHeader />
    <BackGroundSection img="/img/bg-main.png" href="#footer">
      <S.BannerContent>
        <BannerRecentEvent />
        <BannerSchedule />
      </S.BannerContent>
    </BackGroundSection>
    <Container
      style={{
        padding: "3rem 0",
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
        padding: "3rem 0",
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
        padding: "3rem 0",
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
    <Footer />
  </S.Wrapper>
);

export default HomeTemplate;
