import { ReactNode } from "react";
import * as Styles from "./styles";

type ScheduleItemProps = {
  children?: ReactNode;
  className?: string;
  title: string;
};

const ScheduleItem = ({ children, className, title }: ScheduleItemProps) => (
  <Styles.Wrapper className={className}>
    <Styles.Title>{title}</Styles.Title>
    <Styles.Content>{children}</Styles.Content>
  </Styles.Wrapper>
);

export default ScheduleItem;
