import { useMediaQuery } from "@jtwjs/hooks";

const breakpoints = {
  sm: "0",
  md: "768px",
  lg: "1200px",
};

type BreakpointKey = keyof typeof breakpoints;

export default function useBreakpoint<K extends BreakpointKey>(
  breakpointKey: K
): boolean {
  return useMediaQuery(`(min-width: ${breakpoints[breakpointKey]})`);
}
