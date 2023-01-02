import Image from "next/image";
import { ReactNode } from "react";
import * as Styles from "./styles";

export type MegaMenuProps = {
  children?: ReactNode;
  imgSrc: string;
  style?: React.CSSProperties;
};

export const MegaMenu = ({ children, imgSrc, style }: MegaMenuProps) => {
  return (
    <Styles.MegaMenu className="megamenu" style={style}>
      <Styles.MenuBackground $imgSrc={imgSrc} />
      <Styles.MegaMenuContent>{children}</Styles.MegaMenuContent>
    </Styles.MegaMenu>
  );
};
