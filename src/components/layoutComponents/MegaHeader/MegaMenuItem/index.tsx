import Link from "next/link";
import { ReactNode } from "react";
import * as Styles from "./styles";

type MegaMenuItemProps = {
  children?: ReactNode;
  className?: string;
  title?: string;
  titleColor?: string;
  mobileHref?: string;
};

const MegaMenuItem = ({
  children,
  className,
  title,
  titleColor,
}: MegaMenuItemProps) => {
  return (
    <>
      {/* <Styles.MobileTitle $titleColor={mobileTitleColor}>{title}</Styles.MobileTitle> */}
      <Styles.Row className={className}>
        {title && <h5 style={{ color: titleColor }}>{title}</h5>}
        {children}
      </Styles.Row>
    </>
  );
};

export default MegaMenuItem;
