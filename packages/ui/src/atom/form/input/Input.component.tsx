"use client";

import { forwardRef, type InputHTMLAttributes } from "react";

import { cn } from "../../../utils";

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {}

export default forwardRef<HTMLInputElement, InputProps>(function Input(
  { className, ...inputProps },
  forwardedRef
) {
  return (
    <input
      ref={forwardedRef}
      type="text"
      className={cn(
        "w-full h-10 border border-border rounded text-md px-4 py-2 text-primary placeholder:text-tertiary bg-white hover:bg-background transition hover:ease-in cursor-pointer disabled:opacity-40 disabled:cursor-not-allowed",
        className
      )}
      {...inputProps}
    />
  );
});
