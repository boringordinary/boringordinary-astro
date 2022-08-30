import { globalCss } from "./";

const globalStyles = globalCss({
  html: {
    fontFeatureSettings: `"rlig" 1,"calt" 0`,
    textRendering: "optimizeLegibility",
    WebkitFontSmoothing: "antialiased",
    MozOsxFontSmoothing: "grayscale",
    fontDisplay: "optional",
    background: "#fafafc",
    fontFamily: "$sansSerif",
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
  li: {
    fontSize: "inherit",
  },
});

export { globalStyles };
