import Link from "next/link";
import Image from "next/image";
import { ReactNode } from "react";
import * as S from "./styles";

type ShortcutCardProps = {
  className?: string;
};

export const ShortcutCard = ({className }: ShortcutCardProps) => {
  return (
    <Link href={""}>
      <S.Wrapper className={className}>
      <Image
          src={"/img/bg-main.png"}
          width={304}
          height={263}
          objectFit="cover"
        />
        <h6>Obras Sociais</h6>
      </S.Wrapper>
    </Link>
  );
};
