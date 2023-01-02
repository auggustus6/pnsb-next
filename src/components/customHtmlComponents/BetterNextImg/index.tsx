import * as Styles from "./styles";
import Image from "next/image";

interface BetterNextImgProps {
  className?: string;
  src: string;
  style?: React.CSSProperties;
  alt?: string;
  objectFit?: "contain" | "cover";
}

const BetterNextImg = ({ className, src, style, alt, objectFit="contain" }: BetterNextImgProps) => {
  return (
    <Styles.Wrapper className={className} style={style}>
      <Image src={src} layout="fill" objectFit={objectFit} alt={alt} />
    </Styles.Wrapper>
  );
};

export default BetterNextImg;
