import type { ComponentProps } from "react";
import type { VariantProps } from "@stitches/react";
import { styled } from "@styles/index";

type Variants = VariantProps<typeof Base>;
type Props = Variants &
  ComponentProps<"h1"> & {
    as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  };

const Heading = ({ as = "h1", ...rest }: Props) => {
  const Base = styled(as, {
    fontWeight: 600,
    defaultVariants: {
      size: "md",
    },
    variant: {
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
          fontSize: "$xl2",
        },
      },
    },
  });

  return <Base {...rest}></Base>;
};

export { Heading };
