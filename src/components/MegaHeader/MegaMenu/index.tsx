import Image from "next/image";
import { ReactNode } from "react";
import * as S from "./styles";

type MegaMenuProps = {
  children?: ReactNode;
  imgSrc: string;
};

export const MegaMenu = ({ children, imgSrc }: MegaMenuProps) => (
  <S.MegaMenu className="megamenu">
    <S.MenuBackground $imgSrc={imgSrc} />
    <S.MegaMenuContent>{children}</S.MegaMenuContent>
  </S.MegaMenu>
);
