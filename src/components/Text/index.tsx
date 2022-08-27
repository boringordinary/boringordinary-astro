import { styled } from "@/styles/index";

const Text = styled("p", {
  lineHeight: "1.5",
  margin: 0,

  defaultVariants: {
    size: "md",
  },
  variants: {
    size: {
      md: {
        fontWeight: "400",
        fontSize: "$md",
      },
      lg: {
        fontWeight: "400",
        fontSize: "$lg",
      },
      xl: {
        fontWeight: "400",
        fontSize: "$xl",
      },
      xl2: {
        lineHeight: "1.15",
        fontWeight: "600",
        fontSize: "$xl2",
      },
      xl3: {
        lineHeight: "1.15",
        fontWeight: "600",
        fontSize: "$xl3",
      },
      xl4: {
        lineHeight: "1.15",
        fontWeight: "700",
        fontSize: "$xl4",
      },
      xl5: {
        lineHeight: "1.15",
        fontWeight: "700",
        fontSize: "$xl5",
      },
      xl6: {
        lineHeight: "1.15",
        fontWeight: "800",
        fontSize: "$xl6",
      },
      xl7: {
        lineHeight: "1.15",
        fontWeight: "800",
        fontSize: "$xl7",
      },
    },
  },
});

export { Text };
