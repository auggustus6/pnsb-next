import Link from "next/link";
import * as Style from "./styles";

type ShortcutCardProps = {
  className?: string;
  title: string;
  description: string;
};

export const ShortcutCard = ({
  className,
  description,
  title,
}: ShortcutCardProps) => {
  return (
    <Link href={"/"}>
      <Style.Wrapper className={className}>
        <img src={"/img/bg-main.png"} />
        <div>
          <h5>{title}</h5>
          <p>{description}</p>
        </div>
      </Style.Wrapper>
    </Link>
  );
};
