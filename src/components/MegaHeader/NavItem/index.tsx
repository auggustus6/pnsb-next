import Link from "next/link";
import { ReactElement, ReactNode } from "react";
import { MegaMenuProps } from "../MegaMenu";
import * as S from "./styles";
import {IconType} from 'react-icons'

import {RiArrowDownSFill} from 'react-icons/ri'

export type NavItemProps = {
  children?: ReactElement<MegaMenuProps>;
  href: string;
  text: string;
  mobileIcon: ReactElement<IconType>;
};

export const NavItem = ({ children, href, text,mobileIcon }: NavItemProps) => (
  <S.NavItem className={!children ? "not__show__arrow" : ""}>
    <Link href={href}>{text}</Link>
    <S.MobileItem>{mobileIcon}{text}
    {children && <RiArrowDownSFill className="mobile__more__indicator"/>}
    </S.MobileItem>
    {children}
  </S.NavItem>
);
