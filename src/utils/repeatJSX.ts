import { ReactNode } from "react";

export const repeatJSX = (Component: ReactNode, times: number) => {
  return new Array(times).fill(Component);
};
