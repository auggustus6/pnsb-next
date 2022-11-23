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

export const EventCard = ({ className }: EventCardProps) => {
  return (
    <Link href={""}>
      <S.Wrapper className={className}>
        <Image
          src={"/img/foto-igreja.jpg"}
          width={290}
          height={247}
          objectFit="cover"
        />
        <S.Content>
          <h6>Titulo do Evento</h6>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
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
