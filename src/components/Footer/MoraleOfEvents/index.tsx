import Link from "next/link";
import * as S from "./styles";

const MoraleOfEvents = () => {
  return (
    <S.Morale>
      <h6>MURAL DE EVENTOS</h6>
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
    </S.Morale>
  );
};

export default MoraleOfEvents;
