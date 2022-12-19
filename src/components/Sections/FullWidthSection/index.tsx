import ArrowDownSection from "components/Buttons/ArrowDownSection";
import { ReactNode } from "react";
import { colorsType } from "..";
import * as S from "./styles";

type BackGroundSectionProps = {
  children?: ReactNode;
  className?: string;
  img?: string;
  color?: keyof colorsType;
  height?: string;
  href?: string;
  style?: React.CSSProperties;
};

const FullWidthSection = ({
  children,
  className,
  img,
  color = "white",
  height = "623px",
  style,
  href,
}: BackGroundSectionProps) => (
  <S.Wrapper
    $height={height}
    $color={color}
    $img={img}
    className={className}
    style={style}
  >
    {children}
    {href && <ArrowDownSection href={href} />}
  </S.Wrapper>
);

export default FullWidthSection;
