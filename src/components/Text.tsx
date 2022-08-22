import { styled } from "@styles/index";

const Text = styled("p", {
  defaultVariants: {
    size: "md",
  },
  variant: {
    size: {
      sm: {
        fontSize: "$sm",
      },
      md: {
        fontSize: "$md",
      },
      lg: {
        fontSize: "$lg",
      },
    },
  },
});

export { Text };
