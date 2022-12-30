import Link from "next/link";
import React, {
  MouseEventHandler,
  ReactElement,
  ReactNode,
  SyntheticEvent,
  useState,
} from "react";
import { MegaMenuProps } from "../MegaMenu";
import * as S from "./styles";
import { IconType } from "react-icons";

import { RiArrowDownSFill } from "react-icons/ri";

export type NavItemProps = {
  children?: ReactElement<MegaMenuProps>;
  link: string;
  text: string;
  mobileIcon: ReactElement<IconType>;
};

export const NavItem = ({ children, link, text, mobileIcon }: NavItemProps) => {
  return (
    <S.NavItem className={!children ? "not__show__arrow" : ""}>
      <Link href={link}>{text}</Link>
      {children && (
        <S.MobileItem>
          {mobileIcon}
          {text}
          <RiArrowDownSFill className="mobile__more__indicator" />
        </S.MobileItem>
      )}
      {!children && (
        <Link href={link}>
          <S.MobileItem>
            {mobileIcon}
            {text}
          </S.MobileItem>
        </Link>
      )}
      {children}
    </S.NavItem>
  );
};
