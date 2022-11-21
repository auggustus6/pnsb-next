import { ReactNode } from "react";
import * as S from "./styles";

type BackGroundSectionProps = {
  children?: ReactNode;
  className?: string;
  img?: string;
  color?: string;
  height?: string;
};

const BackGroundSection = ({
  children,
  className,
  img,
  color = "white",
  height = "623px",
}: BackGroundSectionProps) => (
  <S.Wrapper $height={height} $color={color} $img={img} className={className}>
    {children}
  </S.Wrapper>
);

export default BackGroundSection;
