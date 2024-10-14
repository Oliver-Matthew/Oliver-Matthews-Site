import { CSSProperties } from "react";

export interface CustomCSSType extends CSSProperties {
  [key: `--${string}`]: string | number;
}
