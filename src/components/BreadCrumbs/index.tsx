import { useRouter } from "next/router";
import * as S from "./styles";
import { AiOutlineHome } from "react-icons/ai";
import CustomNextLink from "components/CustomNextLink";

type BreadCrumbsProps = {
  className?: string;
};

const BreadCrumbs = ({ className }: BreadCrumbsProps) => {
  const router = useRouter();

  const breads = router.asPath.split("/");
  breads.shift();

  const currentPage = breads.slice(-1)[0]; //getting last element
  breads.pop();

  const formatLink = (link: string) => link.replace(/[-_]/g, " ");

  const getLink = (index: number) => "/" + breads.slice(0, index + 1).join("/");

  return (
    <S.Wrapper className={className}>
      <CustomNextLink href={"/"}>
        <AiOutlineHome size={26} />
        Home
      </CustomNextLink>
      <S.NextIcon />
      {breads.map((bread, i) => (
        <div key={bread} style={{display:"flex"}}>
          <CustomNextLink href={getLink(i)} key={bread}>
            {formatLink(bread)}
          </CustomNextLink>
          <S.NextIcon />
        </div>
      ))}
      <span className="bread-active">
        {formatLink(currentPage)}
      </span>
    </S.Wrapper>
  );
};

export default BreadCrumbs;