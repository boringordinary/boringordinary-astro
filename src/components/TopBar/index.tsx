import { useState } from "react";

import clsx from "clsx";
import { Button } from "@/components/Button";
import { MegaMenu } from "./MegaMenu";
import { Divider } from "../Divider";

export interface Item {
  label: string;
  href: string;
  items?: Item[];
  callout?: boolean;
}

const items: Item[] = [
  {
    label: "Our Story",
    href: "/about",
  },
  {
    label: "Pricing Plans",
    href: "/pricing",
  },
  // {
  //   label: "Industries",
  //   href: "#",
  //   callout: true,
  //   items: [
  //     {
  //       label: "Startups",
  //       href: "/startups",
  //     },
  //     {
  //       label: "E-Commerce",
  //       href: "/",
  //     },
  //     {
  //       label: "Food Business",
  //       href: "/industries/food-and-service",
  //     },
  //     {
  //       label: "Legal Services",
  //       href: "/industries/legal-services",
  //     },
  //   ],
  // },
];

interface Props {
  currentPath: string;
}

const TopBar = ({ currentPath }: Props) => {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  return (
    <div>
      <div className="width-screen relative top-0 left-0 h-1 bg-gradient-to-r from-violet-900 to-rose-500"></div>
      <div className="max-w-screen grid max-h-16 grid-cols-[1fr_auto] md:grid-cols-[1fr_auto_1fr]">
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
              "text-neutral-500 hover:text-neutral-900": !isActive,
              "text-neutral-900": isActive,
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

          <a
            href="https://savvycal.com/boringordinary/discovery"
            className="mr-4"
          >
            <Button>Book a Demo</Button>
          </a>
        </div>
      </div>
      <Divider />
    </div>
  );
};

export { TopBar };
