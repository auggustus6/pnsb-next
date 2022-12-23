import Link from "next/link";
import * as Style from "./styles";

interface LogoProps {
  height?: number;
  width?: number;
  className?: string;
}

/**
 *
 * If only width is passed, height will be auto, and the same happens with height
 * being passed.
 * 
 * If none of the size is passed, both height and width will be auto.
 */
const Logo = ({ height, width, className }: LogoProps) => (
  <Link href={"/"}>
    <Style.CustomImage $width={width} $height={height} src="/img/logo.png" />
  </Link>
);
// const Logo = ({ height, width, className }: LogoProps) => (
//   <S.Wrapper href="/" $height={height} $width={width}>
//     <Image alt="" src="/img/logo.png" layout="fill" />
//   </S.Wrapper>
// );

export default Logo;
