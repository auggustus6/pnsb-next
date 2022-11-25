import { ReactNode } from "react";
import * as S from "./styles";
import theme from "styles/theme";

export type colorsType = typeof theme.colors;

type SectionTitleProps = {
  title: string;
  className?: string;
  subtitle: string;
  titleColor: keyof colorsType;
};

export const SectionTitle = ({
  title,
  subtitle,
  className,
  titleColor,
}: SectionTitleProps) => {
  return (
    <S.Wrapper className={className} textColor={titleColor}>
      <h4>{title}</h4>
      <img src="/img/waves.png" alt="" />
      <p>{subtitle}</p>
    </S.Wrapper>
  );
};
