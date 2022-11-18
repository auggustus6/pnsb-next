import { ReactNode } from "react";
import * as S from "./styles";

type MegaMenuProps = {
  children?: ReactNode;

};

export const MegaMenu = ({ children }: MegaMenuProps) => (
  <S.MegaMenu className="mega__menu">
    <S.MegaMenuContent className="mega__menu_content">
      {children}
    </S.MegaMenuContent>
  </S.MegaMenu>
);
