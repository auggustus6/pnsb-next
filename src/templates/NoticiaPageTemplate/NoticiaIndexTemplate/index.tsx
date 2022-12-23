import BreadCrumbs from "components/BreadCrumbs";
import Container from "components/Container";
import Pagination from "components/Pagination";
import { NoticiasQuery, PastoraisQuery } from "graphql/generated/schema";
import DefaultLayout from "layouts/DefaultLayout";
import { useState } from "react";
import * as Styles from "./styles";
import { repeatJSX } from "utils/repeatJSX";
import { FaList } from "react-icons/fa";
import { BsGrid3X2Gap } from "react-icons/bs";
import { SwitchCards } from "components/Cards";
import { formatDate, formatTime } from "utils/format";

type NoticiaIndexTemplate = {
  noticias?: NoticiasQuery;
};

const NoticiaIndexTemplate = ({ noticias }: NoticiaIndexTemplate) => {
  const [paginationIndex, setPaginationIndex] = useState(0);
  const [isList, setIsList] = useState(false);

  return (
    <DefaultLayout>
      <Container>
        <div style={{ padding: "1rem 0 2rem" }}>
          <BreadCrumbs />
        </div>

        <Styles.SectionHeader>
          <h1>Notícias</h1>
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
          {noticias?.noticias?.data.map((noticia) => (
            <SwitchCards
              key={noticia.attributes?.Slug}
              post={{
                slug: noticia.attributes?.Slug || "",
                title: noticia.attributes?.Titulo || "",
                summary: noticia.attributes?.Descricao || "",
                imgUrl:
                  noticia.attributes?.Galeria?.data[0].attributes?.url || "",
                date: formatDate(noticia.attributes?.publishedAt),
                time: formatTime(noticia.attributes?.publishedAt),
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

export default NoticiaIndexTemplate;
