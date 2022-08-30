import type * as Stitches from "@stitches/react";

export const utils = {
  size: (value: Stitches.PropertyValue<"width">) => ({
    width: value,
    height: value,
  }),

  mw: (value: Stitches.PropertyValue<"maxWidth">) => ({
    maxWidth: value,
  }),

  mh: (value: Stitches.PropertyValue<"maxHeight">) => ({
    maxHeight: value,
  }),

  // paddings
  p: (value: Stitches.PropertyValue<"padding">) => ({
    padding: value,
  }),
  pt: (value: Stitches.PropertyValue<"paddingTop">) => ({
    paddingTop: value,
  }),
  pr: (value: Stitches.PropertyValue<"paddingRight">) => ({
    paddingRight: value,
  }),
  pb: (value: Stitches.PropertyValue<"paddingBottom">) => ({
    paddingBottom: value,
  }),
  pl: (value: Stitches.PropertyValue<"paddingLeft">) => ({
    paddingLeft: value,
  }),
  px: (value: Stitches.PropertyValue<"paddingLeft">) => ({
    paddingLeft: value,
    paddingRight: value,
  }),
  py: (value: Stitches.PropertyValue<"paddingTop">) => ({
    paddingTop: value,
    paddingBottom: value,
  }),

  // margins
  m: (value: Stitches.PropertyValue<"margin">) => ({
    margin: value,
  }),
  mt: (value: Stitches.PropertyValue<"marginTop">) => ({
    marginTop: value,
  }),
  mr: (value: Stitches.PropertyValue<"marginRight">) => ({
    marginRight: value,
  }),
  mb: (value: Stitches.PropertyValue<"marginBottom">) => ({
    marginBottom: value,
  }),
  ml: (value: Stitches.PropertyValue<"marginLeft">) => ({
    marginLeft: value,
  }),
  mx: (value: Stitches.PropertyValue<"marginLeft">) => ({
    marginLeft: value,
    marginRight: value,
  }),
  my: (value: Stitches.PropertyValue<"marginTop">) => ({
    marginTop: value,
    marginBottom: value,
  }),

  bg: (value: Stitches.PropertyValue<"background">) => ({
    background: value,
  }),

  br: (value: Stitches.PropertyValue<"borderRadius">) => ({
    borderRadius: value,
  }),

  // Clamp a line of text to a certain number of rows
  lineClamp: (value: number) => ({
    display: "-webkit-box",
    WebkitLineClamp: value,
    WebkitBoxOrient: "vertical",
    overflow: "hidden",
  }),

  shadow: (value: Stitches.PropertyValue<"boxShadow">) => ({
    boxShadow: value,
  }),

  // Truncate a line of text with an ellipsis
  truncate: (value: boolean) =>
    value
      ? {
          overflow: "hidden",
          textOverflow: "ellipsis",
          whiteSpace: "nowrap",
        }
      : "",
};
