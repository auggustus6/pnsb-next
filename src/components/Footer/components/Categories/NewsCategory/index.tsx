import Link from "next/link";
import * as S from "./styles";

const NewsCategory = () => {
  return (
    <S.News>
      <h6>NOTÍCIAS</h6>
      <ul>
        <li>
          <Link href="/">Lorem</Link>
        </li>
        <li>
          <Link href="/">Ipsum dolor</Link>
        </li>
        <li>
          <Link href="/">Mattis lectus efficitur a.</Link>
        </li>
      </ul>
    </S.News>
  );
};

export default NewsCategory;
