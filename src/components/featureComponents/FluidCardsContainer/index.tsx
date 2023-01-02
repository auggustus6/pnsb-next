import { ReactNode, useEffect, useRef, useState } from "react";
import * as Styles from "./styles";

type CardsContainerProps = {
  children?: ReactNode;
  className?: string;
};

const FluidCardsContainer = ({ children, className }: CardsContainerProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    setHeight((containerRef.current?.firstChild as any)?.clientHeight + 32); //4rem
  }, [(containerRef.current?.firstChild as any)?.clientHeight]);

  return (
    <Styles.Wrapper
      $height={height || 0}
      className={className}
      ref={containerRef}
    >
      {children}
    </Styles.Wrapper>
  );
};

export default FluidCardsContainer;
