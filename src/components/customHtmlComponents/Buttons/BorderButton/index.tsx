import Link from "next/link";
import { ReactNode } from "react";
import theme from "styles/theme";
import * as Styles from "./styles";

export type colorsType = typeof theme.colors;


type DefaultButtonProps = {
  children?: ReactNode;
  className?: string;
  onClick?: () => void;
  style?: React.CSSProperties;
  link?: string;
  color?: keyof colorsType;
};

export const BorderButton = ({
  children,
  className,
  onClick,
  style,
  link,
  color="primary"
}: DefaultButtonProps) =>
  link ? (
    <Link href={link}>
      <Styles.Wrapper className={className} onClick={onClick} style={style} $color={color}>
        {children}
      </Styles.Wrapper>
    </Link>
  ) : (
    <Styles.Wrapper className={className} onClick={onClick} style={style} $color={color}>
      {children}
    </Styles.Wrapper>
  );
