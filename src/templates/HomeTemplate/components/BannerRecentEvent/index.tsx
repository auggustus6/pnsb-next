import Logo from "components/Logo";
import Image from "next/image";
import Link from "next/link";
import { ReactNode } from "react";
import { AiFillPlayCircle } from "react-icons/ai";
import { CardType } from "types/card-types";
import * as S from "./styles";

type BannerRecentEventProps = {
  className?: string;
  post: CardType;
};

const BannerRecentEvent = ({ className, post }: BannerRecentEventProps) => {
  return (
    <S.Wrapper className={className}>
      <S.MyLogo width={166} height={110} className="logo__recent__event" />
      <S.StreamButton>
        <AiFillPlayCircle size={24} />
        Transmissões online
      </S.StreamButton>
      <S.RecentEventInfoContainer>
        <Link href={`/noticias/${post.slug}`}>
          <div style={{ cursor: "pointer" }}>
            <Image
              src={post.imgUrl}
              width={210}
              height={210}
              alt=""
              objectFit="cover"
            />
          </div>
        </Link>
        <S.Info>
          <Link href={`/noticias/${post.slug}`}>
            <div style={{ cursor: "pointer" }}>
              <h5>{post.title}</h5>
              <p>{post.summary}</p>
            </div>
          </Link>
          <Link href={"/noticias"}>Ver mais</Link>
        </S.Info>
      </S.RecentEventInfoContainer>
    </S.Wrapper>
  );
};

export default BannerRecentEvent;
