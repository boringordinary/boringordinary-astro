import { Box } from "@/components";

type Logo = {
  alt: string;
  src: string;
};

interface Props {
  logos: Logo[];
}

const LogoReel = ({ logos }: Props) => {
  return (
    <Box>
      {logos.map(({ src, alt }) => (
        <img src={src} alt={alt}></img>
      ))}
    </Box>
  );
};

export { LogoReel };
