import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import {
  BsStopwatch as WatchIcon,
  BsCalendar4 as CalendarIcon,
} from "react-icons/bs";
import { CardType } from "types/card-types";
import * as Styles from "./styles";

type EventCardProps = {
  className?: string;
  post: {
    slug: string;
    imgUrl: string;
    title: string;
    date: string;
    time: string;
  };
};

export const NewsCard = ({ post, className }: EventCardProps) => {
  const router = useRouter();
  const link = router.asPath !== "/" ? router.asPath : "";

  return (
    <Link href={`${link}/${post.slug}`}>
      <Styles.Wrapper className={className}>
        <Image src={post.imgUrl} width={287} height={185} objectFit="cover" />
        <Styles.Content>
          <h6>{post.title}</h6>
          <div>
            <span>
              <CalendarIcon size={20} />
              {post.date}
            </span>
            <time>
              <WatchIcon size={20} />
              {post.time}
            </time>
          </div>
        </Styles.Content>
      </Styles.Wrapper>
    </Link>
  );
};
