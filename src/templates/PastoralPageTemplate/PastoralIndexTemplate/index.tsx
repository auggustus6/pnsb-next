import { SwitchCards } from "components/featureComponents/Cards";
import client from "graphql/client";
import { PastoraisQuery, PastoralEntity } from "graphql/generated/schema";
import { QR_PASTORAIS } from "graphql/querys/Pastorals";
import ListPostsLayout from "layouts/ListPostsLayout";
import { useRouter } from "next/dist/client/router";
import { useEffect, useState } from "react";
import { formatDate, formatTime } from "utils/format";

type PastoralIndexTemplate = {
  pastorais?: PastoraisQuery;
  postLength: number;
};

const PastoralIndexTemplate = ({
  pastorais,
  postLength,
}: PastoralIndexTemplate) => {
  const router = useRouter();
  const [isList, setIsList] = useState(false);
  const [loadedPastorais, setLoadedPastorais] = useState<PastoralEntity[]>(
    pastorais?.pastorals?.data as PastoralEntity[],
  );

  const [paginationIndex, setPaginationIndex] = useState(0);

  const indexToSlice = paginationIndex * 8;
  const pastoraisToShow = loadedPastorais?.slice(
    indexToSlice,
    indexToSlice + 8,
  );

  useEffect(() => {
    if (postLength <= 8) {
      return;
    }
    const loadAll = async () => {
      const { data } = await client.query<PastoraisQuery>({
        query: QR_PASTORAIS,
        variables: {
          offset: 8,
        },
      });
      setLoadedPastorais([
        ...loadedPastorais,
        ...(data.pastorals?.data as PastoralEntity[]),
      ]);
    };
    loadAll();
  }, []);

  return (
    <ListPostsLayout
      title={"Pastorais"}
      isList={isList}
      setIsList={setIsList}
      paginationIndex={paginationIndex}
      setPaginationIndex={setPaginationIndex}
      listSize={postLength}
    >
      {pastoraisToShow?.map((pastoral, i) => (
        <SwitchCards
          key={`page${pastoral.attributes?.Slug}`}
          post={{
            slug: pastoral.attributes?.Slug || "",
            title: pastoral.attributes?.Titulo || "",
            link: `${router.asPath}/${pastoral.attributes?.Slug}`,
            summary: pastoral.attributes?.Descricao || "",
            imgUrl: pastoral.attributes?.Imagem?.data?.attributes?.url || "",
            date: formatDate(pastoral.attributes?.publishedAt),
            time: formatTime(pastoral.attributes?.publishedAt),
          }}
          mobile={isList}
        />
      ))}
    </ListPostsLayout>
  );
};

export default PastoralIndexTemplate;
