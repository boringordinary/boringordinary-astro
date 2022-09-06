import { Box, Image } from "@/components/index";

interface Logo {
  alt: string;
  src: string;
}

interface Props {
  logos: Logo[];
}

const LogoReel = ({ logos }: Props) => {
  return (
    <Box
      css={{
        display: "flex",
        alignItems: "center",
        gap: "$8",
        filter: "contrast(0.1)",
      }}
    >
      {logos.map(({ src, alt }) => (
        <Image
          src={src}
          key={alt}
          css={{
            height: "$fontSizes$xl3",
          }}
        />
      ))}
    </Box>
  );
};

export { LogoReel };
