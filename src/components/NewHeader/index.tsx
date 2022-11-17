import Logo from "components/Logo";
import Link from "next/link";
import { ReactNode } from "react";
import * as S from "./styles";

type NewHeaderProps = {
  children?: ReactNode;
};

const NewHeader = ({ children }: NewHeaderProps) => (
  <S.Wrapper>
    <S.MyContainer>
      <Logo />
      <S.Navigator>
        <span>
          <Link href={""}>item1</Link>
        </span>
        <span>
          <Link href={""}>
            <S.MegaMenu>
              <S.MegaMenuContent>
                <S.Row>
                  <img src="img.jpg" alt="" />
                </S.Row>
                <S.Row>
                  <header>Design Services</header>
                  <ul className="mega-links">
                    <li>
                      <a href="#">Graphics</a>
                    </li>
                    <li>
                      <a href="#">Vectors</a>
                    </li>
                    <li>
                      <a href="#">Business cards</a>
                    </li>
                    <li>
                      <a href="#">Custom logo</a>
                    </li>
                  </ul>
                </S.Row>
                <S.Row>
                  <header>Design Services</header>
                  <ul className="mega-links">
                    <li>
                      <a href="#">Graphics</a>
                    </li>
                    <li>
                      <a href="#">Vectors</a>
                    </li>
                    <li>
                      <a href="#">Business cards</a>
                    </li>
                    <li>
                      <a href="#">Custom logo</a>
                    </li>
                  </ul>
                </S.Row>
                <S.Row>
                  <header>Design Services</header>
                  <ul className="mega-links">
                    <li>
                      <a href="#">Graphics</a>
                    </li>
                    <li>
                      <a href="#">Vectors</a>
                    </li>
                    <li>
                      <a href="#">Business cards</a>
                    </li>
                    <li>
                      <a href="#">Custom logo</a>
                    </li>
                  </ul>
                </S.Row>
              </S.MegaMenuContent>
            </S.MegaMenu>
          </Link>
        </span>
        <span>
          <Link href={""}>item3</Link>
        </span>
        <span>
          <Link href={""}>item4</Link>
        </span>
        <span>
          <Link href={""}>item5</Link>
        </span>
        <span>
          <Link href={""}>item6</Link>
        </span>
      </S.Navigator>
    </S.MyContainer>
  </S.Wrapper>
);

export default NewHeader;
