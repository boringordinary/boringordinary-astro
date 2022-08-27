import * as NavigationMenuPrimitive from "@radix-ui/react-navigation-menu";
import { violet, mauve } from "@radix-ui/colors";
import { CaretDownIcon } from "@radix-ui/react-icons";
import { ComponentProps, forwardRef } from "react";
import { styled, keyframes } from "@/styles/index";

const enterFromRight = keyframes({
  from: { transform: "translateX(200px)", opacity: 0 },
  to: { transform: "translateX(0)", opacity: 1 },
});

const enterFromLeft = keyframes({
  from: { transform: "translateX(-200px)", opacity: 0 },
  to: { transform: "translateX(0)", opacity: 1 },
});

const exitToRight = keyframes({
  from: { transform: "translateX(0)", opacity: 1 },
  to: { transform: "translateX(200px)", opacity: 0 },
});

const exitToLeft = keyframes({
  from: { transform: "translateX(0)", opacity: 1 },
  to: { transform: "translateX(-200px)", opacity: 0 },
});

const scaleIn = keyframes({
  from: { transform: "rotateX(-30deg) scale(0.9)", opacity: 0 },
  to: { transform: "rotateX(0deg) scale(1)", opacity: 1 },
});

const scaleOut = keyframes({
  from: { transform: "rotateX(0deg) scale(1)", opacity: 1 },
  to: { transform: "rotateX(-10deg) scale(0.95)", opacity: 0 },
});

const fadeIn = keyframes({
  from: { opacity: 0 },
  to: { opacity: 1 },
});

const fadeOut = keyframes({
  from: { opacity: 1 },
  to: { opacity: 0 },
});

const StyledMenu = styled(NavigationMenuPrimitive.Root, {
  position: "sticky",
  background: "$background5",
  top: 0,
  display: "grid",
  justifyContent: "space-between",
  alignItems: "center",
  width: "100vw",
  zIndex: 9999,
  gridTemplateColumns: "auto 1fr",

  "@sm": {
    fontSize: "18px",
    gridTemplateColumns: "auto 1fr auto",
  },
});

const StyledList = styled(NavigationMenuPrimitive.List, {
  all: "unset",
  justifyContent: "center",
  alignItems: "center",
  padding: 4,
  borderRadius: 6,
  listStyle: "none",
  display: "flex",
});

const itemStyles = {
  padding: "$2 $3",
  outline: "none",
  userSelect: "none",
  fontWeight: 500,
  lineHeight: 1,
  borderRadius: "$sm",
  color: "$primary11",

  "&:focus": { position: "relative", boxShadow: `0 0 0 2px ${violet.violet7}` },
  "&:hover": { backgroundColor: violet.violet3 },
};

const StyledTrigger = styled(NavigationMenuPrimitive.Trigger, {
  all: "unset",
  ...itemStyles,
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  gap: 2,
  cursor: "pointer",
});

const StyledCaret = styled(CaretDownIcon, {
  position: "relative",
  color: violet.violet10,
  top: 1,
  "[data-state=open] &": { transform: "rotate(-180deg)" },
  "@media (prefers-reduced-motion: no-preference)": {
    transition: "transform 250ms ease",
  },
});

const StyledTriggerWithCaret = forwardRef(
  ({ children, ...props }: any, forwardedRef) => (
    <StyledTrigger {...props} ref={forwardedRef}>
      {children}
      <StyledCaret aria-hidden />
    </StyledTrigger>
  )
);

StyledTriggerWithCaret.displayName = "StyledTriggerWithCaret";

const StyledLink = styled(NavigationMenuPrimitive.Link, {
  ...itemStyles,
  display: "block",
  textDecoration: "none",
  lineHeight: 1,
  "&[data-active]": {
    backgroundColor: violet.violet3,
  },
});

const StyledContent = styled(NavigationMenuPrimitive.Content, {
  position: "absolute",
  top: 0,
  left: 0,
  width: "100%",
  "@media only screen and (min-width: 600px)": { width: "auto" },
  "@media (prefers-reduced-motion: no-preference)": {
    animationDuration: "250ms",
    animationTimingFunction: "ease",
    '&[data-motion="from-start"]': { animationName: enterFromLeft },
    '&[data-motion="from-end"]': { animationName: enterFromRight },
    '&[data-motion="to-start"]': { animationName: exitToLeft },
    '&[data-motion="to-end"]': { animationName: exitToRight },
  },
});

const StyledIndicator = styled(NavigationMenuPrimitive.Indicator, {
  display: "flex",
  alignItems: "flex-end",
  justifyContent: "center",
  height: 10,
  top: "100%",
  overflow: "hidden",
  zIndex: 1,

  "@media (prefers-reduced-motion: no-preference)": {
    transition: "width, transform 250ms ease",
    '&[data-state="visible"]': { animation: `${fadeIn} 200ms ease` },
    '&[data-state="hidden"]': { animation: `${fadeOut} 200ms ease` },
  },
});

const StyledIndicatorWithArrow = forwardRef((props: any, forwardedRef) => (
  <StyledIndicator {...props} ref={forwardedRef}>
    <StyledArrow />
  </StyledIndicator>
));

StyledIndicatorWithArrow.displayName = "StyledIndicatorWithArrow";

const StyledViewport = styled(NavigationMenuPrimitive.Viewport, {
  position: "relative",
  transformOrigin: "top center",
  marginTop: 16,
  width: "100%",
  backgroundColor: "white",
  border: "$divider 1px solid",
  overflow: "hidden",
  boxShadow: "$md",
  height: "var(--radix-navigation-menu-viewport-height)",

  "@media only screen and (min-width: 600px)": {
    width: "var(--radix-navigation-menu-viewport-width)",
  },
  "@media (prefers-reduced-motion: no-preference)": {
    transition: "width, height, 300ms ease",
    '&[data-state="open"]': { animation: `${scaleIn} 200ms ease` },
    '&[data-state="closed"]': { animation: `${scaleOut} 200ms ease` },
  },
});

const CustomLink = ({
  children,
  href,
  currentPath,
  ...props
}: ComponentProps<"a">) => {
  const isActive = currentPath === href && currentPath !== "/";

  return (
    <StyledLink active={isActive} href={href} {...props}>
      {children}
    </StyledLink>
  );
};

// Exports
const NavigationMenu = StyledMenu;
const NavigationMenuList = StyledList;
const NavigationMenuItem = NavigationMenuPrimitive.Item;
const NavigationMenuTrigger = StyledTriggerWithCaret;
const NavigationMenuLink = CustomLink;
const NavigationMenuContent = StyledContent;
const NavigationMenuViewport = StyledViewport;
const NavigationMenuIndicator = StyledIndicatorWithArrow;

const StyledArrow = styled("div", {
  position: "relative",
  top: "100%",
  backgroundColor: "white",
  width: 14,
  height: 14,
  transform: "rotate(45deg)",
  borderTopLeftRadius: 2,
  zIndex: 99999,
});

// Your app...
const ContentList = styled("ul", {
  display: "grid",
  padding: 22,
  margin: 0,
  columnGap: 10,
  listStyle: "none",

  variants: {
    layout: {
      one: {
        "@media only screen and (min-width: 600px)": {
          width: 500,
          gridTemplateColumns: ".75fr 1fr",
        },
      },
      two: {
        "@media only screen and (min-width: 600px)": {
          width: 600,
          gridAutoFlow: "column",
          gridTemplateRows: "repeat(5, 1fr)",
        },
      },
    },
  },
});

const ListItem = styled("li", {});

const LinkTitle = styled("div", {
  fontWeight: 500,
  lineHeight: 1.2,
  marginBottom: 5,
  color: violet.violet12,
});

const LinkText = styled("p", {
  all: "unset",
  color: mauve.mauve11,
  lineHeight: 1.4,
  fontWeight: "initial",
});

const ContentListItem = forwardRef(
  ({ children, title, ...props }: any, forwardedRef) => (
    <ListItem>
      <NavigationMenuLink
        {...props}
        ref={forwardedRef}
        css={{
          padding: 12,
          borderRadius: 6,
          "&:hover": { backgroundColor: mauve.mauve3 },
        }}
      >
        <LinkTitle>{title}</LinkTitle>
        <LinkText>{children}</LinkText>
      </NavigationMenuLink>
    </ListItem>
  )
);

ContentListItem.displayName = "ContentListItem";

const ContentListItemCallout = forwardRef(
  ({ children, ...props }: any, forwardedRef) => (
    <ListItem
      css={{
        gridRow: "span 4",
        background: `linear-gradient(135deg, $orange9 0%, $accent9 100%)`,
        borderRadius: "$md",
        padding: "$4 $4",
      }}
    >
      <LinkTitle
        css={{
          fontSize: 18,
          color: "white",
          marginBottom: 7,
        }}
      >
        Industries
      </LinkTitle>
      <LinkText
        css={{
          fontSize: 14,
          color: mauve.mauve4,
          lineHeight: 1,
        }}
      >
        Get a tailored approach to your industry.
      </LinkText>
    </ListItem>
  )
);

ContentListItemCallout.displayName = "ContentListItemCallout";

const ViewportPosition = styled("div", {
  position: "absolute",
  display: "flex",
  justifyContent: "center",
  width: "100%",
  top: "75%",
  left: 0,
  perspective: "2000px",
});

export {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuTrigger,
  NavigationMenuLink,
  NavigationMenuContent,
  NavigationMenuViewport,
  NavigationMenuIndicator,
  ContentList,
  ContentListItem,
  ContentListItemCallout,
  ViewportPosition,
};
