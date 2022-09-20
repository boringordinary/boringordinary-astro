interface Props {
  src: string;
  children: React.ReactNode;
}

const DiffusedGradientBg = ({ children, src }: Props) => {
  return (
    <div className="relative">
      <div className="z-10">{children}</div>
      <div className="absolute top-0 -z-10 h-1/2 w-full bg-gradient-to-t from-transparent to-white" />
      <div className="absolute bottom-0 -z-10 h-1/2 w-full bg-gradient-to-b from-transparent to-white" />
      <div className="absolute top-0 -z-20 h-full w-full bg-cover">
        <img src={src} alt={src} className="h-full w-full" />
      </div>
    </div>
  );
};

export { DiffusedGradientBg };
