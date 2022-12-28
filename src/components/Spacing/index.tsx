import { ReactNode } from "react";
import * as Styles from "./styles";

type SpacingProps = {
  size: number;
};

const Spacing = ({ size }: SpacingProps) => {
  return <Styles.Wrapper style={{ paddingTop: `${size}rem` }} />;
};

export default Spacing;
