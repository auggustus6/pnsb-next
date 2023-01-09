import Link from "next/link";
import * as Styles from "./styles";
import FooterLinksSection from "./components/FooterLinksSection";
import { useTheme } from "styled-components";

import {
  PastoraisQuery,
  EventsQuery,
  NoticiasQuery,
} from "graphql/generated/schema";

import ChurchIcon from "../../../../public/svgs/church.svg";
import EmailIcon from "../../../../public/svgs/email.svg";
import PhoneIcon from "../../../../public/svgs/phone.svg";

import SmartPhoneRound from "../../../../public/svgs/smartphone_round.svg";
import GeoRound from "../../../../public/svgs/geo_round.svg";
import EmailRound from "../../../../public/svgs/email_round.svg";

import { useQuery } from "@apollo/client";
import { QR_PASTORAIS } from "graphql/querys/Pastorals";
import { QR_EVENTS } from "graphql/querys/MuralEventos";
import { QR_NOTICIAS } from "graphql/querys/Noticias";
import Logo from "../Logo";

const Footer = () => {
  const { data: pastorais } = useQuery<PastoraisQuery>(QR_PASTORAIS);
  const { data: events } = useQuery<EventsQuery>(QR_EVENTS);
  const { data: news } = useQuery<NoticiasQuery>(QR_NOTICIAS);
  const theme = useTheme();

  const links = [
    { text: "Lorem", href: "/" },
    { text: "Ipsum dolor", href: "/" },
    { text: "Mattis lectus efficitur a.", href: "/" },
    { text: "Lorem ipsum", href: "/" },
    { text: "Ipsum dolor", href: "/" },
    { text: "Dolor sit amet", href: "/" },
  ];

  const pastoraisLinks = pastorais?.pastorals?.data.map((past) => ({
    text: past.attributes?.Titulo,
    href: `/pastoral/${past.attributes?.Slug}`,
  }));

  const eventsLinks = events?.events?.data.map((event) => ({
    text: event.attributes?.Titulo,
    href: `/eventos/${event.attributes?.Slug}`,
  }));

  const newsLinks = news?.noticias?.data.map((noticia) => ({
    text: noticia.attributes?.Titulo,
    href: `/noticias/${noticia.attributes?.Slug}`,
  }));

  return (
    <Styles.Wrapper id="footer">
      <Styles.Box>
        <Styles.ContainerFooterLogo>
          <Styles.ContentLogo>
            <Styles.LogoImage>
              <Logo width={194} height={120} />
            </Styles.LogoImage>
            <Styles.ContentTexts>
              <h6>Lorem Impsum dollor.</h6>
              <p>Lorem Impsum dollor.</p>
              <p>Lorem Impsum.</p>
            </Styles.ContentTexts>
          </Styles.ContentLogo>
          <Styles.ContentInfos>
            <Styles.Info
              href="https://www.google.com/maps?ll=-21.20146,-47.849988&z=15&t=m&hl=pt-BR&gl=BR&mapclient=embed&cid=17899471017957206390"
              target="_blank"
            >
              <ChurchIcon />
              <p>Rua Vergilio Dias de Castro, São José do Rio Preto - SP</p>
            </Styles.Info>
            <Styles.Info href="mailto:pnsbrasil1@gmail">
              <EmailIcon />
              <p>pnsbrasil1@gmail.com</p>
            </Styles.Info>
            <Styles.Info href="tel:17 3234-5616">
              <PhoneIcon />
              <p>(17) 3234-5616</p>
            </Styles.Info>
          </Styles.ContentInfos>
        </Styles.ContainerFooterLogo>
      </Styles.Box>
      <Styles.ContainerFooter>
        <h5>
          <span>HORÁRIOS</span> DA <br /> SECRETARIA:
        </h5>
        <Styles.NavFooter>
          <Styles.WrapperContent>
            <Styles.ContentLineText>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing. <br />
                <br />
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
                placerat ex quam, non mattis lectus efficitur a. Phasellus ac
                nisi et lig..
              </p>
            </Styles.ContentLineText>
            <Styles.ContainerItems>
              <p>
                <span>Dias úteis:</span> das 8h00 ás 18h.
              </p>
              <p>
                <span>Sábados:</span> das 9h às 13h00.
              </p>
              <p>CNPJ.: 450969890090-92</p>
              <Link href={""}>
                <span
                  style={{ color: theme.colors.primary, cursor: "pointer" }}
                >
                  Politicas de privacidade
                </span>
              </Link>
              <Styles.Social>
                <ul>
                  <li>
                    <a href="/" target="_blank">
                      <GeoRound fontSize={60} />
                    </a>
                  </li>
                  <li>
                    <a href="tel:17 3224-5616">
                      <SmartPhoneRound fontSize={60} />
                    </a>
                  </li>
                  <li>
                    <a href="mailto:pnsbrasil1@gmail.com">
                      <EmailRound fontSize={60} />
                    </a>
                  </li>
                </ul>
              </Styles.Social>
            </Styles.ContainerItems>
          </Styles.WrapperContent>
          <Styles.WrapperLinks>
            <FooterLinksSection
              title="INSTITUCIONAL"
              titleColor={theme.colors.secondary}
              links={links.slice(0, 6)}
            />
            <FooterLinksSection
              title="PASTORAIS"
              titleColor={theme.colors.turquoise}
              links={pastoraisLinks}
              seeMoreHref="/pastoral"
              seeMoreText="Ver todas pastorais"
            />
            <FooterLinksSection
              title="MURAL DE EVENTOS"
              titleColor={theme.colors.green}
              links={eventsLinks}
              seeMoreHref="/eventos"
              seeMoreText="Ver todos eventos"
            />
            <FooterLinksSection
              title="NOTÍCIAS"
              titleColor={theme.colors.primary}
              links={newsLinks}
              seeMoreHref="/noticias"
              seeMoreText="Ver todas noticias"
            />
          </Styles.WrapperLinks>
        </Styles.NavFooter>
      </Styles.ContainerFooter>
      <Styles.FooterByID>
        Desenvolvido com <span>amor e carinho</span> pela{" "}
        <a href="https://www.iniciodesign.com.br/" target="_blank">
          <img src="/img/id.png" alt="logo inicio design"/>
        </a>
      </Styles.FooterByID>
    </Styles.Wrapper>
  );
};

export default Footer;
