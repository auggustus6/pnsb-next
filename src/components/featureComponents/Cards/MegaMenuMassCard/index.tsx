import Link from "next/link";
import { ReactNode } from "react";
import * as Styles from "./styles";

type MegaMenuCardProps = {
  className?: string;
  imgLink?: string;
  title?: string;
  children?: ReactNode;
  href?: string;
};

export const MegaMenuCard = ({
  className,
  title,
  children,
  imgLink = "/svgs/no_content.svg",
  href,
}: MegaMenuCardProps) => {
  return href ? (
    <Link href={href}>
      <Styles.Wrapper className={className} style={{ cursor: "pointer" }}>
        <img src={imgLink} />
        <div>
          <h5>{title}</h5>
          {children}
        </div>
      </Styles.Wrapper>
    </Link>
  ) : (
    <Styles.Wrapper className={className}>
      <img src={imgLink} />
      <div>
        <h5>{title}</h5>
        {children}
      </div>
    </Styles.Wrapper>
  );
};
