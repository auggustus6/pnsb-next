import { HorariosMissasQuery } from "graphql/generated/schema";
import { ReactNode } from "react";
import { formatTime } from "utils/format";
import ScheduleItem from "../ScheduleItem";
import * as S from "./styles";

type BannerScheduleProps = {
  className?: string;
  mass: HorariosMissasQuery;
};

const BannerSchedule = ({ className, mass }: BannerScheduleProps) => {
  const massData = mass.horariosMissas?.data;

  const presencialMass = massData?.filter(
    (m) => m.attributes?.Tipo === "Presencial",
  );
  const firstPresencial = presencialMass?.shift();

  const onlineMass = massData?.filter(
    (m) => m.attributes?.Tipo !== "Presencial",
  );
  const firstOnline = onlineMass?.shift();

  return (
    <S.Wrapper className={className}>
      <S.Title>
        <b>HORÁRIOS</b> MISSAS:
      </S.Title>
      <S.Content>
        <ScheduleItem title={"PRESENCIAIS"}>
          <p>
            <b>Segunda à Sexta: </b>
            {firstPresencial?.attributes?.Horario.map((time, i, arr) => (
              <>
                {/* {i !== 0 && ", "} */}
                {i !== 0 && i < arr.length - 1 && ", "}
                {i === arr.length - 1 && " e "}
                {time?.Hora.slice(0, 5)}h
              </>
            ))}
          </p>

          {presencialMass?.map((m, i) => (
            <p key={i}>
              <b>{m.attributes?.Dia}: </b>
              {m.attributes?.Horario.map((time, i, arr) => (
                <>
                  {i !== 0 && i < arr.length - 1 && ", "}
                  {i === arr.length - 1 && " e "}
                  {time?.Hora.slice(0, 5)}h
                </>
              ))}
            </p>
          ))}
        </ScheduleItem>
        <ScheduleItem title={"TRANSMITIDAS ONLINE"}>
          <p>
            <b>Segunda à Sexta: </b>
            {firstOnline?.attributes?.Horario.map((time, i, arr) => (
              <>
                {i !== 0 && i < arr.length - 1 && ", "}
                {i === arr.length - 1 && " e "}
                {time?.Hora.slice(0, 5)}h
              </>
            ))}
          </p>

          {onlineMass?.map((m, i) => (
            <p key={i}>
              <b>{m.attributes?.Dia}: </b>
              {m.attributes?.Horario.map((time, i, arr) => (
                <>
                  {i !== 0 && i < arr.length - 1 && ", "}
                  {i === arr.length - 1 && " e "}
                  {time?.Hora.slice(0, 5)}h
                </>
              ))}
            </p>
          ))}
        </ScheduleItem>
      </S.Content>
    </S.Wrapper>
  );
};

export default BannerSchedule;
