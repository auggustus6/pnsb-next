import Image from "next/image";
import Link from "next/link";
import {
  BsStopwatch as WatchIcon,
  BsCalendar4 as CalendarIcon,
} from "react-icons/bs";
import * as S from "./styles";

type EventCardProps = {
  className?: string;
};

export const NewsCard = ({ className }: EventCardProps) => {
  return (
    <Link href={"/"}>
      <S.Wrapper className={className}>
        <Image
          src={"/img/bg-main.png"}
          width={287}
          height={185}
          objectFit="cover"
        />
        <S.Content>
          <h6>Titulo da Noticia</h6>
          <div>
            <span>
              <CalendarIcon size={20} />
              20/11/2022
            </span>
            <time>
              <WatchIcon size={20} />
              9:00 AM
            </time>
          </div>
        </S.Content>
      </S.Wrapper>
    </Link>
  );
};
