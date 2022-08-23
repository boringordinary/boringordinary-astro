import type { ComponentProps } from "react";
import type { VariantProps } from "@stitches/react";
import { styled } from "@styles/index";

const baseConfig = {
  fontWeight: 600,
  margin: "0",
  defaultVariants: {
    size: "md",
  },
  variants: {
    size: {
      sm: {
        fontSize: "$md",
      },
      md: {
        fontSize: "$lg",
      },
      lg: {
        fontWeight: 800,
        fontSize: "$xl",
      },
      xl: {
        fontWeight: 800,
        fontSize: "$xl5",
        "@sm": {
          fontSize: "$xl6",
        },
        "@md": {
          fontSize: "$xl7",
        },
      },
    },
  },
};

// TODO: add proper types for variants
type Variants = VariantProps<any>;

type Props = Variants &
  ComponentProps<"h1"> & {
    as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  };

const Heading = ({ as = "h1", children, ...rest }: Props) => {
  const Base = styled(as, baseConfig);

  return <Base {...(rest as any)}>{children}</Base>;
};

export { Heading };
