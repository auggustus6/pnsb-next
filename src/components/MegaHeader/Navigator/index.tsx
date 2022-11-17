import { ReactNode } from "react";
import * as S from "./styles";

type NavigatorProps = {
  children?: ReactNode;
};

export const Navigator = ({ children }: NavigatorProps) => (
  <S.Navigator>{children}</S.Navigator>
);
