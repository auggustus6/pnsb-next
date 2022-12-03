import Link from "next/link";
import { ReactNode } from "react";
import styled from "styled-components";

type CustomNextLinkProps = {
  children?: ReactNode;
  className?: string;
  href: string;
}

export const StyledLink = styled.a`
  display: flex;
  align-items: center;
  gap: 0.4rem;
`

const CustomNextLink = ({children, className,href}:CustomNextLinkProps) => {
  return(
    <Link href={href} passHref>
      <StyledLink className={className}>{children}</StyledLink>
    </Link>
  )
};

export default CustomNextLink
