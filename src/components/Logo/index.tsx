import Image from "next/image";
import * as S from "./styles";

const Logo = () => (
  <S.Wrapper>
    <Image src="/img/logo.png" width={92} height={92} />
  </S.Wrapper>
);

export default Logo;
