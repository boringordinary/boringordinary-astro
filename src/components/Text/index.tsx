import { styled } from "@/styles/index";

const Text = styled("p", {
  lineHeight: "1.5",
  margin: 0,
  marginBottom: "$4",
  color: "$gray10",

  defaultVariants: {
    size: "md",
    color: "neutral",
  },
  variants: {
    color: {
      neutral: {
        color: "$gray9",
      },
    },
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
        fontSize: "$xl",

        "@md": {
          fontSize: "$xl2",
        },
      },
      xl3: {
        lineHeight: "1.4",
        fontWeight: "600",
        fontSize: "$xl2",

        "@md": {
          fontSize: "$xl3",
        },
      },
      xl4: {
        color: "$gray10",
        lineHeight: "1.15",
        fontWeight: "700",
        fontSize: "$xl4",
      },
      xl5: {
        color: "$gray10",
        lineHeight: "1.15",
        fontWeight: "700",
        fontSize: "$xl5",
      },
      xl6: {
        color: "$gray10",
        lineHeight: "1.15",
        fontWeight: "800",
        fontSize: "$xl6",
      },
      xl7: {
        color: "$gray10",
        lineHeight: "1.15",
        fontWeight: "800",
        fontSize: "$xl5",

        "@md": {
          fontSize: "$xl7",
        },
      },
    },
  },
});

export { Text };
