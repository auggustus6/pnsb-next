import { ReactNode } from "react";
import * as S from "./styles";

type MegaMenuItemProps = {
  children?: ReactNode;
  className?: string;
};

const MegaMenuItem = ({ children, className }: MegaMenuItemProps) => (
  <S.Row className={className}>{children}</S.Row>
);

export default MegaMenuItem;
