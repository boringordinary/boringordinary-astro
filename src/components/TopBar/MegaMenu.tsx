import { useState } from "react";
import { useFloating } from "@floating-ui/react-dom-interactions";
import { Popover, Transition } from "@headlessui/react";
import { motion, AnimatePresence } from "framer-motion";
import {
  HomeModernIcon,
  WrenchScrewdriverIcon,
  ShoppingBagIcon,
} from "@heroicons/react/20/solid";
import { Fragment } from "react";

const solutions = [
  {
    name: "Real Estate",
    description: "Measure actions your users take",
    href: "##",
    icon: HomeModernIcon,
  },
  {
    name: "HVAC & Plumbing",
    description: "Create your own targeted content",
    href: "##",
    icon: WrenchScrewdriverIcon,
  },
  {
    name: "E-Commerce",
    description: "Keep track of your growth",
    href: "##",
    icon: ShoppingBagIcon,
  },
];

interface Props {
  target: React.ReactNode;
}

const MegaMenu = ({ target }: Props) => {
  const [open, setOpen] = useState(false);
  const { x, y, reference, floating, strategy } = useFloating({
    open,
    onOpenChange: setOpen,
  });

  let timeout: NodeJS.Timeout;

  const openMenu = () => {
    clearTimeout(timeout);
    setOpen(true);
  };
  const closeMenu = () => {
    if (!open) return;
    timeout = setTimeout(() => setOpen(false), 50);
  };

  return (
    <div>
      <div className="relative">
        <div ref={reference} onMouseEnter={openMenu} onMouseLeave={closeMenu}>
          {target}
        </div>

        <AnimatePresence>
          {open && (
            <motion.div
              initial={{
                opacity: 0,
                position: strategy,
                top: y as number,
                left: x as number,
              }}
              transition={{ duration: 0.1 }}
              exit={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              onMouseEnter={openMenu}
              onMouseLeave={closeMenu}
              ref={floating}
              className="z-10 mt-3 w-screen max-w-sm px-4 sm:px-0 lg:max-w-3xl"
            >
              <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
                <div className="relative grid gap-8 bg-white p-7 lg:grid-cols-2">
                  {solutions.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="-m-3 flex items-center rounded-lg p-2 transition duration-150 ease-in-out hover:bg-gray-50 focus:outline-none focus-visible:ring focus-visible:ring-orange-500 focus-visible:ring-opacity-50"
                    >
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-violet-100 p-2 text-white sm:h-12 sm:w-12">
                        <item.icon
                          aria-hidden="true"
                          className="text-violet-500"
                        />
                      </div>
                      <div className="ml-4">
                        <p className="text-sm font-medium text-gray-900">
                          {item.name}
                        </p>
                        <p className="text-sm text-gray-500">
                          {item.description}
                        </p>
                      </div>
                    </a>
                  ))}
                </div>
                <div className="bg-gray-50 p-4">
                  <a
                    href="##"
                    className="flow-root rounded-md px-2 py-2 transition duration-150 ease-in-out hover:bg-gray-100 focus:outline-none focus-visible:ring focus-visible:ring-orange-500 focus-visible:ring-opacity-50"
                  >
                    <span className="flex items-center">
                      <span className="text-sm font-medium text-gray-900">
                        Specialized builds
                      </span>
                    </span>
                    <span className="block text-sm text-gray-500">
                      Tailored for your industry
                    </span>
                  </a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export { MegaMenu };
