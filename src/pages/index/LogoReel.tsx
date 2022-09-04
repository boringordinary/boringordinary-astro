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
    <Box css={{ display: "flex", alignItems: "center", gap: "$4" }}>
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
