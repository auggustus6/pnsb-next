import Link from "next/link";
import { ReactNode } from "react";
import * as S from "./styles";

type NavItemProps = {
  children?: ReactNode;
  href: string;
  text: string;
};

export const NavItem = ({ children, href, text }: NavItemProps) => (
  <S.NavItem className={!children ? "not__show__arrow" : ""}>
    <Link href={href}>{text}</Link>
    {children}
  </S.NavItem>
);
