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
  textArea?: boolean;
};

export const DefaultInput = ({
  className,
  state,
  setState,
  inputLabel,
  name,
  error,
  textArea = false,
}: DefaultInputProps) => {
  return (
    <Styles.Wrapper
      className={className}
      $error={error.error && error.touched ? true : false}
    >
      {!textArea && (
        <input
          type="text"
          id={name}
          name={name}
          value={state}
          onChange={setState}
          className="styled__input"
        />
      )}
      {textArea && (
        <textarea
          id={name}
          name={name}
          value={state}
          onChange={setState}
          maxLength={1000}
          className="styled__textarea styled__input"
        />
      )}
      <label htmlFor={name}>{inputLabel}</label>
      {error.error && error.touched && <span>{error.error}</span>}
    </Styles.Wrapper>
  );
};
