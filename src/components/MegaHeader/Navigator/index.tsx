import { ReactNode } from "react";
import * as S from "./styles";

type NavigatorProps = {
  children?: ReactNode;
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
