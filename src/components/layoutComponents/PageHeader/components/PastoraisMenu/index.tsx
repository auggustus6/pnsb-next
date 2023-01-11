import { useQuery } from "@apollo/client";
import { MegaMenuCard } from "components/featureComponents/Cards";
import { MegaMenu } from "components/layoutComponents/MegaHeader";
import MegaMenuItem from "components/layoutComponents/MegaHeader/MegaMenuItem";
import Spacing from "components/layoutComponents/Spacing";
import { PastoraisQuery } from "graphql/generated/schema";
import { QR_PASTORAIS } from "graphql/querys/Pastorals";
import React from "react";
import theme from "styles/theme";
import { markDownToPlainText } from "utils/format";

import * as Styles from "./styles";

export default function PastoraisMenu() {
  const { data: pastorais } = useQuery<PastoraisQuery>(QR_PASTORAIS, {
    variables: { offset: 0, limit: 3 },
  });

  const firstColumn = pastorais?.pastorals?.data.slice(0, 2);
  const secondColumn = pastorais?.pastorals?.data.slice(2, 3)[0];

  // const firstColumn = new Array(2).fill(pastorais?.pastorals?.data[0]);
  // const secondColumn = pastorais?.pastorals?.data[0];

  return (
    <MegaMenu imgSrc="/img/image1.png">
      <MegaMenuItem
        title="SOBRE AS PASTORAIS"
        titleColor={theme.colors.primary}
      >
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
      </MegaMenuItem>

      <Styles.Item
        title="PASTORAIS"
        titleColor={theme.colors.turquoise}
        mobileHref="pastoral"
      >
        {firstColumn?.map((past) => (
          <MegaMenuCard
            key={past?.attributes?.Slug}
            imgLink={past?.attributes?.Imagem?.data?.attributes?.url}
            title={past?.attributes?.Titulo}
            href={"/pastoral/" + past?.attributes?.Slug}
          >
            <span className="megamenu__card__text">
              {markDownToPlainText(past?.attributes?.Descricao || "")}
            </span>
          </MegaMenuCard>
        ))}
      </Styles.Item>
      {secondColumn && (
        <Styles.Item>
          <Styles.CustomSpace />
          {/**<Spacing size={1.5} />  1.5rem is the same size of the title */}
          <MegaMenuCard
            key={secondColumn?.attributes?.Slug}
            imgLink={secondColumn?.attributes?.Imagem?.data?.attributes?.url}
            title={secondColumn?.attributes?.Titulo}
            href={"/pastoral/" + secondColumn?.attributes?.Slug}
          >
            <span className="megamenu__card__text">
              {markDownToPlainText(secondColumn?.attributes?.Descricao || "")}
            </span>
          </MegaMenuCard>
          <Styles.Button>Ver mais</Styles.Button>
        </Styles.Item>
      )}
    </MegaMenu>
  );
}
