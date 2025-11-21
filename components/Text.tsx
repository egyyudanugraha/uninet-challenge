import { cn } from "@/lib/utils";
import { cva, VariantProps } from "class-variance-authority";

const textVariants = cva("block text-base", {
  variants: {
    as: {
      p: "leading-6",
      h1: "text-5xl font-extrabold font-roboto-condensed",
      h2: "text-3xl font-semibold font-roboto-condensed",
      h3: "text-2xl font-semibold font-roboto-condensed",
      h4: "text-xl font-semibold font-roboto-condensed",
    },
    size: {
      default: "text-base",
      "extra-small": "text-xs leading-4",
      small: "text-sm font-medium leading-6",
      large: "text-lg font-semibold leading-6",
      "extra-large": "text-xl font-bold",
      "super-extra-large": "text-2xl font-bold",
    },
    variant: {
      default: "font-normal text-foreground",
      foreground: "text-foreground",
      "primary-foreground": "text-primary-foreground",
      muted: "text-muted-foreground",
      primary: "text-primary",
      secondary: "text-secondary",
      destructive: "text-destructive",
      success: "text-success-background",
    },
    weight: {
      semibold: "font-semibold",
      bold: "font-bold",
      medium: "font-medium",
      light: "font-light",
      normal: "font-normal",
      "extra-bold": "font-extrabold",
    },
  },
  defaultVariants: {
    as: "p",
    variant: "default",
  },
});

export interface TextProps
  extends React.HTMLAttributes<HTMLElement>,
    VariantProps<typeof textVariants> {}

export const Text = ({
  className,
  variant,
  size,
  weight,
  as,
  children,
  ...rest
}: TextProps) => {
  const Comp = as ?? "p";

  return (
    <Comp
      className={cn(textVariants({ as, size, variant, weight }), className)}
      {...rest}
    >
      {children}
    </Comp>
  );
};
