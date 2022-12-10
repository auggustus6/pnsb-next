import { useQuery } from "@apollo/client";
import BreadCrumbs from "components/BreadCrumbs";
import { DefaultButton } from "components/Buttons";
import { EventCard } from "components/Cards";
import Container from "components/Container";
import IframeVideo from "components/IframeVideo";
import Pagination from "components/Pagination";
import { QR_PASTORAIS } from "graphql/querys/Pastorals";
import DefaultLayout from "layouts/DefaultLayout";
import { useEffect, useState } from "react";
import theme from "styles/theme";
import * as Styles from "./styles";

const PastoralIndexTemplate = () => {
  const [paginationIndex, setPaginationIndex] = useState(0);
  // const { error, loading, data } = usePastoraisQuery();

  // useEffect(() => {
  //   console.log(data);
  // }, [data]);

  return (
    <DefaultLayout>
      <Container>
        <div style={{ padding: "1rem 0 2rem" }}>
          <BreadCrumbs />
        </div>

        <h1 style={{ color: theme.colors.green }}>Pastorais</h1>

        <Styles.CardsContainer>
          {new Array(8).fill(null).map((_, i) => (
            <EventCard key={i} />
          ))}
        </Styles.CardsContainer>

        <Styles.PaginationContainer>
          <Pagination
            index={paginationIndex}
            setIndex={setPaginationIndex}
            size={20}
            color="green"
          />
        </Styles.PaginationContainer>
      </Container>
    </DefaultLayout>
  );
};

export default PastoralIndexTemplate;
