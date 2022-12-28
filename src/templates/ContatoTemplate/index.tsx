import BetterNextImg from "components/BetterNextImg";
import Container from "components/Container";
import Spacing from "components/Spacing";
import DefaultLayout from "layouts/DefaultLayout";
import * as Styles from "./styles";
import Image from "next/image";
import Link from "next/link";
import { DefaultInput } from "components/Inputs";
import { BorderButton, DefaultButton } from "components/Buttons";

type ContatoTemplateProps = {};

const ContatoTemplate = ({}: ContatoTemplateProps) => {
  return (
    <DefaultLayout breadCrumbs>
      <Spacing size={0} />
      <Container>
        <Styles.ContentWrapper>
          <Styles.LeftSide>
            <Styles.LeftBg src="/img/foto-igreja.jpg" objectFit="cover" />
            <Styles.InfoWrapper>
              <Styles.Info>
                <h4>Ou se preferir</h4>
                <p>
                  <Image src="/img/icons/church.svg" width={29} height={29} />
                  (17) 3234-5616(Também WhatsApp)
                </p>
                <p>
                  <Image
                    src="/img/icons/emailExample.svg"
                    width={29}
                    height={29}
                  />
                  pnsbrasil1@gmail.com
                </p>
                <p>
                  <Image
                    src="/img/icons/Telephone.svg"
                    width={29}
                    height={29}
                  />
                  Rua Vergilio Dias de Castro, 388 - CJ.Hab. São Deocleciano,{" "}
                  São José do Rio Preto - SP - CEP 17057-030
                </p>
              </Styles.Info>
              <Styles.Social>
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
              </Styles.Social>
            </Styles.InfoWrapper>
          </Styles.LeftSide>
          <Styles.FormSide>
            <h4>Fale Conosco</h4>
            <Spacing size={2} />
            <form action="">
              {" "}
              <DefaultInput
                state={""}
                setState={undefined}
                inputLabel={"Nome"}
                name={"name"}
                error={{
                  error: "",
                  touched: false,
                }}
              />
              <DefaultInput
                state={""}
                setState={undefined}
                inputLabel={"Email"}
                name={"email"}
                error={{
                  error: "",
                  touched: false,
                }}
              />
              <DefaultInput
                state={"fdasfadfsa"}
                setState={undefined}
                inputLabel={"Telefone"}
                name={"phone"}
                error={{
                  error: "",
                  touched: false,
                }}
              />
              <DefaultInput
                state={"a"}
                setState={undefined}
                inputLabel={"Mensagem"}
                name={"message"}
                error={{
                  error: "",
                  touched: false,
                }}
                textArea
              />
              
              <BorderButton style={{maxWidth: "100%"}}>ENVIAR</BorderButton>
            </form>
          </Styles.FormSide>
        </Styles.ContentWrapper>
        <Spacing size={4} />
        <Styles.StyledIframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d119072.75422041139!2d-47.8630628716355!3d-21.15146029336428!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94b9bc226406d3d1%3A0xf867b20e2cbd2976!2sPar%C3%B3quia%20Nossa%20Senhora%20de%20Lourdes!5e0!3m2!1spt-BR!2sbr!4v1672198309757!5m2!1spt-BR!2sbr"
          // width="1312"
          // height="367"
          // style="border:0;"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
        <Spacing size={4} />
      </Container>
    </DefaultLayout>
  );
};

export default ContatoTemplate;
