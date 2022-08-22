import { globalCss } from "@stitches/react";

const globalStyles = globalCss({
  html: {
    fontFeatureSettings: `"rlig" 1,"calt" 0`,
    textRendering: "optimizeLegibility",
    WebkitFontSmoothing: "antialiased",
    MozOsxFontSmoothing: "grayscale",
    fontDisplay: "optional",
  },
  body: {
    background: "#fafafc",
    fontFamily: "$sansSerif",
  },
  "*": {
    letterSpacing: "0.01rem",
    borderColor: "$divider",
    transitionDuration: "200ms",
  },
});

export { globalStyles };
