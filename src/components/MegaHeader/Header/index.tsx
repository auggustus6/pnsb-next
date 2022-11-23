import Logo from "components/Logo";
import Link from "next/link";
import { ReactElement, ReactNode, useEffect, useState } from "react";
import { NavigatorProps } from "../Navigator";
import * as S from "./styles";

type HeaderProps = {
  children?: ReactElement<NavigatorProps>;
  className?: string;
  onOpen?: (value: boolean) => void;
};

export const Header = ({ children, className, onOpen }: HeaderProps) => {
  const [isOnTop, setIsOnTop] = useState(true);

  const listenScroll = () => {
    setIsOnTop(window.scrollY > 180 ? false : true);
  };

  useEffect(() => {
    window.addEventListener("scroll", listenScroll, true);

    return window.removeEventListener("scroll", listenScroll);
  }, []);
  return (
    <S.Wrapper className={className} $isOnTop={isOnTop}>
      <S.MyContainer>
          <Logo height={68} width={102} />
        {children}
        <S.MenuButton onClick={() => onOpen && onOpen(true)} />
      </S.MyContainer>
    </S.Wrapper>
  );
};
