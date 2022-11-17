import { Header, MegaMenu, Navigator, NavItem } from "components/MegaHeader";
import { ReactNode } from "react";
import * as S from "./styles";

type PageHeaderProps = {
  children?: ReactNode;
  className?: string;
};

const PageHeader = ({ children, className }: PageHeaderProps) => (
  <Header>
    <Navigator>
      <NavItem text="Home" href={""} />
      <NavItem text="Institucional" href={""}>
        <MegaMenu></MegaMenu>
      </NavItem>
      <NavItem text="Pastorais" href={""}>
        <MegaMenu></MegaMenu>
      </NavItem>
      <NavItem text="Mural Eventos" href={""} />
      <NavItem text="Noticias" href={""} />
      <NavItem text="Colabore" href={""} />
      <NavItem text="Contato" href={""} />
    </Navigator>
  </Header>
);

export default PageHeader;
