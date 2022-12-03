import { useRouter } from "next/router";
import PastoraisTemplate from "templates/PastoralPageTemplate/PastoralTemplate";

export default function PastoraisPost() {
  const router = useRouter();
  const { slug } = router.query;
  return <PastoraisTemplate slug={String(slug)} />;
}
