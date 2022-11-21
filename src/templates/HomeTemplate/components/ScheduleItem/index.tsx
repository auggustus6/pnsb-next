import { ReactNode } from "react";
import * as S from "./styles";

type ScheduleItemProps = {
  children?: ReactNode;
  className?: string;
  title: string;
};

const ScheduleItem = ({ children, className, title }: ScheduleItemProps) => (
  <S.Wrapper className={className}>
    <S.Title>{title}</S.Title>
    <S.Content>{children}</S.Content>
  </S.Wrapper>
);

export default ScheduleItem;
