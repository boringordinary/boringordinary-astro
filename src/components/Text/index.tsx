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
    align: {
      right: {
        textAlign: "right",
      },
      center: {
        textAlign: "center",
      },
    },
    gradient: {
      primary: {
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
        MozBackgroundClip: "text",
        backgroundImage: "linear-gradient(90deg, $primary9, $accent9)",
      },
    },
    color: {
      lighter: {
        color: "$gray5",
      },
      light: {
        color: "$gray8",
      },
      neutral: {
        color: "$gray9",
      },

      dark: {
        color: "$gray11",
      },
    },
    display: {
      true: {
        color: "$gray11",
      },
    },
    size: {
      xs: {
        fontSize: "$xs",
      },
      sm: {
        fontSize: "$sm",
      },
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
        lineHeight: "1.4",
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
  compoundVariants: [
    {
      display: true,
      size: "xs",
      css: {
        lineHeight: "1.4",
        fontWeight: "600",
        fontSize: "$xl1",

        "@md": {
          fontSize: "$xl2",
        },
      },
    },
    {
      display: true,
      size: "sm",
      css: {
        lineHeight: "1.4",
        fontWeight: "600",
        fontSize: "$xl2",

        "@md": {
          fontSize: "$xl3",
        },
      },
    },

    {
      display: true,
      size: "md",
      css: {
        color: "$gray10",
        lineHeight: "1.15",
        fontWeight: "700",
        fontSize: "$xl4",
      },
    },

    {
      display: true,
      size: "lg",
      css: {
        color: "$gray10",
        lineHeight: "1.15",
        fontWeight: "700",
        fontSize: "$xl5",
      },
    },

    {
      display: true,
      size: "xl",
      css: {
        color: "$gray10",
        lineHeight: "1.15",
        fontWeight: "800",
        fontSize: "$xl6",
      },
    },
  ],
});

export { Text };
