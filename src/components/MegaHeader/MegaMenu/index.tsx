import Image from "next/image";
import { ReactNode } from "react";
import * as S from "./styles";

type MegaMenuProps = {
  children?: ReactNode;
  imgSrc: string;
  style?: React.CSSProperties;
};

export const MegaMenu = ({ children, imgSrc, style }: MegaMenuProps) => (
  <S.MegaMenu className="megamenu" style={style}>
    <S.MenuBackground $imgSrc={imgSrc} />
    <S.MegaMenuContent>{children}</S.MegaMenuContent>
  </S.MegaMenu>
);
