import { CardType } from "types/card-types";
import { DefaultCard } from "../DefaultCard";
import { MobileCard } from "../MobileCard";

type DefaultCardProps = {
  post: CardType;
  mobile: boolean;
  className?: string;
};

export const SwitchCards = ({ post, mobile, className }: DefaultCardProps) => {
  return mobile ? (
    <MobileCard post={post} />
  ) : (
    <DefaultCard post={post} className={className} />
  );
};
