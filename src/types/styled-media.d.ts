import { MediaGenerator } from "styled-media-query";
import theme from "../styles/theme";

type Theme = typeof theme;

declare module "styled-media-query" {
  export interface MediaGenerator extends Theme{}
}
