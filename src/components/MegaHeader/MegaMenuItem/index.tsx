import { ReactNode } from "react";
import * as S from "./styles";

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
}: MegaMenuItemProps) => (
  <>
    <S.MobileTitle className="mobile-show-when-hover">{title}</S.MobileTitle>
    <S.Row className={className}>
      {title && <h5 style={{ color: titleColor }}>{title}</h5>}
      {children}
    </S.Row>
  </>
);

export default MegaMenuItem;
