import * as Styles from "./styles";
import Image from "next/image";

interface BetterNextImgProps {
  className?: string;
  src: string;
  style?: React.CSSProperties;
  alt?: string;
  objectFit?: "contain" | "cover";
  caption?: string;
}

const BetterNextImg = ({ className, src, style, alt, objectFit="contain",caption }: BetterNextImgProps) => {
  return (
    <Styles.Wrapper className={className} style={style}>
      <Image src={src} layout="fill" objectFit={objectFit} alt={alt} />
      {caption && <caption>{caption}</caption>}
    </Styles.Wrapper>
  );
};

export default BetterNextImg;
