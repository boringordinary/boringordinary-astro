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
    <div className="flex items-center justify-center gap-4">
      {logos.map(({ src, alt }) => (
        <Image
          src={src}
          key={alt}
          css={{
            height: "$fontSizes$xl3",
          }}
        />
      ))}
    </div>
  );
};

export { LogoReel };
