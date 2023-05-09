import classNames from "classnames";
import type { ButtonHTMLAttributes } from "react";

type ButtonVariant = "primary" | "secondary" | "outlined" | "ghost";
type ButtonSize = "sm" | "md" | "lg" | "xl";
type ButtonState = "default" | "hover";

const ButtonVariantClasses: Record<
  ButtonVariant,
  Record<ButtonState, string>
> = {
  primary: {
    default: "btn-primary",
    hover: "btn-primary-hover",
  },
  secondary: {
    default: "btn-secondary",
    hover: "btn-secondary-hover",
  },
  outlined: {
    default: "btn-outlined",
    hover: "btn-outlined-hover",
  },
  ghost: {
    default: "btn-ghost",
    hover: "btn-ghost-hover",
  },
};

const ButtonSizeClasses: Record<ButtonSize, string> = {
  sm: "btn-sm",
  md: "btn-md",
  lg: "btn-lg",
  xl: "btn-xl",
};

const ButtonIconSizeClasses: Record<ButtonSize, string> = {
  sm: "btn-icon-sm",
  md: "btn-icon-md",
  lg: "btn-icon-lg",
  xl: "btn-icon-xl",
};

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  variant: ButtonVariant;
  size?: ButtonSize;
  fit?: boolean;
  label: string;
  IconOnly?: React.ReactElement;
  disabled?: boolean;
}

export const Button = ({
  className,
  variant,
  size = "md",
  fit = false,
  IconOnly,
  disabled = false,
  label,
  ...buttonProps
}: ButtonProps) => {
  const ButtonVariantClassName = ButtonVariantClasses[variant];
  const ButtonIconSizeClassName = ButtonIconSizeClasses[size];

  return (
    <button
      {...buttonProps}
      className={classNames(
        "btn-base",
        [ButtonVariantClassName.default],
        className,
        {
          [classNames("w-full", "justify-center")]: fit,
          [ButtonSizeClasses[size]]: !IconOnly,
          [classNames(
            ButtonIconSizeClassName,
            "justify-center",
            "rounded-full"
          )]: IconOnly,
          [ButtonVariantClassName.hover]: !disabled,
          [classNames("opacity-40", "cursor-not-allowed")]: disabled,
        }
      )}
    >
      <span className={classNames({ "sr-only": IconOnly })}>{label}</span>
      {IconOnly ? (
        <IconOnly.type {...IconOnly.props} size={size === "sm" ? 20 : 24} />
      ) : null}
    </button>
  );
};
