import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import {
  BsStopwatch as WatchIcon,
  BsCalendar4 as CalendarIcon,
} from "react-icons/bs";
import { CardType } from "types/card-types";
import { formatDate, markDownToPlainText } from "utils/format";
import * as S from "./styles";

type MobileCardProps = {
  className?: string;
  post: CardType;
};

export const MobileCard = ({ className, post }: MobileCardProps) => {
  const formattedSummary = markDownToPlainText(post?.summary);
  const router = useRouter();

  return (
    <Link href={`${router.asPath}/${post.slug}`}>
      <S.Wrapper className={className}>
        <Image src={post.imgUrl} width={250} height={250} objectFit="cover" />
        <S.Content>
          <div>
            <h4>{post.title}</h4>
            <S.Info>
              {post.date && (
                <span>
                  <CalendarIcon size={20} />
                  {post.date}
                </span>
              )}
              {post.time && (
                <time>
                  <WatchIcon size={20} />
                  {post.time}{" "}
                  {Number(post.time.split(":")[0]) >= 12 ? "AM" : "PM"}
                </time>
              )}
            </S.Info>
          </div>
          <p>{formattedSummary}</p>
        </S.Content>
      </S.Wrapper>
    </Link>
  );
};
