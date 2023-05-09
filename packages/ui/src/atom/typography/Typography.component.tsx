import classNames from "classnames";

type TypographyVariant = "xs" | "sm" | "md" | "lg" | "xl" | "h3" | "h2" | "h1";

type TypographyWeightOption = "regular" | "medium" | "semibold" | "bold";

type TypographyAsElement = "span" | "label";

const TypographyVariantClasses: Record<TypographyVariant, string> = {
  xs: "text-xs",
  sm: "text-sm",
  md: "text-md",
  lg: "text-lg",
  xl: "text-xl",
  h3: "text-h3",
  h2: "text-h2",
  h1: "text-h1",
};

const TypographyWeightClasses: Record<TypographyWeightOption, string> = {
  regular: "font-normal",
  medium: "font-medium",
  semibold: "font-semibold",
  bold: "font-bold",
};

interface TypographyProps {
  as?: TypographyAsElement;
  variant: TypographyVariant;
  weight?: TypographyWeightOption;
  className?: string;
  children: string | React.ReactNode;
}

export const Typography = ({
  as,
  variant,
  weight = "regular",
  className,
  children,
}: TypographyProps) => {
  const TypographyVariantClassName = TypographyVariantClasses[variant];
  const TypographyWeightClassName = TypographyWeightClasses[weight];

  const isHeading = variant.startsWith("h");
  const Component =
    as || ((isHeading ? variant : "p") as keyof JSX.IntrinsicElements);

  return (
    <Component
      className={classNames(
        TypographyVariantClassName,
        TypographyWeightClassName,
        className,
        {
          "font-bold": isHeading,
        }
      )}
    >
      {children}
    </Component>
  );
};
