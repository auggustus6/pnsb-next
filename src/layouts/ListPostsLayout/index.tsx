import BreadCrumbs from "components/featureComponents/BreadCrumbs";
import { SwitchCards } from "components/featureComponents/Cards";
import Pagination from "components/featureComponents/Pagination";
import Container from "components/layoutComponents/Container";
import client from "graphql/client";
import {
  EventEntity,
  NoticiaEntity,
  PastoraisQuery,
  PastoralEntity,
} from "graphql/generated/schema";
import { QR_PASTORAIS } from "graphql/querys/Pastorals";
import DefaultLayout from "layouts/DefaultLayout";
import { useRouter } from "next/dist/client/router";
import { ReactNode, useEffect, useState } from "react";
import { BsGrid3X2Gap } from "react-icons/bs";
import { FaList } from "react-icons/fa";
import theme from "styles/theme";
import { CardType } from "types/card-types";
import { formatDate, formatTime } from "utils/format";
import * as Styles from "./styles";

type colorsType = typeof theme.colors;

type ListPostsLayoutProps = {
  children?: ReactNode;
  className?: string;
  title: string;
  titleColor?: keyof colorsType;
  isList: boolean;
  setIsList: (value: boolean) => void;
  paginationIndex: number;
  setPaginationIndex: (value: number) => void;
  listSize: number;
};

const ListPostsLayout = ({
  title,
  titleColor = "secondary",
  children,
  isList,
  setIsList,
  paginationIndex,
  setPaginationIndex,
  listSize,
}: ListPostsLayoutProps) => {
  return (
    <DefaultLayout>
      <Container>
        <div style={{ padding: "1rem 0 2rem" }}>
          <BreadCrumbs />
        </div>

        <Styles.SectionHeader>
          <h1 style={{ color: theme.colors[titleColor] }}>{title}</h1>
          <Styles.ListButtons>
            <span
              onClick={() => setIsList(false)}
              className={!isList ? "button-active" : ""}
            >
              <BsGrid3X2Gap size={30} />
            </span>
            <span
              onClick={() => setIsList(true)}
              className={isList ? "button-active" : ""}
            >
              <FaList size={24} />
            </span>
          </Styles.ListButtons>
        </Styles.SectionHeader>

        <Styles.CardsContainer $isList={isList}>
          {children}
        </Styles.CardsContainer>

        <Styles.PaginationContainer>
          <Pagination
            index={paginationIndex}
            setIndex={setPaginationIndex}
            size={Math.ceil(listSize / 8)}
            color="green"
          />
        </Styles.PaginationContainer>
      </Container>
    </DefaultLayout>
  );
};

export default ListPostsLayout;
