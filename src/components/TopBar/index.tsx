import { useState } from "react";
import {
  TbRocket,
  TbShoppingCart,
  TbPizza,
  TbScale,
  TbBrowser,
  TbPhoto,
  TbPaint,
} from "react-icons/tb";
import type { IconType } from "react-icons/lib";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
  ContentList,
  ContentListItem,
  ViewportPosition,
  ContentListItemCallout,
} from "./NavigationMenu";
import { styled } from "@/styles/index";
import { Button } from "@/components/Button";

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

const TopBar = () => {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  return (
    <>
      <StylisticBorder />
      <NavigationMenu>
        <a href="/">
          <LogoWrapper>
            <img src="/branding/logo-symbol.svg" alt="Logo" />
          </LogoWrapper>
        </a>

        <div
        // css={{
        //   width: "100%",
        //   display: "none",
        //   "@sm": { display: "flex", justifyContent: "center" },
        // }}
        >
          <NavigationMenuList>
            {items.map(({ label, href, items, callout }) => {
              if (items) {
                return (
                  <NavigationMenuItem key={label}>
                    <NavigationMenuTrigger>{label}</NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <ContentList layout="one">
                        {callout && <ContentListItemCallout />}
                        {items.map(({ label, href }) => (
                          <ContentListItem
                            href={href}
                            title={label}
                            key={label}
                          />
                        ))}
                      </ContentList>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                );
              }

              return (
                <NavigationMenuItem key={label}>
                  <NavigationMenuLink href={href}>{label}</NavigationMenuLink>
                </NavigationMenuItem>
              );
            })}
            <NavigationMenuIndicator />
          </NavigationMenuList>
        </div>

        <div className="flex justify-self-end">
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
            <Button size="sm" css={{ marginRight: "$4" }}>
              Work with Us
            </Button>
          </a>
        </div>

        <ViewportPosition>
          <NavigationMenuViewport />
        </ViewportPosition>
      </NavigationMenu>
    </>
  );
};

export { TopBar };
