import Image from "next/image";
import { ReactNode } from "react";
import * as S from "./styles";

type MegaMenuCardProps = {
  className?: string;
  imgLink: string;
  title?: string;
  children?: ReactNode;
};

export const MegaMenuMassCard = ({
  className,
  title,
  children,
  imgLink
}: MegaMenuCardProps) => {
  return (
    <S.Wrapper className={className}>
      <img src={imgLink} />
      <div>
        <h5>{title}</h5>
        {children}
      </div>
    </S.Wrapper>
  );
};
