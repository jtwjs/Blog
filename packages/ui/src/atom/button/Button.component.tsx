"use client";

import { cva, type VariantProps } from "class-variance-authority";
import { forwardRef, type ButtonHTMLAttributes } from "react";

import { cn } from "../../utils";

const buttonVariants = cva(
  "flex items-center rounded px-[8px] font-bold focus:outline-none whitespace-nowrap select-none transition-all ease-in focus:ring-4 focus:ring-blue-100 dark:focus:ring-gray-100 dark:focus:ring-opacity-20",
  {
    variants: {
      variant: {
        primary: "bg-brand text-white hover:bg-shade",
        secondary: "bg-border text-primary hover:bg-tertiary",
        outlined: "bg-white text-brand border border-brand hover:bg-tint",
        ghost: "text-primary, hover: text-secondary",
        icon: "justify-center rounded-full",
      },
      fit: { true: "w-full justify-center" },
      size: {
        sm: "h-8 text-sm",
        md: "h-10 text-sm",
        lg: "h-12 text-md",
        xl: "h-[55px] text-lg",
      },
    },
    compoundVariants: [
      {
        variant: "icon",
        size: "sm",
        class: "h-8 w-8",
      },
      {
        variant: "icon",
        size: "md",
        class: "h-10 w-10",
      },
      {
        variant: "icon",
        size: "lg",
        class: "h-11 w-11",
      },
      {
        variant: "icon",
        size: "xl",
        class: "h-12 w-12",
      },
    ],
    defaultVariants: {
      variant: "primary",
      fit: false,
      size: "md",
    },
  }
);

export interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  label: string;
  IconOnly?: React.ReactElement;
}

export default forwardRef<HTMLButtonElement, ButtonProps>(function Button(
  {
    className,
    variant = "primary",
    size,
    fit,
    label,
    IconOnly,
    ...buttonProps
  },
  forwardedRef
) {
  const variantValue = IconOnly ? "icon" : variant;

  return (
    <button
      ref={forwardedRef}
      className={cn(
        buttonVariants({ variant: variantValue, size, fit, className })
      )}
      {...buttonProps}
    >
      <span className={cn({ "sr-only": IconOnly })}>{label}</span>
      {IconOnly ? (
        <IconOnly.type {...IconOnly.props} size={size === "sm" ? 20 : 24} />
      ) : null}
    </button>
  );
});
