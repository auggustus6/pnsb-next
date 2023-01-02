import DefaultLayout from "layouts/DefaultLayout";
import * as Styles from "./styles";
import ContactForm from "./components/ContactForm";

import ChurchIcon from "../../../public/svgs/church.svg";
import EmailIcon from "../../../public/svgs/email.svg";
import PhoneIcon from "../../../public/svgs/phone.svg";
import Container from "components/layoutComponents/Container";
import Spacing from "components/layoutComponents/Spacing";

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
              <h4>Ou se preferir</h4>
              <Styles.Info
                href="https://www.google.com/maps?ll=-21.20146,-47.849988&z=15&t=m&hl=pt-BR&gl=BR&mapclient=embed&cid=17899471017957206390"
                target="_blank"
              >
                <ChurchIcon />
                <p>Rua Vergilio Dias de Castro, São José do Rio Preto - SP</p>
              </Styles.Info>
              <Styles.Info href="mailto:pnsbrasil1@gmail.com">
                <EmailIcon />
                <p>pnsbrasil1@gmail.com</p>
              </Styles.Info>
              <Styles.Info href="tel:(17) 3234-5616">
                <PhoneIcon />
                <p>(17) 3234-5616</p>
              </Styles.Info>
            </Styles.InfoWrapper>
          </Styles.LeftSide>
          <Styles.FormSide>
            <h4>Fale Conosco</h4>
            <Spacing size={2} />
            <ContactForm />
          </Styles.FormSide>
        </Styles.ContentWrapper>
        <Spacing size={4} />

        <Styles.StyledIframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d6255.878465906392!2d-47.850084728194986!3d-21.201389504757284!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xf867b20e2cbd2976!2sPar%C3%B3quia%20Nossa%20Senhora%20de%20Lourdes!5e0!3m2!1spt-BR!2sbr!4v1672541860549!5m2!1spt-BR!2sbr"
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
