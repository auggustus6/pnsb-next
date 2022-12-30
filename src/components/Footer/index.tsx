import Link from "next/link";
import * as S from "./styles";
import FooterLinksSection from "./components/Categories/FooterLinksSection";
import { useTheme } from "styled-components";
import Image from "next/image";
import Logo from "components/Logo";
import {
  PastoraisQuery,
  EventsQuery,
  NoticiasQuery,
} from "graphql/generated/schema";
import { useQuery } from "@apollo/client";
import { QR_PASTORAIS } from "graphql/querys/Pastorals";
import { QR_EVENTS } from "graphql/querys/MuralEventos";
import { QR_NOTICIAS } from "graphql/querys/Noticias";

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
    <S.Wrapper id="footer">
      <S.Box>
        <S.ContainerFooterLogo>
          <S.ContentLogo>
            <S.LogoImage>
              <Logo width={194} height={120} />
            </S.LogoImage>
            <S.ContentTexts>
              <h6>Lorem Impsum dollor.</h6>
              <p>Lorem Impsum dollor.</p>
              <p>Lorem Impsum.</p>
            </S.ContentTexts>
          </S.ContentLogo>
          <S.ContentInfos>
            <S.Info>
              <Image src="/img/icons/church.svg" width={29} height={29} />
              <p>Rua Vergilio Dias de Castro, São José do Rio Preto - SP</p>
            </S.Info>
            <S.Info>
              <Image src="/img/icons/emailExample.svg" width={29} height={29} />
              <p>pnsbrasil1@gmail.com</p>
            </S.Info>
            <S.Info>
              <Image src="/img/icons/Telephone.svg" width={29} height={29} />
              <p>(17) 3234-5616</p>
            </S.Info>
          </S.ContentInfos>
        </S.ContainerFooterLogo>
      </S.Box>
      <S.ContainerFooter>
        <h5>
          <span>HORÁRIOS</span> DA SECRETARIA:
        </h5>
        <S.NavFooter>
          <S.WrapperContent>
            <S.ContentLineText>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing. <br />
                <br />
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
                placerat ex quam, non mattis lectus efficitur a. Phasellus ac
                nisi et lig..
              </p>
            </S.ContentLineText>
            <S.ContainerItems>
              <p>
                <span>Dias úteis:</span> das 8h00 ás 18h.
              </p>
              <p>
                <span>Sábados:</span> das 9h às 13h00.
              </p>
              <S.Social>
                <ul>
                  <li>
                    <Link href="/">
                      <img src="/img/social/map.svg" alt="Icone de mapa" />
                    </Link>
                  </li>
                  <li>
                    <Link href="/">
                      <img
                        src="/img/social/phone.svg"
                        alt="Icone de um telefone celular"
                      />
                    </Link>
                  </li>
                  <li>
                    <Link href="/">
                      <img src="/img/social/email.svg" alt="Icone de mapa" />
                    </Link>
                  </li>
                </ul>
              </S.Social>
            </S.ContainerItems>
          </S.WrapperContent>
          <S.WrapperLinks>
            <FooterLinksSection
              title="INSTITUCIONAL"
              titleColor={theme.colors.secondary}
              links={links.slice(0, 6)}
            />
            <FooterLinksSection
              title="PASTORAIS"
              titleColor={theme.colors.turquoise}
              links={pastoraisLinks}
              seeMoreHref="/pastorais"
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
              links={links.slice(0, 3)}
              seeMoreHref="/noticias"
              seeMoreText="Ver todas as noticias"
            />
          </S.WrapperLinks>
        </S.NavFooter>
      </S.ContainerFooter>
    </S.Wrapper>
  );
};

export default Footer;
