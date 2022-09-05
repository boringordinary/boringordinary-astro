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
});

const MenuItem = styled("div", {
  fontSize: "$md",
  fontWeight: "500",
});

interface Props {
  currentPath: string;
}

const TopBar = ({ currentPath }: Props) => {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  return (
    <>
      <StylisticBorder />
      <Menu>
        <a href="/">
          <LogoWrapper>
            <img src="/branding/logo-symbol.svg" alt="Logo" />
          </LogoWrapper>
        </a>

        <Box css={{ display: "flex", width: "100%" }}>
          {items.map(({ label, href, items, callout }) => {
            // if (items) {
            //   return (
            //     <div key={label}>
            //       {label}
            //       {/* <NavigationMenuContent>
            //         <ContentList layout="one">
            //           {callout && <ContentListItemCallout />}
            //           {items.map(({ label, href }) => (
            //             <ContentListItem
            //               href={href}
            //               title={label}
            //               key={label}
            //             />
            //           ))}
            //         </ContentList>
            //       </NavigationMenuContent> */}
            //     </div>
            //   );
            // }

            return (
              <div key={label}>
                <MenuItem>{label}</MenuItem>
              </div>
            );
          })}
        </Box>

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
            <Button css={{ marginRight: "$4" }}>Work with Us</Button>
          </a>
        </div>
      </Menu>
    </>
  );
};

export { TopBar };
