import { NewsCard, ShortcutCard } from "components/Cards";
import Container from "components/Container";
import { SectionTitle } from "components/Labels";
import FullWidthSection from "components/Sections/FullWidthSection";
import DefaultLayout from "layouts/DefaultLayout";

import BannerRecentEvent from "./components/BannerRecentEvent";
import BannerSchedule from "./components/BannerSchedule";
import * as Style from "./styles";

import { BorderButton, DefaultButton } from "components/Buttons";
import Link from "next/link";
import Image from "next/image";
import theme from "styles/theme";
import { FaMicrophone } from "react-icons/fa";
import { useTilt } from "hooks/useTilt";
import api from "services/axios";

const HomeTemplate = () => {
  const ref1 = useTilt(true);
  const ref2 = useTilt(true);
  const ref3 = useTilt(true);

  async function handleButton() {
    const result = await api.post("/send_facebook_post", {
      message: "Post feito pelo site",
      photo: "https://i.kym-cdn.com/photos/images/original/001/972/760/d6c",
    });
    if (result.status === 200) {
      alert("post enviado com sucesso.");
    }
  }

  return (
    <DefaultLayout home>
      <FullWidthSection img="/img/bg-main.png" href="#footer">
        <Style.BannerContent>
          <BannerRecentEvent />
          <BannerSchedule />
        </Style.BannerContent>
      </FullWidthSection>

      <BorderButton onClick={handleButton} style={{ marginTop: "3rem" }}>
        Enviar Post
      </BorderButton>

      <Container style={{ paddingTop: "3rem" }}>
        <SectionTitle
          title={"Próximos eventos"}
          subtitle={"Eventos que ocorrerão nos próximos dias:"}
          titleColor={"primary"}
        />
        <BorderButton link="/eventos">VER MAIS</BorderButton>
      </Container>

      <FullWidthSection
        color="secondary"
        height="222px"
        style={{ marginTop: "3rem" }}
      >
        <Container>
          <Style.DonateBanner>
            <Style.Left>
              <Image src="/svgs/pray.svg" width={92} height={92} />
              <div>
                <h2 style={{ color: "white" }}>Seja um Dizimista Fiel</h2>
                <p>
                  Ajude no crescimento de nossa obra, seja um dizimista fiel.
                </p>
              </div>
            </Style.Left>
            <Style.CustomButton>SEJA UM DIZIMISTA</Style.CustomButton>
          </Style.DonateBanner>
        </Container>
      </FullWidthSection>

      <Container style={{ marginTop: "4rem" }}>
        <SectionTitle
          title={"Noticias da Igreja"}
          subtitle={"Eventos que ocorreram nos ultimos dias:"}
          titleColor={"turquoise"}
        />
        <Style.CardsContainer $height={320}>
          <NewsCard />
          <NewsCard />
          <NewsCard />
          <NewsCard />
        </Style.CardsContainer>
        <div style={{ marginTop: "2rem" }}></div>
        <BorderButton color="turquoise" link="/noticias">
          VER MAIS
        </BorderButton>
      </Container>
      <Container style={{ paddingTop: "3rem" }}>
        <SectionTitle
          title={"Acesso rápido"}
          subtitle={"Encontre de forma rápida e fácil o que está buscando."}
          titleColor={"secondary"}
        />
        <Style.CardsContainer $height={360}>
          <ShortcutCard />
          <ShortcutCard />
          <ShortcutCard />
          <ShortcutCard />
        </Style.CardsContainer>
      </Container>
      <div style={{ paddingTop: "3rem" }}></div>

      <Style.RentStudioContainer>
        <Style.RentStudio>
          <h2>
            Alugue nosso estúdio de{" "}
            <b>
              Podcast
              <FaMicrophone />
            </b>
          </h2>
          <p>
            Curabitur eget metus pulvinar, interdum orci sed, suscipit quam. In
            lobortis odio vitae enim mattis pharetra. In aliquam sit amet massa
            vel interdum. Ut nec velit ullamcorper, vestibulum nisl id, pretium
            mi. Nunc dignissim consectetur massa.
          </p>
          <Link href={""}>
            <DefaultButton bgColor={theme.colors.primary} textColor="white">
              SAIBA MAIS
            </DefaultButton>
          </Link>
        </Style.RentStudio>
        <Style.RentStudioBackGround $img="/img/estudio.png" />
      </Style.RentStudioContainer>

      <Container>
        <Style.PastoralContainer>
          <Style.PastoralImages>
            <Style.PastoralImageItem
              src="/img/image1.png"
              $width={45}
              $height={100}
              ref={ref1}
              style={{ marginLeft: "2vw" }}
            />
            <div>
              <Style.PastoralImageItem
                src="/img/image2.png"
                $width={60}
                $height={30}
                ref={ref2}
              />
              <Style.PastoralImageItem
                src="/img/image3.png"
                $width={100}
                $height={50}
                ref={ref3}
              />
            </div>
          </Style.PastoralImages>
          <Style.PastoralText>
            <h2>Faça parte das nossas pastorais</h2>
            <p>
              Curabitur eget metus pulvinar, interdum orci sed, suscipit quam.
              In lobortis odio vitae enim mattis pharetra. In aliquam sit amet
              massa vel interdum. Ut nec velit ullamcorper, vestibulum nisl id,
              pretium mi. Nunc dignissim consectetur massa.
            </p>
            <DefaultButton bgColor={theme.colors.green} textColor="white">
              SAIBA MAIS
            </DefaultButton>
          </Style.PastoralText>
        </Style.PastoralContainer>
      </Container>
    </DefaultLayout>
  );
};

export default HomeTemplate;
