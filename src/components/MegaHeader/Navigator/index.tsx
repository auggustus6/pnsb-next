import { ReactElement, useEffect } from "react";
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
}: NavigatorProps) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflowY = "hidden";
    } else {
      document.body.style.overflowY = "scroll";
    }

    return () => {
      document.body.style.overflowY = "scroll";
    };
  }, [isOpen]);

  return (
    <S.Navigator $isOpen={isOpen} className={className}>
      <S.CloseButton
        $isOpen={isOpen}
        onClick={() => onClose && onClose(false)}
      />
      {children}
    </S.Navigator>
  );
};
