import { Header, MegaMenu, Navigator, NavItem } from "components/MegaHeader";
import { useWindowSize } from "hooks/useWindowSize";
import { ReactNode, useEffect, useState } from "react";
import * as S from "./styles";

type PageHeaderProps = {
  children?: ReactNode;
  className?: string;
};

const PageHeader = ({ children, className }: PageHeaderProps) => {
  const { width } = useWindowSize();
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (width > 769) setIsOpen(false);
  }, [width]);

  return (
    <Header onOpen={setIsOpen}>
      <Navigator isOpen={isOpen} onClose={setIsOpen}>
        <NavItem text="Home" href={""} />
        <NavItem text="Institucional" href={""}>
          <MegaMenu imgSrc="/img/bg-main.png"><h1>teste</h1></MegaMenu>
        </NavItem>
        <NavItem text="Pastorais" href={""}>
          <MegaMenu imgSrc="/img/logo.png"><h1>outro</h1></MegaMenu>
        </NavItem>
        <NavItem text="Mural Eventos" href={""} />
        <NavItem text="Noticias" href={""} />
        <NavItem text="Colabore" href={""} />
        <NavItem text="Contato" href={""} />
      </Navigator>
    </Header>
  );
};

export default PageHeader;
