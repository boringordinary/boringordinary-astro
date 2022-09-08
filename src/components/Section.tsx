import { styled } from "@/styles/index";

const Section = styled("section", {
  px: "$4",

  defaultVariants: {
    size: "md",
  },

  variants: {
    size: {
      md: {
        paddingTop: "$8",
        paddingBottom: "$8",
      },
      lg: {
        py: "$12",
      },
      xl: {
        py: "$20",
      },
    },
  },
});

export { Section };
