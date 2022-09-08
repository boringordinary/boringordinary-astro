import { styled, variants } from "@/styles/index";
import cx from "clsx";

interface Props {
  size?: "xs" | "sm" | "md" | "lg" | "xl";
  as?: keyof JSX.IntrinsicElements;
  color?: string;
  display?: string;
  children?: React.ReactNode;
}

export const TextC = ({ size = "md", as = "p", display, children }: Props) => {
  const styles = cx({
    "text-xs": size === "xs",
    "text-sm": size === "sm",
    "text-base": size === "md",
    "text-lg": size === "lg",
    "text-xl": size === "xl",
    "text-2xl font-bold": size === "xs" && display,
    "text-3xl font-bold": size === "sm" && display,
    "text-4xl font-bold": size === "md" && display,
    "text-5xl font-extrabold": size === "lg" && display,
    "text-6xl font-extrabold": size === "xl" && display,
  });

  const El = as;

  return <El className={styles}>{children}</El>;
};

const Text = styled("p", {
  lineHeight: "1.5",
  margin: 0,
  color: "$gray10",

  defaultVariants: {
    size: "md",
    color: "neutral",
  },
  variants: {
    weight: {
      400: {
        fontWeight: 400,
      },
      500: {
        fontWeight: 500,
      },
      600: {
        fontWeight: 600,
      },
      700: {
        fontWeight: 700,
      },
      800: {
        fontWeight: 800,
      },
    },
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
        marginBottom: "$4",
      },
      md: {
        fontWeight: "400",
        fontSize: "$md",
        marginBottom: "$4",
      },
      lg: {
        fontWeight: "400",
        fontSize: "$lg",
        marginBottom: "$4",
      },
      xl: {
        fontWeight: "400",
        fontSize: "$xl",
        marginBottom: "$3",
      },
      xl2: {
        lineHeight: "1.4",
        fontWeight: "600",
        fontSize: "$xl",
        marginBottom: "$3",

        "@md": {
          fontSize: "$xl2",
        },
      },
      xl3: {
        lineHeight: "1.4",
        fontWeight: "600",
        fontSize: "$xl2",
        marginBottom: "$4",

        "@md": {
          fontSize: "$xl3",
        },
      },
      xl4: {
        color: "$gray10",
        lineHeight: "1.15",
        fontWeight: "700",
        fontSize: "$xl4",
        marginBottom: "$4",
      },
      xl5: {
        color: "$gray10",
        lineHeight: "1.15",
        fontWeight: "700",
        fontSize: "$xl5",
        marginBottom: "$4",
      },
      xl6: {
        color: "$gray10",
        lineHeight: "1.15",
        fontWeight: "800",
        fontSize: "$xl6",
        marginBottom: "$4",
      },
      xl7: {
        color: "$gray10",
        lineHeight: "1.15",
        fontWeight: "800",
        fontSize: "$xl5",
        marginBottom: "$4",

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
        fontSize: "$lg",

        "@md": {
          fontSize: "$xl",
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
