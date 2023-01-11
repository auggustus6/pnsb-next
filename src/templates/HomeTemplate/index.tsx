import DefaultLayout from "layouts/DefaultLayout";
import {
  BorderButton,
  DefaultButton,
} from "components/customHtmlComponents/Buttons";
import { SectionTitle } from "components/customHtmlComponents/Labels";
import { DefaultCard, ShortcutCard } from "components/featureComponents/Cards";
import FluidCardsContainer from "components/featureComponents/FluidCardsContainer";
import Container from "components/layoutComponents/Container";
import FullWidthSection from "components/layoutComponents/Sections/FullWidthSection";
import Spacing from "components/layoutComponents/Spacing";
import BannerRecentEvent from "./components/BannerRecentEvent";
import BannerSchedule from "./components/BannerSchedule";
import * as Style from "./styles";

import Link from "next/link";
import Image from "next/image";
import theme from "styles/theme";

import { FaMicrophone } from "react-icons/fa";
import { useTilt } from "hooks/useTilt";
import {
  PastoraisQuery,
  EventsQuery,
  NoticiasQuery,
  HorariosMissasQuery,
} from "graphql/generated/schema";
import { formatDate, formatTime } from "utils/format";
import { repeatJSX } from "utils/repeatJSX";
import ShortcutsSection from "./components/ShortcutsSection";
import Modal from "components/featureComponents/Modal";
import RentPodcastModal from "./RentPodcastModal";
import { useModal } from "hooks/useModal";

type HomeTemplateProps = {
  pastorais: PastoraisQuery;
  events: EventsQuery;
  news: NoticiasQuery;
  mass: HorariosMissasQuery;
};

const HomeTemplate = ({ pastorais, events, news, mass }: HomeTemplateProps) => {
  const ref1 = useTilt(true);
  const ref2 = useTilt(true);
  const ref3 = useTilt(true);
  const { toggleModal } = useModal();

  return (
    <DefaultLayout home>
      <FullWidthSection
        img="/img/bg-main.png"
        href={
          events?.events?.data.at(0) ? "#next-events-section" : "#news-section"
        }
      >
        <Style.BannerContent>
          {events.events?.data.at(0) ? (
            <BannerRecentEvent
              post={{
                imgUrl:
                  events.events?.data[0].attributes?.Imagem?.data?.attributes
                    ?.url || "",
                slug: events.events?.data[0].attributes?.Slug || "",
                title: events.events?.data[0].attributes?.Titulo || "",
                link:
                  `noticias/${events.events?.data[0].attributes?.Slug}` || "",
                summary: events.events?.data[0].attributes?.Descricao || "",
              }}
            />
          ) : (
            <div style={{ width: "480px" }} />
          )}
          <BannerSchedule mass={mass} />
        </Style.BannerContent>
      </FullWidthSection>

      {events?.events?.data.at(0) ? (
        <Container style={{ paddingTop: "3rem" }} id="next-events-section">
          <SectionTitle
            title={"Próximos eventos"}
            subtitle={"Eventos que ocorrerão nos próximos dias:"}
            titleColor={"primary"}
          />
          <FluidCardsContainer>
            {events?.events?.data.map((event) => (
              <DefaultCard
                key={event.attributes?.Slug}
                post={{
                  title: event.attributes?.Titulo || "",
                  link: `eventos/${event.attributes?.Slug}`,
                  summary: event.attributes?.Descricao || "",
                  slug: event.attributes?.Slug || "",
                  imgUrl: event.attributes?.Imagem?.data?.attributes?.url || "",
                  date: formatDate(event.attributes?.publishedAt),
                  time: formatTime(event.attributes?.publishedAt),
                }}
              />
            ))}
          </FluidCardsContainer>
          <Spacing size={3} />
          <BorderButton link="/eventos">VER MAIS</BorderButton>
        </Container>
      ) : (
        <div style={{ marginTop: "-3rem" }}></div>
      )}

      <FullWidthSection
        color="secondary"
        height="222px"
        style={{ marginTop: "3rem", zIndex: "0" }}
      >
        <Container>
          <Style.DonateBanner>
            <Style.Left>
              <Image src="/svgs/pray.svg" width={92} height={92} />
              <div>
                <h2 style={{ color: "white" }}>
                  Colabore com a nossa Paróquia.
                </h2>
                <p>
                  Ajude no crescimento de nossa obra, seja um dizimista fiel.
                </p>
              </div>
            </Style.Left>
            <Style.CustomButton>
              COLABORE COM A NOSSA PARÓQUIA
            </Style.CustomButton>
          </Style.DonateBanner>
        </Container>
      </FullWidthSection>

      <Container style={{ marginTop: "4rem" }} id="news-section">
        <SectionTitle
          title={"Noticias da Igreja"}
          subtitle={"Eventos que ocorreram nos ultimos dias:"}
          titleColor={"turquoise"}
        />
        <FluidCardsContainer>
          {news.noticias?.data.map((newsItem) => (
            <DefaultCard
              key={newsItem.attributes?.Slug}
              post={{
                slug: newsItem.attributes?.Slug || "",
                title: newsItem.attributes?.Titulo || "",
                summary: newsItem.attributes?.Descricao || "",
                link: `noticias/${newsItem.attributes?.Slug}`,
                imgUrl: newsItem.attributes?.Imagem.data?.attributes?.url || "",
                date: formatDate(newsItem.attributes?.publishedAt),
                time: formatTime(newsItem.attributes?.publishedAt),
              }}
            />
          ))}
        </FluidCardsContainer>

        <Spacing size={3} />

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

        <ShortcutsSection />
      </Container>
      <div style={{ paddingTop: "3rem" }}></div>

      <Style.FullWidthWrapper>
        <Container>
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
                Curabitur eget metus pulvinar, interdum orci sed, suscipit quam.
                In lobortis odio vitae enim mattis pharetra. In aliquam sit amet
                massa vel interdum. Ut nec velit ullamcorper, vestibulum nisl
                id, pretium mi. Nunc dignissim consectetur massa.
              </p>
              <DefaultButton
                bgColor={theme.colors.primary}
                textColor="white"
                onClick={() => toggleModal("rentStudio")}
              >
                ALUGUE
              </DefaultButton>
              <Modal modalName={"rentStudio"}>
                <RentPodcastModal />
              </Modal>
            </Style.RentStudio>
            <Style.WrapperRentBg>
              <Style.RentStudioBackGround $img="/img/estudio.png" />
            </Style.WrapperRentBg>
          </Style.RentStudioContainer>
        </Container>
      </Style.FullWidthWrapper>

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
            <Link href="pastoral">
              <DefaultButton bgColor={theme.colors.green} textColor="white">
                SAIBA MAIS
              </DefaultButton>
            </Link>
          </Style.PastoralText>
        </Style.PastoralContainer>
      </Container>
    </DefaultLayout>
  );
};

export default HomeTemplate;
