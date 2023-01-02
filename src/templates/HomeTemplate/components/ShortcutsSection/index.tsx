import { ShortcutCard } from "components/featureComponents/Cards";
import { ReactNode } from "react";
import * as Styles from "./styles";

type ShortcutsSectionProps = {
  className?: string;
};

const ShortcutsSection = ({ className }: ShortcutsSectionProps) => {
  return (
    <Styles.Wrapper>
      <ShortcutCard
        title="Institucional"
        description="Pequena descrição do que o usuário vai encontrar acessando o link."
        imgUrl="/img/foto-igreja.jpg"
        link="/institucional"
      />
      <ShortcutCard
        title="Pastorais"
        description="Pequena descrição do que o usuário vai encontrar acessando o link."
        imgUrl="/img/image1.png"
        link="/pastorais"
      />
      <ShortcutCard
        title="Eventos"
        description="Pequena descrição do que o usuário vai encontrar acessando o link."
        imgUrl="/img/Thumb_News.png"
        link="/eventos"
      />
      <ShortcutCard
        title="Noticias"
        description="Pequena descrição do que o usuário vai encontrar acessando o link."
        imgUrl="/img/image3.png"
        link="/noticias"
      />
      <ShortcutCard
        title="Colabore"
        description="Pequena descrição do que o usuário vai encontrar acessando o link."
        imgUrl="/img/colabore.jpg"
        link="/colabore"
      />
      <ShortcutCard
        title="Contato"
        description="Pequena descrição do que o usuário vai encontrar acessando o link."
        imgUrl="/img/contato.jpg"
        link="/contato"
      />
      <ShortcutCard
        title="Missas"
        description="Pequena descrição do que o usuário vai encontrar acessando o link."
        imgUrl="/img/jesus.jpg"
        link="/institucional/#missas"
      />
      <ShortcutCard
        title="Catequese"
        description="Pequena descrição do que o usuário vai encontrar acessando o link."
        imgUrl="/img/catequese.jpg"
        link="/institucional/#catequese"
      />
    </Styles.Wrapper>
  );
};

export default ShortcutsSection;
