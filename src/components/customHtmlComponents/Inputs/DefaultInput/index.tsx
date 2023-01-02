import * as Styles from "./styles";
import InputMask from "react-input-mask";

interface DefaultInputProps extends React.InputHTMLAttributes<any> {
  inputLabel: string;
  error: {
    error: string;
    touched: boolean;
  };
  textArea?: boolean;
  mask?: string;
}


export const DefaultInput = (props: DefaultInputProps) => {
  const { className, inputLabel, name, error, textArea = false, mask } = props;

  
  
  return (
    <Styles.Wrapper
      className={className}
      $error={error.error && error.touched ? true : false}
    >
      {!textArea && !mask && (
        <input
          type="text"
          id={name}
          name={name}
          className="styled__input"
          {...props}
        />
      )}
      {mask && (
        <InputMask
          mask={mask}
          type="text"
          id={name}
          name={name}
          className="styled__input"
          {...props}
        />
      )}
      {textArea && (
        <textarea
          id={name}
          name={name}
          {...props}
          maxLength={1000}
          className="styled__textarea styled__input"
        />
      )}
      <label htmlFor={name}>{inputLabel}</label>
      {error.error && error.touched && <span>{error.error}</span>}
    </Styles.Wrapper>
  );
};
