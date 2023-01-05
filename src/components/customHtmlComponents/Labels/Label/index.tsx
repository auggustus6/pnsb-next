import { ReactNode } from "react";
import styled from "styled-components";
import theme from "styles/theme";

type colorsType = typeof theme.colors;
type labelTypes = "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "small";

type LabelProps = {
  children?: ReactNode;
  className?: string;
  style?: React.CSSProperties;
  center?: boolean;
  color?: keyof colorsType;
  as: labelTypes;
};

const Label = ({
  children,
  className,
  as,
  center = false,
  color = "textColor",
}: LabelProps) => {
  const LabelWrapper = styled[as]`
    text-align: ${center ? "center" : "start"};
    color: ${theme.colors[color]};
  `;

  return <LabelWrapper className={className}>{children}</LabelWrapper>;
};

export default Label;
