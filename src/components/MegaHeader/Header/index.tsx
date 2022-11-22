import Logo from "components/Logo";
import { ReactNode } from "react";
import * as S from "./styles";

type HeaderProps = {
  children?: ReactNode;
  className?: string;
  onOpen?: (value: boolean) => void;
};

export const Header = ({ children, className, onOpen }: HeaderProps) => (
  <S.Wrapper className={className}>
    <S.MyContainer>
      <Logo height={68} width={102} />
      {children}
      <S.MenuButton onClick={() => onOpen && onOpen(true)} />
    </S.MyContainer>
  </S.Wrapper>
);
