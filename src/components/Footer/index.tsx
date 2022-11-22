import Link from "next/link";
import * as S from "./styles";
import InstitutionalCategory from "./components/Categories/InstitutionalCategory";
import PastoralCategory from "./components/Categories/PastoralCategory";
import MoraleOfEventsCategory from "./components/Categories/MoraleOfEventsCategory";
import NewsCategory from "./components/Categories/NewsCategory";
import FooterLinksSection from "./components/Categories/FooterLinksSection";
import { useTheme } from "styled-components";
const Footer = () => {
  const theme = useTheme();

  const links = [
    { text: "Lorem", href: "/" },
    { text: "Ipsum dolor", href: "/" },
    { text: "Mattis lectus efficitur a.", href: "/" },
    { text: "Lorem ipsum", href: "/" },
    { text: "Ipsum dolor", href: "/" },
    { text: "Dolor sit amet", href: "/" },
    { text: "Adipiscing elit. Integer placerat", href: "/" },
    { text: "Phasellus ac nisi et lig", href: "/" },
    { text: "Mattis lectus efficitur a.", href: "/" },
    { text: "Dolor sit amet", href: "/" },
    { text: "Ipsum dolor", href: "/" },
  ];

  return (
    <S.Wrapper>
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
            {/* <InstitutionalCategory />
        <PastoralCategory />
        <MoraleOfEventsCategory />
        <NewsCategory /> */}
            <FooterLinksSection
              title="INSTITUCIONAL"
              titleColor={theme.colors.secondary}
              links={links.slice(0, 6)}
            />
            <FooterLinksSection
              title="PASTORAIS"
              titleColor={theme.colors.turquoise}
              links={links.slice(0, 7)}
              seeMoreHref="/"
              seeMoreText="Ver todas"
            />
            <FooterLinksSection
              title="MURAL DE EVENTOS"
              titleColor={theme.colors.green}
              links={links.slice(0, 7)}
              seeMoreHref="/"
              seeMoreText="Ver todos eventos"
            />
            <FooterLinksSection
              title="NOTÍCIAS"
              titleColor={theme.colors.primary}
              links={links.slice(0, 3)}
            />
          </S.WrapperLinks>
        </S.NavFooter>
      </S.ContainerFooter>
    </S.Wrapper>
  );
};

export default Footer;
