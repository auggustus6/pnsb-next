import { useQuery } from "@apollo/client";
import { MegaMenuCard } from "components/featureComponents/Cards";
import { MegaMenu } from "components/layoutComponents/MegaHeader";
import MegaMenuItem from "components/layoutComponents/MegaHeader/MegaMenuItem";
import { HorariosMissasQuery } from "graphql/generated/schema";
import { QR_HORARIOS_MISSAS } from "graphql/querys/HorariosMissa";
import Link from "next/link";
import React from "react";
import theme from "styles/theme";

import * as Styles from "./styles";

export default function InstitucionalMenu() {
  const { data: mass } = useQuery<HorariosMissasQuery>(QR_HORARIOS_MISSAS);

  const massData = mass?.horariosMissas?.data;

  const presencialMass = massData?.filter(
    (m) => m.attributes?.Tipo === "Presencial",
  );
  const firstPresencial = presencialMass?.shift();

  const onlineMass = massData?.filter(
    (m) => m.attributes?.Tipo !== "Presencial",
  );
  const firstOnline = onlineMass?.shift();
  return (
    <MegaMenu imgSrc="/img/foto-igreja.jpg">
      <MegaMenuItem title="QUEM SOMOS" titleColor={theme.colors.secondary}>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
          blandit dignissim orci, et iaculis nibh tempor vitae. Aliquam erat
          volutpat. Etiam est est, suscipit.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
          blandit dignissim orci, et iaculis nibh tempor vitae. Aliquam erat
          volutpat. Etiam est est, suscipit.
        </p>

        <Link href={"institucional"}>
          <span>
            <Styles.MoreAboutButton>SAIBA MAIS</Styles.MoreAboutButton>
          </span>
        </Link>
      </MegaMenuItem>
      <MegaMenuItem title="HORÁRIOS DE MISSAS" titleColor={theme.colors.green}>
        <MegaMenuCard imgLink="/img/bg-main.png" title="PRESENCIAIS">
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
        </MegaMenuCard>
        <MegaMenuCard
          imgLink="/img/foto-igreja.jpg"
          title="TRANSMITIDAS ONLINE"
        >
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
        </MegaMenuCard>
      </MegaMenuItem>
      <MegaMenuItem
        title="HORÁRIOS DA SECRETARIA"
        titleColor={theme.colors.turquoise}
      >
        <Styles.SecretaryTime>
          <span>
            <p>
              <b>Dias úteis:</b> das 8h00 às 18h.
            </p>
            <p>
              <b>Sábados:</b> das 9h às 13h00.
            </p>
            <p>email.example@email.com.br</p>
          </span>
          <Link href="contato">
            <div>
              <Styles.SendEmailButton>Entre em contato</Styles.SendEmailButton>
            </div>
          </Link>
        </Styles.SecretaryTime>

        <Styles.PrivacyPolitics>
          <h5>POLÍTICA DE PRIVACIDADE</h5>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
            blandit dignissim orci, et iaculis nibh tempor vitae. Aliquam erat
            volutpat. Etiam est est, suscipit vitae tortor vel, pretium
            fermentum risus.
          </p>
        </Styles.PrivacyPolitics>
      </MegaMenuItem>
    </MegaMenu>
  );
}
