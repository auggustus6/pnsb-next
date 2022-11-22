import { ReactNode } from "react";
import ScheduleItem from "../ScheduleItem";
import * as S from "./styles";

type BannerScheduleProps = {
  className?: string;
};

const BannerSchedule = ({ className }: BannerScheduleProps) => (
  <S.Wrapper className={className}>
    <S.Title>
      <b>HORÁRIOS</b> MISSAS:
    </S.Title>
    <S.Content>
      <ScheduleItem title={"PRESENCIAIS"}>
        <p>
          <b>Domingo:</b> 8h, 10h, 11h15, 12h30, 16h, 17h, 18h30 e 20h
        </p>
        <p>
          <b>Segunda-feira:</b> 8h e 17h30
        </p>
        <p>
          <b>Terça a Sexta:</b> 8h, 12h e 17h30
        </p>
        <p>
          <b>Sábado:</b> 8h, 12h e 16h
        </p>
      </ScheduleItem>
      <ScheduleItem title={"TRANSMITIDAS ONLINE"}>
        <p>
          <b>Domingo:</b> 8h, 12h30 e 18h30
        </p>
        <p>
          <b>Segunda a Sexta:</b> 8h
        </p>
        <p>
          <b>Sábado:</b> 8h e 12h
        </p>
      </ScheduleItem>
    </S.Content>
  </S.Wrapper>
);

export default BannerSchedule;
