import { useRouter } from "next/router";
import * as Styles from "./styles";
import { AiOutlineHome } from "react-icons/ai";
import { urlToTitle } from "utils/format";
import CustomNextLink from "components/customHtmlComponents/CustomNextLink";

type BreadCrumbsProps = {
  className?: string;
};

const BreadCrumbs = ({ className }: BreadCrumbsProps) => {
  const router = useRouter();

  const breads = router.asPath.split("?")[0].split("/");
  breads.shift();

  const currentPage = breads.slice(-1)[0]; //getting last element
  breads.pop();

  const getLink = (index: number) => "/" + breads.slice(0, index + 1).join("/");

  return (
    <Styles.Wrapper className={className}>
      <CustomNextLink href={"/"}>
        <AiOutlineHome size={26} />
        Home
      </CustomNextLink>
      <Styles.NextIcon />
      {breads.map((bread, i) => (
        <div key={bread} style={{ display: "flex" }}>
          <CustomNextLink href={getLink(i)} key={bread}>
            {urlToTitle(bread)}
          </CustomNextLink>
          <Styles.NextIcon />
        </div>
      ))}
      <span className="bread-active">{urlToTitle(currentPage)}</span>
    </Styles.Wrapper>
  );
};

export default BreadCrumbs;
