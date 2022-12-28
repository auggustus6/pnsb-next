import Link from "next/link";
import * as Style from "./styles";

interface LogoProps {
  height?: number;
  width?: number;
  className?: string;
}

const Logo = ({ height, width, className }: LogoProps) => (
  <Link href={"/"}>
    <Style.CustomImage $width={width} $height={height} className={className} src="/img/logo.png" />
  </Link>
);

export default Logo;
