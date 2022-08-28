import { styled } from "@stitches/react";

const Container = styled("div", {
  variants: {
    size: {
      md: {
        maxWidth: "$sm",
      },
    },
  },
});

export { Container };
