import Logo from "components/Logo";
import Image from "next/image";
import Link from "next/link";
import { ReactNode } from "react";
import { AiFillPlayCircle } from "react-icons/ai";
import * as S from "./styles";

type BannerRecentEventProps = {
  className?: string;
};

const BannerRecentEvent = ({ className }: BannerRecentEventProps) => {
  return (
    <S.Wrapper className={className}>
      <S.MyLogo width={166} height={110} className="logo__recent__event"/>
      <S.StreamButton>
        <AiFillPlayCircle size={24} />
        Transmissões online
      </S.StreamButton>
      <S.RecentEventInfoContainer>
        <Image src="/img/Thumb_News.png" width={210} height={210} alt="" />
        <S.Info>
          <h5>Evento mais recente</h5>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
            placerat ex quam, non mattis lectus efficitur a. Phasellus ac nisi
            et lig...
          </p>
          <Link href={"/"}>Ver mais</Link>
        </S.Info>
      </S.RecentEventInfoContainer>
    </S.Wrapper>
  );
};

export default BannerRecentEvent;
