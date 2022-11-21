import Link from "next/link";
import * as S from "./styles";
import InstitutionalCategory from "./components/Categories/InstitutionalCategory";
import PastoralCategory from "./components/Categories/PastoralCategory";
import MoraleOfEventsCategory from "./components/Categories/MoraleOfEventsCategory";
import NewsCategory from "./components/Categories/NewsCategory";
const Footer = () => (
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
              placerat ex quam, non mattis lectus efficitur a. Phasellus ac nisi
              et lig..
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
          <InstitutionalCategory />
          <PastoralCategory />
          <MoraleOfEventsCategory />
          <NewsCategory />
        </S.WrapperLinks>
      </S.NavFooter>
    </S.ContainerFooter>
  </S.Wrapper>
);

export default Footer;
