import { ReactElement } from "react";
import { NavItemProps } from "../NavItem";
import * as S from "./styles";

export type NavigatorProps = {
  children?: ReactElement<NavItemProps> | ReactElement<NavItemProps>[];
  className?: string;
  isOpen: boolean;
  onClose?: (value: boolean) => void;
};

export const Navigator = ({
  children,
  className,
  isOpen,
  onClose,
}: NavigatorProps) => (
  <S.Navigator $isOpen={isOpen} className={className}>
    <S.CloseButton onClick={() => onClose && onClose(false)} />
    {children}
  </S.Navigator>
);
