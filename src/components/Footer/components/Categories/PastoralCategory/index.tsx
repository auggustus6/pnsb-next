import Link from "next/link";
import * as S from "./styles";

const PastoralCategory = () => {
  return (
    <S.Pastoral>
      <h6>PASTORAIS</h6>
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
        <li>
          <Link href="/">Lorem ipsum</Link>
        </li>
        <li>
          <Link href="/">Ipsum dolor</Link>
        </li>
        <li>
          <Link href="/">Dolor sit amet</Link>
        </li>
        <li>
          <Link href="/">Dolor sit amet</Link>
        </li>
      </ul>
    </S.Pastoral>
  );
};

export default PastoralCategory;
