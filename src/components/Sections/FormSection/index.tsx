import { ReactNode } from "react";
import * as Styles from "./styles";

type FormSectionProps = {
  children?: ReactNode;
  className?: string;
  imgUrl?: string;
  style?: React.CSSProperties;
  onSubmit?: any;
};

export const FormSection = ({
  children,
  className,
  onSubmit,
  imgUrl,
  style,
}: FormSectionProps) => {
  return (
    <Styles.Wrapper className={className} style={style} onSubmit={onSubmit}>
      <Styles.Content>{children}</Styles.Content>
      <Styles.FormImage $imgSrc={imgUrl} />
    </Styles.Wrapper>
  );
};
