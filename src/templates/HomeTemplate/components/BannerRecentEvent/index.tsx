import Image from "next/image";
import Link from "next/link";
import { AiFillPlayCircle } from "react-icons/ai";
import { CardType } from "types/card-types";
import * as Styles from "./styles";

type BannerRecentEventProps = {
  className?: string;
  post: CardType;
};

const BannerRecentEvent = ({ className, post }: BannerRecentEventProps) => {
  return (
    <Styles.Wrapper className={className}>
      <Styles.MyLogo width={166} height={110} className="logo__recent__event" />
      <a href="https://www.youtube.com/paroquianossasenhoradobrasil" target="_blank" rel="noreferrer">
        <Styles.StreamButton>
          <AiFillPlayCircle size={24} />
          Transmissões online
        </Styles.StreamButton>
      </a>
      <Styles.RecentEventInfoContainer>
        <div>
          <Image
            src={post.imgUrl}
            width={210}
            height={210}
            alt=""
            objectFit="cover"
          />
        </div>
        <Styles.Info>
          <div>
            <h5>{post.title}</h5>
            <p>{post.summary}</p>
          </div>
          <Link href={`/eventos/${post.slug}`}>Ver mais</Link>
        </Styles.Info>
      </Styles.RecentEventInfoContainer>
    </Styles.Wrapper>
  );
};

export default BannerRecentEvent;
