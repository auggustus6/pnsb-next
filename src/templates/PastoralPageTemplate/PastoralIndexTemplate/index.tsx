import BreadCrumbs from "components/BreadCrumbs";
import Container from "components/Container";
import IframeVideo from "components/IframeVideo";
import Pagination from "components/Pagination";
import DefaultLayout from "layouts/DefaultLayout";
import { useEffect, useState } from "react";
import * as S from "./styles";

const PastoralIndexTemplate = () => {
  const [paginationIndex, setPaginationIndex] = useState(0);

  useEffect(() => {
    console.log(paginationIndex);
  }, [paginationIndex]);

  return (
    <DefaultLayout>
      <Container
        style={{
          minHeight: "600px",
          padding: "6rem 0 3rem 0",
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
        }}
      >
        {/* <div style={{marginTop: "6rem"}}></div> */}
        <BreadCrumbs />
        <h1>PastoralIndexTemplate</h1>
        <br />
        <IframeVideo urlVideo="https://www.youtube.com/watch?v=dQw4w9WgXcQ" />
        <br />
        <br />
        <Pagination
          index={paginationIndex}
          setIndex={setPaginationIndex}
          size={20}
          color="green"
        />
      </Container>
    </DefaultLayout>
  );
};

export default PastoralIndexTemplate;
