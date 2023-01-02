import { ReactElement, useEffect } from "react";
import { NavItemProps } from "../NavItem";
import * as Styles from "./styles";

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
    <Styles.Navigator $isOpen={isOpen} className={className}>
      <Styles.CloseButton
        $isOpen={isOpen}
        onClick={() => onClose && onClose(false)}
      />
      {children}
    </Styles.Navigator>
  );
};
