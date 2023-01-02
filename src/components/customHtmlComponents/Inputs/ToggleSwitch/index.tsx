import { ReactNode } from "react";
import * as Styles from "./styles";

interface ToggleSwitchProps extends React.InputHTMLAttributes<any> {
  children?: ReactNode;
  className?: string;
  label: string;
  value?: boolean | any;
}

const ToggleSwitch = (props: ToggleSwitchProps) => {
  return (
    <Styles.Wrapper className={props.className}>
      <b>{props.label}</b>
      <Styles.SwitchWrapper>
        <input
          type="checkbox"
          defaultChecked={props.value}
          {...props}
          checked={props.value}
        />
        <div className="toggle__background"></div>
        <p className="toggle__text">{props.value ? "Sim" : "Não"}</p>
        <span className="toggle__circle"></span>
      </Styles.SwitchWrapper>
    </Styles.Wrapper>
  );
};

export default ToggleSwitch;
