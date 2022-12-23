import * as Styles from "./styles";
import Image from "next/image";

interface BetterNextImgProps {
  className?: string;
  src: string;
  style?: React.CSSProperties;
  alt?: string;
}

const BetterNextImg = ({ className, src, style, alt }: BetterNextImgProps) => {
  return (
    <Styles.Wrapper className={className} style={style}>
      <Image src={src} layout="fill" objectFit="contain" alt={alt} />
    </Styles.Wrapper>
  );
};

export default BetterNextImg;
