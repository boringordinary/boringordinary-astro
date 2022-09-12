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
        <img src={src} key={alt} className="h-6 contrast-[0%]" />
      ))}
    </div>
  );
};

export { LogoReel };
