import { Box, Text } from "@/components";

export const links = [
  {
    title: "Company",
    links: [
      { label: "Our story", href: "/about" },
      // {
      //   label: "Careers",
      //   href: "/careers",
      // },
    ],
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
    <Box
      css={{
        bg: "black",
        p: "$4",
      }}
    >
      <Text size="sm" color="lighter" weight="500">
        Ⓒ {new Date().getFullYear()} Boring+Ordinary, Inc
      </Text>
    </Box>
  );
};

export { Footer };
