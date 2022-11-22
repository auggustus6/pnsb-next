import { DefaultButton } from "components/Buttons";
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
    <BackGroundSection img="/img/bg-main.png">
      <S.BannerContent>
        <BannerRecentEvent />
        <BannerSchedule/>
      </S.BannerContent>
    </BackGroundSection>
    <Footer />
  </S.Wrapper>
);

export default HomeTemplate;
