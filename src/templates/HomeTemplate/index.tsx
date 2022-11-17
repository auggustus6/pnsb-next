import Container from "components/Container";
import Footer from "components/Footer";
import Headerr from "components/Headerr";
import PageHeader from "components/PageHeader";

import Image from "next/image";
import * as S from "./styles";

const HomeTemplate = () => (
  <S.Wrapper>
    {/* <Headerr /> */}
    <PageHeader />
    <S.BgSection>
      <Image src="/img/bg-main.png" width={1440} height={623} />
      <Container style={{ height: "90vh" }}></Container>
    </S.BgSection>
    <Footer />
  </S.Wrapper>
);

export default HomeTemplate;
