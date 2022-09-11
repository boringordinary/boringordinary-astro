const ImageClip = ({ ...rest }) => {
  return (
    <img
      {...rest}
      style={{
        clipPath:
          "polygon(49% 1%, 72% 13%, 100% 2%, 86% 42%, 96% 79%, 61% 100%, 37% 92%, 8% 95%, 24% 60%, 13% 18%)",
      }}
    />
  );
};

export { ImageClip };
