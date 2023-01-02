import Link from "next/link";
import React, {
  ReactElement,
  SyntheticEvent,
  useRef,
  useState,
} from "react";
import { MegaMenuProps } from "../MegaMenu";
import * as Styles from "./styles";
import { IconType } from "react-icons";

import { RiArrowDownSFill } from "react-icons/ri";
import { useRouter } from "next/router";

export type NavItemProps = {
  children?: ReactElement<MegaMenuProps>;
  link: string;
  text: string;
  mobileIcon: ReactElement<IconType>;
};

export const NavItem = ({ children, link, text, mobileIcon }: NavItemProps) => {
  const [isItemOpen, setIsItemOOpen] = useState(false);
  const navItemRef = useRef(null);
  const router = useRouter();

  const currentLink = "/" + router.asPath.split("/")[1];

  function handleOnClick(e: SyntheticEvent) {
    if (e.target === navItemRef.current && children) {
      setIsItemOOpen(!isItemOpen);
    }
  }

  return (
    <Styles.NavItem
      $isOpen={isItemOpen}
      className={`${!children ? "not__show__arrow" : ""} ${
        currentLink == link ? "navitem-active" : ""
      }`}
      onClick={handleOnClick}
    >
      <Link href={link}>{text}</Link>
      {children && (
        <Styles.MobileItem ref={navItemRef}>
          {mobileIcon}
          {text}
          <RiArrowDownSFill className="mobile__more__indicator" />
        </Styles.MobileItem>
      )}
      {!children && (
        <Link href={link}>
          <Styles.MobileItem ref={navItemRef}>
            {mobileIcon}
            {text}
          </Styles.MobileItem>
        </Link>
      )}
      {children}
    </Styles.NavItem>
  );
};
