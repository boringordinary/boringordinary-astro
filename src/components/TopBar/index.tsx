import { useState } from "react";
import {
  TbRocket,
  TbShoppingCart,
  TbPizza,
  TbScale,
  TbBrowser,
  TbPhoto,
  TbPaint,
} from "react-icons/tb/index";
import type { IconType } from "react-icons/lib";
import { styled } from "@/styles/index";
import { Button } from "@/components/Button";
import { Box } from "../Box";

interface Item {
  label: string;
  href: string;
  items?: Item[];
  callout?: boolean;
  icon?: IconType;
}

const items: Item[] = [
  {
    label: "Our Story",
    href: "/about",
  },
  {
    label: "Pricing",
    href: "/pricing",
  },
  {
    label: "Industries",
    href: "#",
    callout: true,
    items: [
      {
        label: "Startups",
        href: "/startups",
        icon: TbRocket,
      },
      {
        label: "E-Commerce",
        icon: TbShoppingCart,
        href: "/",
      },
      {
        label: "Food Business",
        icon: TbPizza,
        href: "/industries/food-and-service",
      },
      {
        label: "Legal Services",
        icon: TbScale,
        href: "/industries/legal-services",
      },
    ],
  },
  {
    label: "Services",
    href: "#",
    items: [
      {
        label: "Logo & Illustrations",
        href: "/services/logo-illustrations",
        icon: TbPaint,
      },
      {
        label: "Shopify Builds",
        href: "/services/shopify-dev",
        icon: TbBrowser,
      },
      {
        label: "Webflow Builds",
        href: "/services/webflow-dev",
        icon: TbBrowser,
      },
      {
        label: "Web Design",
        href: "/services/web-design",
        icon: TbBrowser,
      },
      {
        label: "Product Photos",
        href: "/services/product-photos",
        icon: TbPhoto,
      },
    ],
  },
];

const LogoWrapper = styled("div", {
  cursor: "pointer",
  display: "flex",
  alignItems: "center",
  height: "50px",
  width: "50px",
  position: "relative",
  "@sm": {
    height: "65px",
    width: "65px",
  },
});

const StylisticBorder = styled("div", {
  position: "relative",
  top: "0",
  left: "0",
  margin: 0,
  width: "100vw",
  height: "5px",
  background: "linear-gradient(to right, $orange9 0%, $accent9 100%)",
});

const Menu = styled("div", {
  display: "grid",
  gridTemplateColumns: "auto 1fr auto",
  maxW: "100vw",
  maxH: "65px",
});

const MenuItem = styled("a", {
  br: "$lg",
  py: "$3",
  px: "$5",
  textDecoration: "none",
  fontSize: "$xl",
  fontWeight: "500",
  color: "$gray9",

  "&:hover": {
    color: "$gray11",
  },

  "&:active": {
    bg: "$ink9",
  },

  variants: {
    active: {
      true: {
        color: "$gray11",
        bg: "$ink9",
      },
    },
  },
});

interface Props {
  currentPath: string;
}

const TopBar = ({ currentPath }: Props) => {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  return (
    <Box>
      <StylisticBorder />
      <Menu>
        <a href="/">
          <LogoWrapper>
            <img
              src="/branding/logo-symbol.svg"
              alt="Logo"
              width="100%"
              height="100%"
            />
          </LogoWrapper>
        </a>

        <Box
          css={{
            display: "flex",
            gap: "$4",
            width: "100%",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {items.map(({ label, href, items, callout }) => {
            const isActive = currentPath.startsWith(href);

            return (
              <MenuItem key={label} href={href} active={isActive}>
                {label}
              </MenuItem>
            );
          })}
        </Box>

        <Box
          css={{
            display: "flex",
            alignItems: "center",
            pr: "$4",
          }}
        >
          <Button
            css={{
              display: "flex",
              "@sm": { display: "none" },
            }}
            aria-label="Open menu"
            variant="ghost"
            onClick={() => setMobileNavOpen(true)}
          >
            MENU
          </Button>

          <a href="/sessions/strategy-call">
            <Button css={{ mr: "$4" }}>Chat with Us</Button>
          </a>
        </Box>
      </Menu>
    </Box>
  );
};

export { TopBar };
