import { styled } from "@/styles/index";

const Section = styled("section", {
  px: "$4",

  defaultVariants: {
    size: "md",
  },

  variants: {
    size: {
      md: {
        py: "$8",
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
