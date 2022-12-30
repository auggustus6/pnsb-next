import BreadCrumbs from "components/BreadCrumbs";
import { SwitchCards } from "components/Cards";
import Container from "components/Container";
import Pagination from "components/Pagination";
import { PastoraisQuery } from "graphql/generated/schema";
import DefaultLayout from "layouts/DefaultLayout";
import { useState } from "react";
import * as Styles from "./styles";
import { repeatJSX } from "utils/repeatJSX";
import { FaList } from "react-icons/fa";
import { BsGrid3X2Gap } from "react-icons/bs";
import { formatDate, formatTime } from "utils/format";

type PastoralIndexTemplate = {
  pastorais?: PastoraisQuery;
};

const PastoralIndexTemplate = ({ pastorais }: PastoralIndexTemplate) => {
  const [paginationIndex, setPaginationIndex] = useState(0);
  const [isList, setIsList] = useState(false);

  return (
    <DefaultLayout>
      <Container>
        <div style={{ padding: "1rem 0 2rem" }}>
          <BreadCrumbs />
        </div>

        <Styles.SectionHeader>
          <h1>Pastorais</h1>
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
          {pastorais?.pastorals?.data.map((pastorais) => (
            <SwitchCards
              key={pastorais.attributes?.Slug}
              post={{
                slug: pastorais.attributes?.Slug || "",
                title: pastorais.attributes?.Titulo || "",
                link: `pastoral/${pastorais.attributes?.Slug}`,
                summary: pastorais.attributes?.Descricao || "",
                imgUrl:
                  pastorais.attributes?.Galeria?.data[0].attributes?.url || "",
                date: formatDate(pastorais.attributes?.publishedAt),
                time: formatTime(pastorais.attributes?.publishedAt),
              }}
              mobile={isList}
            />
          ))}
        </Styles.CardsContainer>

        <Styles.PaginationContainer>
          <Pagination
            index={paginationIndex}
            setIndex={setPaginationIndex}
            size={Math.floor(pastorais?.pastorals?.data.length! / 8)}
            color="green"
          />
        </Styles.PaginationContainer>
      </Container>
    </DefaultLayout>
  );
};

export default PastoralIndexTemplate;
