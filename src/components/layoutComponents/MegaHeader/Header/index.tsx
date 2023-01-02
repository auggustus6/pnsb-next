import Link from "next/link";
import { ReactElement, useEffect, useState } from "react";
import { NavigatorProps } from "../Navigator";
import * as Styles from "./styles";

type HeaderProps = {
  children?: ReactElement<NavigatorProps>;
  className?: string;
  onOpen?: (value: boolean) => void;
  home?: boolean;
};

export const Header = ({
  children,
  className,
  onOpen,
  home = false,
}: HeaderProps) => {
  const [isOnTop, setIsOnTop] = useState(true);

  const listenScroll = () => {
    setIsOnTop(window.scrollY > 180 ? false : true);
  };

  useEffect(() => {
    window.addEventListener("scroll", listenScroll, true);

    return window.removeEventListener("scroll", listenScroll);
  }, []);
  return (
    <Styles.Wrapper className={className} $isOnTop={isOnTop} $home={home}>
      <Styles.MyContainer>
        <Link href="/">
          <div>
            <Styles.CustomLogo />
          </div>
        </Link>
        {children}
        <Styles.MenuButton onClick={() => onOpen && onOpen(true)} />
      </Styles.MyContainer>
    </Styles.Wrapper>
  );
};
