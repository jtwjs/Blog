"use client";

import { cn } from "@jtwjs/cn";
import { VariantProps, cva } from "class-variance-authority";

const switchVariants = cva(
  "group absolute w-[7px] h-[7px] transition-all duration-200 ease",
  {
    variants: {
      isDarkMode: {
        true: "fill-[#D7D7D820] opacity-0 [&:nth-of-type(5)~&]:opacity-100 [&:nth-of-type(1)]:translate-x-[2em] [&:nth-of-type(1)]:translate-y-[1em] [&:nth-of-type(2)]:translate-x-[3em] [&:nth-of-type(2)]:translate-y-[1.5em] [&:nth-of-type(3)]:translate-x-[3em] [&:nth-of-type(3)]:translate-y-[2em] [&:nth-of-type(4)]:translate-x-[3em] [&:nth-of-type(4)]:translate-y-[2em] [&:nth-of-type(5)]:translate-x-[1.9em] [&:nth-of-type(5)]:translate-y-[2.6em] [&:nth-of-type(6)]:translate-x-[1.4em] [&:nth-of-type(6)]:translate-y-[2.5em] [&:nth-of-type(7)]:translate-x-[1.1em] [&:nth-of-type(7)]:translate-y-[1.6em] [&:nth-of-type(8)]:translate-x-[1.7em] [&:nth-of-type(8)]:translate-y-[2.1em]",
        false:
          "fill-[#f2c94c] opacity-100 [&:nth-of-type(1)]:translate-x-[1.8em] [&:nth-of-type(1)]:translate-y-[0.35em] [&:nth-of-type(2)]:translate-x-[2.8em] [&:nth-of-type(2)]:translate-y-[0.7em] [&:nth-of-type(3)]:translate-x-[3.2em] [&:nth-of-type(3)]:translate-y-[1.8em] [&:nth-of-type(4)]:translate-x-[2.8em] [&:nth-of-type(4)]:translate-y-[2.8em] [&:nth-of-type(5)]:translate-x-[1.8em] [&:nth-of-type(5)]:translate-y-[3.2em] [&:nth-of-type(6)]:translate-x-[0.7em] [&:nth-of-type(6)]:translate-y-[2.8em] [&:nth-of-type(7)]:translate-x-[0.35em] [&:nth-of-type(7)]:translate-y-[1.8em] [&:nth-of-type(8)]:translate-x-[0.7em] [&:nth-of-type(8)]:translate-y-[0.7em]",
      },
    },
  }
);

export interface DarkModeSwitchProps
  extends VariantProps<typeof switchVariants> {
  className?: string;
  isDarkMode?: boolean;
  onToggle: () => void;
}

export default function DarkModeSwitch({
  className,
  isDarkMode = false,
  onToggle,
}: DarkModeSwitchProps) {
  return (
    <button
      className={cn(
        "group relative block w-max p-4 text-md scale-[0.7] cursor-pointer",
        className
      )}
      type="button"
      role="switch"
      aria-checked={isDarkMode}
      onClick={onToggle}
    >
      <span className="sr-only">다크모드 토글 스위치</span>
      <div
        className={cn(
          "relative w-8 h-8 rounded-full bg-[#f2c94c] bg-no-repeat overflow-hidden translate-[1.5px] translate-y-[0.5px] transition-all duration-[400ms] ease  after:absolute after:w-8 after:h-8 after:rounded-full after:opacity-0 after:translate-x-[2em] after:translate-y-[-2em] after:transition-all after:duration-[400ms] after:ease group-aria-checked:bg-[#D7D7D8] group-aria-checked:after:bg-[#828894] group-aria-checked:after:translate-x-[-0.4em] group-aria-checked:after:translate-y-[-0.5em] group-aria-checked:after:opacity-100"
        )}
      />
      <div
        className={cn(
          "absolute top-0 left-0 w-full h-full transition-transform duration-[400ms] group-aria-checked:rotate-180"
        )}
      >
        {Array.from({ length: 8 }, (_, i) => i).map((_, idx) => (
          <svg
            key={idx}
            className={cn(switchVariants({ isDarkMode }))}
            viewBox="0 0 500 500"
          >
            <circle
              className={cn("transition-transform duration-400 ease")}
              cx="250"
              cy="250"
              r="200"
            />
          </svg>
        ))}
      </div>
    </button>
  );
}
