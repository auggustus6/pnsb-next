import { ReactNode } from "react";
import * as Styles from "./styles";

type DefaultInputProps = {
  className?: string;
  state: string;
  setState: any;
  inputLabel: string;
  name: string;
  error: {
    error: string;
    touched: boolean;
  };
};

export const DefaultInput = ({
  className,
  state,
  setState,
  inputLabel,
  name,
  error,
}: DefaultInputProps) => {
  return (
    <Styles.Wrapper
      className={className}
      $error={error.error && error.touched ? true : false}
    >
      <input
        type="text"
        id={name}
        name={name}
        value={state}
        onChange={setState}
      />
      <label htmlFor={name}>{inputLabel}</label>
      {error.error && error.touched && <span>{error.error}</span>}
    </Styles.Wrapper>
  );
};
