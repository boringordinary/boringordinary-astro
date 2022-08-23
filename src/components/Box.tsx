import type { ComponentProps } from "react";
import type { VariantProps } from "@stitches/react";
import { styled } from "@styles/index";

const Base = styled("div");

type Variants = VariantProps<typeof Base>;
type Props = Variants & ComponentProps<"div">;

const Box = ({ children, ...rest }: Props) => {
  return <Base {...rest}>{children}</Base>;
};

export { Box };
