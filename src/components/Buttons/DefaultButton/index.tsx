import { ReactNode } from "react";
import * as S from "./styles";

type DefaultButtonProps = {
  children?: ReactNode;
  className?: string;
  width?: string;
  height?: string;
  fontSize?: string;
  bgColor?: string;
  textColor?: string;
  borderColor?: string;
  onClick?: () => void;
  style?: React.CSSProperties;
};

/**
 * if you pass "borderColor" attribute the background will be none, and the hover style change too
 */
export const DefaultButton = ({
  children,
  className,
  onClick,
  width = "346px",
  height = "60px",
  fontSize = "1.25rem",
  bgColor = "white",
  textColor = "gray",
  borderColor = "",
  style,
}: DefaultButtonProps) => (
  <S.Wrapper
    $width={width}
    $height={height}
    $fontSize={fontSize}
    $bgColor={bgColor}
    $textColor={textColor}
    $borderColor={borderColor}
    className={className}
    onClick={onClick}
    style={style}
  >
    {children}
  </S.Wrapper>
);
