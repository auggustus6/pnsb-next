import ArrowDownSection from "components/Buttons/ArrowDownSection";
import { ReactNode } from "react";
import * as S from "./styles";

type BackGroundSectionProps = {
  children?: ReactNode;
  className?: string;
  img?: string;
  color?: string;
  height?: string;
  href?: string;
};

const BackGroundSection = ({
  children,
  className,
  img,
  color = "white",
  height = "623px",
  href,
}: BackGroundSectionProps) => (
  <S.Wrapper $height={height} $color={color} $img={img} className={className}>
    {children}
    {href && <ArrowDownSection href={href} />}
  </S.Wrapper>
);

export default BackGroundSection;