import { HorariosMissasQuery } from "graphql/generated/schema";
import { ReactNode } from "react";
import ScheduleItem from "../ScheduleItem";
import * as S from "./styles";

type BannerScheduleProps = {
  className?: string;
  mass: HorariosMissasQuery;
};

const BannerSchedule = ({ className, mass }: BannerScheduleProps) => (
  <S.Wrapper className={className}>
    <S.Title>
      <b>HORÁRIOS</b> MISSAS:
    </S.Title>
    <S.Content>
      <ScheduleItem title={"PRESENCIAIS"}>
        {/* <p>
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
        </p> */}

        {mass.horariosMissas?.data.map((m) => (
          <p>
            <b>{m.attributes?.Dia}</b>
          </p>
        ))}
      </ScheduleItem>
      <ScheduleItem title={"TRANSMITIDAS ONLINE"}>
        {/* <p>
          <b>Domingo:</b> 8h, 12h30 e 18h30
        </p>
        <p>
          <b>Segunda a Sexta:</b> 8h
        </p>
        <p>
          <b>Sábado:</b> 8h e 12h
        </p> */}

        {mass.horariosMissas?.data.map((m) => (
          <b>{m.attributes?.Dia}</b>
        ))}
      </ScheduleItem>
    </S.Content>
  </S.Wrapper>
);

export default BannerSchedule;
