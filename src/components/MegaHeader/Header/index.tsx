import Logo from "components/Logo";
import { ReactNode } from "react";
import * as S from "./styles";

type HeaderProps = {
  children?: ReactNode;
  className?: string;
};

export const Header = ({ children, className }: HeaderProps) => (
  <S.Wrapper className={className}>
    <S.MyContainer>
      <Logo />
      {children}
    </S.MyContainer>
  </S.Wrapper>
);
