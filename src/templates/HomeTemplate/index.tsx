import { DefaultButton } from "components/Buttons";
import Container from "components/Container";
import Footer from "components/Footer";
import PageHeader from "components/PageHeader";
import BackGroundSection from "components/Sections/BackGroundSection";

import theme from "styles/theme";
import * as S from "./styles";

const HomeTemplate = () => (
  <S.Wrapper>
    <PageHeader />
    <BackGroundSection img="/img/bg-main.png">
      <h1>teste</h1>
      <DefaultButton>SEJA UM DIZIMISTA</DefaultButton>
      <DefaultButton
        bgColor={theme.colors.green}
        textColor={theme.colors.white}
        onClick={() => alert(":D")}
      >
        SEJA UM DIZIMISTA
      </DefaultButton>
      <DefaultButton borderColor="blue" onClick={() => alert(":D")}>
        SEJA UM DIZIMISTA
      </DefaultButton>

      {/* <DefaultButton
        style={{ borderRadius: "3px" }}
        borderColor={theme.colors.green}
        onClick={() => alert(":D")}
      >
        SEJA UM DIZIMISTA
      </DefaultButton>

      <DefaultButton
        height="2rem"
        fontSize="0.8rem"
        width="10rem"
        onClick={() => alert(":D")}
      >
        SEJA UM DIZIMISTA
      </DefaultButton> */}
    </BackGroundSection>
    <Footer />
  </S.Wrapper>
);

export default HomeTemplate;
