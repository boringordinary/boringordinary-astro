// No typings for @stitches/stringify
// @ts-ignore
import { stringify } from "@stitches/stringify";

const globalStyles = stringify({
  html: {
    fontFeatureSettings: `"rlig" 1,"calt" 0`,
    textRendering: "optimizeLegibility",
    WebkitFontSmoothing: "antialiased",
    MozOsxFontSmoothing: "grayscale",
    fontDisplay: "optional",
    WebkitTextSizeAdjust: "100%",
    lineHeight: "1.15",
  },
  body: {
    background: "#fafafc",
    fontFamily: "var(--fonts-sansSerif)",
    margin: "0",
    overflowX: "hidden",
  },
  "*": {
    letterSpacing: "0.01rem",
    borderColor: "var(--colors-divider)",
    transitionDuration: "200ms",
  },
  li: {
    fontSize: "inherit",
  },
});

export { globalStyles };
