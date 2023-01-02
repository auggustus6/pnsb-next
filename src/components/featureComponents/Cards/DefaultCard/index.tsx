import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import {
  BsStopwatch as WatchIcon,
  BsCalendar4 as CalendarIcon,
} from "react-icons/bs";
import { CardType } from "types/card-types";
import { markDownToPlainText } from "utils/format";
import * as Styles from "./styles";

type DefaultCardProps = {
  className?: string;
  post: CardType;
};

export const DefaultCard = ({ className, post }: DefaultCardProps) => {
  const formattedSummary = markDownToPlainText(post?.summary || "");


  return (
    <Link href={post.link || ""}>
      <Styles.Wrapper className={className}>
        <Styles.CardImg>
          <Image
            src={post.imgUrl || "/svgs/no_content.svg"}
            layout="fill"
            objectFit="cover"
          />
        </Styles.CardImg>
        <Styles.Content $info={!!post.date || !!post.time}>
          <h6>{post.title}</h6>
          <p>{formattedSummary}</p>
          <div className="defaultcard__info">
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
        </Styles.Content>
      </Styles.Wrapper>
    </Link>
  );
};
