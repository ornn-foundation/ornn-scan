import { CSSProperties } from "react";

export interface Children {
  children?: string | JSX.Element | (string | JSX.Element)[];
}
export interface Style {
  style?: CSSProperties | undefined;
}
