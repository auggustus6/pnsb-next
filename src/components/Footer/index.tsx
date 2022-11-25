import Link from "next/link";
import * as S from "./styles";
import FooterLinksSection from "./components/Categories/FooterLinksSection";
import { useTheme } from "styled-components";
import Image from "next/image";
const Footer = () => {
  const theme = useTheme();

  const links = [
    { text: "Lorem", href: "/" },
    { text: "Ipsum dolor", href: "/" },
    { text: "Mattis lectus efficitur a.", href: "/" },
    { text: "Lorem ipsum", href: "/" },
    { text: "Ipsum dolor", href: "/" },
    { text: "Dolor sit amet", href: "/" },
    { text: "Adipiscing elit. ", href: "/" },
    { text: "Phasellus ac nisi et lig", href: "/" },
    { text: "Mattis lectus efficitur a.", href: "/" },
    { text: "Dolor sit amet", href: "/" },
    { text: "Ipsum dolor", href: "/" },
  ];

  return (
    <S.Wrapper id="footer">
      <S.Box>
        <S.ContainerFooterLogo>
          <S.ContentLogo>
            <S.LogoImage>
              <Image src="/img/logo.png" width={150} height={150} />
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
              <p>Rua Lorem Impsum dollor.</p>
            </S.Info>
            <S.Info>
              <Image src="/img/icons/emailExample.svg" width={29} height={29} />
              <p>(11) 9 9999-9999</p>
            </S.Info>
            <S.Info>
              <Image src="/img/icons/Telephone.svg" width={29} height={29} />
              <p>Rua Lorem Impsum dollor.</p>
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
