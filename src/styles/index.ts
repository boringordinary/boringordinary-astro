import { blackA } from "@radix-ui/colors";
import { createStitches, globalCss } from "@stitches/react";
import { darken, lighten } from "polished";
import { utils } from "./utils";

const baseColors = {
  primary: "#000",
  secondary: "#6959ff",
  cream: "#fdf2e9",
  blue: "#007aff",
  teal: "#41ada1",
  red: "#D62121",
  green: "#03a10e",
  pink: "#FFB3C7",
  accent: "#ed1594",
  purple: "#b811ff",
  orange: "#ff7615",
  gray: "#575757",
  divider: "rgba(151, 117, 65, 0.25)",
  white: "#fff",
  ink: "rgba(151, 117, 65, 0.1)",
  background: "#fafafc",
  darkBackground: "#141414",
};

const baseFontSizePx = 16;

function generateColorScales(colorKey: keyof typeof baseColors) {
  const color = baseColors[colorKey];

  const config = {
    [`${colorKey}1`]: lighten(0.4, color),
    [`${colorKey}2`]: lighten(0.3, color),
    [`${colorKey}3`]: lighten(0.2, color),
    [`${colorKey}4`]: lighten(0.1, color),
    [`${colorKey}5`]: lighten(0.2, color),
    [`${colorKey}6`]: lighten(0.04, color),
    [`${colorKey}7`]: lighten(0.08, color),
    [`${colorKey}8`]: lighten(0.2, color),
    [`${colorKey}9`]: color,
    [`${colorKey}10`]: darken(0.4, color),
    [`${colorKey}11`]: darken(0.5, color),
    [`${colorKey}12`]: darken(0.6, color),
  };

  return config;
}

const pxToRem = (px: number) => {
  const remValue = px / baseFontSizePx;

  return `${remValue}rem`;
};

function generateSpacing(baseValue: number, numTokens: number) {
  let spacingObject: Record<number, string> = {};
  new Array(numTokens).fill(null).forEach((_, index) => {
    if (index === 0) {
      return;
    }

    const px = baseValue * index;

    spacingObject[index] = pxToRem(px);
  });

  return spacingObject;
}

const { theme, styled, keyframes, getCssText, css } = createStitches({
  theme: {
    colors: {
      ...generateColorScales("primary"),
      ...generateColorScales("secondary"),
      ...generateColorScales("accent"),
      ...generateColorScales("red"),
      ...generateColorScales("purple"),
      ...generateColorScales("background"),
      ...generateColorScales("orange"),
      ...generateColorScales("gray"),
      divider: "rgba(151, 117, 65, 0.25)",
    },
    space: generateSpacing(4, 30),
    fontSizes: {
      xs: "0.75rem" /* 12px */,
      sm: "0.875rem" /* 14px */,
      base: "1rem" /* 16px */,
      md: "1.125rem" /* 16px */,
      lg: "1.125rem" /* 18px */,
      xl: "1.25rem" /* 20px */,
      xl2: "1.5rem" /* 24px */,
      xl3: "1.875rem" /* 30px */,
      xl4: "2.25rem" /* 36px */,
      xl5: "3rem" /* 48px */,
      xl6: "3.75rem" /* 60px */,
      xl7: "4.5rem" /* 72px */,
    },
    fonts: {
      sansSerif: "Fira Sans, --apple-system, BlinkMacSystemFont, sans-serif",
      serif: "PT Serif, Fira Sans, Georgia, serif",
      script:
        "Nanum Pen Script, --apple-system, BlinkMacSystemFont, sans-serif",
    },
    radii: {
      sm: "4px",
      md: "6px",
      lg: "8px",
      xl: "12px",
      round: "50%",
      pill: "9999px",
    },
    shadows: {
      sm: `0px 7px 16px ${blackA.blackA5}`,
      md: `0px 10px 20px ${blackA.blackA5}`,
      lg: `0px 15px 20px ${blackA.blackA5}`,
      xl: `0px 8px 15px ${blackA.blackA5}`,

      backlight:
        "0 0 0 0px $colors$orange1, -15px 0 30px -15px $colors$accent9, 0 0 30px -15px $colors$orange9, 15px 0 30px -15px $colors$orange9",
    },
    sizes: {
      sm: "480px",
      md: "900px",
      lg: "1200px",
      xl: "1800px",
    },
  },
  utils,
  media: {
    sm: "(min-width: 520px)",
    md: "(min-width: 900px)",
    lg: "(min-width: 1200px)",
    xl: "(min-width: 1800px)",
    motion: "(prefers-reduced-motion)",
    hover: "(any-hover: hover)",
    dark: "(prefers-color-scheme: dark)",
    light: "(prefers-color-scheme: light)",
  },
});

export { theme, styled, keyframes, globalCss, getCssText, css };
export { globalStyles } from "./global";
// export type { CSS } from "@stitches/react";
