"use client";

import { cn } from "@jtwjs/cn";
import {
  createContext,
  useRef,
  useMemo,
  useContext,
  type RefObject,
  type PropsWithChildren,
} from "react";
import { AiFillCaretDown } from "react-icons/ai";

import useSelectKeyTrap from "./useSelectKeyTrap";

export type Option = {
  label: string;
  value: string;
};

export interface SelectProps extends PropsWithChildren {
  id: string;
  className?: string;
  label: string;
  placeholder: string;
  selectedOption?: Option;
  isOpen?: boolean;
  isRequired?: boolean;
  disabled?: boolean;
  onValueChange: (value: string) => void;
  onOpenChange: (open: boolean) => void;
}

interface SelectContextValue {
  selectContentRef: RefObject<HTMLUListElement>;
  id: string;
  label: string;
  selectedValue?: string;
  isOpen: boolean;
  onValueChange: (value: string) => void;
  onOpenChange: (open: boolean) => void;
}

const SelectContext = createContext({} as SelectContextValue);

const Select = Object.assign(
  function Select({
    children,
    id,
    className,
    label,
    placeholder,
    selectedOption,
    isOpen = false,
    isRequired = false,
    disabled = false,
    onValueChange,
    onOpenChange,
  }: SelectProps) {
    const selectId = useRef(`select-${id}`);

    const { containerRef, openerRef, selectContentRef } = useSelectKeyTrap(
      isOpen,
      onOpenChange
    );

    const handleOpenToggle = () => {
      onOpenChange(!isOpen);
    };

    const providerValue = useMemo(
      () => ({
        selectContentRef,
        id: selectId.current,
        label,
        selectedValue: selectedOption?.value,
        isOpen,
        onValueChange,
        onOpenChange,
      }),
      [
        selectContentRef,
        label,
        selectedOption?.value,
        isOpen,
        onValueChange,
        onOpenChange,
      ]
    );

    return (
      <SelectContext.Provider value={providerValue}>
        <div ref={containerRef} className={cn("relative min-w-max", className)}>
          <button
            ref={openerRef}
            type="button"
            className="flex items-center justify-between w-full h-10 pl-4 pr-10 transition bg-white border rounded group border:border text-primary peer enabled:hover:bg-background hover:ease-in enabled:hover:border-brand aria-expanded:border-brand"
            disabled={disabled}
            role="combobox"
            aria-labelledby={selectId.current}
            aria-controls={selectId.current}
            aria-expanded={isOpen}
            aria-haspopup="listbox"
            aria-required={isRequired}
            onClick={handleOpenToggle}
          >
            {selectedOption?.label || placeholder}
            <AiFillCaretDown className="absolute transition right-3 fill-tertiary  group-[:enabled&:hover]:fill-brand group-hover:ease-in group-aria-expanded:fill-brand" />
          </button>
          {children}
        </div>
      </SelectContext.Provider>
    );
  },
  {
    Content: SelectContent,
    Option: SelectOption,
  }
);

interface SelectContentProps extends PropsWithChildren {
  className?: string;
}

function SelectContent({ children, className }: SelectContentProps) {
  const { selectContentRef, id, label, isOpen } = useContext(SelectContext);

  if (!isOpen) {
    return null;
  }

  return (
    <ul
      ref={selectContentRef}
      id={id}
      className={cn(
        "absolute top-[calc(100%+4px)] w-full max-h-56 border border-border rounded overflow-auto z-10",
        className
      )}
      role="listbox"
      aria-label={label}
      aria-hidden={!isOpen}
      // eslint-disable-next-line no-warning-comments
      //TODO focus item 상수화
      aria-activedescendant={isOpen ? "focus_item" : ""}
    >
      {children}
    </ul>
  );
}

interface SelectOptionProps extends PropsWithChildren {
  className?: string;
  value: string;
}

function SelectOption({ children, className, value }: SelectOptionProps) {
  const { selectedValue, onValueChange, onOpenChange } =
    useContext(SelectContext);

  const handleSelect = () => {
    onValueChange(value);
    onOpenChange(false);
  };

  const isSelected = value === selectedValue;

  return (
    <li>
      <button
        type="button"
        className={cn(
          "flex justify-between items-center w-full h-11 px-2 bg-white hover:bg-background transition hover:ease-in [&:not(:hover)]:aria-selected:bg-tint",
          className
        )}
        role="option"
        tabIndex={isSelected ? 0 : -1}
        aria-selected={isSelected}
        onClick={handleSelect}
      >
        {children}
      </button>
    </li>
  );
}

export default Select;
