import Image from "next/image";
import * as S from "./styles";

interface LogoProps {
  height: number;
  width: number;
  className?: string;
}

const Logo = ({ height, width, className }: LogoProps) => (
  <S.Wrapper $height={height} $width={width} className={className}>
    <Image alt="" src="/img/logo.png" layout="fill" />
  </S.Wrapper>
);

export default Logo;
