import Link from "next/link";
import * as Style from "./styles";

type ShortcutCardProps = {
  className?: string;
  title: string;
  link: string;
  description: string;
  imgUrl?: string;
};

export const ShortcutCard = ({
  className,
  description,
  title,
  link,
  imgUrl,
}: ShortcutCardProps) => {
  return (
    <Link href={link}>
      <Style.Wrapper className={className}>
        <img src={imgUrl || "/svgs/no_content.svg"} alt={title} />
        <div>
          <h5>{title}</h5>
          <p>{description}</p>
        </div>
      </Style.Wrapper>
    </Link>
  );
};
