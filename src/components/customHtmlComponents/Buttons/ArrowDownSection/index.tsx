import { ReactNode } from "react";
import * as Styles from "./styles";
import { IoIosArrowDown } from "react-icons/io";
import { useTheme } from "styled-components";

type ArrowDownLinkProps = {
  className?: string;
  color?: string;
  href: string;
};

const ArrowDownLink = ({ className, color, href }: ArrowDownLinkProps) => {
  const theme = useTheme();
  return (
    <Styles.Wrapper>
      <Styles.MyLink
        href={href}
        className={className}
        style={{ background: color ? color : theme.colors.primary }}
      >
        <IoIosArrowDown size={30}/>
      </Styles.MyLink>
    </Styles.Wrapper>
  );
};

export default ArrowDownLink;
