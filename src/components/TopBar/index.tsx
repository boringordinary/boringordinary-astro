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
import { Button } from "@/components/Button";
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

interface Props {
  currentPath: string;
}

const TopBar = ({ currentPath }: Props) => {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  return (
    <div>
      <div className="width-screen relative top-0 left-0 h-1 bg-gradient-to-r from-violet-900 to-rose-500"></div>
      <div className="max-w-screen grid max-h-16 grid-cols-[1fr_auto_1fr]">
        <a
          href="/"
          className="align-center relative flex h-16 w-16 cursor-pointer"
        >
          <img
            src="/branding/logo-symbol.svg"
            alt="Logo"
            width="100%"
            height="100%"
          />
        </a>

        <div className="hidden w-full items-center justify-center gap-4 sm:flex">
          {items.map(({ label, href, items, callout }) => {
            const isActive = currentPath.startsWith(href);
            const itemStyles = clsx({
              "relative rounded-full px-4 py-2 text-xl font-medium hover:text-neutral-900":
                true,
              "text-neutral-700 hover:text-violet-700": !isActive,
              "text-violet-700 hover:text-violet-700": isActive,
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

        <div className="flex items-center justify-end pr-2">
          <div className="block sm:hidden">
            <Button
              aria-label="Open menu"
              variant="ghost"
              onClick={() => setMobileNavOpen(true)}
            >
              MENU
            </Button>
          </div>

          <a href="/sessions/strategy-call" className="mr-4">
            <Button>Chat with Us</Button>
          </a>
        </div>
      </div>
    </div>
  );
};

export { TopBar };
