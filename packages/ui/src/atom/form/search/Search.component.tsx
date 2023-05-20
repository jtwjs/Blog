"use client";

import { cn } from "@jtwjs/utils";
import { forwardRef, useRef, type HTMLAttributes } from "react";
import { AiOutlineSearch } from "react-icons/ai";

import { Input } from "../input";

export interface SearchProps extends HTMLAttributes<HTMLInputElement> {
  id: string;
  className?: string;
  label: string;
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSearch: (e: React.FormEvent<HTMLFormElement>) => void;
}

export default forwardRef<HTMLInputElement, SearchProps>(function Search(
  {
    id,
    className,
    label,
    placeholder,
    value,
    onChange,
    onSearch,
    ...inputProps
  },
  forwardedRef
) {
  const inputId = useRef(`search-${id}`);

  return (
    <form
      className={cn("relative flex items-center w-full h-10", className)}
      role="search"
      autoComplete="off"
      onSubmit={onSearch}
    >
      <AiOutlineSearch className="absolute start-2.5 w-5 h-5 text-secondary" />
      <label className="sr-only" htmlFor={inputId.current}>
        {label}
      </label>
      <Input
        ref={forwardedRef}
        id={inputId.current}
        className={cn("ps-10 rounded-3xl")}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        {...inputProps}
      />
    </form>
  );
});
