import { ReactNode } from "react";
import * as Styles from "./styles";

type DefaultInputProps = {
  className?: string;
  state: string;
  setState: (value: string) => void;
  inputLabel: string;
};

export const DefaultInput = ({
  className,
  state,
  setState,
  inputLabel,
}: DefaultInputProps) => {
  return (
    <Styles.Wrapper className={className}>
      <input
        type="text"
        id={inputLabel}
        value={state}
        onChange={(e) => setState(e.target.value)}
      />
      <label htmlFor={inputLabel}>{inputLabel}</label>
    </Styles.Wrapper>
  );
};
