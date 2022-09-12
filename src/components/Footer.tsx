export const links = [
  {
    title: "Company",
    links: [{ label: "Our story", href: "/about" }],
  },
  {
    title: "Services",
    links: [
      { label: "Logo & Illustrations", href: "/services/logo-illustrations" },
      { label: "Shopify Builds", href: "/services/shopify-dev" },
      { label: "Webflow Builds", href: "/services/webflow-dev" },
      { label: "Web Design", href: "/services/web-design" },
      {
        label: "Product Photos",
        href: "/services/product-photos",
      },
    ],
  },
  {
    title: "Industries",
    links: [
      {
        label: "E-commerce",
        href: "/",
      },
      {
        label: "Startups",
        href: "/startups",
      },
      { label: "Food & Service", href: "/industries/food-and-service" },
      { label: "Legal Services", href: "/industries/legal-services" },
    ],
  },
  {
    title: "Legal",
    links: [{ label: "Privacy Policy", href: "/privacy" }],
  },
];

const Footer = () => {
  return (
    <footer className="max-w-container mx-auto mt-32 w-full px-4 sm:px-6 lg:px-8">
      <div className="border-t border-slate-900/5 py-8">
        <p className="mt-5 text-center text-sm leading-6 text-slate-500">
          © {new Date().getFullYear()} Boring+Ordinary, Inc
        </p>
        <div className="mt-8 flex items-center justify-center space-x-4 text-sm font-semibold leading-6 text-slate-700">
          {/* <a href="/privacy">Privacy policy</a>
          <div className="h-4 w-px bg-slate-500/20" /> */}
        </div>
      </div>
    </footer>
  );
};

export { Footer };
