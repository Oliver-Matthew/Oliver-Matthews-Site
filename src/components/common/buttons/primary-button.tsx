import { CSSProperties, ReactNode } from "react";
import { BeatLoader } from "react-spinners";
import clsx from "clsx";
import { HiArrowLongRight } from "react-icons/hi2";

type BUTTON_VARIANT_TYPE = "PRIMARY" | "SECONDARY" | "GOLD";
type BUTTON_WIDTH_TYPE = "FULL" | "NORMAL";

type ButtonProps = {
  type?: "button" | "submit" | "reset" | undefined;
  disabled?: boolean;
  style?: CSSProperties;
  children: ReactNode;
  onClick?: () => void;
  loading?: boolean;
  width?: BUTTON_WIDTH_TYPE;
  BUTTON_VARIANT?: BUTTON_VARIANT_TYPE;
  showArrow?: boolean;
};

export default function PrimaryButton(props: ButtonProps) {
  const {
    type,
    disabled,
    children,
    onClick,
    style,
    loading,
    width = "NORMAL",
    BUTTON_VARIANT = "PRIMARY",
    showArrow,
  } = props;

  return (
    <>
      <button
        type={type ? type : "button"}
        onClick={onClick}
        disabled={disabled}
        className={clsx("primary__button", {
          disabled__button: disabled,
          normal__button: BUTTON_VARIANT === "PRIMARY",
          secondary__button: BUTTON_VARIANT === "SECONDARY",
          gold__button: BUTTON_VARIANT === "GOLD",
          fullWidth: width === "FULL",
        })}
        style={style}
      >
        {loading ? (
          <BeatLoader
            color={"#fff"}
            loading={loading}
            size={"12px"}
            aria-label="Loading Spinner"
            data-testid="loader"
          />
        ) : showArrow ? (
          <>
            {children} <HiArrowLongRight />
          </>
        ) : (
          children
        )}
      </button>
    </>
  );
}
