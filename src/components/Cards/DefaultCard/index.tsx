import Image from "next/image";
import Link from "next/link";
import {
  BsStopwatch as WatchIcon,
  BsCalendar4 as CalendarIcon,
} from "react-icons/bs";
import { CardType } from "types/card-types";
import { formatDate, formatTime, markDownToPlainText } from "utils/format";
import * as S from "./styles";

type DefaultCardProps = {
  className?: string;
  post: CardType;
};

export const DefaultCard = ({ className, post }: DefaultCardProps) => {
  const formattedSummary = markDownToPlainText(post?.summary);

  return (
    <Link href={`/pastoral/${post.slug}`}>
      <S.Wrapper className={className}>
        <Image src={post.imgUrl} width={290} height={247} objectFit="cover" />
        <S.Content $info={!!post.date || !!post.time}>
          <h6>{post.title}</h6>
          <p>{formattedSummary}</p>
          <div>
            {post.date && (
              <span>
                <CalendarIcon size={18} />
                {post.date}
              </span>
            )}
            {post.time && (
              <time>
                <WatchIcon size={18} />
                {post.time}{" "}
                {Number(post.time.split(":")[0]) >= 12 ? "AM" : "PM"}
              </time>
            )}
          </div>
        </S.Content>
      </S.Wrapper>
    </Link>
  );
};
