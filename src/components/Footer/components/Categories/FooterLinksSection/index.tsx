import Link from "next/link";
import * as S from "./styles";

interface FooterLinksSection {
  title: string;
  titleColor: string;
  links: {
    text: string;
    href: string;
  }[];
  seeMoreHref?: string;
  seeMoreText?: string;
}

const FooterLinksSection = ({
  title,
  links,
  titleColor,
  seeMoreHref,
  seeMoreText,
}: FooterLinksSection) => {
  return (
    <S.Institutional $color={titleColor}>
      <h6 style={{ color: titleColor }}>{title}</h6>
      <ul>
        {links.map((link, index) => (
          <li key={index}>
            <Link href={link.href}>{link.text}</Link>
          </li>
        ))}
      </ul>
      {seeMoreHref && (
        <b>
          <Link href={seeMoreHref}>{seeMoreText}</Link>
        </b>
      )}
    </S.Institutional>
  );
};

export default FooterLinksSection;