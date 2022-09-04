import { styled } from "@styles/index";

const Container = styled("div", {
  py: "$10",

  variants: {
    center: {
      true: {
        mx: "auto",
      },
    },
    size: {
      sm: {
        maxWidth: "$sm",
      },
      md: {
        maxWidth: "$md",
      },
      lg: {
        maxWidth: "$lg",
      },
      xl: {
        maxWidth: "$xl",
      },
    },
  },
});

export { Container };
