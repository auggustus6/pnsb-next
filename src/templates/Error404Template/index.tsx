import DefaultLayout from "layouts/DefaultLayout";
import Link from "next/link";
import * as Styles from "./styles";

import { TbMapSearch as MapIcon } from "react-icons/tb";

type Error404TemplateProps = {
  className?: string;
};

const Error404Template = ({ className }: Error404TemplateProps) => {
  return (
    <DefaultLayout>
      <Styles.Wrapper>
        {/* <h1>
          erro <b>404</b>
        </h1> */}
        <h3>A página que você buscou não existe ou está indisponível...</h3>

        <div className="map__icon__wrapper">
          <MapIcon />
        </div>

        <Link href="/">
          <Styles.MyButton>VOLTAR A PAGINA PRINCIPAL</Styles.MyButton>
        </Link>

        <img
          src="/img/map.png"
          alt="imagem de mapa"
          style={{ top: "0", left: "2rem" }}
          draggable={false}
        />
        <img
          src="/img/map2.png"
          alt="imagem de mapa"
          style={{ bottom: "0", right: "-2rem" }}
          draggable={false}
        />
      </Styles.Wrapper>
    </DefaultLayout>
  );
};

export default Error404Template;
