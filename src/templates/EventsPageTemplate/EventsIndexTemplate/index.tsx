import BreadCrumbs from "components/BreadCrumbs";
import Container from "components/Container";
import Pagination from "components/Pagination";
import { EventsQuery } from "graphql/generated/schema";
import DefaultLayout from "layouts/DefaultLayout";
import { useState } from "react";
import * as Styles from "./styles";
import { FaList } from "react-icons/fa";
import { BsGrid3X2Gap } from "react-icons/bs";
import { SwitchCards } from "components/Cards";
import { formatDate, formatTime } from "utils/format";

type EventIndexTemplate = {
  events?: EventsQuery;
};

const EventsIndexTemplate = ({ events }: EventIndexTemplate) => {
  const [paginationIndex, setPaginationIndex] = useState(0);
  const [isList, setIsList] = useState(false);

  return (
    <DefaultLayout>
      <Container>
        <div style={{ padding: "1rem 0 2rem" }}>
          <BreadCrumbs />
        </div>

        <Styles.SectionHeader>
          <h1>Mural de Eventos</h1>
          <Styles.ListButtons>
            <span
              onClick={() => setIsList(false)}
              className={!isList ? "button-active" : undefined}
            >
              <BsGrid3X2Gap size={30} />
            </span>
            <span
              onClick={() => setIsList(true)}
              className={isList ? "button-active" : undefined}
            >
              <FaList size={24} />
            </span>
          </Styles.ListButtons>
        </Styles.SectionHeader>

        <Styles.CardsContainer $isList={isList}>
          {events?.events?.data.map((event) => (
            <SwitchCards
              key={event.attributes?.Slug}
              post={{
                slug: event.attributes?.Slug || "",
                title: event.attributes?.Titulo || "",
                summary: event.attributes?.Descricao || "",
                imgUrl: event.attributes?.Imagem?.data?.attributes?.url || "",
                date: formatDate(event.attributes?.publishedAt),
                time: formatTime(event.attributes?.publishedAt),
              }}
              mobile={isList}
            />
          ))}
        </Styles.CardsContainer>

        <Styles.PaginationContainer>
          <Pagination
            index={paginationIndex}
            setIndex={setPaginationIndex}
            size={3}
            color="green"
          />
        </Styles.PaginationContainer>
      </Container>
    </DefaultLayout>
  );
};

export default EventsIndexTemplate;
