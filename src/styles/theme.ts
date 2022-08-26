import { extendTheme } from "@chakra-ui/react";
import { darken, lighten } from "polished";

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
  orange: "#ff7615",
  gray: "#575757",
  divider: "rgba(151, 117, 65, 0.25)",
  white: "#fff",
  ink: "rgba(151, 117, 65, 0.1)",
  background: "#fafafc",
  darkBackground: "#141414",
};

function generateTints(colorKey: any) {
  const color = baseColors[colorKey];

  const config = {
    100: lighten(0.4, color),
    200: lighten(0.3, color),
    300: lighten(0.2, color),
    400: lighten(0.1, color),
    500: color,
    600: darken(0.04, color),
    700: darken(0.08, color),
    800: darken(0.2, color),
  };

  return config;
}

const colors = {
  primary: generateTints("primary"),
  secondary: generateTints("secondary"),
  gray: generateTints("gray"),
  ink: generateTints("ink"),
  accent: generateTints("accent"),
  blue: generateTints("blue"),
  red: generateTints("red"),
  pink: generateTints("pink"),
  green: generateTints("green"),
  white: generateTints("white"),
  cream: generateTints("cream"),
  orange: generateTints("orange"),
  divider: generateTints("divider"),
  teal: generateTints("teal"),
  background: generateTints("background"),
  darkBackground: generateTints("darkBackground"),
};

const theme = extendTheme({
  config: {
    cssVarPrefix: "boring",
  },
  styles: {
    global: {
      html: {
        fontFeatureSettings: `"rlig" 1,"calt" 0`,
        textRendering: "optimizeLegibility",
        WebkitFontSmoothing: "antialiased",
        MozOsxFontSmoothing: "grayscale",
        fontDisplay: "optional",
      },
      body: {
        background: "#fafafc",
      },
      "*": {
        letterSpacing: "0.01rem",
        borderColor: "divider.500",
        transitionDuration: "fast",
      },
    },
  },
  colors,
  components: {
    Stack: {
      baseStyle: {
        width: "100%",
      },
    },
    Divider: {
      baseStyle: {
        bg: "radial-gradient(50.14% 6.0378e+06% at 50.14% 100.05%, rgba(255, 255, 255, 0.25) 0%, rgba(255, 255, 255, 0.02) 100%)",
        height: "1px",
      },
    },
    Grid: {
      baseStyle: {
        width: "100%",
        justifyItems: "center",
        alignItems: "center",
      },
    },
    Avatar: {
      sizes: {
        md: {
          container: {
            width: "2.3rem",
            height: "2.3rem",
            fontSize: "sm",
          },
        },
      },
    },
    OrderedList: {
      defaultProps: {
        fontSize: "md",
      },
      baseStyle: {
        fontSize: "md",
        color: "gray.500",
      },
    },
    Link: {
      baseStyle: {
        color: "blue.500",

        _hover: {
          color: "blue.700",
        },

        _active: {
          color: "blue.500",
          textDecoration: "underline",
        },

        _focus: {
          color: "blue.500",
          textDecoration: "underline",
        },
      },
    },
    Button: {
      defaultProps: {
        colorScheme: "ink",
        variant: "solid",
        fontFamily: "heading",
      },
      baseStyle: {
        lineHeight: 1,
        border: "2px solid",
        borderRadius: "lg",
        borderColor: "transparent",
        fontWeight: "500",
        transform: "perspective(1px) translateZ(0)",
        backfaceVisibility: "hidden",

        "&:focus": {
          boxShadow: "none",
        },
      },

      sizes: {
        sm: {
          fontSize: "xs",
        },
        md: {
          fontSize: "sm",
        },
        lg: {
          height: "12",
          fontSize: "sm",
        },
        xl: {
          paddingY: "4",
          paddingX: "8",
          fontSize: "sm",
        },
      },

      variants: {
        ghost: ({ colorScheme }) => ({
          color: colorScheme === "ink" ? "gray.800" : `${colorScheme}.600`,
        }),
        outline: ({ colorScheme }) => {
          let additionalStyles: any = {
            _hover: {
              color: "white",
            },
            borderWidth: "2px",
          };

          switch (colorScheme) {
            case "ink":
              additionalStyles = {
                borderWidth: "2px",
                borderColor: "divider.500",
                color: "primary.500",

                _hover: {
                  color: "white",
                  bg: "primary.500",
                },

                _active: {
                  color: "white",
                  bg: "primary.500",
                },

                _focus: {
                  color: "white",
                  bg: "primary.500",
                },
              };
              break;
            default:
              additionalStyles = {};
              break;
          }

          return additionalStyles;
        },
        link: () => {
          return {
            color: "blue.500",
            // textDecoration: "underline",

            _hover: {
              color: "blue.400",
              textDecoration: "none",
            },

            _active: {
              color: "blue.700",
            },

            _focus: {
              color: "blue.700",
            },
          };
        },
        solid: ({ colorScheme }) => {
          let additionalStyles: any = {
            border: "1px solid",
            borderColor: `${colorScheme}.500`,
          };

          switch (colorScheme) {
            case "primary":
              additionalStyles = {
                bg: "primary.500",
                color: "cream.500",

                _hover: {
                  bg: "accent.500",
                  shadow: "lg",
                },
                _active: {
                  bg: "accent.700",
                },
                _focus: {
                  bg: "accent.600",
                  // borderColor: "primary.500",
                },
              };
              break;
            case "ink":
              additionalStyles = {
                color: "gray.800",

                _hover: { bg: "ink.800" },
                _focus: { bg: "ink.800" },
                _active: { bg: darken(0.8, baseColors.ink) },
              };
              break;
            default:
              additionalStyles = {};
              break;
          }

          const baseStyles = {
            bg: `${colorScheme}.500`,
            boxShadow: "sm",

            _hover: {
              bg: `${colorScheme}.700`,
            },
            _active: {
              bg: `${colorScheme}.800`,
            },
            _focus: {
              bg: `${colorScheme}.800`,
            },
          };

          const styles = { ...baseStyles, ...additionalStyles };

          return styles;
        },
      },
    },

    Heading: {
      baseStyle: {
        fontWeight: 700,
        color: "gray.900",
        textShadow: "4px 0px 2px #00000008",
        lineHeight: 1.33,
      },
    },

    Text: {
      baseStyle: {
        fontSize: ["md"],
        color: "gray.500",
        lineHeight: 1.5,
      },
    },
    Slider: {
      baseStyle: {
        track: {
          borderRadius: "full",
        },
      },
      sizes: {
        md: {
          track: {
            height: "6px",
          },
        },
        lg: {
          track: {
            height: "8px",
          },

          thumb: {
            height: "20px",
            width: "20px",
          },
        },
      },
    },
  },

  radii: {
    standout: "0 2em",
  },
  shadows: {
    // outline: "0 0 0 4px rgb(226 226 226 / 40%)",
    outline: 0,
  },
  fonts: {
    body: `"Fira Sans", --apple-system, BlinkMacSystemFont, sans-serif`,
    heading: `"Fira Sans", --apple-system, BlinkMacSystemFont, sans-serif`,
    serif: "PT Serif, Fira Sans, Georgia, serif",
    script: "Nanum Pen Script, --apple-system, BlinkMacSystemFont, sans-serif",
  },
  fontSizes: {
    xs: "1rem",
    sm: "1.15rem",
    md: "1.4rem",
    lg: "1.5rem",
    xl: "1.8rem",
    "2xl": "2.1rem",
    "3xl": "2.3rem",
    "4xl": "2.5rem",
  },
});

export { theme };
