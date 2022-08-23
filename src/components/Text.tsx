import { styled } from "@styles/index";

const Text = styled("p", {
  lineHeight: "1.5",
  margin: 0,
  defaultVariants: {
    size: "md",
  },
  variants: {
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
      xl: {
        fontSize: "$xl",
      },
      xl2: {
        fontSize: "$xl2",
      },
      xl3: {
        fontSize: "$xl3",
      },
    },
  },
});

export { Text };
