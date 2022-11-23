import Image from "next/image";
import * as S from "./styles";

interface LogoProps {
  height: number;
  width: number;
  className?: string;
}

const Logo = ({ height, width, className }: LogoProps) => (
  <S.Wrapper href="/" $height={height} $width={width}>
    <Image alt="" src="/img/logo.png" layout="fill" />
  </S.Wrapper>
);

export default Logo;
