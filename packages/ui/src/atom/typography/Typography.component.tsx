import { cn } from "@jtwjs/utils";
import { cva, type VariantProps } from "class-variance-authority";

const typographyVariants = cva("", {
  variants: {
    variant: {
      xs: "text-xs",
      sm: "text-sm",
      md: "text-md",
      lg: "text-lg",
      xl: "text-xl",
      h3: "text-h3",
      h2: "text-h2",
      h1: "text-h1",
    },
    weight: {
      regular: "font-normal",
      medium: "font-medium",
      semibold: "font-semibold",
      bold: "font-bold",
    },
  },
  defaultVariants: {
    weight: "regular",
  },
});
interface TypographyProps extends VariantProps<typeof typographyVariants> {
  as?: "span" | "label";
  className?: string;
  children: string | React.ReactNode;
}
export default function Typography({
  as,
  variant,
  weight,
  className,
  children,
}: TypographyProps) {
  const isHeading = variant?.startsWith("h");
  const Component =
    as || ((isHeading ? variant : "p") as keyof JSX.IntrinsicElements);

  return (
    <Component
      className={cn(typographyVariants({ variant, weight, className }))}
    >
      {children}
    </Component>
  );
}
