import { CSSProperties, ReactNode } from "react";
import clsx from "clsx";
import Link from "next/link";

type BUTTON_COLOR_TYPE = "PRIMARY" | "SECONDARY" | "GREEN";
type BUTTON_WIDTH_TYPE = "FULL" | "NORMAL";

type ButtonProps = {
  href: string;
  external?: boolean;
  disabled?: boolean;
  style?: CSSProperties;
  children: ReactNode;
  width?: BUTTON_WIDTH_TYPE;
  BUTTON_TYPE?: BUTTON_COLOR_TYPE;
};

export default function LinkButton(props: ButtonProps) {
  const {
    href,
    external,
    disabled,
    children,
    style,
    width = "NORMAL",
    BUTTON_TYPE = "PRIMARY",
  } = props;

  return (
    <>
      {external ? (
        <>
          <a href={href} target="_blank" rel="noopener noreferrer">
            {children}
          </a>
        </>
      ) : (
        <Link
          href={href}
          className={clsx("link__button", {
            disabled__button: disabled,
            normal__button: BUTTON_TYPE === "PRIMARY",
            secondary__button: BUTTON_TYPE === "SECONDARY",
            green__button: BUTTON_TYPE === "GREEN",
            fullWidth: width === "FULL",
          })}
          style={style}
        >
          {children}
        </Link>
      )}
    </>
  );
}
