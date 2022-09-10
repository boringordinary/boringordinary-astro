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
import clsx from "clsx";
import type { IconType } from "react-icons/lib";
import { styled } from "@/styles/index";
import { Button } from "@/components/Button";
import { Box } from "../Box";
import { MegaMenu } from "./MegaMenu";

export interface Item {
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
      <div className="width-screen relative top-0 left-0 h-1 bg-gradient-to-r from-violet-900 to-rose-500"></div>
      <Menu>
        <a href="/">
          <div className="align-center relative flex h-16 w-16 cursor-pointer">
            <img
              src="/branding/logo-symbol.svg"
              alt="Logo"
              width="100%"
              height="100%"
            />
          </div>
        </a>

        <div className="flex w-full items-center justify-center gap-4">
          {items.map(({ label, href, items, callout }) => {
            const isActive = currentPath.startsWith(href);
            const itemStyles = clsx({
              "relative rounded-full px-4 py-2 text-xl font-medium hover:bg-violet-100 hover:text-neutral-900 active:bg-violet-200":
                true,
              "text-neutral-600 hover:bg-violet-100": !isActive,
              "hover:bg-violet-200 bg-violet-100 text-neutral-900": isActive,
            });

            if (items) {
              const Item = (
                <a className={itemStyles} href={href}>
                  {label}
                </a>
              );
              return <MegaMenu items={items} target={Item} key={label} />;
            }

            return (
              <a className={itemStyles} key={label} href={href}>
                {label}
              </a>
            );
          })}
        </div>

        <div className="flex items-center pr-2">
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
        </div>
      </Menu>
    </Box>
  );
};

export { TopBar };
